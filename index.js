const http = require('node:http');

let counter = 0;
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { pathname, searchParams } = new URL(req.url, 'http://localhost');

  if (pathname === '/reverse') {
    const text = searchParams.get('text');
    if (text === null) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing text query parameter' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(Array.from(text).reverse().join('')));
    return;
  }

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
