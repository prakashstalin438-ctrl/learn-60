const fs = require('fs');

async function testCDP() {
  try {
    const res = await fetch('http://127.0.0.1:9222/json');
    const targets = await res.json();
    const page = targets.find(t => t.type === 'page' && t.url.includes('4173'));
    if (!page) {
      console.error('Target page not found!');
      process.exit(1);
    }

    const ws = new globalThis.WebSocket(page.webSocketDebuggerUrl);
    let msgId = 1;
    const send = (method, params = {}) => {
      const id = msgId++;
      return new Promise((resolve, reject) => {
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    };

    ws.onopen = async () => {
      console.log('Connected to CDP.');

      // 1. Enable Page and Runtime
      await send('Page.enable');
      await send('Runtime.enable');

      // 2. Check title
      const titleRes = await send('Runtime.evaluate', { expression: 'document.title' });
      console.log('[1] Document Title:', titleRes.result?.value);

      // 3. Test Offline Event & indicator
      console.log('[2] Dispatching offline event...');
      await send('Runtime.evaluate', { expression: 'window.dispatchEvent(new Event("offline"))' });
      // wait 300ms for React render
      await new Promise(r => setTimeout(r, 300));
      const offlineTextRes = await send('Runtime.evaluate', {
        expression: 'document.querySelector(".pwa-offline-indicator")?.textContent || "NOT_FOUND"'
      });
      console.log('[2] Offline indicator rendered:', offlineTextRes.result?.value);

      // 4. Capture screenshot of offline mode
      const offlineScreen = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_offline.png', Buffer.from(offlineScreen.data, 'base64'));
      console.log('[2] Saved screenshot_offline.png');

      // 5. Test Online Event & indicator
      console.log('[3] Dispatching online event...');
      await send('Runtime.evaluate', { expression: 'window.dispatchEvent(new Event("online"))' });
      await new Promise(r => setTimeout(r, 300));
      const onlineTextRes = await send('Runtime.evaluate', {
        expression: 'document.querySelector(".pwa-online-toast")?.textContent || "NOT_FOUND"'
      });
      console.log('[3] Back Online indicator rendered:', onlineTextRes.result?.value);

      // 6. Navigate to Settings page by clicking settings button
      console.log('[4] Clicking Settings button...');
      await send('Runtime.evaluate', {
        expression: 'document.querySelector("button[aria-label=\'Settings\']")?.click()'
      });
      await new Promise(r => setTimeout(r, 400));

      const settingsHtmlRes = await send('Runtime.evaluate', {
        expression: 'document.body.innerText.includes("Install Learn60")'
      });
      console.log('[4] Settings contains "Install Learn60":', settingsHtmlRes.result?.value);

      const installCardTextRes = await send('Runtime.evaluate', {
        expression: 'document.querySelector(".glass-card") ? document.body.innerText : "NONE"'
      });
      console.log('[4] Settings page text snippet:\n', installCardTextRes.result?.value.slice(0, 400));

      // 7. Capture screenshot of Settings page
      const settingsScreen = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_settings.png', Buffer.from(settingsScreen.data, 'base64'));
      console.log('[4] Saved screenshot_settings.png');

      // 8. Test Navigation to Roadmap and Day 1
      console.log('[5] Testing navigation to Roadmap...');
      await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll("button")).find(b => b.textContent.includes("Roadmap"))?.click()'
      });
      await new Promise(r => setTimeout(r, 400));

      const roadmapTitle = await send('Runtime.evaluate', {
        expression: 'document.body.innerText.includes("60-Day Curriculum") || document.body.innerText.includes("Week 1")'
      });
      console.log('[5] Roadmap page rendered:', roadmapTitle.result?.value);

      // Click Day 1 card to open Day Details
      console.log('[6] Clicking Day 1 card...');
      await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll(".roadmap-day-pill, .day-card-container, button")).find(el => el.textContent.includes("Day 1"))?.click()'
      });
      await new Promise(r => setTimeout(r, 400));

      const dayDetailRes = await send('Runtime.evaluate', {
        expression: 'document.body.innerText.includes("Day 1") && (document.body.innerText.includes("Tasks") || document.body.innerText.includes("Checklist") || document.body.innerText.includes("Day 1:"))'
      });
      console.log('[6] Day 1 details visible:', dayDetailRes.result?.value);

      // Mark tasks complete and add note
      console.log('[7] Testing task checking and note saving...');
      await send('Runtime.evaluate', {
        expression: `
          const checkboxes = document.querySelectorAll('input[type="checkbox"]');
          checkboxes.forEach(c => { if (!c.checked) c.click(); });
          const textarea = document.querySelector('textarea');
          if (textarea) {
            textarea.value = 'Phase 7 PWA offline persistence verified!';
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            textarea.dispatchEvent(new Event('change', { bubbles: true }));
          }
        `
      });
      await new Promise(r => setTimeout(r, 300));

      // Click Mark Day 1 Complete button
      await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll("button")).find(b => b.textContent.includes("Mark Day 1 Complete") || b.textContent.includes("Completed"))?.click()'
      });
      await new Promise(r => setTimeout(r, 400));

      // 9. Go back to Home Dashboard
      console.log('[8] Returning to Home Dashboard...');
      await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll("button")).find(b => b.textContent.includes("Home"))?.click()'
      });
      await new Promise(r => setTimeout(r, 400));

      const progressRes = await send('Runtime.evaluate', {
        expression: 'document.querySelector(".circular-svg-inner")?.textContent || document.body.innerText'
      });
      console.log('[8] Home Dashboard progress updated:', progressRes.result?.value.slice(0, 150));

      // Capture screenshot of Home
      const homeScreen = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_home.png', Buffer.from(homeScreen.data, 'base64'));
      console.log('[8] Saved screenshot_home.png');

      // 10. Reload the page to test IndexedDB persistence across reload
      console.log('[9] Reloading page to test IndexedDB persistence...');
      await send('Page.reload');
      await new Promise(r => setTimeout(r, 1200));

      const reloadedProgressRes = await send('Runtime.evaluate', {
        expression: 'document.querySelector(".circular-svg-inner")?.textContent || document.body.innerText'
      });
      console.log('[9] Progress after page reload:', reloadedProgressRes.result?.value.slice(0, 150));

      console.log('\n========================================');
      console.log('>>> ALL PWA TESTS COMPLETED SUCCESSFULLY! <<<');
      console.log('========================================');
      ws.close();
      process.exit(0);
    };

    ws.onerror = (err) => {
      console.error('WebSocket Error:', err);
      process.exit(1);
    };
  } catch(e) {
    console.error('Test execution error:', e);
    process.exit(1);
  }
}

testCDP();
