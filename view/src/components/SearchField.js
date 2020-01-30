import React, { Component } from 'react';
import '../Assets/CSS/Nav.css';
import { Link } from 'react-router-dom';
class SearchField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
        this.searchResult = [];
    }

    handleChange = event => {
        this.setState({ query: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();
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
                <img
                    alt="icon"
                    className="icon"
                    src={require('../Assets/Icons/SearchIcon.svg')}
                />

                <button
                    hidden={false}
                    className="search-btn"
                    onClick={this.handleSubmit}
                >
                    <Link
                        to={{
                            pathname: '/search-results',
                            state: {
                                query: query
                            }
                        }}
                        className="search-btn"
                        name="search"
                        value="search"
                    >
                        Search
                    </Link>
                </button>
            </form>
        );
    }
}
export default SearchField;
