const fs = require('fs');

console.log('=== CHECKING PWA ICONS ===');
['public/icon-192.png', 'public/icon-512.png', 'public/icon-maskable-192.png', 'public/icon-maskable-512.png'].forEach(f => {
  if (!fs.existsSync(f)) {
    console.error('MISSING:', f);
    return;
  }
  const b = fs.readFileSync(f);
  const w = b.readUInt32BE(16);
  const h = b.readUInt32BE(20);
  console.log(f, w, 'x', h, b.length, 'bytes');
});

console.log('\n=== CHECKING MANIFEST ===');
const manifest = JSON.parse(fs.readFileSync('public/manifest.json', 'utf8'));
console.log('Name:', manifest.name);
console.log('Short name:', manifest.short_name);
console.log('Start URL:', manifest.start_url);
console.log('Scope:', manifest.scope);
console.log('Display:', manifest.display);
console.log('Icons count:', manifest.icons?.length);
manifest.icons?.forEach((icon, i) => {
  const exists = fs.existsSync('public' + icon.src);
  console.log(`Icon ${i}: src=${icon.src}, sizes=${icon.sizes}, purpose=${icon.purpose}, exists=${exists}`);
});
