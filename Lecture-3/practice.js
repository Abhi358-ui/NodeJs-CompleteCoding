const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>This is a home page</h1>");
    return res.end();
  } else if (req.url == "/about") {
    res.write("<h1>This is a about page</h1>");
    return res.end();
  }
  else if(req.url == "/men"){
    res.write("<h1>This is a men page</h1>");
    return res.end();
  }
  else if(req.url == "/women"){
    res.write("<h1>This is a women page</h1>");
    return res.end();
  }
  else if(req.url == "/order"){
    res.write("<h1>This is a order page</h1>");
    return res.end();
  }

  res.write(`
          <html>
          <head> <title>my page </title> </head>
          <body>
          <a href='/home' >Home</a>
          <a href='/about' >about</a>
          <a href='/men' >Men</a>
          <a href='/women' >Women</a>
          <a href='/order' >order</a>
          </body>
          </html>
          `);
  return res.end();
});

server.listen(3000, () => {
  console.log("Sercer is run on the 3000");
});
