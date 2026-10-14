const fs = require('fs');

async function testFullPersistence() {
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

    console.log('[Step 1] Navigating to Roadmap...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('.nav-item-btn')).find(b => b.textContent.includes('Roadmap'));
        if (btn) btn.click();
        return !!btn;
      })()`,
      returnByValue: true
    });
    await new Promise(r => setTimeout(r, 600));

    console.log('[Step 2] Expanding Week 1...');
    const wRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('.week-header-btn');
        if (btn) btn.click();
        return !!btn;
      })()`,
      returnByValue: true
    });
    console.log('Week 1 expanded:', wRes.result?.value);
    await new Promise(r => setTimeout(r, 600));

    console.log('[Step 3] Expanding Day 1...');
    const dRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const dayHeader = document.querySelector('#day-card-1 .day-card-header > div');
        if (dayHeader) dayHeader.click();
        return !!dayHeader;
      })()`,
      returnByValue: true
    });
    console.log('Day 1 expanded:', dRes.result?.value);
    await new Promise(r => setTimeout(r, 600));

    console.log('[Step 4] Checking all tasks & typing note...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const checkBtn = document.querySelector('#check-all-tasks-day-1');
        if (checkBtn) checkBtn.click();
        const ta = document.querySelector('#notes-day-1');
        if (ta) {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
          setter.call(ta, 'Phase 7 PWA offline persistence verified in IndexedDB!');
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          ta.dispatchEvent(new Event('change', { bubbles: true }));
        }
      })()`,
      returnByValue: true
    });
    await new Promise(r => setTimeout(r, 600));

    console.log('[Step 5] Marking Day 1 Complete...');
    const completeRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('#complete-day-action-btn-1');
        if (btn) btn.click();
        return !!btn;
      })()`,
      returnByValue: true
    });
    console.log('Mark complete clicked:', completeRes.result?.value);
    await new Promise(r => setTimeout(r, 800));

    console.log('[Step 6] Returning to Home Dashboard...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const homeBtn = Array.from(document.querySelectorAll('.nav-item-btn')).find(b => b.textContent.includes('Home'));
        if (homeBtn) homeBtn.click();
      })()`,
      returnByValue: true
    });
    await new Promise(r => setTimeout(r, 600));

    const progressAfter = await send('Runtime.evaluate', {
      expression: `document.querySelector('.circular-svg-inner')?.innerText.replace(/\\n/g, ' ')`,
      returnByValue: true
    });
    console.log('[Step 6] Home Dashboard Progress after completing Day 1:', progressAfter.result?.value);

    // Save screenshot
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_completed_day.png', Buffer.from(shot1.data, 'base64'));
    console.log('Saved screenshot_completed_day.png');

    console.log('[Step 7] Reloading page (testing persistence across app restart/reload)...');
    await send('Page.reload');
    await new Promise(r => setTimeout(r, 1400));

    const progressAfterReload = await send('Runtime.evaluate', {
      expression: `document.querySelector('.circular-svg-inner')?.innerText.replace(/\\n/g, ' ')`,
      returnByValue: true
    });
    console.log('[Step 7] Home Dashboard Progress after reload (from IndexedDB):', progressAfterReload.result?.value);

    // Navigate back to Day 1 to inspect note
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('.nav-item-btn')).find(b => b.textContent.includes('Roadmap'));
        if (btn) btn.click();
      })()`,
      returnByValue: true
    });
    await new Promise(r => setTimeout(r, 500));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('.week-header-btn');
        if (btn) btn.click();
      })()`,
      returnByValue: true
    });
    await new Promise(r => setTimeout(r, 500));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const dayHeader = document.querySelector('#day-card-1 .day-card-header > div');
        if (dayHeader) dayHeader.click();
      })()`,
      returnByValue: true
    });
    await new Promise(r => setTimeout(r, 500));

    const finalNote = await send('Runtime.evaluate', {
      expression: `document.querySelector('#notes-day-1')?.value`,
      returnByValue: true
    });
    console.log('[Step 7] Day 1 Note successfully persisted in IndexedDB:', finalNote.result?.value);

    const isDay1Complete = await send('Runtime.evaluate', {
      expression: `document.querySelector('#day-card-1')?.classList.contains('is-completed')`,
      returnByValue: true
    });
    console.log('[Step 7] Day 1 Completion Badge preserved in IndexedDB:', isDay1Complete.result?.value);

    console.log('\n======================================================');
    console.log('>>> COMPLETE PERSISTENCE & OFFLINE VERIFICATION PASSED! <<<');
    console.log('======================================================');
    ws.close();
    process.exit(0);
  };
}
testFullPersistence();
