const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html>Home</html>`);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html>About</html>`);
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html>Contact</html>`);
    res.end();
  } else res.end("Invalid request");
});

server.listen(1000, () => {
  console.log("Server running");
});
