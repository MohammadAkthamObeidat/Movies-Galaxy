import React, { Component } from 'react';
import '../Assets/CSS/MovieShowItem.css';
class MovieShowItem extends Component {
    render() {
        return (
            <div className="item-container">
                <div className="poster-title">
                    <img
                        className="poster"
                        src={require('../Assets/Images/itemPoster.svg')}
                        alt="poster"
                    />
                    <img
                        src={require('../Assets/Images/MovieItemOverlay.svg')}
                        alt=""
                        className = 'overlay'
                    />
                    <h3 className="movie-title">Abominable</h3>
                    <small className="date">(2019)</small>
                </div>
                <div className="btns-rate">
                    <div className="btns">
                        <img
                            className="watchlist-btn"
                            src={require('../Assets/Icons/WatchList-Seq.svg')}
                            alt=""
                        />
                        <img
                            className="watched-btn"
                            src={require('../Assets/Icons/Watched-Seq.svg')}
                            alt=""
                        />
                    </div>
                    <small className="rate">9/10</small>
                </div>
            </div>
        );
    }
}
export default MovieShowItem;
