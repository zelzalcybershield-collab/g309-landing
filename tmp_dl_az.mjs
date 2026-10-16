import https from 'node:https';
import fs from 'node:fs';

const dir = 'img/arzum-okka-minio-coffee';
fs.mkdirSync(dir, { recursive: true });
const ids = ['61cxzOgnGHL', '61mpCc9T93L', '61AUefhwzWL', '51GBGFQ4D7L', '51zXPAjat2L', '51Z4HgcfxLL'];
const get = (u) => new Promise((res, rej) => {
  https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
    const c = []; r.on('data', (d) => c.push(d)); r.on('end', () => res(Buffer.concat(c)));
  }).on('error', rej);
});
for (let i = 0; i < ids.length; i++) {
  let b = await get(`https://m.media-amazon.com/images/I/${ids[i]}._AC_SL1500_.jpg`);
  if (b.length < 4000 || b.slice(0, 2).toString('hex') !== 'ffd8') b = await get(`https://m.media-amazon.com/images/I/${ids[i]}._AC_SL1000_.jpg`);
  const f = `${dir}/az-${String(i).padStart(2, '0')}.jpg`;
  fs.writeFileSync(f, b);
  console.log(i, b.length, b.slice(0, 2).toString('hex') === 'ffd8' ? 'OK' : 'BAD', f);
}