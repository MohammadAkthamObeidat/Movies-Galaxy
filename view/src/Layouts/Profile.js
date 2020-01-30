import React, { Component } from 'react';
import '../Assets/CSS/Profile.css';
import ProfileMovieItem from '../components/ProfileMovieItem'
import ProfileShowItem from '../components/ProfileShowItem';
import axios from 'axios';
import AuthHelper from '../Utils/AuthHelper';
import { NavLink } from 'react-router-dom';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            whatList: 'watchlist',
            selectValue: 'Movies'
        };
        this.userID = '';
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
        this.setState({
            whatList: 'watchlist'
        });
    };

    handleWatchedlistClick = event => {
        this.setState({
            whatList: 'watchedlist'
        });
    };

    handleSelectChange = event => {
        this.setState({
            selectValue: event.target.value
        });

        console.log('EVENT.TARGET.VALUE :', event.target.value);
        console.log('THIS.STATE.SELECTVALUE :', this.state.selectValue);
    };

    handleItemClick = id => {};


    render() {
        const { user, whatList, selectValue } = this.state;
        const { movies_list, shows_list } = this.state.user;
        // Check if the object that holds user info is empty or not
        return Object.entries(user).length > 0 &&
            movies_list.watch_list.length >= 0 &&
            movies_list.watched_list.length >= 0 &&
            shows_list.watch_list.length >= 0 &&
            shows_list.watched_list.length >= 0 ? (
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
                        <NavLink
                            to={
                                '/profile/' +
                                this.state.user.name +
                                '/watchlist'
                            }
                            onClick={this.handleWatchlistClick}
                            className="header-btns"
                        >
                            Watch List
                        </NavLink>
                        <div className="ver-line"></div>
                        <NavLink
                            to={
                                '/profile/' +
                                this.state.user.name +
                                '/watchedlist'
                            }
                            onClick={this.handleWatchedlistClick}
                            className="header-btns"
                        >
                            Watched List
                        </NavLink>
                    </div>
                    <hr className="line" />
                    <center>
                        <select
                            className="select-input"
                            value={selectValue}
                            onChange={this.handleSelectChange}
                        >
                            <option value="Movies">Movies</option>
                            <option value="TvShows">TvShows</option>
                        </select>
                    </center>
                </div>
                {movies_list.watch_list.length === 0 ? (
                    <center>
                        <img
                            className="empty"
                            src={require('../Assets/Images/Empty.svg')}
                            alt="empty list"
                        />
                    </center>
                ) : (
                    <div className="lists">
                        {movies_list.watch_list.length > 0 &&
                        whatList === 'watchlist' &&
                        selectValue === 'Movies' ? (
                            movies_list.watch_list.map(movie => {
                                return (
                                    <ProfileMovieItem
                                        key={movie.id}
                                        movie={movie}
                                        clicked={() =>
                                            this.handleItemClick(movie.id)
                                        }
                                    />
                                );
                            })
                            
                        ) : movies_list.watched_list.length > 0 &&
                          whatList === 'watchedlist' &&
                          selectValue === 'Movies' ? (
                            movies_list.watched_list.map(movie => {
                                return (
                                    <ProfileMovieItem
                                        key={movie.id}
                                        movie={movie}
                                        clicked={() =>
                                            this.handleItemClick(movie.id)
                                        }
                                    />
                                );
                            })
                        ) : shows_list.watch_list.length > 0 &&
                          whatList === 'watchlist' &&
                          selectValue === 'TvShows' ? (
                            shows_list.watch_list.map(show => {
                                return (
                                    <ProfileShowItem
                                        key={show.id}
                                        show={show}
                                        clicked={() =>
                                            this.handleItemClick(show.id)
                                        }
                                    />
                                );
                            })
                        ) : shows_list.watched_list.length > 0 &&
                          whatList === 'watchedlist' &&
                          selectValue === 'TvShows' ? (
                            shows_list.watched_list.map(show => {
                                return (
                                    <ProfileShowItem
                                        key={show.id}
                                        show={show}
                                        clicked={() =>
                                            this.handleItemClick(show.id)
                                        }
                                    />
                                );
                            })
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
            <h3>Loading...</h3>
        );
    }
}

export default Profile;
