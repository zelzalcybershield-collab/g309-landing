/* Renders one self-contained page per product in products/*.json.
 *
 *   node build/build.mjs            # build every product
 *   node build/build.mjs g309       # build one
 *
 * Each product gets its own directory holding index.html, app.js, img/ and
 * price.json. The app is a static site with no bundler, so pages are emitted
 * self-contained on purpose: one broken product page can't take the others
 * down, and they can be deployed or moved independently.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const tplHtml = readFileSync('build/template.html', 'utf8');
const tplJs = readFileSync('build/template.js', 'utf8');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// for values that land inside a single-quoted JS string literal
const jsStr = (s) => String(s)
  .replace(/\\/g, '\\\\').replace(/'/g, "\\'")
  .replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

// The coupon card used to be hardcoded into the template with two NBE codes
// that nothing in this repo can verify. A discount that does not work at
// checkout is worse than no discount, so a product only gets the block when
// its data actually carries codes.
const couponBlock = (p) => {
  const codes = p.coupon?.codes;
  if (!codes?.length) return '';
  const copy = p.dict.ar['offer.copy'];
  const buttons = codes.map((c) => `
            <button type="button" data-copy="${esc(c)}"
              class="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-start transition hover:border-cyan-400/40">
              <span class="num text-sm font-black tracking-wider text-white">${esc(c)}</span>
              <span class="text-[11px] font-bold text-slate-500 transition group-hover:text-cyan-300" data-i18n="offer.copy"></span>
            </button>`).join('');
  return `
        <div class="rounded-3xl border border-cyan-400/25 bg-cyan-500/[0.06] p-8">
          <h3 class="flex items-center gap-2 text-base font-extrabold text-white">
            <svg class="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v9H4v-9M2 8h20v4H2zM12 3v5M12 3l-2.5 2.5M12 3l2.5 2.5"/></svg>
            <span data-i18n="offer.couponTitle"></span>
          </h3>
          <p class="mt-2 text-sm text-slate-400" data-i18n="offer.couponSub"></p>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">${buttons}
          </div>
          <p class="mt-4 text-xs text-slate-500" data-i18n="offer.couponNote"></p>
        </div>`;
};

const jstr = (s) => JSON.stringify(String(s));

// Renders the four quick-stat tiles. A stat with `v` counts up like before; a
// stat with `text` (Wi-Fi 6E, USB, RGB, 2.4K) is printed as-is, because
// countUp() would paint NaN on a non-numeric value.
const statsTiles = (p) => {
  const labels = ['k.weight', 'k.dpi', 'k.batt', 'k.btns'];
  const subs = ['k.weightSub', 'k.dpiSub', 'k.battSub', 'k.btnsSub'];
  return p.stats.map((s, i) => {
    const num = 'text' in s
      ? `<span class="num">${esc(s.text)}</span>`
      : `<span class="num" data-count="${esc(s.v)}"${s.suffix ? ` data-suffix="${esc(s.suffix)}"` : ''}${s.comma ? ' data-format="comma"' : ''}>0</span>`;
    return `
      <div class="rounded-2xl border border-white/10 bg-gradient-to-b from-ink-850 to-ink-900 p-7 text-center">
        <p class="text-4xl font-black text-white">${num}</p>
        <p class="mt-2 text-sm font-bold text-slate-300" data-i18n="${labels[i]}"></p>
        <p class="mt-1 text-xs text-slate-500" data-i18n="${subs[i]}"></p>
      </div>`;
  }).join('\n');
};

function fail(msg) { console.error(`  ERROR: ${msg}`); process.exitCode = 1; }

function render(p) {
  const m = p.meta || {};
  // og tags are Arabic-only by design: og:title cannot be language-negotiated
  // without a per-language URL, and the page has a single canonical URL.
  const need = ['brand', 'brandValue', 'model', 'size', 'heroImg', 'heroAlt', 'titleAr', 'titleEn', 'descAr', 'descEn', 'ogTitleAr', 'ogDescAr'];
  const missing = need.filter((k) => !m[k]);
  if (missing.length) return { err: `meta is missing: ${missing.join(', ')}` };
  if (!p.asin || !/^B0[A-Z0-9]{8}$/.test(p.asin)) return { err: `bad or missing asin: ${p.asin}` };
  if (!p.dir) return { err: 'missing dir' };
  if (!p.dict?.ar || !p.dict?.en) return { err: 'missing dict.ar / dict.en' };

  // these were in the schema once but the template has no marker for them
  for (const dead of ['ogTitleEn', 'ogDescEn']) {
    if (dead in m) return { err: `meta.${dead} is not used by the template — remove it` };
  }

  const keyDiff = {
    onlyAr: Object.keys(p.dict.ar).filter((k) => !(k in p.dict.en)),
    onlyEn: Object.keys(p.dict.en).filter((k) => !(k in p.dict.ar)),
  };
  if (keyDiff.onlyAr.length || keyDiff.onlyEn.length) {
    return { err: `dict keys differ — only ar: [${keyDiff.onlyAr}] only en: [${keyDiff.onlyEn}]` };
  }

  const imgs = p.images?.gallery || [];
  if (!imgs.length) return { err: 'images.gallery is empty' };

  // The four big quick-stat numbers used to be hardcoded in template.html as
  // 86g / 25000 / 300+ / 6 - the G309 mouse's weight, DPI, battery hours and
  // button count. Every other page inherited them, so the laptop pages shipped
  // "86g" above a 15.6" screen and "25,000" above a 1-year warranty. The
  // numbers are now data like the labels beside them.
  const stats = p.stats || [];
  if (stats.length !== 4) return { err: `stats must have exactly 4 entries, got ${stats.length}` };
  const badStat = stats.find((s) => !s || (!('text' in s) && !('v' in s)));
  if (badStat) return { err: `each stat needs a "v" (number) or "text" (literal): ${JSON.stringify(badStat)}` };
  // a stat that animates must be a real number, or countUp() paints NaN
  const badNum = stats.find((s) => 'v' in s && !Number.isFinite(Number(s.v)));
  if (badNum) return { err: `stat.v must be numeric, or use "text" instead: ${JSON.stringify(badNum)}` };
  // labels come from these keys positionally, so the two must stay in step
  const statLabels = ['k.weight', 'k.dpi', 'k.batt', 'k.btns'];
  const statSubs = ['k.weightSub', 'k.dpiSub', 'k.battSub', 'k.btnsSub'];
  for (const key of [...statLabels, ...statSubs]) {
    if (!p.dict.ar?.[key]) return { err: `dict.ar.${key} is required — the stat tiles label themselves with it` };
  }

  // The buy button carries the affiliate tag; the price scraper deliberately
  // does not (see scripts/update-price.mjs), so scraping never touches the
  // affiliate account.
  const url = p.affiliateTag
    ? `https://www.amazon.eg/dp/${p.asin}?tag=${encodeURIComponent(p.affiliateTag)}`
    : `https://www.amazon.eg/dp/${p.asin}`;

  // ---- the two files, from markers ----
  // replaceAll, not replace: {{BRAND}} appears in both the nav and the footer
  const html = tplHtml
    .replaceAll('{{TITLE_AR}}', esc(m.titleAr))
    .replaceAll('{{TITLE_EN}}', esc(m.titleEn))
    .replaceAll('{{DESC_AR}}', esc(m.descAr))
    .replaceAll('{{DESC_EN}}', esc(m.descEn))
    .replaceAll('{{OG_TITLE_AR}}', esc(m.ogTitleAr))
    .replaceAll('{{OG_DESC_AR}}', esc(m.ogDescAr))
    .replaceAll('{{PRICE_AMOUNT}}', esc(m.priceAmount))
    .replaceAll('{{BRAND}}', esc(m.brand))
    .replaceAll('{{BRAND_VALUE}}', esc(m.brandValue))
    .replaceAll('{{MODEL}}', esc(m.model))
    .replaceAll('{{SIZE}}', esc(m.size))
    .replaceAll('{{HERO_IMG}}', esc(m.heroImg))
    .replaceAll('{{HERO_ALT}}', esc(m.heroAlt))
    .replaceAll('{{COUPON_BLOCK}}', couponBlock(p))
    .replaceAll('{{STATS_TILES}}', statsTiles(p))
    // The buy anchor ships with the tagged URL already in the href. It used to
    // ship as href="#" and be pointed at the product by app.js at load, which
    // meant a blocked, slow or failed app.js turned every buy button into a
    // dead "#" - the click still looked like it worked and the commission was
    // simply lost. The href is now correct in the HTML and app.js only re-asserts
    // it. Amazon's operating agreement also requires rel="sponsored" on affiliate
    // links, which the anchors now carry.
    .replaceAll('{{BUY_URL}}', esc(url));

  const js = tplJs
    .replaceAll('{{PRODUCT_URL}}', url)
    .replaceAll('{{STORE_KEY}}', `${p.slug}-lang`)
    .replaceAll('{{LIVE_KEY}}', `${p.slug}-live`)
    .replaceAll('{{TITLE_AR}}', jsStr(m.titleAr))
    .replaceAll('{{TITLE_EN}}', jsStr(m.titleEn))
    // filenames in the data are bare; the page needs them relative to img/
    .replaceAll('{{GAL_FILES}}', JSON.stringify(imgs.map((f) => 'img/' + f)))
    // the dictionary is the bulk of what differs between products
    .replaceAll('{{DICT}}', JSON.stringify({ ar: p.dict.ar, en: p.dict.en }, null, 2));

  const leftovers = (s) => [...s.matchAll(/\{\{(\w+)\}\}/g)].map((x) => x[1]);
  const un = [...new Set([...leftovers(html), ...leftovers(js)])];
  if (un.length) return { err: `template markers left unfilled: ${un.join(', ')}` };

  // ---- write ----
  const dir = p.dir;
  mkdirSync(join(dir, 'img'), { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf8');
  writeFileSync(join(dir, 'app.js'), js, 'utf8');

  let copied = 0;
  const srcDir = p.images?.from || 'img';
  for (const f of [m.heroImg, ...imgs]) {
    const from = join(srcDir, f);
    if (existsSync(from)) { copyFileSync(from, join(dir, 'img', f)); copied++; }
  }
  const missingImgs = [m.heroImg, ...imgs].filter((f) => !existsSync(join(srcDir, f)));
  if (missingImgs.length) return { err: `image files not found in ${srcDir}/: ${[...new Set(missingImgs)].join(', ')}` };

  // price.json so the page renders before the first workflow run
  const pricePath = join(dir, 'price.json');
  if (!existsSync(pricePath)) {
    writeFileSync(pricePath, JSON.stringify({
      asin: p.asin, url, price: null, currency: 'EGP', inStock: null,
      rating: null, reviews: null, title: null, availability: null,
      updatedAt: null, checkedAt: null, stale: true, lastError: 'not fetched yet',
    }, null, 2) + '\n', 'utf8');
  }

  return { dir, keys: Object.keys(p.dict.ar).length, images: copied, bytes: html.length + js.length };
}

const only = process.argv[2];
const files = readdirSync('products').filter((f) => f.endsWith('.json'));
const targets = only ? files.filter((f) => f.replace(/\.json$/, '') === only) : files;
if (!targets.length) { console.error(`no product file for "${only}"`); process.exit(1); }

for (const f of targets) {
  const p = JSON.parse(readFileSync(join('products', f), 'utf8'));
  const r = render(p);
  if (r.err) { console.log(`FAIL  ${f}`); fail(r.err); }
  else console.log(`OK    ${f}  ->  ${r.dir}/  (${r.keys} keys, ${r.images} images, ${r.bytes} bytes)`);
}

// The root index lists every product, so it is only correct after a full build.
if (!only) {
  execFileSync(process.execPath, ['build/hub.mjs'], { stdio: 'inherit' });
}
