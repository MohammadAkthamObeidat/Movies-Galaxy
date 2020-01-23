import React, { Component } from 'react';
import '../Assets/CSS/Home.css';
import NavBar from '../components/NavBar';
import Register from '../Layouts/Register';
import Login from '../Layouts/Login';
import { Route, Link } from 'react-router-dom';
import Profile from '../Layouts/Profile';
import AuthHelper from '../Utils/AuthHelper'
class Home extends Component {
    state = {
        isLoggedIn: false
    };


    componentDidMount = () => {
        const Auth = new AuthHelper();
        if (!(Auth.isTokenExpired(Auth.getToken()))){
            Auth.getConfirm();
        }
    };

    render() {
        return (
            <Route
                path="/"
                exact
                render={() => {
                    if (this.state.isLoggedIn) {
                        return <Profile />;
                    } else {
                        return (
                            <div className="home-page">
                                <NavBar></NavBar>
                                <div className="home-main">
                                    <img
                                        className="logo-title"
                                        src={require('../Assets/Icons/logo-title.svg')}
                                        alt="logo"
                                    />
                                    <hr />
                                    <p className="welcome-msg">
                                        Discover, Organize & Stay Updated.
                                    </p>
                                    <button className="join-btn">
                                        <Link to="/register">
                                            JOIN MOIVES GALAXY IT'S FREE
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        );
                    }
                }}
            />
        );
    }
}

export default Home;
