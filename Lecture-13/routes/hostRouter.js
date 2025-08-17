const express = require("express");
const path = require("path");
const { getAddHome, postAddHome, getHostHome } = require("../controllers/homes");
const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);

hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home", getHostHome);

module.exports = { hostRouter };
