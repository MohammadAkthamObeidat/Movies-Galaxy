import React, { Component } from 'react';
import '../Assets/CSS/Home.css';
import NavBar from '../components/NavBar';
import Register from '../Layouts/Register'
import Login from '../Layouts/Login'

class Home extends Component {
    render() {
        return (
            <div>
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
                        JOIN MOIVES GALAXY IT'S FREE
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;
