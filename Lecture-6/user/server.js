// create a server
const http = require("http");
const requestHandler = require("./user");

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () => {
  console.log("server started at " + port);
});