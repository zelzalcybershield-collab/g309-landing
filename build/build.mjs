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

const tplHtml = readFileSync('build/template.html', 'utf8');
const tplJs = readFileSync('build/template.js', 'utf8');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const jstr = (s) => JSON.stringify(String(s));

function fail(msg) { console.error(`  ERROR: ${msg}`); process.exitCode = 1; }

function render(p) {
  const m = p.meta || {};
  // og tags are Arabic-only by design: og:title cannot be language-negotiated
  // without a per-language URL, and the page has a single canonical URL.
  const need = ['brand', 'heroImg', 'heroAlt', 'titleAr', 'titleEn', 'descAr', 'descEn', 'ogTitleAr', 'ogDescAr'];
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

  const url = `https://www.amazon.eg/dp/${p.asin}`;

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
    .replaceAll('{{HERO_IMG}}', esc(m.heroImg))
    .replaceAll('{{HERO_ALT}}', esc(m.heroAlt));

  const js = tplJs
    .replaceAll('{{PRODUCT_URL}}', url)
    // filenames in the data are bare; the page needs them relative to img/
    .replaceAll('{{GAL_FILES}}', JSON.stringify(imgs.map((f) => 'img/' + f)));

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
