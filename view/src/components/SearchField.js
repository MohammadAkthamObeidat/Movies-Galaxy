import React, { Component } from 'react';
import '../Assets/CSS/Nav.css';
import axios from 'axios';
class SearchField extends Component {
    state = {
        query: '',
        searchResult: []
    };

    handleChange = event => {
        this.setState({ query: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { query } = this.state;
        axios
            .get(`/movies/search/${query}`)
            .then(response => {
                console.log(response.data);
                this.setState({ searchResult: response.data.searchResult });
            })
            .catch(error => {
                console.log('error :', error);
            });
    };

    render() {
        const { query } = this.state;
        return (
            <form className="form">
                <input
                    onChange={this.handleChange}
                    type="search"
                    placeholder="What are you looking for?"
                    className="search-field"
                    value={query}
                    name="query"
                ></input>
                <button
                    className="search-btn"
                    name="search"
                    value="search"
                    onClick={this.handleSubmit}
                    hidden = 'true'
                >
                    Search
                </button>
            </form>
        );
    }
}
export default SearchField;
