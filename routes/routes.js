
const movies = require("../controllers/MoviesController");
const tvShows = require("../controllers/TvShowsController");
const users = require("../controllers/UsersController");

module.exports = app => {
  app.use("/movies", movies);
  app.use("/tv-shows", tvShows);
  app.use("/users", users);
};