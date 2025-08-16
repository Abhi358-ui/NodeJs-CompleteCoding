const Home = require("../models/homeMModel");

// show all the home
exports.getAddHome = (req, res, next) => {
  res.render("host/addHome");
};

// save the house registered by the users
exports.postAddHome = (req, res, next) => {
  const home = new Home(
    req.body.houseName,
    req.body.price,
    req.body.location,
    req.body.ratting,
    req.body.image
  );
  home.save();
  console.log(req.body);
  res.render("host/successMess");
};

exports.getHomes = (req, res, next) => {
  Home.getHomes((registerHome) => {
    console.log(registerHome);
    res.render("store/home", { registerHome: registerHome });
  });
};

exports.getIndex = (req, res, next) => {
  Home.getHomes((registerHome) => {
    console.log(registerHome);
    res.render("store/index", { registerHome: registerHome });
  });
};

exports.getBooking = (req, res, next) => {
  res.render("store/booking");
};

exports.getFavrateList = (req,res,next) => {
  res.render("store/favrat-list")
}


exports.getHostHome = (req, res, next) => {
  Home.getHomes((registerHome) => {
    res.render("host/host-home", { registerHome: registerHome });
  });
};