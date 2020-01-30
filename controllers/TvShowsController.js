const axios = require('axios');

// API DETAILS.
const API_KEY = '7ba0c7a4a624420802d8a91a4d4fc92c';
const DISCOVER_URL = 'https://api.themoviedb.org/3/discover/tv?';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/tv?';

// Return popular TV-Shows.
const getPopularTvShows = (req, res, next) => {
    // Parameters That will Be Included In Request URL
    const params = {
        api_key: API_KEY,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: 1
    };

    // Make an API request to get popular TV-Shows.
    axios
        .get(DISCOVER_URL, { params: params })
        .then(response => {
            // res.send(response.data.results);
            res.status(200).json({
                status: 'Success',
                result: response.data.results.length,
                data: {
                    popularShows: response.data.results
                }
            });
        })
        .catch(error => {
            res.status(404).json({
                status: error
            });
        });
};
// ***********************************************************************************************************************************

// Return trending TV-Shows.
const getTrendingTvShows = (req, res, next) => {
    // Parameters That will Be Included In Request URL
    const params = {
        api_key: API_KEY,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: 2
    };

    // Make an API request to get trending TV-Shows.
    axios
        .get(DISCOVER_URL, { params: params })
        .then(response => {
            // res.send(response.data.results);
            res.status(200).json({
                status: 'Success',
                result: response.data.results.length,
                data: {
                    trendingShows: response.data.results
                }
            });
        })
        .catch(error => {
            res.status(404).json({
                status: error
            });
        });
};
// ***********************************************************************************************************************************
// @METHOD GET
// Return TV-Show details.
const getTvShowDetails = (req, res, next) => {
    // Parameters That will Be Included In Request URL
    const id = req.params.showID;
    const params = {
        api_key: API_KEY,
        language: 'en-US'
    };

    // Make an API request to get TV-Show details.
    axios
        .get(`https://api.themoviedb.org/3/tv/${id}?`, { params: params })
        .then(response => {
            res.status(200).json({
                status: 'Success',
                data: {
                    showDetails: response.data
                }
            });
        })
        .catch(error => {
            res.status(404).json({
                status: error
            });
        });
};
// ***********************************************************************************************************************************
// @METHOD GET
// Return TV-Shows on search .
const getTvOnSearch = (req, res, next) => {
    // Parameters That will Be Included In Request URL
    const { query } = req.params;
    const params = {
        api_key: API_KEY,
        language: 'en-US',
        query: query,
        include_adult: false
    };

    // Make an API request to get movie details.
    axios
        .get(SEARCH_URL, { params: params })
        .then(response => {
            // res.send(response.data.results);
            res.status(200).json({
                status: 'Success',
                result: response.data.results.length,
                data: {
                    searchResult: response.data.results,
                    query: 'TvShow'
                }
            });
        })
        .catch(error => {
            res.status(404).json({
                status: error
            });
        });
};

// Exporting Methods.
module.exports = {
    getPopularTvShows,
    getTrendingTvShows,
    getTvShowDetails,
    getTvOnSearch
};
