// create a server

// external module
const express = require('express');

// locale module
const requestHandler = require("./user");

const app = express(); // express is a function 

// adding middleware 
app.use("/",(req, res, next) =>{
  console.log("i am first middleware", req.url, req.method );
  res.send("<p>hello from server ha</p>")
  next();
})

app.use("/submit-details",(req, res, next) =>{
  console.log("i am second middleware", req.url, req.method );
})





const port = 3000;
app.listen(port, () => {
  console.log("server started at " + port);
});