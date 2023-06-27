const http = require('http');
const fs = require('fs');

function processReq(req, resp) {
  fs.readFile("Welcome.html", (err, data) => {
    if (err) {
      console.log("some error found");
    }

    let str = data.toString();

    resp.writeHead(200, {
      'Content-Length': str.length,
      'Content-Type': 'text/html'
    });

  
    resp.end(str);
  });
}

let  server = http.createServer(processReq);

server.listen(3000);

console.log("server is running on http://localhost:3000")
