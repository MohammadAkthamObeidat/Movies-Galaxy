import React, { Component } from 'react';
import '../Assets/CSS/Nav.css';
import SearchField from '../components/SearchField';
import { Link, NavLink } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';

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
                    <NavLink
                        exact
                        to={{
                            pathname: '/discover/movies/popular'
                        }}
                        className=" login-btn link-behaviour"
                    >
                        Movies
                    </NavLink>
                    <img
                        className="logo"
                        src={require('../Assets/Icons/Logo.svg')}
                        alt=""
                    />
                    <NavLink
                        className=" login-btn link-behaviour"
                        to={{
                            pathname: '/discover/shows/popular'
                        }}
                    >
                        TvShows
                    </NavLink>
                </div>
                {this.props.loggedInStatus === false ? (
                        <NavLink
                            className="link-behaviour login-btn"
                            to="/login"
                        >
                            Login
                        </NavLink>
                ) : (
                    <div className="login-btn">
                        <NavLink
                            to="/profile"
                            className=" login-btn link-behaviour"
                        >
                            Profile
                        </NavLink>
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
