const sumResult = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url == "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1 style="margin: 10px">Welcome to calculator page</h1>
    <a href="/calculator">Calculator</a>
  </body>
</html>`);
    return res.end();
  } else if (req.url.toLowerCase() == "/calculator") {
    res.setHeader("Content-type", "text/html");
    res.write(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Enter two numbers :</h1>

    <form action="/calculate-result" method="post">
      <label for="num1">Enter first number </label>
      <input type="number" name="num1" id="num1" />
      <br /><br />
      <label for="num2">Enter second number </label>
      <input type="number" name="num2" id="num2" />
      <br /><br />
      <button type="submit">Add</button>
    </form>
    <a href='/' > go to home </a>
  </body>
</html>  `);
    return res.end();
  } else if (
    req.url.toLowerCase() == "/calculate-result" &&
    req.method == "POST"
  ) {
   return sumResult(req,res);
  }

  res.setHeader("Content-type", "text/html");
  res.write(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1 style="margin: 10px">404 page not found</h1>
    <a href="/">go to home</a>
  </body>
</html>`);
  return res.end();
};

module.exports = requestHandler;
