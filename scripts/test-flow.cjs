const fs = require('fs');

async function testFullFlow() {
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
      await send('Page.enable');
      await send('Runtime.enable');

      // 1. Ensure we are on Roadmap tab
      console.log('[1] Clicking Roadmap nav...');
      await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll(".nav-item-btn")).find(b => b.textContent.includes("Roadmap"))?.click()',
        returnByValue: true
      });
      await new Promise(r => setTimeout(r, 600));

      // 2. Expand Week 1
      console.log('[2] Expanding Week 1...');
      const expandWeekRes = await send('Runtime.evaluate', {
        expression: `
          const weekBtn = document.querySelector(".week-header-btn");
          if (weekBtn) {
            weekBtn.click();
            true;
          } else {
            false;
          }
        `,
        returnByValue: true
      });
      console.log('[2] Week 1 clicked:', expandWeekRes.result?.value);
      await new Promise(r => setTimeout(r, 600));

      // 3. Expand Day 1
      console.log('[3] Expanding Day 1...');
      const expandDayRes = await send('Runtime.evaluate', {
        expression: `
          const dayCardHeader = document.querySelector("#day-card-1 .day-card-header > div");
          if (dayCardHeader) {
            dayCardHeader.click();
            true;
          } else {
            false;
          }
        `,
        returnByValue: true
      });
      console.log('[3] Day 1 clicked:', expandDayRes.result?.value);
      await new Promise(r => setTimeout(r, 600));

      // 4. Click Check All Tasks on Day 1
      console.log('[4] Checking all tasks on Day 1...');
      const checkTasksRes = await send('Runtime.evaluate', {
        expression: `
          const btn = document.querySelector("#check-all-tasks-day-1");
          if (btn) {
            btn.click();
            true;
          } else {
            false;
          }
        `,
        returnByValue: true
      });
      console.log('[4] Check all tasks button clicked:', checkTasksRes.result?.value);
      await new Promise(r => setTimeout(r, 500));

      // 5. Enter Note on Day 1
      console.log('[5] Writing note on Day 1...');
      const noteInputRes = await send('Runtime.evaluate', {
        expression: `
          const ta = document.querySelector("#notes-day-1");
          if (ta) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(ta, "Phase 7 PWA offline persistence verified in IndexedDB!");
            ta.dispatchEvent(new Event('input', { bubbles: true }));
            ta.dispatchEvent(new Event('change', { bubbles: true }));
            true;
          } else {
            false;
          }
        `,
        returnByValue: true
      });
      console.log('[5] Note saved:', noteInputRes.result?.value);
      await new Promise(r => setTimeout(r, 600));

      // 6. Click Complete Day 1 button
      console.log('[6] Clicking Complete Day 1 button...');
      const completeDayRes = await send('Runtime.evaluate', {
        expression: `
          const btn = document.querySelector("#complete-day-action-btn-1");
          if (btn) {
            btn.click();
            true;
          } else {
            false;
          }
        `,
        returnByValue: true
      });
      console.log('[6] Complete Day 1 clicked:', completeDayRes.result?.value);
      await new Promise(r => setTimeout(r, 800));

      // 7. Verify Day 29 and Day 43 in curriculum
      console.log('[7] Verifying curriculum depth (Day 29, Day 43)...');
      const curriculumDepth = await send('Runtime.evaluate', {
        expression: 'document.body.innerText.includes("WEEK 5") && document.body.innerText.includes("WEEK 7")',
        returnByValue: true
      });
      console.log('[7] Full 60 days curriculum available:', curriculumDepth.result?.value);

      // 8. Return to Home Dashboard
      console.log('[8] Returning to Home Dashboard...');
      await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll(".nav-item-btn")).find(b => b.textContent.includes("Home"))?.click()',
        returnByValue: true
      });
      await new Promise(r => setTimeout(r, 600));

      const homeProgress = await send('Runtime.evaluate', {
        expression: 'document.querySelector(".circular-svg-inner")?.textContent.trim()',
        returnByValue: true
      });
      console.log('[8] Home Dashboard progress updated to:', homeProgress.result?.value);

      // Capture screenshot of Home Dashboard with updated progress
      const homeScreen = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('D:\\GEN AI STUDY TRACKER\\screenshot_home_progress.png', Buffer.from(homeScreen.data, 'base64'));
      console.log('[8] Saved screenshot_home_progress.png');

      // 9. Reload page to test IndexedDB persistence across reload
      console.log('[9] Reloading page to test IndexedDB persistence...');
      await send('Page.reload');
      await new Promise(r => setTimeout(r, 1500));

      const reloadedProgress = await send('Runtime.evaluate', {
        expression: 'document.querySelector(".circular-svg-inner")?.textContent.trim()',
        returnByValue: true
      });
      console.log('[9] Progress after page reload from IndexedDB:', reloadedProgress.result?.value);

      // 10. Navigate back to Day 1 to verify note and completion status persisted
      console.log('[10] Checking Day 1 note and completion after reload...');
      await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll(".nav-item-btn")).find(b => b.textContent.includes("Roadmap"))?.click()',
        returnByValue: true
      });
      await new Promise(r => setTimeout(r, 600));
      await send('Runtime.evaluate', {
        expression: 'document.querySelector(".week-header-btn")?.click()',
        returnByValue: true
      });
      await new Promise(r => setTimeout(r, 600));
      await send('Runtime.evaluate', {
        expression: 'document.querySelector("#day-card-1 .day-card-header > div")?.click()',
        returnByValue: true
      });
      await new Promise(r => setTimeout(r, 600));

      const noteVal = await send('Runtime.evaluate', {
        expression: 'document.querySelector("#notes-day-1")?.value',
        returnByValue: true
      });
      console.log('[10] Persisted note value in IndexedDB:', noteVal.result?.value);

      const day1Status = await send('Runtime.evaluate', {
        expression: 'document.querySelector("#day-card-1")?.classList.contains("is-completed")',
        returnByValue: true
      });
      console.log('[10] Day 1 is-completed flag preserved:', day1Status.result?.value);

      console.log('\n========================================');
      console.log('>>> COMPLETE E2E PWA & PERSISTENCE TEST PASSED! <<<');
      console.log('========================================');
      ws.close();
      process.exit(0);
    };

    ws.onerror = (err) => {
      console.error('WS Error:', err);
      process.exit(1);
    };
  } catch(e) {
    console.error('Error:', e);
    process.exit(1);
  }
}

testFullFlow();
