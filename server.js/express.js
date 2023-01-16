
// using thr express framework.

const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const app = express()

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("Hi, my name is Ahmad");
});

const server = app.listen(8080, function() {
  
});