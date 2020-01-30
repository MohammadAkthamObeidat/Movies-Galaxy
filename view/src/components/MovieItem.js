import React, { Component } from 'react';
import '../Assets/CSS/MovieShowItem.css';
import { Link } from 'react-router-dom';
class MovieItem extends Component {
    render() {
        const { movie, addToWatchList, addToWatchedList } = this.props;
        return (
            <div className="item-container">
                <Link to={'/movie-details/' + movie.id} key={movie.id}>
                    <div className="poster-title">
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
                            {movie.title.length > 17
                                ? movie.title.slice(0, 17) + '...'
                                : movie.title}
                        </h3>
                        <small className="date">
                            ({movie.release_date.split('-')[0]})
                        </small>
                    </div>
                </Link>
                <div className="btns-rate">
                    <div className="btns">
                        <img
                            onClick={addToWatchList.bind(this, movie.id)}
                            className="watchlist-btn"
                            src={require('../Assets/Icons/WatchList-Seq.svg')}
                            alt=""
                        />
                        <img
                            onClick={addToWatchedList.bind(this, movie.id)}
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
export default MovieItem;
