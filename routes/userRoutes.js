const express = require('express');

const router = express.Router({ mergeParams: true });
const userController = require('../controllers/UsersController');
const authController = require('../controllers/AuthController');

// MOVIES ROUTES. **************************************************************

// @PUT
// Add movie to watch list.
router
    .route('/movie/add/watchlist/:userID')
    .patch(authController.protectRoutes, userController.addMovieToWatchList);
// @DELETE
// Remove movie from watch list.
router
    .route('/movie/delete/watchlist/:userID/:movieID')
    .delete(
        authController.protectRoutes,
        userController.deleteMovieFromWatchList
    );
// @PUT
// Add movie to watched list.
router
    .route('/movie/add/watchedlist/:userID')
    .patch(authController.protectRoutes, userController.addMovieToWatchedList);
// @DELETE
// Remove movie from watched list.
router
    .route('/movie/delete/watchedlist/:userID/:movieID')
    .delete(
        authController.protectRoutes,
        userController.deleteMovieFromWatchedList
    );

// TV SHOW ROUTES. **************************************************************
// @PUT
// Add TvShow to watch list.
router
    .route('/show/add/watchlist/:userID')
    .patch(authController.protectRoutes, userController.addShowToWatchList);
// @DELETE
// Remove TvShow from watch list.
router
    .route('/show/delete/watchlist/:userID/:showID')
    .delete(
        authController.protectRoutes,
        userController.deleteShowFromWatchList
    );
// @PUT
// Add TvShow to watched list.
router
    .route('/show/add/watchedlist/:userID')
    .patch(authController.protectRoutes, userController.addShowToWatchedList);
// @DELETE
// Remove TvShow from watched list.
router
    .route('/show/add/watchedlist/:userID/:showID')
    .delete(
        authController.protectRoutes,
        userController.deleteShowFromWatchedList
    );

module.exports = router;
