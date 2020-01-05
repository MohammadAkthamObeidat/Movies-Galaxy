const axios = require("axios");
const express = require("express");
const app = express();
app.use(express.json())
// API DETAILS.
const API_KEY = "7ba0c7a4a624420802d8a91a4d4fc92c";
const DISCOVER_URL = "https://api.themoviedb.org/3/discover/movie?"
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
        data: {
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
  const id = req.params.movieID;
  // console.log('IDDDDDDDDD ',id)
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  // Make an API request to get movie details.
  axios.get(`https://api.themoviedb.org/3/movie/${id}?`, { params: params })
    .then(response => {
      console.log(response)
      res.status(200).json({
        status: 'Success',
        data: {
          movieDetails: response.data
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
  console.log('Search Query: ', query);
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query: query,
    include_adult: false
  };

  // Make an API request to get movie details.
  axios.get(SEARCH_URL, { params: params })
    .then(response => {
      console.log('Movie On Search ',response)
      //res.send(response.data.results);
      res.status(200).json({
        status: 'Success',
        data: {
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