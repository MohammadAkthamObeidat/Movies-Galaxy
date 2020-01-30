import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import ShowItem from '../components/ShowItem';
import '../Assets/CSS/Discover.css';
import { NavLink } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';

class SearchResults extends Component {
    state = {
        user: {},
        isMovieExistInWatchlist: false,
        isMovieExistInWatchedlist: false
    };

    // Utility Function To Add Movies To WatchList.
    handleAddMovieToWatchlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;
        const token = Auth.getToken();

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user });

        // Get All Movie Details According To Movie ID.
        const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;

        const { movies_list } = this.state.user;
        movies_list.watch_list.map(movie => {
            if (movie.id === id) {
                return this.setState({ isMovieExistInWatchlist: true });
            } else {
                return this.setState({ isMovieExistInWatchlist: false });
            }
        });

        // Add Movie To Authenticated User Watchlist.
        if (movieDetails && this.state.isMovieExistInWatchlist === false) {
            const addedMovie = await axios.patch(
                `/user/movie/add/watchlist/${userID}`,
                movieDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('ADDED MOVIE :', addedMovie);
        } else {
            console.log('Movie Is Already Exist In Your Movies WatchList !!!');
        }
    };

    // Utility Function To Add Movies To WatchList.
    handleAddMovieToWatchedlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;
        const token = Auth.getToken();

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user });

        // Get All Movie Details According To Movie ID.
        const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;

        const { movies_list } = this.state.user;
        movies_list.watched_list.map(movie => {
            if (movie.id === id) {
                return this.setState({ isMovieExistInWatchedlist: true });
            } else {
                return this.setState({ isMovieExistInWatchedlist: false });
            }
        });

        // Add Movie To Authenticated User Watchlist.
        if (movieDetails && this.state.isMovieExistInWatchedlist === false) {
            const addedMovie = await axios.patch(
                `/user/movie/add/watchedlist/${userID}`,
                movieDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('ADDED MOVIE :', addedMovie);
        } else {
            console.log('Movie Is Already Exist In Your Movies WatchList !!!');
        }
    };    

    componentDidMount = async () => {
      
    };

    render() {
        const { popularMovies, trendingMovies, popularity } = this.state;
        return this.state ? (
            <div className="discover-container">
                <div className="discover-list-header">
                    <hr className="line" />
                    <div className="header-tabs">
                        <NavLink
                            to={{
                                pathname: '/discover/movies/trending'
                            }}
                            onClick={this.getTrendingMovies}
                            className="header-btns"
                        >
                            Trending
                        </NavLink>
                        <div className="ver-line"></div>
                        <NavLink
                            to={{
                                pathname: '/discover/movies/popular'
                            }}
                            onClick={this.getPopularMovies}
                            className="header-btns"
                        >
                            Popular
                        </NavLink>
                    </div>
                    <hr className="line" />
                </div>
                <div className="movies-show-container">
                    {popularity === 'popular' && popularMovies.length > 0
                        ? popularMovies.map(movie => {
                              return (
                                  <MovieItem
                                      addToWatchList={
                                          this.handleAddMovieToWatchlist
                                      }
                                      addToWatchedList={
                                          this.handleAddMovieToWatchedlist
                                      }
                                      key={movie.id}
                                      movie={movie}
                                  />
                              );
                          })
                        : popularity === 'trending' && trendingMovies.length > 0
                        ? trendingMovies.map(movie => {
                              return (
                                  <MovieItem
                                      addToWatchList={
                                          this.handleAddMovieToWatchlist
                                      }
                                      addToWatchedList={
                                          this.handleAddMovieToWatchedlist
                                      }
                                      key={movie.id}
                                      movie={movie}
                                  />
                              );
                          })
                        : ''}
                </div>
            </div>
        ) : (
            ''
        );
    }
}
export default SearchResults;
