import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import ShowItem from '../components/ShowItem';
import '../Assets/CSS/Discover.css';
import AuthHelper from '../Utils/AuthHelper';
class SearchResults extends Component {
    state = {
        searchResult: [],
        query: '',
        user: {},
        isMovieExistInWatchlist: false,
        isMovieExistInWatchedlist: false,
        isShowExistInWatchlist: false,
        isShowExistInWatchedlist: false
    };

    // Utility Function To Add Movies To WatchList.
    handleAddMovieToWatchlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;
        const token = Auth.getToken();

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user });

        // Get All Movie Details According To Movie ID.
        const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;

        const { movies_list } = this.state.user;
        movies_list.watch_list.map(movie => {
            if (movie.id === id) {
                return this.setState({ isMovieExistInWatchlist: true });
            } else {
                return this.setState({ isMovieExistInWatchlist: false });
            }
        });

        // Add Movie To Authenticated User Watchlist.
        if (movieDetails && this.state.isMovieExistInWatchlist === false) {
            const addedMovie = await axios.patch(
                `/user/movie/add/watchlist/${userID}`,
                movieDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('ADDED MOVIE :', addedMovie);
        } else {
            console.log('Movie Is Already Exist In Your Movies WatchList !!!');
        }
    };

    //*************************************************************************************************************************** */

    // Utility Function To Add Movies To WatchList.
    handleAddMovieToWatchedlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;
        const token = Auth.getToken();

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user });

        // Get All Movie Details According To Movie ID.
        const loadedMovie = await axios.get(`/movies/details/${id}`);
        const { movieDetails } = loadedMovie.data.data;

        const { movies_list } = this.state.user;
        movies_list.watched_list.map(movie => {
            if (movie.id === id) {
                return this.setState({ isMovieExistInWatchedlist: true });
            } else {
                return this.setState({ isMovieExistInWatchedlist: false });
            }
        });

        // Add Movie To Authenticated User Watchlist.
        if (movieDetails && this.state.isMovieExistInWatchedlist === false) {
            const addedMovie = await axios.patch(
                `/user/movie/add/watchedlist/${userID}`,
                movieDetails,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('ADDED MOVIE :', addedMovie);
        } else {
            console.log('Movie Is Already Exist In Your Movies WatchList !!!');
        }
    };

    //*************************************************************************************************************************** */

    // Utility Function To Add shows To WatchList.
    handleAddShowToWatchlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;
        const token = Auth.getToken();

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user });

        // Get All show Details According To show ID.
        const loadedShow = await axios.get(`/shows/details/${id}`);
        const { showDetails } = loadedShow.data.data;

        const { shows_list } = this.state.user;
        shows_list.watch_list.map(show => {
            if (show.id === id) {
                return this.setState({ isShowExistInWatchlist: true });
            } else {
                return this.setState({ isShowExistInWatchlist: false });
            }
        });

        // Add show To Authenticated User Watchlist.
        if (showDetails && this.state.isShowExistInWatchlist === false) {
            const addedShow = await axios.patch(
                `/user/show/add/watchlist/${userID}`,
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

    //*************************************************************************************************************************** */

    // Utility Function To Add shows To WatchList.
    handleAddShowToWatchedlist = async id => {
        // Use AuthHelper Class To Get User ID.
        const Auth = new AuthHelper();
        const userID = Auth.getConfirm().id;
        const token = Auth.getToken();

        // Get User Information Who Want To Add To Watchlist.
        const loadedUser = await axios.post(`/get-user/${userID}`);
        this.setState({ ...this.state.user, user: loadedUser.data.user });

        // Get All show Details According To show ID.
        const loadedShow = await axios.get(`/shows/details/${id}`);
        const { showDetails } = loadedShow.data.data;

        const { shows_list } = this.state.user;
        shows_list.watched_list.map(show => {
            if (show.id === id) {
                return this.setState({ isShowExistInWatchedlist: true });
            } else {
                return this.setState({ isShowExistInWatchedlist: false });
            }
        });

        // Add show To Authenticated User Watchlist.
        if (showDetails && this.state.isShowExistInWatchedlist === false) {
            const addedShow = await axios.patch(
                `/user/show/add/watchedlist/${userID}`,
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

    //*************************************************************************************************************************** */

    componentDidMount = async () => {
        console.log('this.props :', this.props.location);
        const { query } = this.props.location.state;
        const searchResult = await await axios.get(`/movies/search/${query}`);
        this.setState({
            searchResult: searchResult.data.data.searchResult,
            query: searchResult.data.data.query
        });
        console.log('LOADEDRESULTS :', searchResult);
        console.log('THIS.STATE.SEARCHRESULT :', this.state.searchResult);
        console.log('THIS.STATE.QUERY :', this.state.query);
    };

    render() {
        const { searchResult, query } = this.state;
        return this.state? (
            <div className="movies-show-container">
                {query === 'Movie'
                    ? searchResult.map(movie => {
                          return (
                                <MovieItem
                                    addToWatchlist={
                                        this.handleAddMovieToWatchlist
                                    }
                                    addToWatchedlist={
                                        this.handleAddMovieToWatchedlist
                                    }
                                    key={movie.id}
                                    movie={movie}
                                />
                          );
                      })
                    : query === 'TvShow'
                    ? searchResult.map(show => {
                          return (
                              <ShowItem
                                  addToWatchlist={this.handleAddShowToWatchlist}
                                  addToWatchedlist={
                                      this.handleAddShowToWatchedlist
                                  }
                                  key={show.id}
                                  show={show}
                              />
                          );
                      })
                    : ''}
            </div>
        ) : (
            ''
        );
    }
}
export default SearchResults;
