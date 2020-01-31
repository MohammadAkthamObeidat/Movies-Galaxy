import React, { Component } from 'react';
import '../Assets/CSS/MovieShowItem.css';
import { Link } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';
import axios from 'axios';
class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            whatList: 'watchlist',
            selectValue: 'Movies',
            isMovieExistInWatchlist: false,
            isMovieExistInWatchedlist: false
        };
        this.userID = '';
    }

    componentDidMount = async () => {
        const { movie } = this.props;
        const Auth = new AuthHelper();
        const response = Auth.getConfirm();
        this.userID = response.id;
        const loadedUser = await axios.post(`/get-user/${this.userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user });

        if (this.state) {
            this.state.user.movies_list.watch_list.map(userMovie => {
                if (userMovie.id === movie.id) {
                    this.setState({
                        isMovieExistInWatchlist: true
                    });
                } else if (userMovie.id !== movie.id) {
                    this.setState({
                        isMovieExistInWatchlist: false
                    });
                }
            });

            this.state.user.movies_list.watched_list.map(userMovie => {
                if (userMovie.id === movie.id) {
                    this.setState({
                        isMovieExistInWatchedlist: true
                    });
                } else if (userMovie.id !== movie.id) {
                   this.setState({
                       isMovieExistInWatchedlist: false
                   });
                }
            });
        }
    };




    render() {
        const {
            movie,
            addToWatchList,
            addToWatchedList,
            removeFromWatchlist,
            removeFromWatchedlist,
        } = this.props;
        return Object.entries(this.state.user).length > 0 ? (
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
                        {this.state.isMovieExistInWatchlist === true ? (
                            <img
                                onClick={removeFromWatchlist.bind(
                                    this,
                                    movie.id
                                )}
                                className="watchlist-btn"
                                src={require('../Assets/Icons/InWatchList.svg')}
                                alt=""
                            />
                        ) : this.state.isMovieExistInWatchlist === false ? (
                            <img
                                onClick={addToWatchList.bind(this, movie.id)}
                                className="watchlist-btn"
                                src={require('../Assets/Icons/WatchList-Seq.svg')}
                                alt=""
                            />
                        ) : (
                            ''
                        )}
                        {this.state.isMovieExistInWatchedlist === true ? (
                            <img
                                onClick={removeFromWatchedlist.bind(
                                    this,
                                    movie.id
                                )}
                                className="watchlist-btn"
                                src={require('../Assets/Icons/InWatched.svg')}
                                alt=""
                            />
                        ) : this.state.isMovieExistInWatchedlist === false ? (
                            <img
                                onClick={addToWatchedList.bind(this, movie.id)}
                                className="watchlist-btn"
                                src={require('../Assets/Icons/Watched-Seq.svg')}
                                alt=""
                            />
                        ) : (
                            ''
                        )}
                    </div>
                    <small className="rate">{movie.vote_average}/10</small>
                </div>
            </div>
        ) : (
            ''
        );
    }
}
export default MovieItem;
