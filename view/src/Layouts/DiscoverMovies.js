import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import '../Assets/CSS/Discover.css';
import { Link, NavLink } from 'react-router-dom';

class DiscoverMovies extends Component {
    state = {
        popularMovies: [],
        trendingMovies: [],
        popularity: 'popular'
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
                    {popularity === 'popular'
                        ? popularMovies.map(movie => {
                              return (
                                  <MovieItem
                                      movie={movie}
                                      clicked={() =>
                                          this.handleItemClick(movie.id)
                                      }
                                  />
                              );
                          })
                        : popularity === 'trending'
                        ? trendingMovies.map(movie => {
                              return (
                                  <MovieItem
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
