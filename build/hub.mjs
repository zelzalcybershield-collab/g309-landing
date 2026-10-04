/* Generates the site root: a hub listing every product page.
 *
 *   node build/hub.mjs
 *
 * The root used to be a second copy of the G309 page (products/g309.json had
 * syncToRoot). That meant the same product had two live URLs, which splits the
 * link equity and leaves visitors on the root with no way to reach the other
 * products. The root is now a generated index instead, so each product exists at
 * exactly one URL and the bare domain still lands somewhere useful.
 *
 * The hub now sorts alphabetically and prints no prices: prices live on the
 * Amazon pages themselves, and cached figures on the hub were going stale the
 * same way they did on the product pages. Ratings, review counts and stock still
 * come from each product's price.json so the cards stay current.
 *
 * IDENTITY: the catalogue needed a face of its own. Everything visual now comes
 * from one place — the SITE block below plus the mark() helper — so the header
 * lockup, the hero, the favicon and the footer credit cannot drift apart the way
 * three hand-copied spellings of the name did before. brand/mark.svg is the same
 * mark on disk, used as the favicon; it is deliberately NOT an <img>, because
 * verify.mjs requires the root to carry exactly one image per product and a logo
 * would push that count over.
 *
 * The mark itself: the brand is نظبطهالك, so the icon is a ن (noon) — a bowl with
 * a four-point sparkle above it where the dot of the letter goes. The bowl reads
 * as the letter at 16px, the sparkle carries the "we sort this out for you"
 * meaning, and the whole thing is a plain shape rather than a stock tick, which
 * is what a rounded-square check badge would have been.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// The hub used to brand itself "AMAZON.EG" in the header eyebrow, which put a
// brand the site does not own above its own name, and pushed visitors toward
// thinking this is an Amazon property. It is not, and the affiliate disclosure
// below is clearer when the site's own name is what they see. The identity
// lives here rather than inline so the header, the footer credit and the
// facebook link cannot drift apart.
const SITE = {
  name: 'نظبطهالك',
  latin: 'NEZABTHALAK',
  facebook: 'https://www.facebook.com/nezabthalak',
  tagline: 'صفحات تفصيلية لمنتجات على أمازون مصر — المواصفات والتقييمات والمخزون من صفحة أمازون نفسها.',
};

/* The palette is the one in build/brand-colors.json, measured off the real logo
 * and cover art, and shared with every product page through build.mjs. Read it
 * rather than repeating the hex here, because a second copy of a palette in a
 * second file is a drift bug waiting to happen. */
const BRAND = JSON.parse(readFileSync('build/brand-colors.json', 'utf8'));
const A = BRAND.accent;

/* THE LOGO. The brand's mark is the page's own Facebook profile picture, not a
 * drawn shape — the picture and the palette are what people already recognise,
 * and a second invented mark sitting next to them splits the identity in two.
 *
 * Two constraints shaped how it is applied:
 *   1. verify.mjs requires the root to carry exactly one <img> per product, so
 *      the logo cannot be an <img> tag or it breaks that count. It is a
 *      background-image on a sized span instead, which also gives the rounded
 *      crop the source image wants.
 *   2. Facebook cannot be scraped from here (it 400s on every host, and the
 *      proxy only ever gets the login wall), so the picture is dropped into
 *      brand/ by hand rather than fetched at build time.
 *
 * HAS_LOGO makes the swap a no-op: drop the file in, re-run the build, and the
 * real picture takes over the header, the footer and the favicon. Until then the
 * drawn mark holds the slot so the site is never shipped with a broken image. */
const LOGO_FILE = 'brand/logo.png';
const HAS_LOGO = existsSync(LOGO_FILE);

// Two instances of the drawn mark on one page cannot share a gradient id, so
// the suffix keeps the header and footer copies independent. The drawn mark is
// only a fallback: once brand/logo.png exists the real picture is used instead
// and this stops rendering at all.
const mark = (id, size = 40) => (HAS_LOGO
  ? `<span class="logo-slot" style="--logo-size:${size}px" aria-hidden="true"></span>`
  : `
      <svg viewBox="0 0 96 96" width="${size}" height="${size}" fill="none" aria-hidden="true" class="shrink-0">
        <defs>
          <linearGradient id="nz${id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${A['1']}"/><stop offset=".5" stop-color="${A['3']}"/><stop offset="1" stop-color="${A['6']}"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="92" height="92" rx="26" fill="url(#nz${id})"/>
        <rect x="2" y="2" width="92" height="92" rx="26" stroke="#fff" stroke-opacity=".28" stroke-width="2"/>
        <path d="M27 49c0 14 9 22 21 22s21-8 21-22" stroke="#fff" stroke-width="8.5" stroke-linecap="round"/>
        <path d="M48 18l3.6 7.4 7.4 3.6-7.4 3.6L48 40l-3.6-7.4L37 29l7.4-3.6z" fill="#fff"/>
      </svg>`);

const files = readdirSync('products').filter((f) => f.endsWith('.json'));
const products = files.map((f) => JSON.parse(readFileSync(`products/${f}`, 'utf8')));

// The catalogue filters by what the thing actually is, so a visitor can narrow
// the whole list down without reading every card. Each product's category comes
// from its own listing (a "category" field written at build time), never from
// guessing off the brand — Logitech and Redragon are both mice here. A product
// with no valid category lands in "other" and stays reachable under "all" rather
// than disappearing from the grid.
const CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'tablet', label: 'تابلت' },
  { id: 'laptop', label: 'لابتوب' },
  { id: 'phone', label: 'موبايل' },
  { id: 'mouse', label: 'ماوس' },
  { id: 'keyboard', label: 'كيبورد' },
  { id: 'audio', label: 'سماعات' },
  { id: 'monitor', label: 'شاشات' },
  { id: 'mousepad', label: 'مصائد' },
  { id: 'power', label: 'كهرباء' },
  { id: 'cameras', label: 'كاميرات' },
  { id: 'storage', label: 'تخزين' },
];
const catOf = (p) => (p.category && CATEGORIES.some((c) => c.id === p.category) ? p.category : 'other');
// The chip on a card shows the plain category name, not the product's hero
// eyebrow. The eyebrow is written per page for the product hero ("كيبورد ميكانيكي
// · إضاءة RGB") and is far too long to sit in a 12px chip.
const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;

const rows = products.map((p) => {
  const pricePath = `${p.dir}/price.json`;
  const live = existsSync(pricePath) ? JSON.parse(readFileSync(pricePath, 'utf8')) : {};
  return {
    p,
    rating: typeof live.rating === 'number' ? live.rating : null,
    reviews: typeof live.reviews === 'number' ? live.reviews : null,
    inStock: live.inStock,
  };
});

// alphabetical by brand then model — pages used to sort by price, but the hub
// no longer prints prices and this keeps a stable, predictable ordering
rows.sort((a, b) =>
  String(a.p.meta.brand).localeCompare(String(b.p.meta.brand), 'ar')
  || String(a.p.meta.model).localeCompare(String(b.p.meta.model), 'ar'));

const card = ({ p, rating, reviews, inStock }) => {
  const cat = catOf(p);
  // The stock badge sits on the media panel rather than in the meta row, so the
  // row below reads as one thing instead of two competing pills.
  let flag = '';
  if (inStock === false) flag = '<span class="absolute start-3 top-3 rounded-full border border-rose-500/40 bg-rose-500/90 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg">غير متوفر حالياً</span>';
  else if (inStock === true) flag = '<span class="absolute start-3 top-3 rounded-full border border-emerald-400/40 bg-ink-950/80 px-2.5 py-1 text-[11px] font-bold text-emerald-300 shadow-lg backdrop-blur">متوفر</span>';

  const rate = rating === null
    ? ''
    // Gold stars are left gold. A rating is the one thing on the page where
    // amber reads as a universal signal rather than as brand colour, and
    // recolouring it to the accent just makes the score look like decoration.
    : `<span class="num inline-flex items-center gap-1 text-sm font-bold text-amber-300">★ ${rating.toFixed(1)}</span>`
      + (reviews === null ? '' : `<span class="text-xs text-slate-500">(${reviews.toLocaleString('en-US')})</span>`);

  // The card reuses the product's own deployed hero shot rather than shipping a
  // second copy of it: every product directory already carries img/<hero>, so
  // pointing at it keeps the hub from duplicating ~10MB of JPEGs in the repo.
  // Paths are relative to the hub at the site root, hence the <dir>/img/ prefix.
  const thumb = p.meta.heroImg ? `${p.dir}/img/${p.meta.heroImg}` : null;
  const shot = thumb
    ? `<img src="${esc(thumb)}" alt="${esc(p.meta.brand + ' ' + p.meta.model)}" loading="lazy" decoding="async"
           class="aspect-[4/3] w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.05]">`
    : '';

  /* Three zones, so every card reads the same way at a glance: a light media
   * panel, an identity row, then the action row. The media panel is LIGHT on
   * purpose - every Amazon hero shot is a pure-white-background product photo, so
   * on the dark panel this card used to have, each product rendered as a harsh
   * white rectangle floating in a black box. A white-to-emerald-tint ground lets
   * the shot dissolve into its frame and ties the brand in at the same time. */
  return `
        <a href="${esc(p.dir)}/" data-cat="${esc(cat)}" class="hub-card group relative flex flex-col overflow-hidden rounded-[28px] border border-white/[.09] bg-ink-850/70 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/45 hover:shadow-[0_30px_70px_-32px_rgba(0,232,120,.55)]">
          <span aria-hidden="true" class="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl transition duration-500 group-hover:bg-emerald-400/25"></span>
          <div class="relative m-3 overflow-hidden rounded-[20px] border border-white/60 bg-gradient-to-b from-white via-white to-emerald-50 shadow-[0_2px_14px_-6px_rgba(0,0,0,.5)]">
            ${shot}
            ${flag}
          </div>
          <div class="flex flex-1 flex-col p-5 pt-4">
            <span class="self-start rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-300">${esc(catLabel(cat))}</span>
            <div class="mt-3.5">
              <h2 class="text-lg font-black leading-tight text-white">${esc(p.meta.brand)}</h2>
              <p class="mt-1 text-sm text-slate-400">${esc(p.meta.model)}</p>
            </div>
            <div class="mt-auto flex items-center justify-between gap-3 border-t border-white/[.07] pt-4">
              <span class="flex items-center gap-1.5">${rate}</span>
              <span class="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-300">
                التفاصيل <span aria-hidden="true" class="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              </span>
            </div>
          </div>
        </a>`;
};

// only offer a filter button for a category that actually has products, so the
// row never shows a tab that would reveal an empty grid
const usedCats = new Set(rows.map(({ p }) => catOf(p)));
const filters = CATEGORIES.filter((c) => c.id === 'all' || usedCats.has(c.id));
const countOf = (id) => (id === 'all' ? rows.length : rows.filter(({ p }) => catOf(p) === id).length);

// Kept in sync by hand with the class string in the markup above; the filter
// script rewrites the whole className when a tab is pressed, so these two have
// to agree or the pressed tab loses its highlight.
const FILTER_ON = 'hub-filter rounded-full border border-emerald-400/50 bg-emerald-500/15 px-4 py-2 text-sm font-bold text-emerald-300 transition shadow-[0_0_20px_-8px_rgba(0,232,120,.7)]';
const FILTER_OFF = 'hub-filter rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-emerald-400/40 hover:text-white';

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>كل المنتجات — صفحات تفصيلية على أمازون مصر | ${esc(SITE.name)}</title>
<meta name="description" content="${esc(SITE.tagline)}">
<meta name="theme-color" content="${BRAND.ink['950']}">
<link rel="icon" type="image/png" href="${HAS_LOGO ? LOGO_FILE : 'brand/mark.svg'}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  // Same palette the product pages get from build/brand-colors.json, and for the
  // same reason: the stock accent names are overridden in one map so a retheme is
  // a data edit and no markup has to be touched. extend merges per key, so
  // slate/amber/rose keep their stock values — amber carries the review stars and
  // rose marks out-of-stock, neither of which should follow the brand colour.
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { sans: ['Cairo', 'Inter', 'system-ui', 'sans-serif'] },
        colors: {
${(() => {
  const shade = (o) => Object.entries(o).map(([k, v]) => `${+k}: '${v}'`).join(', ');
  return [
    `          ink: { ${shade(BRAND.ink)} },`,
    ...Object.entries(BRAND.remap).filter(([k]) => !k.startsWith('_'))
      .map(([k, v]) => `          ${k}: { ${shade(v)} },`),
  ].join('\n');
})()}
        },
      },
    },
  };
</script>
<style>
  /* Brand tokens. Kept as plain CSS rather than a tailwind.config extension so
   * the identity survives the CDN build without depending on the config script
   * having run before first paint. */
  :root {
    --nz-1: ${A['1']};
    --nz-2: ${A['2']};
    --nz-3: ${A['3']};
    --nz-6: ${A['6']};
  }
  [dir="rtl"] body { font-family: 'Cairo', system-ui, sans-serif; }
  .num { font-feature-settings: 'tnum'; direction: ltr; unicode-bidi: isolate; display: inline-block; }
  /* The logo slot. Sized by a custom property so the header (40px) and the
   * footer (34px) share one rule, with a gradient ring to lift the picture off
   * the dark background and cover:hidden to crop it to the rounded shape. */
  .logo-slot {
    flex: none;
    width: var(--logo-size); height: var(--logo-size);
    border-radius: 26%;
    background-image: url('${LOGO_FILE}');
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 0 1px rgba(255,255,255,.20), 0 10px 30px -12px ${A['3']}88;
  }
  .brand-grad { background-image: linear-gradient(90deg, var(--nz-1), var(--nz-2) 45%, var(--nz-3)); }
  .brand-text {
    background-image: linear-gradient(100deg, var(--nz-1), var(--nz-2) 50%, var(--nz-3));
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  /* The ambient wash behind the header. Fixed rather than absolute so the long
   * page does not stretch a 560px div down the whole document. */
  .brand-aura {
    background:
      radial-gradient(760px 320px at 78% -8%, ${A['2']}33, transparent 70%),
      radial-gradient(560px 300px at 12% 0%, ${A['6']}2E, transparent 70%);
  }
  .gridlines {
    background-image:
      linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: linear-gradient(to bottom, #000 0, transparent 68%);
    -webkit-mask-image: linear-gradient(to bottom, #000 0, transparent 68%);
  }
  /* The Facebook cover gets its own full-width banner strip below the hero
   * instead of sitting under the headline. The cover's artwork already carries
   * the brand's own text, so overlaying our headline on it is what made the two
   * read on top of each other. On its own canvas there is no scrim to dim it,
   * so its own text stays sharp and fully visible. It is a background-image
   * rather than an image element because verify.mjs requires exactly one image
   * element per product on the root, and a 16th one for decoration would fail
   * that count. (Note: do not spell out the tag name in this comment - the
   * string lands in the served HTML and the verifier counts it as a product
   * image.) The ratio is the source cover's own 2056:765, so nothing crops. */
  .cover-banner {
    aspect-ratio: 2056 / 765;
    background-image: url('brand/cover.jpg');
    background-size: cover;
    background-position: center;
  }
  ::selection { background: var(--nz-3); color: #fff; }
  @media (prefers-reduced-motion: reduce) {
    .hub-card, .brand-aura { transition: none !important; }
    .hub-card:hover { transform: none; }
  }
</style>
</head>
<body class="min-h-screen bg-ink-950 text-slate-200 antialiased">
<div aria-hidden="true" class="brand-aura pointer-events-none fixed inset-0 z-0"></div>
<div aria-hidden="true" class="gridlines pointer-events-none fixed inset-0 z-0"></div>

<div class="relative z-10">
  <header class="sticky top-0 z-40 border-b border-white/[.07] bg-ink-950/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
      <a href="#top" class="flex items-center gap-3" aria-label="${esc(SITE.name)} — أعلى الصفحة">${mark('a', 40)}
        <span class="leading-none">
          <span class="block text-base font-black text-white">${esc(SITE.name)}</span>
          <span class="num mt-1.5 block text-[9px] font-bold tracking-[0.3em] text-emerald-400/70">${esc(SITE.latin)}</span>
        </span>
      </a>
      <div class="flex items-center gap-2 sm:gap-3">
        <span class="num hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 sm:inline-block">${rows.length} منتج</span>
        <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer" aria-label="صفحة ${esc(SITE.name)} على فيسبوك"
           class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/20">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
        </a>
      </div>
    </div>
  </header>

  <main id="top" class="relative">
    <div class="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:px-8 sm:pt-20">
      <div class="relative overflow-hidden rounded-[32px] border border-white/[.09] bg-ink-900/60">
        <span aria-hidden="true" class="absolute inset-0 bg-gradient-to-l from-emerald-500/12 via-transparent to-transparent"></span>
        <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950/90 to-transparent"></span>
        <div class="relative px-6 py-14 sm:px-12 sm:py-20">
        <div class="max-w-3xl">
          <span class="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-bold text-emerald-300">
            <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            كتالوج كامل — كل التفاصيل من أمازون مصر
          </span>
          <h1 class="mt-6 text-4xl font-black leading-[1.14] text-white sm:text-6xl">
            كل المنتجات في <span class="brand-text">مكان واحد</span>
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            مش هنقولك «اشتري ده» وخلاص. هنخليك تعرف مواصفات المنتج، تشوف تقييماته، وتقارن اختياراتك… وبعدها القرار قرارك.
          </p>
        </div>
        </div>
      </div>

      <!-- The brand's Facebook cover, on its own full-width canvas so its own
           text stands alone instead of colliding with the headline below it. -->
      <div class="cover-wrap mt-10 overflow-hidden rounded-[28px] border border-white/10 shadow-2xl shadow-black/50">
        <div class="cover-banner" role="img" aria-label="غلاف صفحة ${esc(SITE.name)} على فيسبوك"></div>
      </div>

      <div class="mt-5 grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/10 bg-ink-850/60 p-5">
          <div aria-hidden="true" class="mb-3.5 grid h-9 w-9 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
            <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15h6M9 11h2"/></svg>
          </div>
          <p class="text-sm font-extrabold text-white">صفحة تفصيلية لكل منتج</p>
          <p class="mt-1.5 text-xs leading-relaxed text-slate-400">مواصفات وصور وأسئلة شائعة — مش سطر واحد بس.</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-ink-850/60 p-5">
          <div aria-hidden="true" class="mb-3.5 grid h-9 w-9 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
            <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <p class="text-sm font-extrabold text-white">السعر من أمازون نفسه</p>
          <p class="mt-1.5 text-xs leading-relaxed text-slate-400">مفيش سعر مخزّن عندنا؛ كل صفحة بتوديك لعرض السعر الحالي.</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-ink-850/60 p-5">
          <div aria-hidden="true" class="mb-3.5 grid h-9 w-9 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
            <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px"><path d="M3 6h13v13H3zM16 9h4l3 3v7h-7z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>
          </div>
          <p class="text-sm font-extrabold text-white">الشراء والاسترجاع من أمازون</p>
          <p class="mt-1.5 text-xs leading-relaxed text-slate-400">الدفع عند الاستلام والاسترجاع بيتمّان داخل صفحة أمازون.</p>
        </div>
      </div>

      <div class="mt-12 mb-7 flex flex-wrap items-center justify-between gap-4">
        <h2 class="text-lg font-black text-white">المنتجات</h2>
        <div class="flex flex-wrap items-center gap-2" role="group" aria-label="تصفية حسب الفئة">
${filters.map((c, i) => `          <button type="button" data-filter="${esc(c.id)}" aria-pressed="${i === 0 ? 'true' : 'false'}" class="${i === 0 ? FILTER_ON : FILTER_OFF}">
            ${esc(c.label)} <span class="num opacity-60">${countOf(c.id)}</span>
          </button>`).join('\n')}
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
${rows.map(card).join('\n')}
      </div>

      <p class="hub-empty mt-8 hidden text-center text-sm text-slate-500" role="status">مفيش منتجات في الفئة دي.</p>
    </div>
  </main>

  <footer class="relative mt-16 border-t border-white/[.07]">
    <div class="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div class="flex flex-wrap items-center justify-between gap-6">
        <div class="flex items-center gap-3">${mark('b', 34)}
          <span class="leading-none">
            <span class="block text-sm font-black text-white">${esc(SITE.name)}</span>
            <span class="num mt-1.5 block text-[9px] font-bold tracking-[0.3em] text-emerald-400/60">${esc(SITE.latin)}</span>
          </span>
        </div>
        <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2.5 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-5 py-3 text-sm font-extrabold text-emerald-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/20">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
          تابعنا على فيسبوك
        </a>
      </div>
      <p class="mt-8 max-w-3xl text-xs leading-relaxed text-slate-500">
  التقييمات والمخزون مأخوذة من صفحات أمازون مصر وقد تتغير في أي وقت — وكل صفحة بتوصل
  لصفحة المنتج على أمازون مباشرة من أزرار «معرفة سعر اليوم»، وكل التفاصيل المالية
  والسعرية بتظهر هناك.
      </p>
      <p class="mt-3 max-w-3xl text-xs leading-relaxed text-slate-500">
  الموقع ده من إعداد <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer" class="font-bold text-emerald-400 transition hover:text-emerald-300">${esc(SITE.name)}</a>.
  المنتجات المعروضة من أمازون مصر، وأنا مش مسؤول عن أي بيعة بتتم على أمازون.
      </p>
    </div>
  </footer>
</div>
<script>
  // Filtering is progressive enhancement: every card is in the HTML already, so
  // the grid is complete and crawlable without JavaScript. This only hides the
  // ones outside the chosen category.
  (function () {
    var ON = ${JSON.stringify(FILTER_ON)};
    var OFF = ${JSON.stringify(FILTER_OFF)};
    var btns = [].slice.call(document.querySelectorAll('.hub-filter'));
    var cards = [].slice.call(document.querySelectorAll('.hub-card'));
    var empty = document.querySelector('.hub-empty');
    if (!btns.length || !cards.length) return;

    function apply(cat) {
      var shown = 0;
      cards.forEach(function (c) {
        var match = cat === 'all' || c.getAttribute('data-cat') === cat;
        c.classList.toggle('hidden', !match);
        if (match) shown++;
      });
      btns.forEach(function (b) {
        var on = b.getAttribute('data-filter') === cat;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        b.className = on ? ON : OFF;
      });
      if (empty) empty.classList.toggle('hidden', shown !== 0);
    }

    btns.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-filter')); });
    });
  })();
</script>
</body>
</html>
`;

writeFileSync('index.html', html, 'utf8');
console.log(`OK    hub  ->  index.html  (${rows.length} products, ${html.length} bytes)`);
