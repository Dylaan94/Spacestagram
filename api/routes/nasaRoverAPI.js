let express = require("express");
let router = express.Router();
let axios = require("axios");
require("dotenv").config();

// to create unique ids
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

// need to add error handling
router
  .post("/", (req, res, next) => {
    // call from Rover API and create objects
    // sol can be changed - change to create some difference
    // API key hidden for security purposes

    const roverName = req.body.nasaRoverName;
    const num = req.body.nasaRoverNum;

    // sol currently set to 1, first day on mars. Will add functionality to manually change this
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
          roverName +
          "/photos?sol=1&api_key=" +
          process.env.NASA_API_KEY +
          ""
      )
      .then((response) => {
        let dataArray = [];
        // num sets number of images to send
        for (let i = 0; i < num; i++) {
          let imageObject = {
            name: response.data.photos[i].rover.name,
            date: response.data.photos[i].earth_date,
            launchDate: response.data.photos[i].rover.launch_date,
            landingDate: response.data.photos[i].rover.landing_date,
            sol: response.data.photos[i].sol,
            cameraFull_Name: response.data.photos[i].camera.full_name,
            cameraName: response.data.photos[i].name,
            imageURL: response.data.photos[i].img_src,
            id: uuidv4(), // create unique id
            liked: false, // initialised to false
          };
          dataArray.push(imageObject);
        }
        console.log(dataArray);
        res.send(dataArray);
        return dataArray;
      })
      .then((data) => {
        router.get("/", (req, res, next) => {
          return res.send(data);
        });
      }).catch((e) => {
        console.log(e)
      });
  })
  ;

module.exports = router;

