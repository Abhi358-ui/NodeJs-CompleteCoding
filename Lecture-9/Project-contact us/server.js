const express = require("express");

const app = express();

// add middleware 1
app.use((req, res, next) => {
  console.log("this is first middleware", req.path);
  next();
});

// add middleware 2
app.use((req, res, next) => {
  console.log("i am second middleware", req.method);
  next();
});

// middleware 3
// app.use((req,res,next)=>{
//   console.log("i am third middleware")
//   res.send("<h1>hello from the server </h1>")
// })

app.get("/", (req, res, next) => {
  console.log("handling / for get", req.method, req.url);
  res.send(`<h1> Welcome server to here  </h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling /contact us page", req.method, req.url);
  res.send(
    `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <title>user details</title>
  </head>
  <body>
    <h1>Enter your details here</h1>
    <form action="/contact-us" method="post">
      <label for="name">Name :</label>
      <input type="text" name="name" id="name" placeholder="Enter your name" />
      <br /><br />
      <label for="email">Email :</label>
      <input type="email" name="email" , id="email" placeholder="Enter your email" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
    
    `
  );
});

// form submitting response
app.post('/contact-us',(req,res,next)=>{
  console.log("post for submit form", req.method,req.url);
  res.send("<h1> form subbmting successfully</h1>")
})

const port = 3000;
app.listen(port, () => {
  console.log("server started at ", port);
});
