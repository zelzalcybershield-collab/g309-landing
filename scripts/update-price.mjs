#!/usr/bin/env node
/**
 * Fetches the live price / rating / stock for the product page and writes price.json.
 *
 *   node scripts/update-price.mjs
 *
 * Source priority (SOURCE=auto, the default):
 *   1. Amazon Creators API  — official, used whenever credentials are present
 *   2. Product page scrape   — fallback, so the page still works without an account
 *
 * Set SOURCE=api to require the API (fails loudly instead of silently scraping),
 * or SOURCE=scrape to test the fallback.
 *
 * Env
 *   AMZN_CLIENT_ID      Creators API Client ID      (from Associates Central)
 *   AMZN_CLIENT_SECRET  Creators API Client Secret  (from Associates Central)
 *   AMZN_PARTNER_TAG    your affiliate tracking id, e.g. "yourtag-21"
 *   ASIN                default B0D5WNNTZP
 *   SOURCE              auto | api | scrape          default auto
 *   FORCE_STALE=1       simulate a failed fetch (testing)
 *
 * Invariants
 *  - On failure we NEVER write a wrong/zero price. The previous good value is
 *    kept and only `checkedAt` + `stale` move.
 *  - `rating` / `reviews` are not available from the API, so a previous value is
 *    carried forward rather than being reset to null.
 *  - No dependencies, so it runs on any GitHub Actions runner.
 */

import { writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// PRODUCT_DIR selects which page's price.json to write. Empty means the
// site root (the original G309 page); set it to a slug to update a generated
// product page instead, e.g. PRODUCT_DIR=g309 node scripts/update-price.mjs
const PRODUCT_DIR = (process.env.PRODUCT_DIR || '').replace(/^[/\\]+|[/\\]+$/g, '');
const OUT = path.join(ROOT, PRODUCT_DIR, 'price.json');

const ASIN = process.env.ASIN || 'B0D5WNNTZP';
const PRODUCT_URL = process.env.PRODUCT_URL || `https://www.amazon.eg/dp/${ASIN}`;
const SOURCE = (process.env.SOURCE || 'auto').toLowerCase();
const FORCE_STALE = process.env.FORCE_STALE === '1';

const CLIENT_ID = process.env.AMZN_CLIENT_ID || '';
const CLIENT_SECRET = process.env.AMZN_CLIENT_SECRET || '';
const PARTNER_TAG = process.env.AMZN_PARTNER_TAG || '';

/* Creators API — Egypt is in the EU region, so the EU token endpoint. */
const MARKETPLACE = 'www.amazon.eg';
const TOKEN_URL = 'https://api.amazon.co.uk/auth/o2/token';
const API_URL = 'https://creatorsapi.amazon/catalog/v1/getItems';

const API_RESOURCES = [
  'offersV2.listings.price',
  'offersV2.listings.availability',
  'offersV2.listings.condition',
  'offersV2.listings.isBuyBoxWinner',
  'itemInfo.title',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* =================================================== source 1: Creators API */

function hasCredentials() {
  return Boolean(CLIENT_ID && CLIENT_SECRET && PARTNER_TAG);
}

async function getAccessToken() {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: 'creatorsapi::default',
    }),
    signal: AbortSignal.timeout(20_000),
  });

  const text = await res.text();
  if (!res.ok) {
    let detail = text.slice(0, 300);
    try {
      const j = JSON.parse(text);
      detail = j.error_description || j.error || j.message || detail;
    } catch { /* keep raw */ }
    throw new Error(`token request failed (HTTP ${res.status}): ${detail}`);
  }

  const json = JSON.parse(text);
  if (!json.access_token) throw new Error('token response had no access_token');
  return json.access_token;
}

function pickListing(listings) {
  if (!Array.isArray(listings) || !listings.length) return null;
  const withPrice = listings.filter((l) => l?.price?.amount != null);
  if (!withPrice.length) return null;
  // buy box wins, then cheapest
  const buyBox = withPrice.filter((l) => l.isBuyBoxWinner === true);
  const pool = buyBox.length ? buyBox : withPrice;
  return pool.reduce((best, l) => (l.price.amount < best.price.amount ? l : best));
}

async function fetchFromApi() {
  if (!hasCredentials()) {
    throw new Error('missing AMZN_CLIENT_ID / AMZN_CLIENT_SECRET / AMZN_PARTNER_TAG');
  }

  const token = await getAccessToken();

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
      'x-marketplace': MARKETPLACE,
    },
    body: JSON.stringify({
      itemIds: [ASIN],
      itemIdType: 'ASIN',
      marketplace: MARKETPLACE,
      partnerTag: PARTNER_TAG,
      condition: 'New',
      resources: API_RESOURCES,
    }),
    signal: AbortSignal.timeout(20_000),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`getItems failed (HTTP ${res.status}): ${text.slice(0, 300)}`);
  }

  const json = JSON.parse(text);
  if (json.errors?.length) {
    const e = json.errors[0];
    throw new Error(`api error ${e.code}: ${e.message}`);
  }

  const item = json.itemsResult?.items?.find((i) => i.asin === ASIN) ?? json.itemsResult?.items?.[0];
  if (!item) throw new Error('api returned no item for ' + ASIN);

  const listing = pickListing(item.offersV2?.listings);
  if (!listing) throw new Error('api returned no priced offer (out of stock or not accessible)');

  const avail = String(listing.availability?.type || '');
  const inStock = avail ? !/outofstock/i.test(avail) : true;

  return {
    price: Number(listing.price.amount),
    currency: listing.price.currency || 'EGP',
    inStock,
    // The Creators API has no CustomerReviews resource, so these stay as-is.
    rating: null,
    reviews: null,
    title: item.itemInfo?.title?.displayValue || null,
    availability: avail || null,
  };
}

/* ================================================ source 2: page scraping */

const UA_DESKTOP =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const UA_MOBILE =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';

const BLOCK_SIGNALS = [
  /api-services-support@amazon/i,
  /Enter the characters you see below/i,
  /make sure you're not a robot/i,
  /Type the characters you see in this image/i,
  /Robot Check/i,
];

const toNumber = (raw) => {
  if (raw == null) return null;
  const n = Number(String(raw).replace(/[^\d.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : null;
};

function pick(html, patterns) {
  for (const re of patterns) {
    const m = html.match(re);
    if (m) {
      const v = toNumber(m[1]);
      if (v != null) return v;
    }
  }
  return null;
}

async function fetchPage() {
  const attempts = [
    { ua: UA_DESKTOP, lang: 'en-EG,en;q=0.9,ar;q=0.8' },
    { ua: UA_DESKTOP, lang: 'en-GB,en;q=0.9' },
    { ua: UA_MOBILE, lang: 'ar-EG,ar;q=0.9,en;q=0.8' },
  ];

  let lastError = null;

  for (let i = 0; i < attempts.length; i++) {
    const { ua, lang } = attempts[i];
    try {
      const res = await fetch(PRODUCT_URL, {
        headers: {
          'user-agent': ua,
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'accept-language': lang,
          'cache-control': 'no-cache',
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(25_000),
      });

      if (!res.ok) {
        lastError = new Error(`HTTP ${res.status}`);
        await sleep(3000 * (i + 1));
        continue;
      }

      const html = await res.text();

      if (BLOCK_SIGNALS.some((re) => re.test(html))) {
        lastError = new Error('bot check / captcha served');
        await sleep(5000 * (i + 1));
        continue;
      }
      if (html.length < 50_000) {
        lastError = new Error(`suspiciously small page (${html.length} bytes)`);
        await sleep(3000 * (i + 1));
        continue;
      }

      return html;
    } catch (err) {
      lastError = err;
      await sleep(3000 * (i + 1));
    }
  }

  throw lastError || new Error('all scrape attempts failed');
}

function parsePage(html) {
  const price = pick(html, [
    /"priceAmount"\s*:\s*([\d.,]+)/,
    /class="a-offscreen"[^>]*>\s*EGP\s*([\d.,]+)/,
    /EGP\s*([\d.,]+)\s*<\/span>/,
    /"price"\s*:\s*"?([\d.,]+)"?/,
    /a-price-whole[^>]*>([\d,]+)/,
  ]);

  const rating = pick(html, [
    /"ratingValue"\s*:\s*"?([\d.,]+)"?/,
    /([\d.,]+)\s*out of\s*5\s*stars/i,
    /([\d.,]+)\s*n\s*out of\s*5/i,
  ]);

  // Scoped to the rating widget on purpose — a loose /(\d+) ratings?/ also matches
  // the related-products carousel, which reports completely different numbers.
  const reviews = pick(html, [
    /acrCustomerReviewText"[^>]*>\s*\(?([\d.,]+)/,
    /aria-label="([\d.,]+)\s+Reviews?"/,
    /([\d.,]+)\s*global\s+ratings?\b/i,
  ]);

  let inStock = true;
  if (/Currently unavailable/i.test(html) || /"availability"\s*:\s*"?https?:[^"]*OutOfStock/i.test(html)) {
    inStock = false;
  }

  if (price == null) throw new Error('could not find a price in the page');

  return {
    price,
    currency: 'EGP',
    inStock,
    rating: rating != null ? Math.round(Math.min(rating, 5) * 10) / 10 : null,
    reviews,
    title: null,
    availability: null,
  };
}

/* ================================================================== main */

async function readPrevious() {
  try {
    return JSON.parse(await readFile(OUT, 'utf8'));
  } catch {
    return null;
  }
}

async function collect() {
  const wantApi = SOURCE === 'api' || (SOURCE === 'auto' && hasCredentials());
  const wantScrape = SOURCE === 'scrape' || SOURCE === 'auto';

  if (wantApi) {
    try {
      const data = await fetchFromApi();
      console.log('source: creators-api');
      return data;
    } catch (err) {
      if (!wantScrape) throw err;
      console.error(`WARN  creators api failed: ${err.message}`);
      console.error('      falling back to scraping the product page');
    }
  }

  if (!wantScrape) throw new Error('scrape disabled by SOURCE');
  const html = await fetchPage();
  const data = parsePage(html);
  console.log('source: product-page');
  return data;
}

async function main() {
  const previous = await readPrevious();
  const now = new Date().toISOString();

  let data;

  if (FORCE_STALE) {
    console.log('FORCE_STALE=1 → simulating a failed fetch');
    if (!previous) {
      console.error('No previous price.json to fall back on. Exiting without writing.');
      process.exit(1);
    }
    data = { ...previous, checkedAt: now, stale: true, lastError: 'forced failure (test mode)' };
  } else {
    let found;
    try {
      found = await collect();
    } catch (err) {
      console.error(`WARN  fetch failed: ${err.message}`);
      if (!previous) {
        console.error('No previous price.json to fall back on. Exiting without writing.');
        process.exit(1);
      }
      console.error(`Keeping last known price: ${previous.price} ${previous.currency} (from ${previous.updatedAt})`);
      data = { ...previous, checkedAt: now, stale: true, lastError: err.message };
    }

    if (found) {
      // the API has no reviews resource, so carry the last scraped values forward
      data = {
        asin: ASIN,
        url: `https://www.amazon.eg/dp/${ASIN}`,
        ...found,
        rating: found.rating ?? previous?.rating ?? null,
        reviews: found.reviews ?? previous?.reviews ?? null,
        updatedAt: now,
        checkedAt: now,
        stale: false,
        lastError: null,
      };
      if (found.title) delete data.title;
      console.log(
        `OK  price=${data.price} ${data.currency}  rating=${data.rating ?? 'n/a'}  ` +
        `reviews=${data.reviews ?? 'n/a'}  inStock=${data.inStock}`,
      );
    }
  }

  await writeFile(OUT, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${path.relative(process.cwd(), OUT)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
