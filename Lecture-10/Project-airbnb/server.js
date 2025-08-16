// external module
const express = require("express");
const path = require('path');
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const port = 3000;
const app = express();

// middleware for log the url and method
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// middleware for parsing the form data
app.use(express.urlencoded());

// user middleware
app.use(userRouter);

// host middleware 
app.use('/host',hostRouter);

// page not found middleware and order of middleware is very important
const rootDir = require('./utils/dirUtil')
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})



app.listen(port, () => {
  console.log("server started at " + port);
});
