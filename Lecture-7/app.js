// create a server
const http = require("http");

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method)
});

const port = 3000;
server.listen(port, () => {
  console.log("server started at " + port);
});