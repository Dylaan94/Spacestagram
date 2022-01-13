let express = require("express")
let router = express.Router();
let axios = require("axios")



router.get("/", (req, res, next) => {
    res.send("API is working yessss")
    axios.get("https://api.nasa.gov/planetary/apod");
})

module.exports = router;

//https://api.nasa.gov/planetary/apod