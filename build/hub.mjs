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
 * Prices come from each product's existing price.json rather than from the
 * product data, so the hub shows what the pages actually show. price.yml calls
 * this after it refreshes those files, otherwise the hub would quote prices
 * from whenever it was last built.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const files = readdirSync('products').filter((f) => f.endsWith('.json'));
const products = files.map((f) => JSON.parse(readFileSync(`products/${f}`, 'utf8')));

const rows = products.map((p) => {
  const pricePath = `${p.dir}/price.json`;
  const live = existsSync(pricePath) ? JSON.parse(readFileSync(pricePath, 'utf8')) : {};
  return {
    p,
    price: typeof live.price === 'number' ? live.price : null,
    rating: typeof live.rating === 'number' ? live.rating : null,
    reviews: typeof live.reviews === 'number' ? live.reviews : null,
    inStock: live.inStock,
    stale: Boolean(live.stale),
  };
});

// cheapest first: this page exists to let someone compare what their money buys
rows.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));

const money = (n) => (n === null ? '—' : `${n.toLocaleString('en-US')} ج`);

const card = ({ p, price, rating, reviews, inStock, stale }) => {
  const cat = p.dict.ar['hero.eyebrow'] || '';
  const flags = [];
  if (inStock === false) flags.push('<span class="rounded-full border border-rose-400/30 bg-rose-500/10 px-2.5 py-1 text-[11px] font-bold text-rose-300">غير متوفر حالياً</span>');
  else if (inStock === true) flags.push('<span class="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-300">متوفر</span>');
  if (stale) flags.push('<span class="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold text-amber-300">السعر قد يكون متأخر</span>');

  const rate = rating === null
    ? ''
    : `<span class="num inline-flex items-center gap-1 text-sm font-bold text-amber-300">★ ${rating.toFixed(1)}</span>`
      + (reviews === null ? '' : `<span class="text-xs text-slate-500">(${reviews.toLocaleString('en-US')})</span>`);

  return `
        <a href="${esc(p.dir)}/" class="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-ink-850 p-6 transition hover:border-amber-400/40 hover:bg-ink-800">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-[11px] font-bold tracking-widest text-amber-400/80">${esc(cat)}</p>
              <h2 class="mt-1.5 text-lg font-extrabold text-white">${esc(p.meta.brand)}</h2>
              <p class="text-sm text-slate-400">${esc(p.meta.model)}</p>
            </div>
            <span class="shrink-0 rounded-2xl bg-ink-950 px-4 py-2.5 text-center">
              <span class="num block text-xl font-black text-white">${esc(money(price))}</span>
              <span class="block text-[10px] font-bold text-slate-500">شامل الضريبة</span>
            </span>
          </div>
          <div class="flex flex-wrap items-center gap-2">${flags.join('')}${rate}</div>
          <p class="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-amber-300 transition group-hover:gap-2.5">
            اعرف التفاصيل <span aria-hidden="true">←</span>
          </p>
        </a>`;
};

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>كل المنتجات — صفحات تفصيلية على أمازون مصر</title>
<meta name="description" content="صفحات تفصيلية لمنتجات على أمازون مصر: السعر، المواصفات، أكواد خصم بطاقات البنك الأهلي، ومقارنة سريعة. الأسعار تتحدّث كل 4 ساعات.">
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
  ::selection { background: #7c3aed; color: #fff; }
</style>
</head>
<body class="min-h-screen bg-ink-950 text-slate-200 antialiased">
  <main class="gridlines">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <header class="mb-12">
        <p class="text-xs font-bold tracking-[0.3em] text-amber-400">AMAZON.EG</p>
        <h1 class="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
          كل المنتجات في مكان واحد
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          ${rows.length} منتجات — كل واحد بصفحة تفصيلية فيها المواصفات الكاملة وأكواد خصم
          بطاقات البنك الأهلي. الأسعار متزامنة من أمازون مصر كل 4 ساعات.
        </p>
      </header>

      <div class="grid gap-5 sm:grid-cols-2">
${rows.map(card).join('\n')}
      </div>

      <footer class="mt-14 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-500">
        <p>
 الأسعار والمخزون مأخوذة من صفحات أمازون مصر وقد تتغير في أي وقت — وكل صفحة تعرض
 آخر قيمة تم جلبها ومتى تم تحديثها. أكواد الخصم تعمل على بطاقات NBE المؤهلة فقط.
        </p>
      </footer>
    </div>
  </main>
</body>
</html>
`;

writeFileSync('index.html', html, 'utf8');
console.log(`OK    hub  ->  index.html  (${rows.length} products, ${html.length} bytes)`);
