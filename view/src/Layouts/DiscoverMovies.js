import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import '../Assets/CSS/Discover.css';
import { NavLink } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';

class DiscoverMovies extends Component {
    state = {
        loadedMovie: {},
        popularMovies: [],
        trendingMovies: [],
        popularity: 'popular'
    };

    handleAddToWatchlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;
        const token = Auth.getToken();

        // Get All Movie Details According To Movie ID.
        const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;

        // Add Movie To Authenticated User Watchlist.
        if (movieDetails) {
            const addedMovie = await axios.patch(
                `/user/movie/add/watchlist/${userID}`,
                movieDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                },
            );
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
        this.getPopularMovies();
    };

    handleItemClick = id => {};

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
                                      addToWatchList={this.handleAddToWatchlist}
                                      key={movie.id}
                                      movie={movie}
                                      clicked={() =>
                                          this.handleItemClick(movie.id)
                                      }
                                  />
                              );
                          })
                        : popularity === 'trending' && trendingMovies.length > 0
                        ? trendingMovies.map(movie => {
                              return (
                                  <MovieItem
                                      key={movie.id}
                                      movie={movie}
                                      clicked={() =>
                                          this.handleItemClick(movie.id)
                                      }
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
