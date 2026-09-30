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
// checkout is worse than no discount, so a product only gets a card when its
// data carries codes. Codes are no longer shown at all: the page states that
// instalments and payment options exist on Amazon and sends the visitor there.

const jstr = (s) => JSON.stringify(String(s));

// Optional variant comparison: rendered only when the product carries
// `variants.items`. Each card shows one Amazon variant (اسم النمط, السعر,
// التقييم) and links straight to its own tagged listing. The anchors must NOT
// carry data-buy — template.js initBuy() would otherwise repoint every one of
// them at the page's main product.
const variantsBlock = (p) => {
  const items = p.variants?.items;
  if (!Array.isArray(items) || !items.length) return '';
  const cards = items.map((it, i) => {
    const n = i + 1;
    const url = p.affiliateTag
      ? `https://www.amazon.eg/dp/${it.asin}?tag=${encodeURIComponent(p.affiliateTag)}`
      : `https://www.amazon.eg/dp/${it.asin}`;
    return `
        <article class="relative flex flex-col rounded-2xl border bg-ink-950 p-7 ${it.current ? 'border-emerald-400/35' : 'border-white/10'}">
          <span class="absolute -top-3 start-5 rounded-full px-3 py-1 text-xs font-black ${it.current
            ? 'bg-emerald-500 text-ink-950'
            : 'border border-white/10 bg-ink-800 text-slate-300'}" data-i18n="var.i${n}.tag"></span>
          <h3 class="mt-1 text-lg font-extrabold text-white" data-i18n="var.i${n}.name"></h3>
          <p class="mt-1 text-sm text-slate-400" data-i18n="var.i${n}.dim"></p>
          <p class="mt-2 text-xs font-bold text-amber-300" data-i18n="var.i${n}.rating"></p>
          <p class="mt-0.5 text-xs text-slate-500" data-i18n="var.i${n}.count"></p>
          <p class="mt-4 text-sm leading-relaxed text-slate-400" data-i18n="var.i${n}.note"></p>
          <a href="${esc(url)}" target="_blank" rel="sponsored noopener"
             class="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-cyan-400 to-sky-500 px-5 py-3 text-sm font-black text-ink-950 transition hover:shadow-xl hover:shadow-cyan-500/20" data-variant-buy data-i18n="var.i${n}.buy"></a>
        </article>`;
  }).join('\n');
  return `
<section id="variants" class="scroll-mt-28 border-y border-white/5 bg-ink-900/30 py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-400" data-i18n="var.eyebrow"></p>
      <h2 class="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl" data-i18n="var.title"></h2>
      <p class="mt-4 text-lg text-slate-400" data-i18n="var.sub"></p>
    </div>
    <div class="mt-14 grid gap-5 md:grid-cols-2">${cards}
    </div>
    <p class="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-500" data-i18n="var.note"></p>
  </div>
</section>`;
};

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
    .replaceAll('{{BRAND}}', esc(m.brand))
    .replaceAll('{{BRAND_VALUE}}', esc(m.brandValue))
    .replaceAll('{{MODEL}}', esc(m.model))
    .replaceAll('{{SIZE}}', esc(m.size))
    .replaceAll('{{HERO_IMG}}', esc(m.heroImg))
    .replaceAll('{{HERO_ALT}}', esc(m.heroAlt))
    .replaceAll('{{STATS_TILES}}', statsTiles(p))
    .replaceAll('{{VARIANTS_BLOCK}}', variantsBlock(p))
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
