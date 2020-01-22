import React, { Component } from 'react';
import Home from './Layouts/Home';
import Register from './Layouts/Register';
import Login from './Layouts/Login';
import Details from './Layouts/Details';
import MovieShowItem from './components/MovieShowItem';
import ActorItem from './components/ActorItem';
import Profile from './Layouts/Profile';
import Discover from './Layouts/Discover';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
    // App State.
    state = {};

    // Rendering
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/details" component={Details} />
                        {/* <Route
                            path="/movies/trending"
                            component={TrendingMovies}
                        />
                        <Route
                            path="/movies/popular"
                            component={PopularMovies}
                        />
                        <Route
                            path="/shows/trending"
                            component={TrendingShows}
                        />
                        <Route path="/shows/popular" component={PopularShows} />
                        <Route path="/watchlist" component={Watchlist} />
                        <Route path="/watchedlist" component={Watchedlist} /> */}
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
