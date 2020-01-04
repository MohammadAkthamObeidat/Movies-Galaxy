const user = require("../models/User");


// MOVIES FUNCTIONS ****************************************************************************


// Add new movie to watch list.
addMovieToWatchList = (req, res, next) => {
  let userID = req.params.userID;
  user.addMovieToWatchList(userID, req.body, result => {
    console.log('RESULT FROM WATCH LIST RESPONSE: ', result);
    //res.json(result);
  });
};

// Delete movie from watch list.
deleteMovieFromWatchList = (req, res, next) => {
  let userID = req.params.userID;
  let movieID = req.params.movieID;
  user.deleteMovieFromWatchList(userID, movieID, result => {
    console.log('RESULT FROM DELETE MOVIE WATCH LIST RESPONSE : ', result);
    //res.json(result);
  })
}

// Add new movie to watched list.
addMovieToWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  user.addMovieToWatchedList(userID, req.body, result => {
    console.log('RESULT FROM WATCHED LIST RESPONSE: ', result);
    //res.json(result);
  });
};

// Delete movie from watched list.
deleteMovieFromWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  let movieID = req.params.movieID;
  user.deleteMovieFromWatchedList = (userID, movieID, result => {
    console.log('RESPONSE FROM DELETE MOVIE WATCHED LIST: ', object);
    res.json(result);
  })
}


// TV SHOWS FUNCTIONS ****************************************************************************


// Add new show to watch list.
addShowToWatchList = (req, res, next) => {
  let userID = req.params.userID;
  user.addShowToWatchList(userID, req.body, result => {
    console.log('RESULT FORM ADD SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Delete show from watch list.
deleteShowFromWatchList = (req, res, next) => {
  let userID = req.params.userID;
  let showID = req.params.showID;
  user.deleteShowFromWatchList(userID, showID, result => {
    console.log('RESULT FORM DELETE SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Add new show to watched list.
addShowToWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  user.addShowToWatchedList(userID, req.body, result => {
    console.log('RESULT FORM DELETE SHOW WATCHED LIST: ', result);
    //res.json(result);
  })
}

// Delete show from watched list.
deleteShowFromWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  let showID = req.params.showID;
  user.deleteShowFromWatchedList(userID, showID, result => {
    console.log('RESULT FORM DELETE SHOW WATCH LIST: ', result);
    //res.json(result);
  })
}

// Exporting Methods.
module.exports = {
  addMovieToWatchList,
  deleteMovieFromWatchList,
  addMovieToWatchedList,
  deleteMovieFromWatchedList,
  addShowToWatchList,
  deleteShowFromWatchList,
  addShowToWatchedList,
  deleteShowFromWatchedList,
};