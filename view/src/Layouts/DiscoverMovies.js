import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import '../Assets/CSS/Discover.css';
import { NavLink } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';

class DiscoverMovies extends Component {
    state = {
        user: {},
        popularMovies: [],
        trendingMovies: [],
        popularity: 'popular'
    };

    // Utility Function To Add Movies To WatchList.
    handleAddMovieToWatchlist = async id => {
        // Get All Movie Details According To Movie ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;

        let isExist;
        if (this.state.user.movies_watch_list.length === 0) {
            isExist = false;
        } else {
            await this.state.user.movies_watch_list.forEach(movie => {
                if (movie.id === id) {
                    isExist = true;
                } else {
                    isExist = false;
                }
            });
        }

        console.log('isExist :', isExist);
        console.log('isExist :', !isExist);

        // Add Movie To Authenticated User Watchlist.
        if (movieDetails && isExist === false) {
            const addedMovie = await axios.patch(
                `/user/movie/add/watchlist/${this.state.user._id}`,
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
        const token = Auth.getToken();

        // Get All Movie Details According To Movie ID.
        const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;

        let isExist;
        if (this.state.user.movies_watched_list.length === 0) {
            isExist = false;
        } else {
            await this.state.user.movies_watched_list.forEach(movie => {
                if (movie.id === id) {
                    isExist = true;
                } else {
                    isExist = false;
                }
            });
        }

        // Add Movie To Authenticated User Watchlist.
        if (movieDetails && isExist === false) {
            const addedMovie = await axios.patch(
                `/user/movie/add/watchedlist/${this.state.user._id}`,
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

    //@GET
    //Fetch Trending Movies.
    getTrendingMovies = async event => {
        const trendingMoviesResponse = await axios.get('/movies/trending');
        this.setState({
            trendingMovies: trendingMoviesResponse.data.data.trendingMovies,
            popularity: 'trending'
        });
    };
    //@GET
    //Fetch Popular Movies.
    getPopularMovies = async event => {
        const popularMoviesResponse = await axios.get('/movies/popular');
        this.setState({
            popularMovies: popularMoviesResponse.data.data.popularMovies,
            popularity: 'popular'
        });
    };

    componentDidMount = async () => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({
            ...this.state.user,
            user: loadedUser.data.user
        });
        this.getPopularMovies();
    };

    render() {
        const { popularMovies, trendingMovies, popularity, user } = this.state;
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
                                      user={user}
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
                                      user={this.state.user}
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
export default DiscoverMovies;
