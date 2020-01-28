import React, { Component } from 'react';
import '../Assets/CSS/MovieShowItem.css';
import {Link} from 'react-router-dom'
class MovieShowItem extends Component {
   
    render() {
        const { movie } = this.props;
        return (
            <div className="item-container">
                <Link to={'/movie-details/' + movie.id} key={movie.id}>
                    <div
                        onClick={this.handleItemClick}
                        className="poster-title"
                    >
                        <img
                            className="poster"
                            src={
                                movie.backdrop_path === null
                                    ? require('../Assets/Images/No Poster.svg')
                                    : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                            }
                            alt="poster"
                        />
                        <img
                            src={require('../Assets/Images/MovieItemOverlay.svg')}
                            alt=""
                            className="overlay"
                        />
                        <h3 className="movie-title">
                            {movie.title.length > 17 ? 
                            movie.title.slice(0,17) +'...' : movie.title}
                        </h3>
                        <small className="date">(2019)</small>
                    </div>
                </Link>
                <div className="btns-rate">
                    <div className="btns">
                        <img
                            className="watchlist-btn"
                            src={require('../Assets/Icons/WatchList-Seq.svg')}
                            alt=""
                        />
                        <img
                            className="watched-btn"
                            src={require('../Assets/Icons/Watched-Seq.svg')}
                            alt=""
                        />
                    </div>
                    <small className="rate">{movie.vote_average}/10</small>
                </div>
            </div>
        );
    }
}
export default MovieShowItem;
