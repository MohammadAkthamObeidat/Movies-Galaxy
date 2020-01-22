import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Assets/CSS/Register.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class Register extends Component {
    state = {
        newUser: {
            name: '',
            email: '',
            password: '',
            country: ''
        },
        userToken: '',
        user: {}
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('user :', this.state.user);
    }
    

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            // Change Value Of Specific Keys in Key inside State.
            newUser: {
                ...this.state.newUser, // Copy The Entire Object In That State.
                [event.target.name]: event.target.value // Change Name And Value Depend On Input Change Status.
            }
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const createdUser = await axios.post('/signup', this.state.newUser);
        this.setState({ userToken: createdUser.data.token });
        this.setState({ user: createdUser.data.data.user });
        // Redirect('/profile')
    };
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="form-container">
                    <form action="" method="post" className="reg-form">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name..."
                            value={this.state.newUser.name}
                            onChange={this.handleChange}
                            required
                        />
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="yourmail@example.com"
                            value={this.state.newUser.email}
                            onChange={this.handleChange}
                            required
                        />
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password..."
                            value={this.state.newUser.password}
                            onChange={this.handleChange}
                            required
                        />
                        <label className="form-label" htmlFor="country">
                            Country
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Your Country..."
                            value={this.state.newUser.country}
                            onChange={this.handleChange}
                            required
                        />
                        <button
                            onClick={this.handleSubmit}
                            className="reg-btn"
                            type="submit"
                        >
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
