const express = require('express');
const router = express.Router();
const moviesController = require("../controllers/MoviesController")

// @METHOD GET
// Return popular movies .
router.get("/popular-movies", (req, res) =>{ moviesController.getPopularMovies});
// @METHOD GET
// Return trending movies .
router.get("/trending-movies", (req, res) =>{moviesController.getTrendingMovies});
// @METHOD GET
// Return movie details .
router.get(`/movie_details/:movieID`, (req, res) =>{moviesController.getMovieDetails});
// @METHOD GET
// Return movies on search .
router.get(`/search/:query`, (req, res) =>{moviesController.getMovieOnSearch});

// Exporting Routes.
module.export = router;