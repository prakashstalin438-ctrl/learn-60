const fs = require('fs');

async function testHeader() {
  const res = await fetch('http://127.0.0.1:9222/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page' && (t.url.includes('4173') || t.url.includes('web.app')));
  if (!page) {
    console.log('No page found to screenshot');
    process.exit(0);
  }
  const ws = new globalThis.WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    const handler = (evt) => {
      const data = JSON.parse(evt.data);
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.onopen = async () => {
    await send('Page.enable');
    await send('Page.navigate', { url: 'http://localhost:4173/' });
    await new Promise(r => setTimeout(r, 1200));

    const headerText = await send('Runtime.evaluate', {
      expression: 'document.querySelector(".app-header .brand-title")?.textContent?.trim()',
      returnByValue: true
    });
    console.log('Top Header Title:', headerText.result?.value);

    const bannerCheck = await send('Runtime.evaluate', {
      expression: '!!document.querySelector(".pwa-offline-indicator, .pwa-online-toast")',
      returnByValue: true
    });
    console.log('Network status banner present?', bannerCheck.result?.value);

    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_learn60_header.png', Buffer.from(screenshot.data, 'base64'));
    console.log('Saved screenshot_learn60_header.png');

    ws.close();
    process.exit(0);
  };
}

testHeader();
