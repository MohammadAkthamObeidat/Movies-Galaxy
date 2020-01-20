import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Layouts/Home';
class App extends Component {

    // App State.
    state = {};

    // Rendering
    render() {
        return <Home></Home>;
    }
}

export default App;
