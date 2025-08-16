const fs = require("fs");
const path = require("path");
const dirUtil = require("../utils/dirUtil");


module.exports = class Home {
  constructor(houseName, price, location, ratting, image) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.ratting = ratting;
    this.image = image;
    this.id= Math.random().toString();
  }

  save() {
    const filePath = path.join(dirUtil, "data", "homesData.json");

    // Read existing data first
    fs.readFile(filePath, "utf8", (err, data) => {
      let homes = [];

      // If file exists and has valid data
      if (!err && data.trim() !== "") {
        try {
          homes = JSON.parse(data);
        } catch (e) {
          console.error("JSON parse error while saving:", e.message);
        }
      }

      homes.push(this);

      fs.writeFile(filePath, JSON.stringify(homes, null, 2), (err) => {
        if (err) {
          console.error("Error writing file:", err.message);
        }
      });
    });
  }

  

  static getHomes(callback) {
    const filePath = path.join(dirUtil, "data", "homesData.json");
    const fileContent = fs.readFile(filePath, "utf8", (err, data) => {
      try {
        const homes = JSON.parse(data);
        callback(homes);
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr.message);
        callback([]);
      }
    });
  }

  static findById(homeId, callback)  {
    this.getHomes(homes => {
      const homeFound = homes.find(home => home.id === homeId);
      callback(homeFound);
    })
  }
};
