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

  // Payment-method claims are the one thing here that is set per product and
  // easy to get wrong: three pages advertised cash on delivery that Amazon's
  // own listing refuses ("Electronic Payment Only ... not eligible for COD").
  // The flag is the source of truth, so the copy has to agree with it.
  check('payments.cod is set', typeof p.payments?.cod === 'boolean');
  if (typeof p.payments?.cod === 'boolean') {
    check('payments.cod records where it was verified', Boolean(p.payments.verifiedOn),
      'add payments.verifiedOn with the Amazon wording you checked');
    // Mentioning cash on delivery is not the same as offering it: the honest
    // answer is "no, this item is not eligible for COD". Only an *offer* counts
    // as a claim, so a denial has to be allowed to name the method.
    const denial = /not eligible|is not available|isn'?t|غير\s*مؤهل|غير\s*متاح|(^|[.،\s])لأ[.،\s]/;
    for (const lang of ['ar', 'en']) {
      const offers = Object.entries(p.dict[lang])
        // a question cannot make a claim - "can I pay cash on delivery?" is fine
        // whatever the answer is. The paired faq.aN is where the substance is.
        .filter(([k]) => !/\.q\d+$/.test(k))
        .filter(([, v]) => /الدفع عند الاستلام|كاش عند الباب|الدفع عند الباب|cash on delivery|at the door|pay cash/i.test(String(v)))
        .filter(([, v]) => !denial.test(String(v)))
        .map(([k]) => k);
      check(`cod offer matches payments.cod (${lang})`, offers.length > 0 === p.payments.cod,
        `copy offers cod at [${offers.join(', ')}] but payments.cod=${p.payments.cod}`);
    }
  }

  // A review card must never claim to be a customer quote unless the string is
  // an actual spec. The g309 dict shipped three quotes attributed to "verified
  // buyer" with star ratings that were not on the Amazon page - fabricated
  // social proof. Attribution wording plus a star score is the shape to catch.
  for (const lang of ['ar', 'en']) {
    const fake = Object.entries(p.dict[lang])
      .filter(([, v]) => /مشترٍ|مشتري موثّق|verified buyer|verified purchase/i.test(String(v)))
      .map(([k]) => k);
    check(`no fabricated buyer attribution (${lang})`, fake.length === 0, fake.join(', '));
    const stars = Object.entries(p.dict[lang])
      .filter(([, v]) => /★/.test(String(v)))
      .map(([k]) => k);
    check(`no hardcoded star scores (${lang})`, stars.length === 0, stars.join(', '));
  }

  // any string that interpolates the rating must be one the template can hide
  const tokenised = Object.keys(p.dict.ar).filter((k) => /\{[nr]\}/.test(p.dict.ar[k]));
  check('rating-dependent strings are the expected set',
    tokenised.every((k) => /^hero\.reviews$|^rev\.count$/.test(k)), tokenised.join(', '));
}

// The root is a generated hub (build/hub.mjs), not a second copy of a product
// page. It must reach every product exactly once and must not carry a
// product's own buy link, which is what would make the root a duplicate of it.
console.log('\n=== root hub ===');
{
  const hubPath = 'index.html';
  check('root index.html exists', existsSync(hubPath));
  const hub = existsSync(hubPath) ? readFileSync(hubPath, 'utf8') : '';
  if (hub) {
    check('root has no corrupt arabic (U+FFFD)', !hub.includes('\uFFFD'));
    check('root is a product index, not a product page', !/PRODUCT_URL/.test(hub) && !/data-i18n=/.test(hub));
    check('root has no affiliate buy link', !/tag=zoq-21/.test(hub));

    const hrefs = [...hub.matchAll(/<a[^>]+href="([^"]+)"/g)].map((m) => m[1]);
    for (const p of all) {
      const hits = hrefs.filter((h) => h === `${p.dir}/`).length;
      check(`root links to ${p.dir}/ exactly once`, hits === 1, `found ${hits}`);
    }
    check('root links to nothing but products', hrefs.every((h) => all.some((p) => h === `${p.dir}/`)), hrefs.join(', '));

    for (const t of ['section', 'div', 'a', 'header', 'footer']) {
      const o = (hub.match(new RegExp(`<${t}[\\s>]`, 'g')) || []).length;
      const c = (hub.match(new RegExp(`</${t}>`, 'g')) || []).length;
      check(`root <${t}> balanced ${o}/${c}`, o === c);
    }
  }
  // leftovers from when the root was a copy of the g309 page. img/ is not in
  // this list: it is the shared source directory the build copies from, so it
  // belongs in the repo even though nothing deployed references it.
  for (const stale of ['app.js', 'price.json']) {
    check(`no stale root ${stale}`, !existsSync(stale));
  }
  check('root hub references no images', !/<img\b/.test(hub));
  // the source images must still be there, or the next build breaks
  for (const p of all) {
    const src = p.images?.from || 'img';
    const gone = [p.meta.heroImg, ...(p.images?.gallery || [])].filter((f) => !existsSync(join(src, f)));
    check(`source images present in ${src}/`, gone.length === 0, gone.slice(0, 3).join(', '));
  }
}

console.log(failures ? `\n${failures} FAILURES` : '\nall good');
process.exit(failures ? 1 : 0);
