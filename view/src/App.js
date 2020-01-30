import React, { Component } from 'react';
import Home from './Layouts/Home';
import Register from './Layouts/Register';
import Login from './Layouts/Login';
import Profile from './Layouts/Profile';
import DiscoverMovies from './Layouts/DiscoverMovies';
import DiscoverShows from './Layouts/DiscoverShows';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthHelper from './Utils/AuthHelper';
import axios from 'axios';
import MovieDetails from './Layouts/MovieDetails';
import ShowDetails from './Layouts/ShowDetails';
import SearchResults from './Layouts/SearchResults'
class App extends Component {
    // App State.
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: ''
        };
    }

    componentDidMount = () => {
        const Auth = new AuthHelper();
        try {
            const response = Auth.getConfirm();
            if (response.id.length > 0) {
                axios.post(`/get-user/${response.id}`).then(res => {
                    if (
                        res.status === 200 &&
                        res.data.user._id === response.id
                    ) {
                        this.setState({
                            isLoggedIn: true,
                            userID: response._id
                        });
                    }
                });
            } else {
                this.setState({
                    isLoggedIn: false
                });
            }
        } catch (error) {
            console.log('error :', error);
        }
    };
    // Rendering
    render() {
        return this.state ? (
            <BrowserRouter>
                <NavBar loggedInStatus={this.state.isLoggedIn} />
                <div className="app">
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={props => (
                                <Home
                                    {...props}
                                    isAuthed={this.state.isLoggedIn}
                                />
                            )}
                        />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/search-results" component={SearchResults} />
                        <Route
                            path="/discover/movies/popular"
                            component={DiscoverMovies}
                        />
                        <Route
                            path="/discover/movies/trending"
                            component={DiscoverMovies}
                        />
                        <Route
                            path="/discover/shows/popular"
                            component={DiscoverShows}
                        />
                        <Route
                            path="/discover/shows/trending"
                            component={DiscoverShows}
                        />
                        <Route
                            path="/movie-details/:id"
                            component={MovieDetails}
                        />
                        <Route
                            path="/show-details/:id"
                            component={ShowDetails}
                        />
                        <Route
                            path="/profile/:userName/watchlist"
                            component={Profile}
                        />
                        <Route
                            path="/profile/:userName/watchedlist"
                            component={Profile}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        ) : (
            ''
        );
    }
}

export default App;
