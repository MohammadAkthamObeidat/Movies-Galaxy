const user = require("../models/User");
const express = require("express");


// USER FUNCTIONS ****************************************************************************


// Get one user.
exports.getUser = (req, res) => {
  user.getUser(req.body, result => {
    console.log('RESULT FROM LOGIN RESPONSE: ', result);
    //res.json(result);
  });
};

// Add new user to database.
exports.addUser = (req, res) => {
  user.addUser(req.body, result => {
    console.log('RESULT FROM SIGN UP RESPONSE: ', result);
    //res.json(result);
  });
};


// MOVIES FUNCTIONS ****************************************************************************


// Add new movie to watch list.
exports.addMovieToWatchList = (userID, req, res) => {
  user.addMovieToWatchList(userID, req.body, result => {
    console.log('RESULT FROM WATCH LIST RESPONSE: ', result);
    //res.json(result);
  });
};

// Delete movie from watch list.
exports.deleteMovieFromWatchList = (userID, movieID, req, res => {
  user.deleteMovieFromWatchList(userID, movieID, result => {
    console.log('RESULT FROM DELETE MOVIE WATCH LIST RESPONSE : ', result);
    //res.json(result);
  })
})

// Add new movie to watched list.
exports.addMovieToWatchedList = (userID, req, res) => {
  user.addMovieToWatchedList(userID, req.body, result => {
    console.log('RESULT FROM WATCHED LIST RESPONSE: ', result);
    //res.json(result);
  });
};

// Delete movie from watched list.
exports.deleteMovieFromWatchedList = (userID, movieID, req, res => {
  user.deleteMovieFromWatchedList = (userID, movieID, result => {
    console.log('RESPONSE FROM DELETE MOVIE WATCHED LIST: ', object);
    res.json(result);
  })
})


// TV SHOWS FUNCTIONS ****************************************************************************


// Add new show to watch list.
exports.addShowToWatchList = (userID, req, res) => {
  user.addShowToWatchList(userID, req.body, result => {
    console.log('RESULT FORM ADD SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Delete show from watch list.
exports.deleteShowFromWatchList = (userID, showID, req, res) => {
  user.deleteShowFromWatchList(userID, showID, result => {
    console.log('RESULT FORM DELETE SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Add new show to watched list.
exports.addShowToWatchedList = (userID, req, res) => {
  user.addShowToWatchedList(userID, req.body, result => {
    console.log('RESULT FORM DELETE SHOW WATCHED LIST: ', result);
    //res.json(result);
  })
}

// Delete show from watched list.
exports.deleteShowFromWatchedList = (userID, showID, req, res) => {
  user.deleteShowFromWatchedList(userID, showID, result => {
    console.log('RESULT FORM DELETE SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}