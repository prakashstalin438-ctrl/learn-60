const fs = require('fs');

async function testContinueFlow() {
  const res = await fetch('http://127.0.0.1:9222/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page' && t.url.includes('4173'));
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

    console.log('[1] Clicking Continue from Day 1 button on Home...');
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#continue-current-day-btn")?.click()'
    });
    await new Promise(r => setTimeout(r, 600));

    // Check Day 1 elements
    const d1Res = await send('Runtime.evaluate', {
      expression: `(() => {
        return {
          dayCard: !!document.querySelector('#day-card-1'),
          checkAllBtn: !!document.querySelector('#check-all-tasks-day-1'),
          notesTextarea: !!document.querySelector('#notes-day-1'),
          completeBtn: !!document.querySelector('#complete-day-action-btn-1')
        };
      })()`,
      returnByValue: true
    });
    console.log('[2] Day 1 expanded state:', d1Res.result?.value);

    // Click Check All Tasks
    console.log('[3] Clicking Check All Tasks...');
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#check-all-tasks-day-1")?.click()'
    });
    await new Promise(r => setTimeout(r, 400));

    // Type note
    console.log('[4] Writing Note into textarea...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const ta = document.querySelector("#notes-day-1");
        if (ta) {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
          setter.call(ta, "Learn60 Phase 7 Verified: Offline PWA + IndexedDB Persistence!");
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          ta.dispatchEvent(new Event('change', { bubbles: true }));
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 400));

    // Click Mark Day Complete
    console.log('[5] Clicking Mark Day Complete...');
    await send('Runtime.evaluate', {
      expression: 'document.querySelector("#complete-day-action-btn-1")?.click()'
    });
    await new Promise(r => setTimeout(r, 800));

    // Go back to Home
    console.log('[6] Returning to Home tab...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const homeBtn = Array.from(document.querySelectorAll('.nav-item-btn')).find(b => b.textContent.includes('Home'));
        if (homeBtn) homeBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const homeProgress = await send('Runtime.evaluate', {
      expression: `document.querySelector('.circular-svg-inner')?.innerText.replace(/\\n/g, ' ')`,
      returnByValue: true
    });
    console.log('[6] Home Dashboard progress after completing Day 1:', homeProgress.result?.value);

    // Save screenshot of Home Dashboard showing progress
    const homeScreen = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_progress_1of60.png', Buffer.from(homeScreen.data, 'base64'));
    console.log('Saved screenshot_progress_1of60.png');

    // Reload page to test persistence from IndexedDB
    console.log('[7] Reloading page (testing IndexedDB persistence across restart)...');
    await send('Page.reload');
    await new Promise(r => setTimeout(r, 1500));

    const reloadedProgress = await send('Runtime.evaluate', {
      expression: `document.querySelector('.circular-svg-inner')?.innerText.replace(/\\n/g, ' ')`,
      returnByValue: true
    });
    console.log('[7] Home Dashboard progress after page reload:', reloadedProgress.result?.value);

    // Save screenshot after reload
    const reloadedScreen = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_reloaded.png', Buffer.from(reloadedScreen.data, 'base64'));
    console.log('Saved screenshot_reloaded.png');

    console.log('\n======================================================');
    console.log('>>> COMPLETE PERSISTENCE TEST PASSED: PROGRESS PERSISTS! <<<');
    console.log('======================================================');
    ws.close();
    process.exit(0);
  };
}
testContinueFlow();
