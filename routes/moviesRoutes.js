const express = require('express');

const router = express.Router();
const moviesController = require('../controllers/MoviesController');

// router.param('movieID', (req, res, next, value) => {
//     console.log('The Movie ID = ' + value);
//     next();
// })
// @METHOD GET
// Return popular movies .
router.get('/popular', moviesController.getPopularMovies);
// @METHOD GET
// Return trending movies .
router.get('/trending', moviesController.getTrendingMovies);
// @METHOD GET
// Return movie details .
router.get('/details/:movieID', moviesController.getMovieDetails);
// @METHOD GET
// Return movies on search .
router.get('/search/:query', moviesController.getMovieOnSearch);

// Exporting Routes.
module.exports = router;
