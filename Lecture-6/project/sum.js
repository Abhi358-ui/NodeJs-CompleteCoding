const sumResult = (req, res) => {
  const body = [];
  let sum2;
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();

    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    sum2 =
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
    <h1 style="margin: 10px">Sum is ${sum2}</h1>
    <a href="/calculator">go to calculator</a>
  </body>
</html>`);
    return res.end();
  });
};

module.exports = sumResult;
