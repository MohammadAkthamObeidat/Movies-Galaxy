import React, { Component } from 'react';
import Home from './Layouts/Home';
import Register from './Layouts/Register';
import Login from './Layouts/Login';
import Details from './Layouts/Details';
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
                        <Route path="/profile" component={Profile} />
                        <Route path="/discover" component={Discover} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
