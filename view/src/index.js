import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Assets/CSS/index.css';
import App from './App';
import Home from './Layouts/Home';
import Register from './Layouts/Register';
import Login from './Layouts/Login';
import Details from './Layouts/Details';
import MovieShowItem from './components/MovieShowItem';
import ActorItem from './components/ActorItem';
import Profile from './Layouts/Profile';
import Discover from './Layouts/Discover';
import "bootstrap/dist/css/bootstrap.css";
import {
    
    Switch,
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';

const routeing = (
    <Router>
        <div>
            <Route exact  path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </Router>
);

ReactDOM.render(routeing, document.getElementById('root'));

