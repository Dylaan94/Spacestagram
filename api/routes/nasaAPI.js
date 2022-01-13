let express = require("express");
let router = express.Router();
let axios = require("axios");
require("dotenv").config();

// to create unique ids
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

router.get("/", (req, res, next) => {
  // call from NASA api and create an object based off data
  // API key hidden for security purposes
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=" +
        process.env.NASA_API_KEY +
        ""
    )
    .then((response) => {
      let imageObject = {
        title: response.data.title,
        date: response.data.date,
        explanation: response.data.explanation,
        copyright: response.data.copyright,
        imageURL: response.data.url,
        dataAccessed: "",
        id: uuidv4()
      };
      res.send(imageObject);
    });
});

module.exports = router;
