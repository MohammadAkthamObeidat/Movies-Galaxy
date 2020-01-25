import React, { Component } from 'react';
import '../Assets/CSS/Discover.css';
import MovieShowItem from '../components/MovieShowItem';
import axios from 'axios';
class Discover extends Component {
    state = {
        movies: {
            popular: [],
            trending: []
        },
        shows: {
            popular: [],
            trending: []
        }
    };
    componentDidMount = () => {
        axios
            .get('/movies/popular')
            .then(response => {
                console.log(' POPULAR MOVIES RESPONSE :', response.data);
            })
            .catch(error => {
                console.log('error :', error);
            });

        axios
            .get('/movies/trending')
            .then(response => {
                console.log(' TRENDING MOVIES RESPONSE :', response.data);
            })
            .catch(error => {
                console.log('error :', error);
            });

        axios
            .get('/shows/popular')
            .then(response => {
                console.log(' POPULAR SHOWS RESPONSE :', response.data);
            })
            .catch(error => {
                console.log('error :', error);
            });

        axios
            .get('/shows/trending')
            .then(response => {
                console.log(' POPULAR SHOWS RESPONSE :', response.data);
            })
            .catch(error => {
                console.log('error :', error);
            });
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
