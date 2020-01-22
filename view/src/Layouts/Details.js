import React, { Component } from 'react';
import '../Assets/CSS/Details.css';
import NavBar from '../components/NavBar';
import GenreChip from '../components/GenreChip';
import ActorItem from '../components/ActorItem';
import CrewItem from '../components/CrewItem';
class Details extends Component {
    render() {
        return (
            <div className=" details-page">
                <NavBar></NavBar>
                <div className="row top-section">
                    <div className="col-1"></div>
                    <div className=" col-3 poster-genres">
                        <img
                            className="row movie-show-poster"
                            src={require('../Assets/Images/poster.svg')}
                            alt="Poster"
                        />
                        <img src={require('../Assets/Images/big-overlay.svg')} alt="" className="movie-show-poster-overlay"/>
                        {/* <img src={require('../Assets/Images/big-overlay.svg')} alt="" className="poster-overlay"/> */}
                        <div className="row genres">
                            <GenreChip></GenreChip>
                            <GenreChip></GenreChip>
                            <GenreChip></GenreChip>
                            <GenreChip></GenreChip>
                        </div>
                    </div>
                    <div className=" col-5 information">
                        <div className="row">
                            <h2 className="movie-show-title">Abominable</h2>
                            <small className="year">(2019)</small>
                        </div>
                        <div className="row control-btns">
                            <img
                                className="btns"
                                src={require('../Assets/Icons/Watched.svg')}
                                alt=""
                                srcset=""
                            />
                            <img
                                className="btns"
                                src={require('../Assets/Icons/WatchList.svg')}
                                alt=""
                                srcset=""
                            />
                            <img
                                className="trailer"
                                src={require('../Assets/Images/play-trailer-btn.svg')}
                            ></img>
                        </div>
                        <div className=" row overview-released">
                            <h3 className="overview-head">Overview</h3>
                            <small className="release">Released</small>
                        </div>
                        <p className="row overview">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi, ullam quibusdam. Similique molestiae
                            minima voluptatibus quo! Similique molestias dolores
                            odio delectus voluptatum. Facilis tenetur obcaecati
                            quo nihil in doloribus iusto! Accusamus quisquam
                            dolor fugit, itaque temporibus beatae quasi suscipit
                            veritatis eligendi quaerat quibusdam! Nam cumque
                            quam tempore totam cum possimus! Impedit tenetur
                            molestias quia similique sapiente nobis animi eius?
                            Magnam. Voluptas veritatis consequuntur
                            reprehenderit culpa libero est quam numquam
                            voluptatum harum repellat beatae debitis
                            necessitatibus impedit suscipit, dignissimos neque
                            omnis velit magnam saepe fugit soluta dolorem quia
                            sapiente et. Tenetur. Voluptates vitae officiis
                            deserunt sed perferendis quas similique non maxime
                            maiores atque minima in, unde recusandae. Nobis
                            architecto eligendi, aliquid quae molestias tempora
                            exercitationem rem harum repellat officia aspernatur
                            dicta?
                        </p>
                        <div className="row crew">
                            <h4 className="featured-crew"> Featured Crew </h4>
                            <div className="row crews">
                                <CrewItem></CrewItem>
                                <CrewItem></CrewItem>
                                <CrewItem></CrewItem>
                                <CrewItem></CrewItem>
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
                            <ActorItem></ActorItem>
                            <ActorItem></ActorItem>
                            <ActorItem></ActorItem>
                            <ActorItem></ActorItem>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Details;
