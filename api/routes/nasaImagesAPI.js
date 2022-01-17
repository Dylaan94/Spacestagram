let express = require("express");
let router = express.Router();
let axios = require("axios");
require("dotenv").config();

// to create unique ids
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

// need to add error handling
router.get("/", (req, res, next) => {
  // call from Images API
  // API key hidden for security purposes
  axios
    .get(
      "https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image"
    )
    .then((response) => {
    //  res.send(response.data);
      let dataArray = [];
      // limited to 3 images
      for (let i = 0; i < 3; i++) {
        let imageObject = {
          name: response.data.collection.items[i].data[0].title,
          date: response.data.collection.items[i].data[0].date_created,
          explanation: response.data.collection.items[i].data[0].description,
          copyright: response.data.collection.items[i].data[0].photographer,
          imageURL: response.data.collection.items[i].links[0].href,
          id: uuidv4(), // create unique id
          liked: false, // initialised to false
        };
        dataArray.push(imageObject);
      }

      res.send(dataArray);
    });
});

module.exports = router;

//https://images.nasa.gov/search-results?q=apollo%20x&page=1&media=image&yearStart=1920&yearEnd=2022
