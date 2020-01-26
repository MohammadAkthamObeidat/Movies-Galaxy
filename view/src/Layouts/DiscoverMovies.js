import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem'
import '../Assets/CSS/Discover.css';


class DiscoverMovies extends Component {
    state = {
        popularMovies: [],
        trendingMovies: [],
        popularity: 'popular'
    };

    //@GET
    //Fetch Trending Movies.
    getTrendingMovies = async (event) => {
        const trendingMoviesResponse = await axios.get('/movies/trending');
        this.setState({
            trendingMovies: trendingMoviesResponse.data.data.trendingMovies,
            popularity: 'trending'
        });
        console.log('this.state :', this.state);
    };
    //@GET
    //Fetch Popular Movies.
    getPopularMovies = async (event) => {
        const popularMoviesResponse = await axios.get('/movies/popular');
        this.setState({
            popularMovies: popularMoviesResponse.data.data.popularMovies,
            popularity: 'popular'
        });
    };

    componentDidMount = async () => {
        this.getPopularMovies();
    };

    render() {
        const { popularMovies, trendingMovies, popularity } = this.state;
        return this.state ? (
            <div className="discover-container">
                <div className="discover-list-header">
                    <hr className="line" />
                    <div className="header-tabs">
                        <button
                            onClick={this.getTrendingMovies}
                            className="header-btns"
                        >
                            Trending
                        </button>
                        <div className="ver-line"></div>
                        <button
                            onClick={this.getPopularMovies}
                            className="header-btns"
                        >
                            Popular
                        </button>
                    </div>
                    <hr className="line" />
                </div>
                <div className="movies-show-container">
                    {popularity === 'popular'
                        ? popularMovies.map(movie => {
                              return <MovieItem key={movie.id} movie={movie} />;
                          })
                        : popularity === 'trending'
                        ? trendingMovies.map(movie => {
                              return <MovieItem key={movie.id} movie={movie} />;
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
