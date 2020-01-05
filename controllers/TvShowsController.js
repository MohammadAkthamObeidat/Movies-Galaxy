const axios = require("axios");

// API DETAILS.
const API_KEY = "7ba0c7a4a624420802d8a91a4d4fc92c";
const DISCOVER_URL = "https://api.themoviedb.org/3/discover/tv?"
const DETAILS_URL = "https://api.themoviedb.org/3/tv"
const SEARCH_URL = "https://api.themoviedb.org/3/search/tv?"

// Return popular TV-Shows.
getPopularTvShows = (req, res, next) => {

  // Parameters That will Be Included In Request URL
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false
  };

  // Make an API request to get popular TV-Shows.
  axios.get(DISCOVER_URL, { params: params })
    .then(response => {
      // res.send(response.data.results);
      res.status(200).json({
        status: 'Success',
        result: response.data.results.length,
        data: {
          popularShows: response.data.results
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};
// ***********************************************************************************************************************************

// Return trending TV-Shows.
getTrendingTvShows = (req, res, next) => {
  // Parameters That will Be Included In Request URL
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    sort_by: 'release_date.desc',
    include_adult: false,
    include_video: false
  };

  // Make an API request to get trending TV-Shows.
  axios.get(DISCOVER_URL, { params: params })
    .then(response => {
      // res.send(response.data.results);
      res.status(200).json({
        status: 'Success',
        result: response.data.results.length,
        data: {
          trendingShows: response.data.results
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};
// ***********************************************************************************************************************************
// @METHOD GET
// Return TV-Show details.
getTvShowDetails = (req, res, next) => {
  // Parameters That will Be Included In Request URL
  const id = req.params.showID;
  console.log('IDDDDD: ', id)
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  // Make an API request to get TV-Show details.
  axios.get(`https://api.themoviedb.org/3/tv/${id}?`, { params: params })
    .then(response => {
      // res.send(response.data.results);
      console.log(response);
      res.status(200).json({
        status: 'Success',
        data: {
          showDetails: response.data
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};
// ***********************************************************************************************************************************
// @METHOD GET
// Return TV-Shows on search .
getTvOnSearch = (req, res, next) => {
  // Parameters That will Be Included In Request URL
  const query = req.params.query;
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query: query,
    include_adult: false
  };

  // Make an API request to get movie details.
  axios.get(SEARCH_URL, { params: params })
    .then(response => {
      // res.send(response.data.results);
      console.log(response)
      res.status(200).json({
        status: 'Success',
        result: response.data.results.length,
        data: {
          tvShow: response.data.results
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};

// Exporting Methods.
module.exports = {
  getPopularTvShows,
  getTrendingTvShows,
  getTvShowDetails,
  getTvOnSearch
};