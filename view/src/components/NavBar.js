import React, { Component } from 'react';
import '../Assets/CSS/Nav.css';
import SearchField from '../components/SearchField';
import { Link } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: ''
        };
    }

    logout = event => {
        event.preventDefault();
        const Auth = new AuthHelper();
        if(Auth.logout()){
            this.props.history.push('/')
        }
    };

    

    render() {
        console.log('this.props :', this.props);
        return (
            <nav className="nav-bar">
                <SearchField></SearchField>
                <div className="btns-logo">
                    <li type="none" className="login-btn">
                        <Link className="link-behaviour" to="/discover">
                            Movies
                        </Link>
                    </li>
                    <img
                        className="logo"
                        src={require('../Assets/Icons/Logo.svg')}
                        alt=""
                    />
                    <li type="none" className="login-btn">
                        <Link className="link-behaviour" to="/discover">
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
                    <li onClick={this.logout} type="none" className="login-btn">
                        <Link className="link-behaviour" to="/">
                            Logout
                        </Link>
                    </li>
                )}
                
            </nav>
        );
    }
}

export default NavBar;
