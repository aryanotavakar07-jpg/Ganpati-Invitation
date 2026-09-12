import fs from 'fs';

const baseUrl = 'https://sacredtemple.vercel.app/assets/';

const jsFiles = [
  'index-zd-GV6LP.js',
  'Blessings-CHwr340R.js',
  'framer-Bq-bTNO0.js',
  'useScrollReveal-BvaQ2eR3.js',
  'Button-Co4wHrbZ.js',
  'vendor-CDnZY78L.js',
  'Family-ClF3zV5G.js',
  'Footer-DWQtcP5r.js',
  'Gallery-CYFeBREg.js',
  'Location-BZCLWEv-.js',
  'Timeline-BD7-Qemd.js',
  'timeline-CU8N5Gin.js',
  'TimelineModal-BJwPrPZc.js',
  'index-Bgkch7eO.css'
];

async function run() {
  const assetSet = new Set(['paper-texture.webp', 'flower2-579OHsCI.webp', 'f1-ADhmizYT.webp']);
  
  for (const jsFile of jsFiles) {
    try {
      const res = await fetch(baseUrl + jsFile);
      if (res.ok) {
        const text = await res.text();
        const matches = text.match(/[\w-]+\.(webp|png|jpg|jpeg|svg|mp3|wav|ogg)/gi);
        if (matches) {
          matches.forEach(m => assetSet.add(m));
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  console.log('Found assets:', Array.from(assetSet));

  for (const asset of assetSet) {
    try {
      const url = baseUrl + asset;
      console.log(`Downloading ${url}...`);
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        const dest = `public/assets/${asset}`;
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`Saved ${dest} (${buffer.byteLength} bytes)`);
      } else {
        console.log(`Not found: ${url} (${res.status})`);
      }
    } catch (e) {
      console.error(`Error downloading ${asset}:`, e.message);
    }
  }
}

run();
