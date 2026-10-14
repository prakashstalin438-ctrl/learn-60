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
    const r1 = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('.week-header-btn');
        if (btn) btn.click();
        return !!btn;
      })()`,
      returnByValue: true
    });
    console.log('Clicked week-header-btn:', r1.result?.value);
    await new Promise(r => setTimeout(r, 600));

    const r2 = await send('Runtime.evaluate', {
      expression: `(() => {
        return {
          daysListInDOM: !!document.querySelector('.days-list'),
          dayCard1InDOM: !!document.querySelector('#day-card-1'),
          day1Header: !!document.querySelector('#day-card-1 .day-card-header')
        };
      })()`,
      returnByValue: true
    });
    console.log('DOM check after click:', r2.result?.value);
    ws.close();
  };
}
check();
