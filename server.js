exports.run = function(data) {
  var http = require('http');
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  }).listen(1337, 'localhost');
  console.log('Server running at http://localhost:1337/');
}
