const express = require('express');
const path = require('path');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome')
});

const registerHome = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body)
  registerHome.push(req.body)
  res.render('successMess')
});

module.exports={hostRouter,registerHome};