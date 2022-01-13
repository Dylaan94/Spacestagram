let express = require("express");
let router = express.Router();
let axios = require("axios");
require("dotenv").config();

router.get("/", (req, res, next) => {
  // res.send("API is working yessss")
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=" + process.env.NASA_API_KEY + ""
    )
    .then((response) => {
      let imageObject = {
        title: response.data.title,
        date: response.data.data,
        explanation: response.data.explanation,
        copyright: response.data.copyright,
        imageURL: response.data.url,
      };
        res.send(imageObject);
    });
});

module.exports = router;
