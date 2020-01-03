const user = require("../models/User");
const express = require("express");


// USER FUNCTIONS ****************************************************************************


// Get one user.
getUser = (req, res) => {
  user.getUser(req.body, result => {
    console.log('RESULT FROM LOGIN RESPONSE: ', result);
    //res.json(result);
  });
};

// Add new user to database.
addUser = (req, res) => {
  user.addUser(req.body, result => {
    console.log('RESULT FROM SIGN UP RESPONSE: ', result);
    //res.json(result);
  });
};


// MOVIES FUNCTIONS ****************************************************************************


// Add new movie to watch list.
addMovieToWatchList = (req, res) => {
  let userID = req.params.userID;
  user.addMovieToWatchList(userID, req.body, result => {
    console.log('RESULT FROM WATCH LIST RESPONSE: ', result);
    //res.json(result);
  });
};

// Delete movie from watch list.
deleteMovieFromWatchList = (req, res) => {
  let userID = req.params.userID;
  let movieID = req.params.movieID;
  user.deleteMovieFromWatchList(userID, movieID, result => {
    console.log('RESULT FROM DELETE MOVIE WATCH LIST RESPONSE : ', result);
    //res.json(result);
  })
}

// Add new movie to watched list.
addMovieToWatchedList = (req, res) => {
  let userID = req.params.userID;
  user.addMovieToWatchedList(userID, req.body, result => {
    console.log('RESULT FROM WATCHED LIST RESPONSE: ', result);
    //res.json(result);
  });
};

// Delete movie from watched list.
deleteMovieFromWatchedList = (req, res) => {
  let userID = req.params.userID;
  let movieID = req.params.movieID;
  user.deleteMovieFromWatchedList = (userID, movieID, result => {
    console.log('RESPONSE FROM DELETE MOVIE WATCHED LIST: ', object);
    res.json(result);
  })
}


// TV SHOWS FUNCTIONS ****************************************************************************


// Add new show to watch list.
addShowToWatchList = (req, res) => {
  let userID = req.params.userID;
  user.addShowToWatchList(userID, req.body, result => {
    console.log('RESULT FORM ADD SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Delete show from watch list.
deleteShowFromWatchList = (req, res) => {
  let userID = req.params.userID;
  let showID = req.params.showID;
  user.deleteShowFromWatchList(userID, showID, result => {
    console.log('RESULT FORM DELETE SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Add new show to watched list.
addShowToWatchedList = (req, res) => {
  let userID = req.params.userID;
  user.addShowToWatchedList(userID, req.body, result => {
    console.log('RESULT FORM DELETE SHOW WATCHED LIST: ', result);
    //res.json(result);
  })
}

// Delete show from watched list.
deleteShowFromWatchedList = (req, res) => {
  let userID = req.params.userID;
  let showID = req.params.showID;
  user.deleteShowFromWatchedList(userID, showID, result => {
    console.log('RESULT FORM DELETE SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Exporting Methods.
module.export = {
  getUser,
  addUser,
  addMovieToWatchList,
  deleteMovieFromWatchList,
  addMovieToWatchedList,
  deleteMovieFromWatchedList,
  addShowToWatchList,
  deleteShowFromWatchList,
  addShowToWatchedList,
  deleteShowFromWatchedList,
};