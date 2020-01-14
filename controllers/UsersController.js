const user = require("../models/User");
const express = require("express");
const app = express();
app.use(express.json())


// MOVIES FUNCTIONS ****************************************************************************


// Add new movie to watch list.
addMovieToWatchList = (req, res, next) => {
  console.log(req.body);
  const userID = req.params.userID;
  console.log('USER ID: ', userID);
  user.addMovieToWatchList(userID, req.body, result => {
    res.status(200).json({
      status: 'Success Adding Movie To Watchlist.',
      data: {
        movieAdded: result
      }
    })
  });
};

// Delete movie from watch list.
deleteMovieFromWatchList = (req, res, next) => {
  let userID = req.params.userID;
  let movieID = req.params.movieID;
  user.deleteMovieFromWatchList(userID, movieID, result => {
    res.status(200).json({
      status: 'Success Delete Movie From Watch List.',
      data: {
        deletedMovie: result
      }
    })
  })
}

// Add new movie to watched list.
addMovieToWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  user.addMovieToWatchedList(userID, req.body, result => {
    res.status(200).json({
      status: 'Success Add Movie To Watched List.',
      data: {
        movieAdded: result
      }
    })
  });
};

// Delete movie from watched list.
deleteMovieFromWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  let movieID = req.params.movieID;
  user.deleteMovieFromWatchedList = (userID, movieID, result) => {
    res.status(200).json({
      status: 'Success Delete Movie From Watch List.',
      data: {
        deletedMovie: result
      }
    })
  }
}


// TV SHOWS FUNCTIONS ****************************************************************************


// Add new show to watch list.
addShowToWatchList = (req, res, next) => {
  let userID = req.params.userID;
  user.addShowToWatchList(userID, req.body, result => {
    //res.json(result);
    res.status(200).json({
      status: 'Complete',
      data: {
        addedShow: result
      }
    })
  })
}

// Delete show from watch list.
deleteShowFromWatchList = (req, res, next) => {
  let userID = req.params.userID;
  let showID = req.params.showID;
  user.deleteShowFromWatchList(userID, showID, result => {
    //res.json(result);
  })
}

// Add new show to watched list.
addShowToWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  user.addShowToWatchedList(userID, req.body, result => {
    //res.json(result);
    res.status(200).json({
      status: 'Success add to watchedlist.',
      data: {
        addedShow: result
      }
    })
  })
}

// Delete show from watched list.
deleteShowFromWatchedList = (req, res, next) => {
  let userID = req.params.userID;
  let showID = req.params.showID;
  user.deleteShowFromWatchedList(userID, showID, result => {
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