const Favorite = require("../models/favouriteModel");
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

exports.getFavrateList = (req, res, next) => {
  Favorite.getFavorite(favourite => {
    console.log(favourite,"fav");
    Home.getHomes(homes => {
      console.log(homes,"home ha");
      const favouriteHomes = homes.filter((home)=> {
        return favourite.includes(home.id)
      });
      console.log(favouriteHomes,'hhh');
      res.render("store/favrat-list",{registerHome:favouriteHomes});

    })
  })
};

exports.postAddToFavorite = (req, res, next) => {
  console.log("came from the favorite", req.body);
  Favorite.addToFavorite(req.body.id, (err) => {
    if (err) {
      console.log("error while marking the favorite");
    }
    res.redirect("/favourite");
  });
};

exports.getHostHome = (req, res, next) => {
  Home.getHomes((registerHome) => {
    res.render("host/host-home", { registerHome: registerHome });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/homes");
    }
    res.render("store/home-detail", { house: home });
  });
};
