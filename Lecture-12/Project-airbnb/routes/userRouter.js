const express = require('express');
const path = require('path');

// locale module
const { registerHome } = require('./hostRouter');
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registerHome)
  res.render('home',{registerHome:registerHome});
});

module.exports=userRouter;