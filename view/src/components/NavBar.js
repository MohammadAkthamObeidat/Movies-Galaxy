import React, { Component } from 'react';
import '../Assets/CSS/Nav.css';
import SearchField from '../components/SearchField';
import { Link } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';
import axios from 'axios';

class NavBar extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        trendingMovies: [],
        trendingShows: []
    };

    logout = event => {
        const Auth = new AuthHelper();
        Auth.logout();
    };

    render() {
        return this.state ? (
            <nav className="nav-bar">
                <SearchField></SearchField>
                <div className="btns-logo">
                    <li type="none" className="login-btn">
                        <Link
                            to={{
                                pathname: '/discover/movies'
                            }}
                            className="link-behaviour"
                        >
                            Movies
                        </Link>
                    </li>
                    <img
                        className="logo"
                        src={require('../Assets/Icons/Logo.svg')}
                        alt=""
                    />
                    <li type="none" className="login-btn">
                        <Link
                            className="link-behaviour"
                            to={{
                                pathname: '/discover/shows'
                            }}
                        >
                            TvShows
                        </Link>
                    </li>
                </div>
                {this.props.loggedInStatus === false ? (
                    <li type="none" className="login-btn">
                        <Link className="link-behaviour" to="/login">
                            Login
                        </Link>
                    </li>
                ) : (
                    <div className="login-btn">
                        <Link
                            to="/profile"
                            className=" login-btn link-behaviour"
                        >
                            Profile
                        </Link>
                        <Link
                            to="/"
                            onClick={this.logout}
                            className=" login-btn link-behaviour"
                        >
                            Logout
                        </Link>
                    </div>
                )}
            </nav>
        ) : (
            ''
        );
    }
}

export default NavBar;
