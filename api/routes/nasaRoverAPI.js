let express = require("express");
let router = express.Router();
let axios = require("axios");
require("dotenv").config();

// to create unique ids
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

// need to add error handling
router.get("/", (req, res, next) => {
  // call from Rover API and create objects
  // sol can be changed - change to create some difference
  // API key hidden for security purposes
  axios
    .get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=102&api_key=" +
        process.env.NASA_API_KEY +
        ""
    )
    .then((response) => {
      //res.send(response.data);
      let dataArray = [];
      // limited to 3 images
      for (let i = 0; i < 3; i++) {
        let imageObject = {
          name: response.data.photos[i].rover.name,
          date: response.data.photos[i].earth_date,
          sol: response.data.photos[i].sol,
          cameraFull_Name: response.data.photos[i].camera.full_name,
          cameraName: response.data.photos[i].name,
          imageURL: response.data.photos[i].img_src,
          id: uuidv4(),
        };
        dataArray.push(imageObject);
      }

      res.send(dataArray);
    });
});

module.exports = router;

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=200&camera=fhaz&api_key=
