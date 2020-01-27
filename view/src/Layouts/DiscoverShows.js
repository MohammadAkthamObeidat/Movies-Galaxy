import React, { Component } from 'react';
import axios from 'axios';
import ShowItem from '../components/ShowItem';
import '../Assets/CSS/Discover.css';
import { Link, NavLink } from 'react-router-dom';
class DiscoverShows extends Component {
    state = {
        trendingShows: [],
        popularShows: [],
        popularity: 'popular'
    };

    //@GET
    //Fetch Trending Shows.
    getTrendingShows = async event => {
        const trendingShowsResponse = await axios.get('/shows/trending');
        this.setState({
            trendingShows: trendingShowsResponse.data.data.trendingShows,
            popularity: 'trending'
        });
    };
    //@GET
    //Fetch Popular Shows.
    getPopularShows = async event => {
        const popularShowsResponse = await axios.get('/shows/popular');
        this.setState({
            popularShows: popularShowsResponse.data.data.popularShows,
            popularity: 'popular'
        });
    };

    componentDidMount = async () => {
        this.getPopularShows();
    };

    handleItemClick = (id) => {

    }
    render() {
        const { popularShows, trendingShows, popularity } = this.state;

        return this.state ? (
            <div className="discover-container">
                <div className="discover-list-header">
                    <hr className="line" />
                    <div className="header-tabs">
                        <NavLink
                            to={{
                                pathname: '/discover/shows/trending'
                            }}
                            onClick={this.getTrendingMovies}
                            className="header-btns"
                        >
                            Trending
                        </NavLink>
                        <div className="ver-line"></div>
                        <NavLink
                            to={{
                                pathname: '/discover/shows/popular'
                            }}
                            onClick={this.getPopularMovies}
                            className="header-btns"
                        >
                            Popular
                        </NavLink>
                    </div>
                    <hr className="line" />
                </div>
                <div className="movies-show-container">
                    {popularity === 'popular'
                        ? popularShows.map(show => {
                              return (
                                  <Link
                                      to={'/details/' + show.id}
                                      key={show.id}
                                  >
                                      <ShowItem
                                          show={show}
                                          clicked={() =>
                                              this.handleItemClick(show.id)
                                          }
                                      />
                                  </Link>
                              );
                          })
                        : popularity === 'trending'
                        ? trendingShows.map(show => {
                              return (
                                  <Link
                                      to={'/details/' + show.id}
                                      key={show.id}
                                  >
                                      <ShowItem
                                          show={show}
                                          clicked={() =>
                                              this.handleItemClick(show.id)
                                          }
                                      />
                                  </Link>
                              );
                          })
                        : ''}
                </div>
            </div>
        ) : (
            ''
        );
    }
}
export default DiscoverShows;
