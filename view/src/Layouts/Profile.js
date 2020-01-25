import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Assets/CSS/Profile.css';
import MovieShowItem from '../components/MovieShowItem';
import axios from 'axios';
import AuthHelper from '../Utils/AuthHelper';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.whatList = 'watchlist';
        this.userID = '';
        this.selectValue = 'movies';
    }

    componentDidMount = async () => {
        const Auth = new AuthHelper();
        const response = Auth.getConfirm();
        this.userID = response.id;
        axios
            .post(`/get-user/${this.userID}`)
            .then(response => {
                console.log('RESPONSE :', response.data.user);
                this.setState({ ...this.state.user, user: response.data.user });
            })
            .catch(error => {
                console.log('error', error);
            });
    };

    handleWatchlistClick = event => {
        return (this.whatList = 'watchlist');
    };

    handleWatchedlistClick = event => {
        return (this.whatList = 'watchedlist');
    };

    handleSelectChange = event => {
        this.selectValue = event.target.value;
    };

    render() {
        console.log('THIS.STATE.USER :', this.state.user);
        // Check if the object that holds user info is empty or not
        return Object.entries(this.state.user).length > 0 ? (
            <div className="profile-page">
                <div className="user-info">
                    <img
                        className="profile-cover"
                        src={require('../Assets/Images/Profile-cover.svg')}
                        alt="cover"
                    />
                    <img
                        src={require('../Assets/Images/user.svg')}
                        alt=""
                        className=" avatar"
                    />
                    <h3 className="user-name">{this.state.user.name}</h3>
                </div>
                <div className="header">
                    <hr className="line" />
                    <div className="header-tabs">
                        <li
                            onClick={this.handleWatchlistClick}
                            className="header-btns"
                        >
                            Watch List
                        </li>
                        <div className="ver-line"></div>
                        <li
                            onClick={this.handleWatchedlistClick}
                            className="header-btns"
                        >
                            Watched List
                        </li>
                    </div>
                    <hr className="line" />
                    <center>
                        <select
                            className="select-input"
                            value={this.selectValue}
                            onChange={this.handleSelectChange}
                        >
                            <option selected value="Movies">
                                Movies
                            </option>
                            <option value="TvShows">TvShows</option>
                        </select>
                    </center>
                </div>
                {this.state.user.movies_list.watch_list.length === 0 ? (
                    <center>
                        <img
                            className="empty"
                            src={require('../Assets/Images/Empty.svg')}
                            alt="empty list"
                        />
                    </center>
                ) : (
                    <div className="lists">
                        {this.state.user.movies_list.watch_list.length > 0 &&
                        this.whatList === 'watchlist' &&
                        this.selectValue === 'movies' ? (
                            this.state.user.movies_list.watch_list.map(
                                movie => {
                                    return <MovieShowItem />;
                                }
                            )
                        ) : this.state.user.movies_list.watched_list.length >
                              0 &&
                          this.whatList === 'watchedlist' &&
                          this.selectValue === 'movies' ? (
                            this.state.user.movies_list.watched_list.map(
                                movie => {
                                    return <MovieShowItem />;
                                }
                            )
                        ) : this.state.user.shows_list.watch_list.length > 0 &&
                          this.whatList === 'watchlist' &&
                          this.selectValue === 'TvShows' ? (
                            this.state.user.shows_list.watch_list.map(show => {
                                return <MovieShowItem />;
                            })
                        ) : this.state.user.shows_list.watched_list.length >
                              0 &&
                          this.whatList === 'watchedlist' &&
                          this.selectValue === 'TvShows' ? (
                            this.state.user.shows_list.watched_list.map(
                                show => {
                                    return <MovieShowItem />;
                                }
                            )
                        ) : (
                            <center>
                                <img
                                    className="empty"
                                    src={require('../Assets/Images/Empty.svg')}
                                    alt="empty list"
                                />
                            </center>
                        )}
                    </div>
                )}
            </div>
        ) : (
            ''
        );
    }
}

export default Profile;
