import React, { Component } from 'react';
import axios from 'axios';
import ShowItem from '../components/ShowItem';
import '../Assets/CSS/Discover.css'
class DiscoverShows extends Component {
    state = {
        trendingShows: [],
        popularShows: [],
        popularity: 'popular'
    };

    //@GET
    //Fetch Trending Shows.
    getTrendingShows = async event => {
        const trendingShowsResponse = await axios.get('/shows/trending');
        this.setState({
            trendingShows: trendingShowsResponse.data.data.trendingShows,
            popularity: 'trending'
        });
        console.log('THIS.STATE :', this.state);
    };
    //@GET
    //Fetch Popular Shows.
    getPopularShows = async event => {
        const popularShowsResponse = await axios.get('/shows/popular');
        this.setState({
            popularShows: popularShowsResponse.data.data.popularShows,
            popularity: 'popular'
        });
        console.log('THIS.STATE :', this.state);
    };

    componentDidMount = async () => {
        this.getPopularShows();
    };
    render() {
        const { popularShows, trendingShows, popularity } = this.state;

        return this.state ? (
            <div className="discover-container">
                <div className="discover-list-header">
                    <hr className="line" />
                    <div className="header-tabs">
                        <button
                            onClick={this.getTrendingShows}
                            className="header-btns"
                        >
                            Trending
                        </button>
                        <div className="ver-line"></div>
                        <button
                            onClick={this.getPopularShows}
                            className="header-btns"
                        >
                            Popular
                        </button>
                    </div>
                    <hr className="line" />
                </div>
                <div className="movies-show-container">
                    {popularity === 'popular'
                        ? popularShows.map(show => {
                              return <ShowItem key={show.id} show={show} />;
                          })
                        : popularity === 'trending'
                        ? trendingShows.map(show => {
                              return <ShowItem key={show.id} show={show} />;
                          })
                        : ''}
                </div>
            </div>
        ) : (
            ''
        );
    }
}
export default DiscoverShows;
