async function check() {
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
    await send('Runtime.enable');
    // Click Roadmap
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('.nav-item-btn')).find(b => b.textContent.includes('Roadmap'));
        if (btn) btn.click();
      })()`
    });
    // Wait for render
    await new Promise(r => setTimeout(r, 600));

    const r = await send('Runtime.evaluate', {
      expression: `(() => {
        return {
          hasDayCard1: !!document.querySelector('#day-card-1'),
          week1Open: !!document.querySelector('.days-list'),
          dayCardsCount: document.querySelectorAll('.day-card').length
        };
      })()`,
      returnByValue: true
    });
    console.log('Result after 600ms:', r.result?.value);
    ws.close();
  };
}
check();
