const http = require('http');

// serveText('Hello World');
serveHtml('<html><body><b>Woot</b> Woot</body></html>');

function serveText(theText){
  const server = http.createServer(function (req, res) {
    console.log('text was served.')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(theText);
    res.write(', eat more lunch');
    res.end();
  });

  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

function serveHtml(theHtml){
  const server = http.createServer(function (req, res) {
    console.log('html was served.')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(theHtml);
    res.end();
  });

  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}