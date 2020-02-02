const express = require('express');

const router = express.Router({ mergeParams: true });
const userController = require('../controllers/UsersController');
const authController = require('../controllers/AuthController');

// MOVIES ROUTES. **************************************************************

// @PATCH
// Add movie to watch list.
router
    .route('/movie/add/watchlist/:userID')
    .patch(authController.protectRoutes, userController.addMovieToWatchList);
// @PATCH
// Remove movie from watch list.
router
    .route('/movie/delete/watchlist/:userID/:movieID')
    .patch(
        authController.protectRoutes,
        userController.deleteMovieFromWatchList
    );
// @PATCH
// Add movie to watched list.
router
    .route('/movie/add/watchedlist/:userID')
    .patch(authController.protectRoutes, userController.addMovieToWatchedList);
// @PATCH
// Remove movie from watched list.
router
    .route('/movie/delete/watchedlist/:userID')
    .patch(
        authController.protectRoutes,
        userController.deleteMovieFromWatchedList
    );

// TV SHOW ROUTES. **************************************************************
// @PATCH
// Add TvShow to watch list.
router
    .route('/show/add/watchlist/:userID')
    .patch(authController.protectRoutes, userController.addShowToWatchList);
// @PATCH
// Remove TvShow from watch list.
router
    .route('/show/delete/watchlist/:userID')
    .patch(
        authController.protectRoutes,
        userController.deleteShowFromWatchList
    );
// @PATCH
// Add TvShow to watched list.
router
    .route('/show/add/watchedlist/:userID')
    .patch(authController.protectRoutes, userController.addShowToWatchedList);
// @PATCH
// Remove TvShow from watched list.
router
    .route('/show/add/watchedlist/:userID')
    .patch(
        authController.protectRoutes,
        userController.deleteShowFromWatchedList
    );

module.exports = router;
