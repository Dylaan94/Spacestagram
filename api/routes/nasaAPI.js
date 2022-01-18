let express = require("express");
let router = express.Router();
let axios = require("axios");
require("dotenv").config();

// to create unique ids
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

// need to add error handling
// needs to be post for axios
router.post("/", (req, res, next) => {
  // call from NASA api and create an object based off data
  // API key hidden for security purposes

  console.log(req.body)

  //res.send(req)
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=" +
        process.env.NASA_API_KEY +
        ""
    )
    .then((response) => {
      let dataArray = [{
        title: response.data.title,
        date: response.data.date,
        explanation: response.data.explanation,
        copyright: response.data.copyright,
        imageURL: response.data.url,
        dataAccessed: "",
        id: uuidv4(), // create unique id
        liked: false // initialised to false
      }];
      //res.send(dataArray);
    });
});


module.exports = router;
