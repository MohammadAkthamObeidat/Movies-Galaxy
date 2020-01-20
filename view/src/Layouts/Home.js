import React, { Component } from 'react';
import '../Assets/CSS/Home.css';
import NavBar from '../components/NavBar';
class Home extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="home-main">
                    <div className="logo-title">
                        <img
                            className="logo"
                            src={require('../Assets/Icons/Logo.svg')}
                            alt="logo"
                        />
                        <p className="title">MOIVES GALAXY</p>
                    </div>
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
