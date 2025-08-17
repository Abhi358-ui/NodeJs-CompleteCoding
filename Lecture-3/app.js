// create a server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Hello </title> </head>");
    res.write("<body> Hii this is the first page </body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/product") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Hello </title> </head>");
    res.write("<body> This is a product page </body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Hello </title> </head>");
  res.write("<body>404 page not found </body>");
  res.write("</html>");
  res.end();

  // if(req.url == '/'){
  //   res.end("hello");
  //   process.exit(); // for stop event loop
  // }
});

const port = 3000;
server.listen(3000, () => {
  console.log("server started at " + port);
});
