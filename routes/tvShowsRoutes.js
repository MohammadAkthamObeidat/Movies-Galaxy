const express = require('express');

const router = express.Router();
const tvShowsController = require('../controllers/TvShowsController');

// @METHOD GET
// Return popular Tv Shows .
router.get('/popular', tvShowsController.getPopularTvShows);
// @METHOD GET
// Return trending Tv Shows .
router.get('/trending', tvShowsController.getTrendingTvShows);
// @METHOD GET
// Return show details .
router.get('/details/:showID', tvShowsController.getTvShowDetails);
// @METHOD GET
// Return show on search .
router.get('/search/:query', tvShowsController.getTvOnSearch);

module.exports = router;
