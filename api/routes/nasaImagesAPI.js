let express = require("express");
let router = express.Router();
let axios = require("axios");
require("dotenv").config();

// to create unique ids
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

// need to add error handling
router.post("/", (req, res, next) => {
  // call from Images API
  // API key hidden for security purposes
  const searchReq = req.body.keywordSearch
  const num = req.body.nasaImagesNum

  axios
    .get(
      "https://images-api.nasa.gov/search?q=" + searchReq + "&media_type=image"
    )
    .then((response) => {
      console.log(response.data.collection.items[0]);
      let dataArray = [];
      for (let i = 0; i < num; i++) {
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
      console.log(dataArray);

      res.send(dataArray);
      return dataArray;
    })
    .then((data) => {
      router.get("/", (req, res, next) => {
        return res.send(data);
      });
    })
    // if images dont return, return pictures of earth
    .catch((e) => {
      console.log(e);
      axios
        .get("https://images-api.nasa.gov/search?q=earth&media_type=image")
        .then((response) => {
          let dataArray = [];
          for (let i = 0; i < 3; i++) {
            let imageObject = {
              name: response.data.collection.items[i].data[0].title,
              date: response.data.collection.items[i].data[0].date_created,
              explanation:
                response.data.collection.items[i].data[0].description,
              copyright: response.data.collection.items[i].data[0].photographer,
              imageURL: response.data.collection.items[i].links[0].href,
              id: uuidv4(), // create unique id
              liked: false, // initialised to false
            };
            dataArray.push(imageObject);
          }

          return res.send(dataArray);
        });
      
    });
});

module.exports = router;

