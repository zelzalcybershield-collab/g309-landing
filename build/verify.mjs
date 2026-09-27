// Post-build check: every generated product page must actually work.
// Verifies image paths resolve on disk, the dict is complete, the gallery
// points at real files, and the page's JS parses.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';

const dirs = readdirSync('products').filter((f) => f.endsWith('.json'));
let failures = 0;
const check = (name, cond, extra = '') => {
  if (!cond) failures++;
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : '  ' + extra}`);
};

for (const f of dirs) {
  const p = JSON.parse(readFileSync(join('products', f), 'utf8'));
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
