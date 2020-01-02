const express = require('express');
const router = express.Router();
const moviesController = require("./controllers/MoviesController")

// @METHOD GET
// Return popular movies .
router.get("/popular-movies", moviesController.getPopularMovies);
// @METHOD GET
// Return trending movies .
router.get("/trending-movies", moviesController.getTrendingMovies);
// @METHOD GET
// Return movie details .
router.get(`/movie_details/${movieId}`, moviesController.getMovieDetails);
// @METHOD GET
// Return movies on search .
router.get(`/search/${query}`, moviesController.getMovieOnSearch);


module.export = router;