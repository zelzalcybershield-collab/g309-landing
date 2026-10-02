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

/* The logo, inline so it costs no request and stays crisp at any size.
 * The gradient needs an id, and two SVGs on one page cannot share one, so each
 * call takes a suffix to keep the two instances (header, footer) independent. */
const mark = (id, size = 40) => `
      <svg viewBox="0 0 96 96" width="${size}" height="${size}" fill="none" aria-hidden="true" class="shrink-0">
        <defs>
          <linearGradient id="nz${id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#67E8F9"/><stop offset=".5" stop-color="#22D3EE"/><stop offset="1" stop-color="#2563EB"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="92" height="92" rx="26" fill="url(#nz${id})"/>
        <rect x="2" y="2" width="92" height="92" rx="26" stroke="#fff" stroke-opacity=".28" stroke-width="2"/>
        <path d="M27 49c0 14 9 22 21 22s21-8 21-22" stroke="#fff" stroke-width="8.5" stroke-linecap="round"/>
        <path d="M48 18l3.6 7.4 7.4 3.6-7.4 3.6L48 40l-3.6-7.4L37 29l7.4-3.6z" fill="#fff"/>
      </svg>`;

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

const card = ({ p, rating, reviews, inStock }, i) => {
  const cat = catOf(p);
  const flags = [];
  if (inStock === false) flags.push('<span class="rounded-full border border-rose-400/30 bg-rose-500/10 px-2.5 py-1 text-[11px] font-bold text-rose-300">غير متوفر حالياً</span>');
  else if (inStock === true) flags.push('<span class="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-300">متوفر</span>');

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
           class="aspect-[4/3] w-full object-contain p-4">`
    : '';

  return `
        <a href="${esc(p.dir)}/" data-cat="${esc(cat)}" class="hub-card group relative flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-ink-850/80 p-5 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:shadow-[0_24px_60px_-28px_rgba(34,211,238,.55)]">
          <span aria-hidden="true" class="absolute inset-x-6 top-0 h-px brand-grad opacity-0 transition duration-300 group-hover:opacity-100"></span>
          <div class="mb-4 overflow-hidden rounded-2xl border border-white/[.07] bg-white/[.04]">${shot}</div>
          <div class="mb-2.5 flex flex-wrap items-center gap-2">
            <span class="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-bold text-cyan-300">${esc(catLabel(cat))}</span>
            ${flags.join('')}
          </div>
          <h2 class="text-lg font-black leading-tight text-white">${esc(p.meta.brand)}</h2>
          <p class="mt-1 text-sm text-slate-400">${esc(p.meta.model)}</p>
          <div class="mt-4 flex items-center justify-between gap-3 border-t border-white/[.07] pt-3.5">
            <span class="flex items-center gap-1.5">${rate}</span>
            <span class="text-xs font-extrabold text-cyan-300 transition group-hover:gap-2">التفاصيل <span aria-hidden="true">←</span></span>
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
const FILTER_ON = 'hub-filter rounded-full border border-cyan-400/50 bg-cyan-500/15 px-4 py-2 text-sm font-bold text-cyan-300 transition';
const FILTER_OFF = 'hub-filter rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-white';

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>كل المنتجات — صفحات تفصيلية على أمازون مصر | ${esc(SITE.name)}</title>
<meta name="description" content="${esc(SITE.tagline)}">
<meta name="theme-color" content="#07070D">
<link rel="icon" type="image/svg+xml" href="brand/mark.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  // The ink scale is the dark base every product page is built on, so the hub
  // has to define the same ramp or its bg-ink-* classes resolve to nothing and
  // the page falls back to a white background with white text on it.
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { sans: ['Cairo', 'Inter', 'system-ui', 'sans-serif'] },
        colors: {
          ink: {
            950: '#07070D', 900: '#0B0B13', 850: '#11111C',
            800: '#171725', 700: '#1F1F31',
          },
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
    --nz-1: #67E8F9;
    --nz-2: #22D3EE;
    --nz-3: #2563EB;
  }
  [dir="rtl"] body { font-family: 'Cairo', system-ui, sans-serif; }
  .num { font-feature-settings: 'tnum'; direction: ltr; unicode-bidi: isolate; display: inline-block; }
  .brand-grad { background-image: linear-gradient(90deg, var(--nz-1), var(--nz-2) 45%, var(--nz-3)); }
  .brand-text {
    background-image: linear-gradient(100deg, var(--nz-1), var(--nz-2) 50%, var(--nz-3));
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  /* The ambient wash behind the header. Fixed rather than absolute so the long
   * page does not stretch a 560px div down the whole document. */
  .brand-aura {
    background:
      radial-gradient(760px 320px at 78% -8%, rgba(34,211,238,.20), transparent 70%),
      radial-gradient(560px 300px at 12% 0%, rgba(37,99,235,.18), transparent 70%);
  }
  .gridlines {
    background-image:
      linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: linear-gradient(to bottom, #000 0, transparent 68%);
    -webkit-mask-image: linear-gradient(to bottom, #000 0, transparent 68%);
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
          <span class="num mt-1.5 block text-[9px] font-bold tracking-[0.3em] text-cyan-400/70">${esc(SITE.latin)}</span>
        </span>
      </a>
      <div class="flex items-center gap-2 sm:gap-3">
        <span class="num hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 sm:inline-block">${rows.length} منتج</span>
        <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer" aria-label="صفحة ${esc(SITE.name)} على فيسبوك"
           class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-500/20">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
        </a>
      </div>
    </div>
  </header>

  <main id="top" class="relative">
    <div class="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:px-8 sm:pt-20">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-1.5 text-[11px] font-bold text-cyan-300">
          <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
          كتالوج كامل — كل التفاصيل من أمازون مصر
        </span>
        <h1 class="mt-6 text-4xl font-black leading-[1.14] text-white sm:text-6xl">
          كل المنتجات في <span class="brand-text">مكان واحد</span>
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          مش هنقولك «اشتري ده» وخلاص. هنخليك تعرف مواصفات المنتج، تشوف تقييماته، وتقارن اختياراتك… وبعدها القرار قرارك.
        </p>
      </div>

      <div class="mt-10 grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/10 bg-ink-850/60 p-5">
          <p class="text-sm font-extrabold text-white">صفحة تفصيلية لكل منتج</p>
          <p class="mt-1.5 text-xs leading-relaxed text-slate-400">مواصفات وصور وأسئلة شائعة — مش سطر واحد بس.</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-ink-850/60 p-5">
          <p class="text-sm font-extrabold text-white">السعر من أمازون نفسه</p>
          <p class="mt-1.5 text-xs leading-relaxed text-slate-400">مفيش سعر مخزّن عندنا؛ كل صفحة بتوديك لعرض السعر الحالي.</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-ink-850/60 p-5">
          <p class="text-sm font-extrabold text-white">الشراء والاسترجاع من أمازون</p>
          <p class="mt-1.5 text-xs leading-relaxed text-slate-400">الدفع عند الاستلام والاسترجاع بيتمّان داخل صفحة أمازون.</p>
        </div>
      </div>

      <div class="mt-12 mb-7 flex flex-wrap items-center gap-2" role="group" aria-label="تصفية حسب الفئة">
${filters.map((c, i) => `        <button type="button" data-filter="${esc(c.id)}" aria-pressed="${i === 0 ? 'true' : 'false'}" class="${i === 0 ? FILTER_ON : FILTER_OFF}">
          ${esc(c.label)} <span class="num opacity-60">${countOf(c.id)}</span>
        </button>`).join('\n')}
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
            <span class="num mt-1.5 block text-[9px] font-bold tracking-[0.3em] text-cyan-400/60">${esc(SITE.latin)}</span>
          </span>
        </div>
        <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2.5 rounded-2xl border border-cyan-400/25 bg-cyan-500/10 px-5 py-3 text-sm font-extrabold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-500/20">
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
  الموقع ده من إعداد <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer" class="font-bold text-cyan-400 transition hover:text-cyan-300">${esc(SITE.name)}</a>.
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
