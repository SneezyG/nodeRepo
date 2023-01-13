
// my first node server.

const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("Hi, my name is Ahmad");
}).listen(8080);