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
    const r = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.getElementById('week-section-1');
        return {
          hasSec1: !!sec,
          firstElemClass: sec?.firstElementChild?.className,
          firstElemTag: sec?.firstElementChild?.tagName
        };
      })()`,
      returnByValue: true
    });
    console.log('Result:', r.result?.value);
    ws.close();
  };
}
check();
