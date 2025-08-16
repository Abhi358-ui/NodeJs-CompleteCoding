// external module
const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/dirUtil");
const { getError } = require("./controllers/errors");
const port = 8001;
const app = express();

// set the template engine
app.set("view engine", "ejs");
app.set("views", "views");

// middleware for parsing the form data
app.use(express.urlencoded());

// user middleware
app.use(userRouter);

// host middleware
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

// page not found middleware and order of middleware is very important
app.use(getError);

app.listen(port, () => {
  console.log("server started at " + port);
});
