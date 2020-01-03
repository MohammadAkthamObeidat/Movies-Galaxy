const express = require('express');
const router = express.Router();
const tvShowsController = require("../controllers/TvShowsController")

// @METHOD GET
// Return popular Tv Shows .
router.get("/popular-tvshows", (req, res) =>{tvShowsController.getPopularTvShows});
// @METHOD GET
// Return trending Tv Shows .
router.get("/trending-tvshows", (req, res) =>{tvShowsController.getTrendingTvShows});
// @METHOD GET
// Return show details .
router.get(`/tv_details/:showID`, (req, res) =>{tvShowsController.getTvShowDetails});
// @METHOD GET
// Return show on search .
router.get(`/search/:query`, (req, res) =>{tvShowsController.getTvOnSearch});

module.export = router;