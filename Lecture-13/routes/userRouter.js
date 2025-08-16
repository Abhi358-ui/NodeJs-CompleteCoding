const express = require("express");
const path = require("path");


// locale module 
const { getHomes,getBooking, getFavrateList, getIndex } = require("../controllers/homes");
const userRouter = express.Router();

userRouter.get("/", getIndex);
userRouter.get("/booking", getBooking);
userRouter.get("/favourite", getFavrateList);
userRouter.get("/homes", getHomes);

module.exports = userRouter;
