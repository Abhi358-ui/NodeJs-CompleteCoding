const sumResult = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();

    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    const sum =
      parseInt(Object.values(bodyObject)[0]) +
      parseInt(Object.values(bodyObject)[1]);

    res.setHeader("Content-type", "text/html");
    res.write(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1 style="margin: 10px">Sum is ${sum}</h1>
    <a href="/calculator">go to calculator</a>
  </body>
</html>`);
    return res.end();
  });
};


module.exports = sumResult;