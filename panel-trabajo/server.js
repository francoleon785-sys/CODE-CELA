const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2' };

const root = process.cwd();

const server = http.createServer((req, res) => {
  let filePath = path.join(root, req.url === '/' ? 'index.html' : req.url);
  if (!path.extname(filePath)) filePath += '/index.html';
  const ext = path.extname(filePath);
  const type = MIME[ext] || 'text/plain';
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404, {'Content-Type': 'text/plain'}); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': type});
    res.end(data);
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
