// import WebSocket from 'ws'
import io from 'socket.io-client';

export function testConnection(address) {
  const ws = io.connect(address);
  ws.on('connect', () => {
    ws.emit('test connection', { data: 'TEST CONNECTION' });
    ws.on('test ack', (msg) => {
      console.log(msg);
    });
  });
  return ws;
}

export function discover(address, tfx, query) {
  return new Promise((resolve, reject) => {
    let ws = io.connect(address);
    ws.on('connect', () => {
      ws.emit('discover request', { tfx: JSON.stringify(tfx), query: query });
      ws.on('discover response', (msg) => {
        resolve(msg);
      });
    });
  });
}