const express = require('express');
const router = express.Router();
const moviesController = require("../controllers/MoviesController")

// @METHOD GET
// Return popular movies .
router.get("/movies/popular", moviesController.getPopularMovies);
// @METHOD GET
// Return trending movies .
router.get("/movies/trending", moviesController.getTrendingMovies);
// @METHOD GET
// Return movie details .
router.get("/movies/details/:movieID", moviesController.getMovieDetails);
// @METHOD GET
// Return movies on search .
router.get("/movies/search/:query", moviesController.getMovieOnSearch);

// Exporting Routes.
module.exports = router;