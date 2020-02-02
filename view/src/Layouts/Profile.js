import React, { Component } from 'react';
import '../Assets/CSS/Profile.css';
import ProfileMovieItem from '../components/ProfileMovieItem';
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

    getUser = async () => {
        const getUser = await axios.post(`/get-user/${this.state.user._id}`);
        this.setState({ ...this.state.user, user: getUser });
    };

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

    // Removing Methods ***********************************************************************************************************************

    // Utility Function To Remove From Watchlist.
    handleRemoveMovieFromWatchlist = async id => {
        // Get All Movie Details According To Movie ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        let newWatchlist;
        newWatchlist = this.state.user.movies_watch_list.filter(
            element => element.id !== id
        );
        // Add Movie To Authenticated User Watchlist.
        const deletedMovie = await axios.patch(
            `/user/movie/delete/watchlist/${this.state.user._id}`,
            newWatchlist,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('deletedMovie :', deletedMovie);
        this.forceUpdate();
    };

    // Utility Function To Remove From Watchedlist.
    handleRemoveMovieFromWatchedlist = async id => {
        // Get All Movie Details According To Movie ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        // let newWatchlist;
        // newWatchlist = this.state.user.movies_watched_list.filter(
        //     element => element.id !== id
        // );

         const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;
        console.log('movieDetails :', movieDetails);
        // Add Movie To Authenticated User Watchlist.
        const deletedMovie = await axios.patch(
            `/user/movie/delete/watchedlist/${this.state.user._id}`,
            movieDetails,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('deletedMovie :', deletedMovie);

    };

    // Utility Function To Remove From Watchlist.
    handleRemoveShowFromWatchlist = async id => {
        // Get All Movie Details According To Movie ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        let newWatchlist;
        newWatchlist = this.state.user.shows_watch_list.filter(
            element => element.id !== id
        );
        // Add Movie To Authenticated User Watchlist.
        const deletedShow = await axios.patch(
            `/user/show/delete/watchlist/${this.state.user._id}`,
            newWatchlist,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('deletedMovie :', deletedShow);
    };

    // Utility Function To Remove From Watchedlist.
    handleRemoveShowFromWatchedlist = async id => {
        // Get All Movie Details According To Movie ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        let newWatchlist;
        newWatchlist = this.state.user.shows_watched_list.filter(
            element => element.id !== id
        );
        // Add Movie To Authenticated User Watchlist.
        const deletedShow = await axios.patch(
            `/user/show/delete/watchedlist/${this.state.user._id}`,
            newWatchlist,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('deletedMovie :', deletedShow);
    };

    // Adding Methods ***********************************************************************************************************************

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

            if (
                this.state.user.movies_watched_list.map(show => {
                    if (show.id === id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            ) {
                this.handleRemoveMovieFromWatchedlist(id);
            }

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
            const getUser = await axios.get(`get-user/${this.state.user._id}`);
            this.setState({
                ...this.state.user,
                user: getUser.data.user
            });

            if (
                this.state.user.movies_watch_list.map(movie => {
                    if (movie.id === id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            ) {
                this.handleRemoveMovieFromWatchlist(id);
            }

            console.log('ADDED MOVIE :', addedMovie);
        } else {
            console.log('Movie Is Already Exist In Your Movies WatchList !!!');
        }

        // Remove Movie if Exist in Watchlist After Adding It In Watchedlist.
    };

    // Utility Function To Add shows To WatchList.
    handleAddShowToWatchlist = async id => {
        const Auth = new AuthHelper();
        const response = Auth.getConfirm();
        this.userID = response.id;
        axios
            .post(`/get-user/${this.userID}`)
            .then(response => {
                console.log('RESPONSE :', response.data.user);
                this.setState({
                    ...this.state.user,
                    user: response.data.user
                });
            })
            .catch(error => {
                console.log('error', error);
            });
        // Use AuthHelper Class To Get User ID.

        const token = Auth.getToken();

        // Get All show Details According To show ID.
        const loadedShow = await axios.get(`/shows/details/${id}`);
        const { showDetails } = loadedShow.data.data;

        // Add show To Authenticated User Watchlist.
        let isExist;
        await this.state.user.shows_watch_list.forEach(show => {
            if (show.id === id) {
                isExist = true;
            } else {
                isExist = false;
            }
        });
        if (showDetails && isExist === false) {
            const addedShow = await axios.patch(
                `/user/show/add/watchlist/${this.state.user._id}`,
                showDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const getUser = await axios.get(`get-user/${this.state.user._id}`);
            this.setState({
                ...this.state.user,
                user: getUser.data.user
            });

            if (
                this.state.user.shows_watched_list.map(show => {
                    if (show.id === id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            ) {
                this.handleRemoveShowFromWatchedlist(id);
            }

            console.log('ADDED SHOW :', addedShow);
        } else {
            console.log('Show Is Already Exist In Your Shows WatchList !!!');
        }
    };

    // Utility Function To Add shows To WatchList.
    handleAddShowToWatchedlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        const loadedShow = await axios.get(`/shows/details/${id}`);
        const { showDetails } = loadedShow.data.data;

        // Add show To Authenticated User Watchlist.
        let isExist;
        await this.state.user.shows_watched_list.forEach(show => {
            if (show.id === id) {
                isExist = true;
            } else {
                isExist = false;
            }
        });
        if (showDetails && isExist === false) {
            const addedShow = await axios.patch(
                `/user/show/add/watchedlist/${this.state.user._id}`,
                showDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const getUser = await axios.get(`get-user/${this.state.user._id}`);
            this.setState({ ...this.state.user, user: getUser.data.user });

            if (
                this.state.user.shows_watch_list.map(show => {
                    if (show.id === id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            ) {
                this.handleRemoveShowFromWatchlist(id);
            }

            console.log('ADDED SHOW :', addedShow);
        } else {
            console.log('Show Is Already Exist In Your Shows WatchList !!!');
        }
    };

    // Interacting With Layout Elements Methods ******************************************************************************************

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
    };

    handleItemClick = id => {};

    render() {
        const { user, whatList, selectValue } = this.state;
        const {
            movies_watch_list,
            movies_watched_list,
            shows_watch_list,
            shows_watched_list
        } = this.state.user;
        // Check if the object that holds user info is empty or not
        return Object.entries(user).length > 0 &&
            movies_watch_list.length >= 0 &&
            movies_watched_list.length >= 0 &&
            shows_watch_list.length >= 0 &&
            shows_watched_list.length >= 0 ? (
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
                {movies_watch_list.length === 0 ? (
                    <center>
                        <img
                            className="empty"
                            src={require('../Assets/Images/Empty.svg')}
                            alt="empty list"
                        />
                    </center>
                ) : (
                    <div className="lists">
                        {movies_watch_list.length > 0 &&
                        whatList === 'watchlist' &&
                        selectValue === 'Movies' ? (
                            movies_watch_list.map(movie => {
                                return (
                                    <ProfileMovieItem
                                        whatList="movie watchlist"
                                        key={movie.id}
                                        movie={movie}
                                        clicked={() =>
                                            this.handleItemClick(movie.id)
                                        }
                                        removeFromWatchlist={
                                            this.handleRemoveMovieFromWatchlist
                                        }
                                        addToWatchlist={
                                            this.handleAddMovieToWatchlist
                                        }
                                        removeFromWatchedlist={
                                            this
                                                .handleRemoveMovieFromWatchedlist
                                        }
                                        addToWatchedlist={
                                            this.handleAddMovieToWatchedlist
                                        }
                                    />
                                );
                            })
                        ) : movies_watched_list.length > 0 &&
                          whatList === 'watchedlist' &&
                          selectValue === 'Movies' ? (
                            movies_watched_list.map(movie => {
                                return (
                                    <ProfileMovieItem
                                        whatList="movie watchedlist"
                                        key={movie.id}
                                        movie={movie}
                                        clicked={() =>
                                            this.handleItemClick(movie.id)
                                        }
                                        removeFromWatchlist={
                                            this.handleRemoveMovieFromWatchlist
                                        }
                                        addToWatchlist={
                                            this.handleAddMovieToWatchlist
                                        }
                                        removeFromWatchedlist={
                                            this
                                                .handleRemoveMovieFromWatchedlist
                                        }
                                        addToWatchedlist={
                                            this.handleAddMovieToWatchedlist
                                        }
                                    />
                                );
                            })
                        ) : shows_watch_list.length > 0 &&
                          whatList === 'watchlist' &&
                          selectValue === 'TvShows' ? (
                            shows_watch_list.map(show => {
                                return (
                                    <ProfileShowItem
                                        whatList="show watchlist"
                                        key={show.id}
                                        show={show}
                                        clicked={() =>
                                            this.handleItemClick(show.id)
                                        }
                                        removeFromWatchlist={
                                            this.handleRemoveShowFromWatchlist
                                        }
                                        addToWatchlist={
                                            this.handleAddShowToWatchlist
                                        }
                                        removeFromWatchedlist={
                                            this.handleRemoveShowFromWatchedlist
                                        }
                                        addToWatchedlist={
                                            this.handleAddShowToWatchedlist
                                        }
                                    />
                                );
                            })
                        ) : shows_watched_list.length > 0 &&
                          whatList === 'watchedlist' &&
                          selectValue === 'TvShows' ? (
                            shows_watched_list.map(show => {
                                return (
                                    <ProfileShowItem
                                        whatList="show watchedlist"
                                        key={show.id}
                                        show={show}
                                        clicked={() =>
                                            this.handleItemClick(show.id)
                                        }
                                        removeFromWatchlist={
                                            this.handleRemoveShowFromWatchlist
                                        }
                                        addToWatchlist={
                                            this.handleAddShowToWatchlist
                                        }
                                        removeFromWatchedlist={
                                            this.handleRemoveShowFromWatchedlist
                                        }
                                        addToWatchedlist={
                                            this.handleAddShowToWatchedlist
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
