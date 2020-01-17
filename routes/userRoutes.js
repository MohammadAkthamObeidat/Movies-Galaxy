const express = require('express');

const router = express.Router({ mergeParams: true });
const userController = require('../controllers/UsersController');

// MOVIES ROUTES. **************************************************************

// @PUT
// Add movie to watch list.
router.patch(
  '/movie/add/watchlist/:userID',
  userController.addMovieToWatchList
);
// @DELETE
// Remove movie from watch list.
router.delete(
  '/movie/delete/watchlist/:userID/:movieID',
  userController.deleteMovieFromWatchList
);
// @PUT
// Add movie to watched list.
router.patch(
  '/movie/add/watchedlist/:userID',
  userController.addMovieToWatchedList
);
// @DELETE
// Remove movie from watched list.
router.delete(
  '/movie/delete/watchedlist/:userID/:movieID',
  userController.deleteMovieFromWatchedList
);

// TV SHOW ROUTES. **************************************************************
// @PUT
// Add TvShow to watch list.
router.patch('/show/add/watchlist/:userID', userController.addShowToWatchList);
// @DELETE
// Remove TvShow from watch list.
router.delete(
  '/show/delete/watchlist/:userID/:showID',
  userController.deleteShowFromWatchList
);
// @PUT
// Add TvShow to watched list.
router.patch(
  '/show/add/watchedlist/:userID',
  userController.addShowToWatchedList
);
// @DELETE
// Remove TvShow from watched list.
router.delete(
  '/show/add/watchedlist/:userID/:showID',
  userController.deleteShowFromWatchedList
);

module.exports = router;
