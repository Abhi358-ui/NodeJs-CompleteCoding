// external module
const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/dirUtil");
const port = 3001;
const app = express();

// middleware for parsing the form data
app.use(express.urlencoded());

// user middleware
app.use(userRouter);

// host middleware
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

// page not found middleware and order of middleware is very important
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(port, () => {
  console.log("server started at " + port);
});
