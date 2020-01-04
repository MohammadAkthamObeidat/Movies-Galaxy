const axios = require("axios");

// API DETAILS.
const API_KEY = "7ba0c7a4a624420802d8a91a4d4fc92c";
const DISCOVER_URL = "https://api.themoviedb.org/3/discover/movie?"
const DETAILS_URL = "https://api.themoviedb.org/3/movie"
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?"

// Return popular movies.
getPopularMovies = (req, res, next) => {
  // Parameters That will Be Included In Request URL
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false
  };

  // Make an API request to get popular movies.
  axios.get(DISCOVER_URL, { params: params })
    .then(response => {
      //res.send(response.data.results);
      res.status(200).json({
        status: 'Success',
        results: response.data.results.length,
        data: {
          popularMovies: response.data.results
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};
// ***********************************************************************************************************************************
// Return trending movies.
getTrendingMovies = (req, res, next) => {
  // Parameters That will Be Included In Request URL
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    sort_by: 'release_date.desc',
    include_adult: false,
    include_video: false
  };

  // Make an API request to get trending movies.
  axios.get(DISCOVER_URL, { params: params })
    .then(response => {
      //res.send(response.data.results);
      res.status(200).json({
        status: 'Success',
        results: response.data.results.length,
        data:{
          trendingMovies: response.data.results
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};
// ***********************************************************************************************************************************
// Return movie details.
getMovieDetails = (req, res, next) => {
  // Parameters That will Be Included In Request URL
  const id = req.params.movieId;
  console.log(id)
  const params = {
    movie_id: id,
    api_key: API_KEY,
    language: 'en-US',
  };

  // Make an API request to get movie details.
  axios.get(DETAILS_URL, { params: params })
    .then(response => {
      res.status(200).json({
        status: 'Success',
        results: response.data.results.length,
        data:{
          movieDetails: response.data.results
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};
// ***********************************************************************************************************************************
// Return movies on search .
getMovieOnSearch = (req, res, next) => {
  // Parameters That will Be Included In Request URL
  const query = req.params.query;
  const params = {
    movie_id: id,
    api_key: API_KEY,
    language: 'en-US',
    query: query,
    include_adult: false
  };

  // Make an API request to get movie details.
  axios.get(SEARCH_URL, { params: params })
    .then(response => {
      //res.send(response.data.results);
      res.status(200).json({
        status: 'Success',
        results: response.data.results.length,
        data:{
          searchResult: response.data.results
        }
      })
    })
    .catch(error => {
      console.log('There is no data returned.', error);
    })
};

// Exporting Methods.
module.exports = {
  getPopularMovies,
  getTrendingMovies,
  getMovieDetails,
  getMovieOnSearch
};