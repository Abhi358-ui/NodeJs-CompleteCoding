const express = require('express');
const path = require('path');

// locale module
const rootDir = require('../utils/dirUtil')
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','home.html'))
});

module.exports=userRouter;