const express = require('express');
const router = express.Router();
const userController = require("../controllers/UsersController")

// @GET
// Return one user data.
router.get("/login", (req, res) =>{userController.getUser});
// @POST
// Add new user.
router.post("/sign-up", (req, res) =>{userController.addUser});
// @PUT
// Add movie to watch list.
router.put(`movie-to-watch-list/:userID`, (req, res) =>{userController.addMovieToWatchList});
// @DELETE
// Remove movie from watch list.
router.delete(`remove-movie-from-watch-list/:userID/:movieID`, (req, res) =>{userController.deleteMovieFromWatchList});
// @PUT
// Add movie to watched list.
router.put(`movie-to-watched-list/:userID`, (req, res) =>{userController.addMovieToWatchedList});
// @DELETE
// Remove movie from watched list.
router.delete(`remove-movie-from-watched-list/:userID/:movieID`, (req, res) =>{userController.deleteMovieFromWatchedList});
// @PUT
// Add TvShow to watch list.
router.put(`show-to-watch-list/:userID`, (req, res) =>{userController.addShowToWatchList});
// @DELETE
// Remove TvShow from watch list.
router.delete(`remove-show-from-watch-list/:userID/:showID`, (req, res) =>{userController.deleteShowFromWatchList});
// @PUT
// Add TvShow to watched list.
router.put(`show-to-watched-list/:userID`, (req, res) =>{userController.addShowToWatchedList});
// @DELETE
// Remove TvShow from watched list.
router.delete(`remove-show-from-watched-list/:userID/:showID`, (req, res) =>{userController.deleteShowFromWatchedList});

module.exports = router;
