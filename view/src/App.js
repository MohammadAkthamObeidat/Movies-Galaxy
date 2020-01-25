import React, { Component } from 'react';
import Home from './Layouts/Home';
import Register from './Layouts/Register';
import Login from './Layouts/Login';
import Details from './Layouts/Details';
import Profile from './Layouts/Profile';
import Discover from './Layouts/Discover';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthHelper from './Utils/AuthHelper';
import axios from 'axios';
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
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/details" component={Details} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/discover" component={Discover} />
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
                    </Switch>
                </div>
            </BrowserRouter>
        ) : (
            ''
        );
    }
}

export default App;
