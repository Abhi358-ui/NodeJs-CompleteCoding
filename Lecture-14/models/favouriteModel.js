const fs = require("fs");
const path = require("path");
const dirUtil = require("../utils/dirUtil");
const favDataPath = path.join(dirUtil, "data", "favData.json");

module.exports = class Favorite {
  static addToFavorite(id, callback) {
    let favHomes = [];
    Favorite.getFavorite((favourite) => {
      if (favourite.includes(id)) {
        callback("home already registered")
      } else {
        favourite.push(id);
        fs.writeFile(favDataPath, JSON.stringify(favourite), callback);
      }
    });
  }

  static getFavorite(callback) {
    const fileContent = fs.readFile(favDataPath, "utf8", (err, data) => {
      try {
        const homes = JSON.parse(data);
        callback(homes);
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr.message);
        callback([]);
      }
    });
  }
};
