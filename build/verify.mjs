// Post-build check: every generated product page must actually work.
// Verifies image paths resolve on disk, the dict is complete, the gallery
// points at real files, and the page's JS parses.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';

const files = readdirSync('products').filter((f) => f.endsWith('.json'));
const all = files.map((f) => JSON.parse(readFileSync(join('products', f), 'utf8')));
let failures = 0;
const check = (name, cond, extra = '') => {
  if (!cond) failures++;
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : '  ' + extra}`);
};

for (const p of all) {
  console.log(`\n=== ${p.slug} (${p.dir}) ===`);

  const htmlPath = join(p.dir, 'index.html');
  const jsPath = join(p.dir, 'app.js');
  check('index.html exists', existsSync(htmlPath));
  check('app.js exists', existsSync(jsPath));
  check('price.json exists', existsSync(join(p.dir, 'price.json')));
  if (!existsSync(htmlPath) || !existsSync(jsPath)) continue;

  const html = readFileSync(htmlPath, 'utf8');
  const js = readFileSync(jsPath, 'utf8');

  check('no template markers left', !/\{\{\w+\}\}/.test(html + js));
  check('no corrupt arabic (U+FFFD)', !html.includes('\uFFFD') && !js.includes('\uFFFD'));

  // every img src in the html must exist on disk
  const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  const bad = srcs.filter((s) => !s.startsWith('http') && !existsSync(join(p.dir, s)));
  check(`all ${srcs.length} html img srcs exist on disk`, bad.length === 0, bad.join(', '));

  // gallery list in the generated JS
  const gal = JSON.parse((js.match(/const GAL_FILES = (\[[^\]]*\]);/) || [])[1] || '[]');
  check(`gallery has ${gal.length} entries`, gal.length > 0);
  check('all gallery paths start with img/', gal.every((g) => g.startsWith('img/')));
  const badGal = gal.filter((g) => !existsSync(join(p.dir, g)));
  check('all gallery images exist on disk', badGal.length === 0, badGal.join(', '));
  check('no duplicate gallery entries', new Set(gal).size === gal.length);

  // the buy link must point at this product's ASIN
  check('PRODUCT_URL carries the right asin', js.includes(`/dp/${p.asin}`));
  check('no other asin leaked in', !/\/dp\/(B0[A-Z0-9]{8})/.test(js.replace(new RegExp(`/dp/${p.asin}`), '')));

  // Nothing from another product may survive in the output. This is the check
  // that would have caught the hardcoded G309 dictionary, which shipped a
  // laptop page full of mouse copy.
  const otherSlugs = all.filter((o) => o.slug !== p.slug).map((o) => o.slug);
  const foreignSlugs = otherSlugs.filter((s) => html.includes(s) || js.includes(s));
  check('no other product slug leaked in', foreignSlugs.length === 0, foreignSlugs.join(', '));

  const dictStart = js.indexOf('const dict =');
  const dictText = dictStart < 0 ? '' : js.slice(dictStart, js.indexOf('\n};', dictStart) + 3);
  // JSON.stringify emits "key": "value", so match either quote style
  const hasKey = (k) => dictText.includes(`"${k}":`) || dictText.includes(`'${k}':`);
  const missingKeys = Object.keys(p.dict.ar).filter((k) => !hasKey(k));
  check('every dict key made it into the page', missingKeys.length === 0, missingKeys.slice(0, 5).join(', '));
  const extraKeys = [...dictText.matchAll(/["']([a-z]+\.[A-Za-z0-9]+)["']\s*:/g)]
    .map((m) => m[1]).filter((k) => !(k in p.dict.ar));
  check('page has no dict keys from another product', extraKeys.length === 0, [...new Set(extraKeys)].slice(0, 5).join(', '));
  // A value from this product appears in the page
  check('page carries this product copy', dictText.includes(JSON.stringify(p.dict.ar['hero.title1']).slice(1, -1).slice(0, 18)));

  // The templates must contain ZERO product copy. This is the invariant that
  // matters: a hardcoded dictionary in the template once shipped a laptop page
  // full of mouse text, and comparing values between products cannot catch that
  // (copied text is byte-identical, so it looks "consistent"). Checking the
  // template directly is both simpler and immune to that.
  const tplHtml = readFileSync('build/template.html', 'utf8');
  const tplJs = readFileSync('build/template.js', 'utf8');
  const tplCopy = [...new Set(all.flatMap((o) => [
    ...Object.values(o.dict.ar), ...Object.values(o.dict.en),
    o.meta.titleAr, o.meta.titleEn, o.meta.descAr, o.meta.descEn,
  ]).map(String).filter((v) => v.length >= 20))]
    .filter((v) => tplHtml.includes(v) || tplJs.includes(v));
  check('templates contain no product copy', tplCopy.length === 0,
    tplCopy.map((v) => `"${v.slice(0, 40)}"`).slice(0, 3).join(' | '));

  // dict completeness
  const keys = Object.keys(p.dict.ar);
  check(`dict has ${keys.length} keys`, keys.length > 100);
  check('ar/en key sets match', keys.every((k) => k in p.dict.en) && Object.keys(p.dict.en).length === keys.length);

  // every data-i18n hook in the page must resolve in the dict
  const used = new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
    for (const seg of m[1].split(',')) {
      const k = seg.split(':').map((s) => s.trim())[1];
      if (k) used.add(k);
    }
  }
  const missing = [...used].filter((k) => !(k in p.dict.ar));
  check(`all ${used.size} i18n hooks resolve`, missing.length === 0, missing.join(', '));

  // meta filled
  check('title not empty', /<title>[^<]{10,}<\/title>/.test(html));
  check('og:title present', /property="og:title" content="[^"]{10,}"/.test(html));

  // tag balance
  for (const t of ['section', 'div', 'button', 'svg']) {
    const o = (html.match(new RegExp(`<${t}[\\s>]`, 'g')) || []).length;
    const c = (html.match(new RegExp(`</${t}>`, 'g')) || []).length;
    check(`<${t}> balanced ${o}/${c}`, o === c);
  }

  // js parses
  let parsed = true;
  try { execFileSync(process.execPath, ['--check', jsPath], { stdio: 'pipe' }); }
  catch { parsed = false; }
  check('app.js parses', parsed);
}

console.log(failures ? `\n${failures} FAILURES` : '\nall good');
process.exit(failures ? 1 : 0);
