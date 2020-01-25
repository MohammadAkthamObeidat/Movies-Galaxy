import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Assets/CSS/Discover.css';
import MovieShowItem from '../components/MovieShowItem';
import axios from 'axios';
class Discover extends Component {
    componentDidMount = () => {
        axios
            .get()
            .then()
            .catch();
    };

    render() {
        return (
            <div className="discover-container">
                <div className="discover-list-header">
                    <hr className="line" />
                    <div className="header-tabs">
                        <button className="header-btns">Trending</button>
                        <div className="ver-line"></div>
                        <button className="header-btns">Popular</button>
                    </div>
                    <hr className="line" />
                </div>
                <div className="movies-show-container">
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
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                    <MovieShowItem></MovieShowItem>
                </div>
            </div>
        );
    }
}

export default Discover;
