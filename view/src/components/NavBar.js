import React from 'react';
import '../Assets/CSS/Nav.css';
import SearchField from '../components/SearchField';
import MoviesButton from '../components/MoviesButton';
import TvShowButton from '../components/TvShowButton';
const NavBar = () => {
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
            <input type="button" className="login-btn" value="Login"></input>
        </nav>
    );
};

export default NavBar;
