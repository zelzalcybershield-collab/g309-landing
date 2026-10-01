/* Generates the site root: a hub listing every product page.
 *
 *   node build/hub.mjs
 *
 * The root used to be a second copy of the G309 page (products/g309.json had
 * syncToRoot). That meant the same product had two live URLs, which splits the
 * link equity and leaves visitors on the root with no way to reach the other
 * four products. The root is now a generated index instead, so each product
 * exists at exactly one URL and the bare domain still lands somewhere useful.
 *
 * The hub now sorts alphabetically and prints no prices: prices live on the
 * Amazon pages themselves, and cached figures on the hub were going stale the
 * same way they did on the product pages. Ratings, review counts and stock
 * still come from each product's price.json so the cards stay current.
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
};

const files = readdirSync('products').filter((f) => f.endsWith('.json'));
const products = files.map((f) => JSON.parse(readFileSync(`products/${f}`, 'utf8')));

// The catalogue filters by what the thing actually is, so a visitor can narrow
// eleven products down without reading every card. Each product's category comes
// from its own listing (a "category" field written at build time), never from
// guessing off the brand — Logitech and Redragon are both mice here, and HP is
// the only audio item. A product with no valid category lands in "other" and
// stays reachable under "all" rather than disappearing from the grid.
const CATEGORIES = [
  { id: 'all', label: 'الكل', en: 'All' },
  { id: 'tablet', label: 'تابلت', en: 'Tablets' },
  { id: 'laptop', label: 'لابتوب', en: 'Laptops' },
  { id: 'phone', label: 'موبايل', en: 'Phones' },
  { id: 'mouse', label: 'ماوس', en: 'Mice' },
  { id: 'audio', label: 'سماعات', en: 'Audio' },
];
const catOf = (p) => (p.category && CATEGORIES.some((c) => c.id === p.category) ? p.category : 'other');

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
  const cat = p.dict.ar['hero.eyebrow'] || '';
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
          class="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-white object-contain p-3 transition group-hover:border-cyan-400/40">`
    : '';

  return `
        <a href="${esc(p.dir)}/" data-cat="${esc(catOf(p))}" class="hub-card group flex flex-col gap-4 rounded-3xl border border-white/10 bg-ink-850 p-6 transition hover:border-cyan-400/40 hover:bg-ink-800">
          ${shot}
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-[11px] font-bold tracking-widest text-cyan-400/80">${esc(cat)}</p>
              <h2 class="mt-1.5 text-lg font-extrabold text-white">${esc(p.meta.brand)}</h2>
              <p class="text-sm text-slate-400">${esc(p.meta.model)}</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2">${flags.join('')}${rate}</div>
          <p class="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-cyan-300 transition group-hover:gap-2.5">
            اعرف التفاصيل <span aria-hidden="true">←</span>
          </p>
        </a>`;
};

// only offer a filter button for a category that actually has products, so the
// row never shows a tab that would reveal an empty grid
const usedCats = new Set(rows.map(({ p }) => catOf(p)));
const filters = CATEGORIES.filter((c) => c.id === 'all' || usedCats.has(c.id));
const countOf = (id) => (id === 'all' ? rows.length : rows.filter(({ p }) => catOf(p) === id).length);

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>كل المنتجات — صفحات تفصيلية على أمازون مصر</title>
<meta name="description" content="صفحات تفصيلية لمنتجات على أمازون مصر: المواصفات، التقييمات، المخزون، وطرق الدفع والتقسيط المتاحة. السعر وكل التفاصيل المالية من صفحة أمازون نفسها.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
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
  [dir="rtl"] body { font-family: 'Cairo', system-ui, sans-serif; }
  .num { font-feature-settings: 'tnum'; direction: ltr; unicode-bidi: isolate; display: inline-block; }
  .gridlines {
    background-image:
      linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,.045) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  ::selection { background: #0e7490; color: #fff; }
</style>
</head>
<body class="min-h-screen bg-ink-950 text-slate-200 antialiased">
  <main class="gridlines">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <header class="mb-12">
        <p class="text-xs font-bold tracking-[0.3em] text-cyan-400">${esc(SITE.latin)}</p>
        <h1 class="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
          كل المنتجات في مكان واحد
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          مش هنقولك «اشتري ده» وخلاص. هنخليك تعرف مواصفات المنتج، تشوف تقييماته، وتقارن اختياراتك… وبعدها القرار قرارك.
        </p>
        <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer"
           class="mt-6 inline-flex items-center gap-2.5 rounded-2xl border border-cyan-400/25 bg-cyan-500/10 px-5 py-3 text-sm font-extrabold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-500/20">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
          تابع صفحة ${esc(SITE.name)} على فيسبوك
        </a>
      </header>

      <div class="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="تصفية حسب الفئة">
${filters.map((c, i) => `        <button type="button" data-filter="${esc(c.id)}" aria-pressed="${i === 0 ? 'true' : 'false'}"
          class="hub-filter rounded-full border px-4 py-2 text-sm font-bold transition ${i === 0 ? 'border-cyan-400/50 bg-cyan-500/15 text-cyan-300' : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-white'}">
          ${esc(c.label)} <span class="num opacity-60">${countOf(c.id)}</span>
        </button>`).join('\n')}
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
${rows.map(card).join('\n')}
      </div>

      <p class="hub-empty mt-8 hidden text-center text-sm text-slate-500" role="status">مفيش منتجات في الفئة دي.</p>

      <footer class="mt-14 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-500">
        <p>
  التقييمات والمخزون مأخوذة من صفحات أمازون مصر وقد تتغير في أي وقت — وكل صفحة
  بتوصل لصفحة المنتج على أمازون مباشرة من أزرار «معرفة سعر اليوم»، وكل التفاصيل
  المالية والسعرية بتظهر هناك.
        </p>
        <p class="mt-4">
  الموقع ده من إعداد <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer" class="font-bold text-cyan-400 transition hover:text-cyan-300">${esc(SITE.name)}</a>.
  المنتجات المعروضة من أمازون مصر،   وأنا مش مسؤول عن أي بيعة بتتم على أمازون.
        </p>
      </footer>
    </div>
  </main>
<script>
  // Filtering is progressive enhancement: every card is in the HTML already, so
  // the grid is complete and crawlable without JavaScript. This only hides the
  // ones outside the chosen category.
  (function () {
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
        b.className = 'hub-filter rounded-full border px-4 py-2 text-sm font-bold transition ' + (on
          ? 'border-cyan-400/50 bg-cyan-500/15 text-cyan-300'
          : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-white');
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
