const express = require('express');
const router = express.Router();
const userController = require("./controllers/UserController")

// @METHOD GET
// Return one user data.
router.get("/login", userController.getUser);
// @METHOD POST
// Add new user.
router.post("/sign-up", userController.addUser);
// @METHOD PUT
// Add movie to watch list.
router.put(`movie-to-watch-list${movie}`, userController.addMovieToWatchList);
// @METHOD DELETE
// Remove movie from watch list.
router.delete(`remove-movie-from-watch-list${movieID}`, userController.deleteMovieFromWatchList);
// @METHOD PUT
// Add movie to watched list.
router.put(`movie-to-watched-list${movie}`, userController.addMovieToWatchedList);
// @METHOD DELETE
// Remove movie from watched list.
router.delete(`remove-movie-from-watched-list${movieID}`, userController.deleteMovieFromWatchedList);
// @METHOD PUT
// Add TvShow to watch list.
router.put(`show-to-watch-list${show}`, userController.addShowToWatchList);
// @METHOD DELETE
// Remove TvShow from watch list.
router.delete(`remove-show-from-watch-list${showID}`, userController.deleteShowFromWatchList);
// @METHOD PUT
// Add TvShow to watched list.
router.put(`show-to-watched-list${show}`, userController.getMovieOnSearch);
// @METHOD DELETE
// Remove TvShow from watched list.
router.delete(`remove-show-from-watched-list${showID}`, userController.deleteShowFromWatchedList);

module.export = router;