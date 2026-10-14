const http = require('http');

async function checkRemoteInstallability() {
  const res = await fetch('http://127.0.0.1:9222/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page');
  if (!page) {
    console.error('No page found');
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
    
    console.log('Navigating to https://genai-60-day-tracker.web.app ...');
    await send('Page.navigate', { url: 'https://genai-60-day-tracker.web.app/' });
    await new Promise(r => setTimeout(r, 4000));

    const manifestResult = await send('Page.getAppManifest');
    console.log('=== REMOTE MANIFEST RESULT ===');
    console.log('Manifest URL:', manifestResult?.url);
    console.log('Errors:', manifestResult?.errors);

    const installErrors = await send('Page.getInstallabilityErrors');
    console.log('=== REMOTE INSTALLABILITY ERRORS ===');
    console.log(JSON.stringify(installErrors, null, 2));

    const swCheck = await send('Runtime.evaluate', {
      expression: `navigator.serviceWorker.getRegistration().then(r => ({
        scope: r?.scope,
        active: !!r?.active,
        waiting: !!r?.waiting,
        installing: !!r?.installing
      }))`,
      awaitPromise: true,
      returnByValue: true
    });
    console.log('=== SW REGISTRATION ON REMOTE ===');
    console.log(swCheck.result?.value);

    ws.close();
    process.exit(0);
  };
}

checkRemoteInstallability();
