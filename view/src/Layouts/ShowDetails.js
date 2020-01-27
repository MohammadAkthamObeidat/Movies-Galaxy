import React, { Component } from 'react';
import '../Assets/CSS/Details.css';
import GenreChip from '../components/GenreChip';
import ActorItem from '../components/ActorItem';
import CrewItem from '../components/CrewItem';
import axios from 'axios';
import '../Assets/CSS/Modal.css';
class Details extends Component {
    state = {
        loadedShow: null,
        loadedCasts: null,
        loadedCrew: null,
        loadedVideos: null,
        isOpen: false
    };

    openModal = () => {
        this.setState({ isOpen: true });
    };

    componentDidMount = () => {
        console.log(this.props);
        this.loadData();
    };

    loadData() {
        const {
            loadedShow,
            loadedCasts,
            loadedCrew,
            loadedVideos
        } = this.state;
        const { id } = this.props.match.params;
        // Load Show Data.
        if (id) {
            if (!loadedShow || (loadedShow && loadedShow.id !== +id)) {
                axios
                    .get(`/shows/details/${id}`)
                    .then(response => {
                        this.setState({
                            loadedShow: response.data.data.showDetails
                        });
                    })
                    .catch(error => {
                        console.log('error', error);
                    });
            }
        }

        // Load Show Credits.
        if (!(loadedCasts && loadedCrew)) {
            axios
                .get(
                    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=7ba0c7a4a624420802d8a91a4d4fc92c`
                )
                .then(response => {
                    this.setState({
                        loadedCasts: response.data.cast.filter((cast, i) => {
                            return i < 6;
                        }),
                        loadedCrew: response.data.crew.filter((crew, i) => {
                            return i < 4;
                        })
                    });
                })
                .catch(error => {
                    console.log('error', error);
                });
        }

        // Load Show Videos.
        if (!loadedVideos) {
            axios
                .get(
                    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=7ba0c7a4a624420802d8a91a4d4fc92c`
                )
                .then(response => {
                    console.log('MOVIE VIDEOS :', response.data);
                    this.setState({
                        loadedVideos: response.data.results[0]
                    });
                })
                .catch(error => {
                    console.log('error', error);
                });
        }
    }

    render() {
        console.log('LOADED VIDEOS :', this.state.loadedCrew);
        const {
            loadedShow,
            loadedCasts,
            loadedCrew,
            loadedVideos
        } = this.state;

        return loadedShow ? (
            <div className=" details-page">
                <div className="row top-section">
                    <div className="col-1"></div>
                    <div className=" col-3 poster-genres">
                        <img
                            className="row movie-show-poster"
                            src={
                                loadedShow.backdrop_path === null
                                    ? require('../Assets/Images/No Poster BIG.svg')
                                    : `https://image.tmdb.org/t/p/w500${loadedShow.poster_path}`
                            }
                            alt="Poster"
                        />
                        <img
                            src={require('../Assets/Images/big-overlay.svg')}
                            alt="."
                            className="movie-show-poster-overlay"
                        />
                        {/* <img src={require('../Assets/Images/big-overlay.svg')} alt="" className="poster-overlay"/> */}
                        <div className="row genres">
                            {loadedShow.genres.map(genre => {
                                return (
                                    <GenreChip
                                        key={genre.id}
                                        name={genre.name}
                                    ></GenreChip>
                                );
                            })}
                        </div>
                    </div>
                    <div className=" col-5 information">
                        <div className="row">
                            <h2 className="movie-show-title">
                                {loadedShow.name}
                            </h2>
                            <small className="year">
                                ({loadedShow.first_air_date.split('-')[0]})
                            </small>
                        </div>
                        <div className="row control-btns">
                            <img
                                className="btns"
                                src={require('../Assets/Icons/Watched.svg')}
                                alt="."
                            />
                            <img
                                className="btns"
                                src={require('../Assets/Icons/WatchList.svg')}
                                alt="."
                            />
                            <img
                                onClick={() => {
                                    console.log(
                                        'loadedVideos.key',
                                        loadedVideos.key
                                    );
                                    this.setState({ isOpen: true });
                                }}
                                className="trailer"
                                src={require('../Assets/Images/play-trailer-btn.svg')}
                                alt="."
                            />
                        </div>
                        <div className=" row overview-released">
                            <h3 className="overview-head">Overview</h3>
                            <small className="release">
                                {loadedShow.status}
                            </small>
                        </div>
                        <p className="row overview">{loadedShow.overview}</p>
                        <div className="row crew">
                            <h4 className="featured-crew"> Featured Crew </h4>
                            <div className="row crews">
                                {loadedCrew.length > 0
                                    ? loadedCrew.map(crew => {
                                          return loadedCrew.length === 0 ? (
                                              <h3 className="no-crew">
                                                  No Crew Available
                                              </h3>
                                          ) : (
                                              <CrewItem
                                                  key={crew.credit_id}
                                                  crew={crew}
                                              ></CrewItem>
                                          );
                                      })
                                    : ''}
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row bottom-section">
                    <div className="col-1"></div>
                    <div className="col-11">
                        <h2 className="row casts-header">Top Billed Casts</h2>
                        <div className="row casts">
                            {loadedCasts.map(cast => {
                                return (
                                    <ActorItem
                                        key={cast.cast_id}
                                        cast={cast}
                                    ></ActorItem>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            ''
        );
    }
}
export default Details;
