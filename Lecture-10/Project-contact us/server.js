const express = require("express");
const router = require("./routes/userRouter");
const rootdir = require('./utils/path')
const path = require('path');

const app = express();
app.use(express.urlencoded()); // middleware for parse the body

app.use(router);

app.use((req,res,next)=>{
res.sendFile(path.join(rootdir,'views','404.html'))
})

const port = 3000;
app.listen(port, () => {
  console.log("server started at ", port);
});
