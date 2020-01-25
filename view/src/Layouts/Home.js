import React, { Component } from 'react';
import '../Assets/CSS/Home.css';
import NavBar from '../components/NavBar';
import { Route, Link } from 'react-router-dom';
import Profile from '../Layouts/Profile';
import AuthHelper from '../Utils/AuthHelper';
import axios from 'axios';
class Home extends Component {
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
                axios.post(`/get-user/${response.id}`).then(res => {
                    if (
                        res.status === 200 &&
                        res.data.user._id === response.id
                    ) {
                        this.setState({
                            isLoggedIn: true,
                            userID: response.id
                        });
                    } else {
                        this.setState({
                            isLoggedIn: false,
                        });
                    }
                }).catch(error => {
                    console.log('ERROR :', error);
                });
            }
        } catch (error) {
            console.log('error :', error);
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
                                        <Link
                                            to="/register"
                                            className="link-behaviour"
                                        >
                                            JOIN MOVIES GALAXY IT'S FREE
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
