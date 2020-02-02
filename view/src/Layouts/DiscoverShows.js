import React, { Component } from 'react';
import axios from 'axios';
import ShowItem from '../components/ShowItem';
import '../Assets/CSS/Discover.css';
import { NavLink } from 'react-router-dom';
import AuthHelper from '../Utils/AuthHelper';
class DiscoverShows extends Component {
    state = {
        user: {},
        trendingShows: [],
        popularShows: [],
        popularity: 'popular',

    };

    // Utility Function To Add shows To WatchList.
    handleAddShowToWatchlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        // Get All show Details According To show ID.
        const loadedShow = await axios.get(`/shows/details/${id}`);
        const { showDetails } = loadedShow.data.data;

        let isExist;
        if (this.state.user.shows_watch_list.length === 0) {
            isExist = false;
        } else {
            await this.state.user.shows_watch_list.forEach(show => {
                if (show.id === id) {
                    isExist = true;
                } else {
                    isExist = false;
                }
            });
        }
        // Add show To Authenticated User Watchlist.
        if (showDetails && isExist === false) {
            const addedShow = await axios.patch(
                `/user/show/add/watchlist/${this.state.user._id}`,
                showDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('ADDED SHOW :', addedShow);
        } else {
            console.log('Show Is Already Exist In Your Shows WatchList !!!');
        }
    };

    // Utility Function To Add shows To WatchList.
    handleAddShowToWatchedlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const token = Auth.getToken();

        // Get User Information Who Want To Add To Watchlist.
        /* const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user }); */

        // Get All show Details According To show ID.
        const loadedShow = await axios.get(`/shows/details/${id}`);
        const { showDetails } = loadedShow.data.data;

        let isExist;
        if (this.state.user.shows_watched_list.length === 0) {
            isExist = false;
        } else {
            await this.state.user.shows_watched_list.forEach(show => {
                if (show.id === id) {
                    isExist = true;
                } else {
                    isExist = false;
                }
            });
        }

        // Add show To Authenticated User Watchlist.
        if (showDetails && isExist === false) {
            const addedShow = await axios.patch(
                `/user/show/add/watchedlist/${this.state.user._id}`,
                showDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('ADDED SHOW :', addedShow);
        } else {
            console.log('Show Is Already Exist In Your Shows WatchList !!!');
        }
    };

    //@GET
    //Fetch Trending Shows.
    getTrendingShows = async event => {
        const trendingShowsResponse = await axios.get('/shows/trending');
        console.log('trendingShowsResponse :', trendingShowsResponse);
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
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({
            ...this.state.user,
            user: loadedUser.data.user
        });
        this.getPopularShows();
    };

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
                            onClick={this.getTrendingShows}
                            className="header-btns"
                        >
                            Trending
                        </NavLink>
                        <div className="ver-line"></div>
                        <NavLink
                            to={{
                                pathname: '/discover/shows/popular'
                            }}
                            onClick={this.getPopularShows}
                            className="header-btns"
                        >
                            Popular
                        </NavLink>
                    </div>
                    <hr className="line" />
                </div>
                <div className="shows-show-container">
                    {popularity === 'popular'
                        ? popularShows.map(show => {
                              return (
                                  <ShowItem
                                      key={show.id}
                                      addToWatchlist={
                                          this.handleAddShowToWatchlist
                                      }
                                      addToWatchedlist={
                                          this.handleAddShowToWatchedlist
                                      }
                                      show={show}
                                  />
                              );
                          })
                        : popularity === 'trending'
                        ? trendingShows.map(show => {
                              return (
                                  <ShowItem
                                      key={show.id}
                                      addToWatchlist={
                                          this.handleAddShowToWatchlist
                                      }
                                      addToWatchedlist={
                                          this.handleAddShowToWatchedlist
                                      }
                                      show={show}
                                  />
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
