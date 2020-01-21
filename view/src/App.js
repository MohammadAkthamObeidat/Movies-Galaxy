import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import Register from './Layouts/Register';
import Login from './Layouts/Login';
import Details from './Layouts/Details';
import MovieShowItem from './components/MovieShowItem'
import ActorItem from './components/ActorItem';
class App extends Component {
    // App State.
    state = {};

    // Rendering
    render() {
        return <ActorItem></ActorItem>
    }
}

export default App;
