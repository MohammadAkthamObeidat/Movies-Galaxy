import React, { Component } from 'react';
import '../Assets/CSS/Nav.css';
import SearchField from '../components/SearchField';
import MoviesButton from '../components/MoviesButton';
import TvShowButton from '../components/TvShowButton';
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

    componentDidMount = () => {
        const Auth = new AuthHelper();
        try {
            const response = Auth.getConfirm();
            if (response.id.length > 0) {
                this.setState({
                    isLoggedIn: true,
                    userID: response.id
                });
            }
        } catch (error) {
            console.log('error :', error);
        }
    };

    logout = () => {
        const Auth = new AuthHelper();
        Auth.logout()
    }

    render() {
        return (
            <nav className="nav-bar">
                <SearchField></SearchField>
                <div className="btns-logo">
                    <MoviesButton></MoviesButton>
                    <img
                        className="logo"
                        src={require('../Assets/Icons/Logo.svg')}
                        alt=""
                    />
                    <TvShowButton></TvShowButton>
                </div>
                {this.isLoggedIn ? (
                    <li type = 'none'  className="login-btn" >
                        <Link className="link-behaviour" to="/login">
                            Login
                        </Link>
                    </li>
                ) : (
                    <li type = 'none' className="login-btn" >
                        <Link
                            onClick={this.logout}
                            className="link-behaviour"
                            to="/"
                        >
                            Logout
                        </Link>
                    </li>
                )}
            </nav>
        );
    }
}

export default NavBar;
