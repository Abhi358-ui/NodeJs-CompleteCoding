const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Hello </title> </head>");
    res.write("<body> <h1> Enter your details </h2> ");
    res.write('<form action="/submit-details" method="POST" >');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input name="gender" id="male" type="radio" value="male" />');
    res.write('<label for="female">female </label>');
    res.write(
      '<input name="gender" id="female" type="radio" value="female" /><br><br>'
    );
    res.write('<input type="submit" value="Submit" />');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() == "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      // reading the chunks
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      // parse the chunks into query string
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);

      console.log(bodyObject);
      fs.writeFile("user-data.txt", JSON.stringify(bodyObject), (err) => {
        console.log("file created successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }else {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Hello </title> </head>");
  res.write("<body>404 page not found </body>");
  res.write("</html>");
  res.end();
  }
};

module.exports = requestHandler;
