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
  const num = req.body.APODNum; // number of photos requested

  console.log(num);
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=" +
        process.env.NASA_API_KEY +
        "&count=" +
        num +
        "&thumbs=true"
    )
    .then((response) => {
      let dataArray = [];
      for (let i = 0; i < num; i++) {
        let imageObject = {
          title: response.data[i].title,
          date: response.data[i].date,
          explanation: response.data[i].explanation,
          copyright: response.data[i].copyright,
          imageURL: response.data[i].url,
          dataAccessed: "",
          id: uuidv4(), // create unique id
          liked: false, // initialised to false
        };
        dataArray.push(imageObject);
      }


      res.send(dataArray)
      return dataArray
    }).then((data) => {
      router.get("/", (req, res, next) => {
        res.send(data)
      })
    });
});

module.exports = router;
