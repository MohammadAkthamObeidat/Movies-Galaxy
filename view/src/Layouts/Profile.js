import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Assets/CSS/Profile.css';
import MovieShowItem from '../components/MovieShowItem'
class Profile extends Component {
    render() {
        return (
            <div className = 'profile-page'>
                <NavBar></NavBar>
                <div className="container-fluid user-info ">
                    <img
                        className="profile-cover"
                        src={require('../Assets/Images/Profile-cover.svg')}
                        alt="cover"
                    />
                    <img
                        src={require('../Assets/Images/actor.svg')}
                        alt=""
                        className="avatar"
                    />
                    <h3 className="user-name">Mohammad</h3>
                </div>
                <hr className="line" />
                <div className="header-tabs">
                    <button className="header-btns">Watch List</button>
                    <div className="ver-line"></div>
                    <button className="header-btns">Watched</button>
                </div>
                <hr className="line" />
                <div className="lists">
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                </div>
            </div>
        );
    }
}
export default Profile;
