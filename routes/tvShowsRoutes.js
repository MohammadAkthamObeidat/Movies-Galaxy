const express = require('express');
const router = express.Router();
const tvShowsController = require("../controllers/TvShowsController")


// @METHOD GET
// Return popular Tv Shows .
router.get("/popular-tvshows", tvShowsController.getPopularTvShows);
// @METHOD GET
// Return trending Tv Shows .
router.get("/trending-tvshows", tvShowsController.getTrendingTvShows);
// @METHOD GET
// Return show details .
router.get(`/show_details/:showID`, tvShowsController.getTvShowDetails);
// @METHOD GET
// Return show on search .
router.get(`/search/:query`, tvShowsController.getTvOnSearch);

module.exports = router;