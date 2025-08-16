// create a server

const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.method, req.url, req.headers);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Hello </title> </head>");
    res.write("<body> <h1> Enter your details </h2> ");
    res.write('<form action="/submit-details" method="POST" >')
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input name="gender" id="male" type="radio" value="male" />')
    res.write('<label for="female">female </label>');
    res.write('<input name="gender" id="female" type="radio" value="female" /><br><br>')
    res.write('<input type="submit" value="Submit" />')
    res.write('</form>')
    res.write('</body>')
    res.write("</html>");
    return res.end();
  }
  else if(req.url.toLowerCase() == '/submit-details' && req.method == 'POST'){
    fs.writeFileSync('user-data.txt',"abhishek kumar roy");
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Hello </title> </head>");
  res.write("<body>404 page not found </body>");
  res.write("</html>");
  res.end();
});

const port = 3000;
server.listen(3000, () => {
  console.log("server started at " + port);
});
