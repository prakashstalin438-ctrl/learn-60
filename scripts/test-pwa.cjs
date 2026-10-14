async function test() {
  const urls = [
    'http://127.0.0.1:4173/',
    'http://127.0.0.1:4173/manifest.json',
    'http://127.0.0.1:4173/sw.js',
    'http://127.0.0.1:4173/icon-192.png',
    'http://127.0.0.1:4173/icon-512.png',
    'http://127.0.0.1:4173/icon-maskable-192.png',
    'http://127.0.0.1:4173/icon-maskable-512.png',
    'http://127.0.0.1:4173/icons/icon-192.png',
    'http://127.0.0.1:4173/icons/icon-512.png',
    'http://127.0.0.1:4173/favicon.ico',
    'http://127.0.0.1:4173/favicon.png',
    'http://127.0.0.1:4173/favicon.svg',
    'http://127.0.0.1:4173/logo.png'
  ];
  let allPass = true;
  for (const u of urls) {
    try {
      const res = await fetch(u);
      const ct = res.headers.get('content-type') || 'unknown';
      const len = res.headers.get('content-length') || '?';
      console.log(`[PASS] ${u} -> HTTP ${res.status} (${ct}, ${len} bytes)`);
      if (res.status !== 200) allPass = false;
    } catch(e) {
      console.error(`[FAIL] ${u} -> ERROR: ${e.message}`);
      allPass = false;
    }
  }

  // Check manifest content
  try {
    const res = await fetch('http://127.0.0.1:4173/manifest.json');
    const json = await res.json();
    console.log('\n--- Manifest JSON Validation ---');
    console.log('App Name:', json.name);
    console.log('Short Name:', json.short_name);
    console.log('Display:', json.display);
    console.log('Orientation:', json.orientation);
    console.log('Theme Color:', json.theme_color);
    console.log('Background Color:', json.background_color);
    console.log('Icons Count:', json.icons?.length);
    if (json.name !== 'Learn60 — GenAI 60-Day Roadmap') {
      console.error('Mismatch in manifest name!');
      allPass = false;
    }
  } catch(e) {
    console.error('Error validating manifest.json:', e);
    allPass = false;
  }

  // Check index.html meta tags
  try {
    const res = await fetch('http://127.0.0.1:4173/');
    const html = await res.text();
    console.log('\n--- index.html Meta Tags Validation ---');
    console.log('Has manifest link:', html.includes('rel="manifest"'));
    console.log('Has theme-color:', html.includes('name="theme-color"'));
    console.log('Has apple-touch-icon:', html.includes('rel="apple-touch-icon"'));
    console.log('Has mobile-web-app-capable:', html.includes('name="mobile-web-app-capable"'));
    console.log('Has title Learn60:', html.includes('<title>Learn60 — GenAI 60-Day Roadmap</title>'));
  } catch(e) {
    console.error('Error validating index.html:', e);
    allPass = false;
  }

  if (allPass) {
    console.log('\n>>> ALL PWA NETWORK AND METADATA TESTS PASSED SUCCESSFULLY! <<<');
  } else {
    console.log('\n>>> SOME TESTS FAILED <<<');
    process.exit(1);
  }
}

test();
