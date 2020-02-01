import React, { Component } from 'react';
import '../Assets/CSS/MovieShowItem.css';
import { Link } from 'react-router-dom';
class ProfileMovieItem extends Component {
    render() {
        const {
            movie,
            whatList,
            removeFromWatchlist,
            addToWatchlist,
            removeFromWatchedlist,
            addToWatchedlist
        } = this.props;
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
                        {whatList === 'movie watchlist' ? (
                            <>
                                <img
                                    className="watched-btn"
                                    src={require('../Assets/Icons/Watched-Seq.svg')}
                                    alt=""
                                    onClick={addToWatchedlist.bind(
                                        this,
                                        movie.id
                                    )}
                                />
                                <img
                                    className="cancel-btn"
                                    src={require('../Assets/Icons/cancel.svg')}
                                    alt=""
                                    onClick={removeFromWatchlist.bind(
                                        this,
                                        movie.id
                                    )}
                                />
                            </>
                        ) : whatList === 'movie watchedlist' ? (
                            <>
                                <img
                                    onClick={addToWatchlist.bind(
                                        this,
                                        movie.id
                                    )}
                                    className="watchlist-btn"
                                    src={require('../Assets/Icons/WatchList-Seq.svg')}
                                    alt=""
                                />

                                <img
                                    onClick={removeFromWatchedlist.bind(
                                        this,
                                        movie.id
                                    )}
                                    className="cancel-btn"
                                    src={require('../Assets/Icons/cancel.svg')}
                                    alt=""
                                />
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                    <small className="rate">{movie.vote_average}/10</small>
                </div>
            </div>
        );
    }
}
export default ProfileMovieItem;
