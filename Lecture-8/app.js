// create a server
const http = require("http");
const syntaxError = require("./syntaxError");
const logical = require("./logical");


const requestHandler = require("./user");

const server = http.createServer(requestHandler);


// const server = http.createServer((req,res)=>{
//   console.log(req.url, req.method)
//   // syntaxError();
//   logical()
// });

const port = 3000;
server.listen(port, () => {
  console.log("server started at " + port);
});