const http = require('http');

const PORT = process.env.PORT || 3000;  // خذ المنفذ من البيئة أو 3000 بشكل افتراضي

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Render!\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
