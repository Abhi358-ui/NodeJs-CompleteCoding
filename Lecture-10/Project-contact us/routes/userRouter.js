const express = require("express");
const path = require("path");
const rootdir = require("../utils/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "home.html"));
});

router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "forms.html"));
});

// form submitting response
router.post("/contact-us", (req, res, next) => {
  console.log(req.body)
  res.sendFile(path.join(rootdir, "views", "success.html"));
});

module.exports = router;
