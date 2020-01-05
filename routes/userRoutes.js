const express = require('express');
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/UsersController")

// @PUT
// Add movie to watch list.
router.patch("movie-to-watch-list/:userID", userController.addMovieToWatchList);
// @DELETE
// Remove movie from watch list.
router.delete(`remove-movie-from-watch-list/:userID/:movieID`, userController.deleteMovieFromWatchList);
// @PUT
// Add movie to watched list.
router.patch(`movie-to-watched-list/:userID`, userController.addMovieToWatchedList);
// @DELETE
// Remove movie from watched list.
router.delete(`remove-movie-from-watched-list/:userID/:movieID`, userController.deleteMovieFromWatchedList);
// @PUT
// Add TvShow to watch list.
router.patch(`show-to-watch-list/:userID`, userController.addShowToWatchList);
// @DELETE
// Remove TvShow from watch list.
router.delete(`remove-show-from-watch-list/:userID/:showID`, userController.deleteShowFromWatchList);
// @PUT
// Add TvShow to watched list.
router.patch(`show-to-watched-list/:userID`, userController.addShowToWatchedList);
// @DELETE
// Remove TvShow from watched list.
router.delete(`remove-show-from-watched-list/:userID/:showID`, userController.deleteShowFromWatchedList);

module.exports = router;
