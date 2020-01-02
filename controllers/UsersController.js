const user = require("../models/User");
const express = require("express");
const router = express.Router();


exports.getUser = (req, res) => {
  user.getUser(req.body, result => {
    console.log('RESULT FROM LOGIN RESPONSE: ', result);
    //res.json(result);
  });
};
// ***********************************************************************************************************************
// @METHOD POST
// Add new user.
router.post("/sign-up", (req, res) => {
  user.addUser(req.body, result => {
    console.log('RESULT FROM SIGN UP RESPONSE: ', result);
    //res.json(result);
  });
});
// ***********************************************************************************************************************
// @METHOD PUT
// Add new movie to watch list.
router.put("/add-to-watch-list", (req, res) => {
  user.addToWatchList(req.body, result => {
    console.log('RESULT FROM WATCH LIST RESPONSE: ', result);
    //res.json(result);
  });
});
// ***********************************************************************************************************************
// @METHOD PUT
// Add new movie to watched list.
router.put("/add-to-watched-list", (req, res) => {
  user.addToWatchedList(req.body, result => {
    console.log('RESULT FROM WATCHED LIST RESPONSE: ', result);
    //res.json(result);
  });
});

module.exports = router