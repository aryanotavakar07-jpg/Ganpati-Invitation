import fs from 'fs';
import path from 'path';

const assetsToDownload = [
  { url: 'https://sacredtemple.vercel.app/assets/paper-texture.webp', file: 'public/assets/paper-texture.webp' },
  { url: 'https://sacredtemple.vercel.app/assets/flower2-579OHsCI.webp', file: 'public/assets/flower2-579OHsCI.webp' },
  { url: 'https://sacredtemple.vercel.app/assets/f1-ADhmizYT.webp', file: 'public/assets/f1-ADhmizYT.webp' }
];

async function download() {
  for (const item of assetsToDownload) {
    try {
      console.log(`Downloading ${item.url}...`);
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(item.file, Buffer.from(buffer));
        console.log(`Saved to ${item.file}`);
      } else {
        console.error(`Failed ${item.url}: ${res.status}`);
      }
    } catch (e) {
      console.error(`Error downloading ${item.url}:`, e);
    }
  }
}

download();
