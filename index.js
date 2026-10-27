const http = require('node:http');

let counter = 0;
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;

  if (pathname === '/teapot') {
    counter += 1;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(counter));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found bro');
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
