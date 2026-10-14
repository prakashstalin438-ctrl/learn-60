const fs = require('fs');

async function verifyFooter() {
  const res = await fetch('http://127.0.0.1:9222/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page' && t.url.includes('4173'));
  if (!page) {
    console.error('No page found on 4173');
    process.exit(1);
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
    await send('Runtime.enable');

    console.log('[1] Reloading preview page with new build...');
    await send('Page.reload');
    await new Promise(r => setTimeout(r, 1200));

    console.log('[2] Opening Settings modal/page...');
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#settings-btn")?.click()'
    });
    await new Promise(r => setTimeout(r, 600));

    // Scroll to the bottom of the Settings container / window
    await send('Runtime.evaluate', {
      expression: 'window.scrollTo(0, document.body.scrollHeight)'
    });
    await new Promise(r => setTimeout(r, 400));

    // Check footer element
    const footerCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const textElements = Array.from(document.querySelectorAll('*')).filter(el => el.textContent.includes('Built by Stalin'));
        return {
          found: textElements.length > 0,
          text: textElements[textElements.length - 1]?.textContent?.trim()
        };
      })()`,
      returnByValue: true
    });
    console.log('[3] Footer detection result:', footerCheck.result?.value);

    // Capture Mobile viewport (390 x 844)
    console.log('[4] Emulating mobile viewport (390 x 844)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: 'window.scrollTo(0, document.body.scrollHeight)'
    });
    await new Promise(r => setTimeout(r, 400));
    const mobileScreenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_settings_mobile_footer.png', Buffer.from(mobileScreenshot.data, 'base64'));
    console.log('Saved screenshot_settings_mobile_footer.png');

    // Capture Desktop viewport (1280 x 800)
    console.log('[5] Emulating desktop viewport (1280 x 800)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });
    await send('Runtime.evaluate', {
      expression: 'window.scrollTo(0, document.body.scrollHeight)'
    });
    await new Promise(r => setTimeout(r, 400));
    const desktopScreenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_settings_desktop_footer.png', Buffer.from(desktopScreenshot.data, 'base64'));
    console.log('Saved screenshot_settings_desktop_footer.png');

    ws.close();
    process.exit(0);
  };
}

verifyFooter();
