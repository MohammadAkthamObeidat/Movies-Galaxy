const express = require('express');
const router = express.Router();
const tvShowsController = require("../controllers/TvShowsController")


// @METHOD GET
// Return popular Tv Shows .
router.get("/shows/popular", tvShowsController.getPopularTvShows);
// @METHOD GET
// Return trending Tv Shows .
router.get("/shows/trending", tvShowsController.getTrendingTvShows);
// @METHOD GET
// Return show details .
router.get("/shows/details/:showID", tvShowsController.getTvShowDetails);
// @METHOD GET
// Return show on search .
router.get("/shows/search/:query", tvShowsController.getTvOnSearch);

module.exports = router;