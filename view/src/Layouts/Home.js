import React, { Component } from 'react';
import '../Assets/CSS/Home.css';
import { Route, Link } from 'react-router-dom';
import Profile from '../Layouts/Profile';
class Home extends Component {

    componentDidMount = () => {
    }
    
    render() {
                 return(
                     <Route
                         path="/"
                         exact
                         render={() => {
                             if (this.props.isAuthed === true) {
                                 return <Profile />;
                             } else {
                                 return (
                                     <div className="home-page">
                                         <div className="home-main">
                                             <img
                                                 className="logo-title"
                                                 src={require('../Assets/Icons/logo-title.svg')}
                                                 alt="logo"
                                             />
                                             <hr />
                                             <p className="welcome-msg">
                                                 Discover, Organize & Stay
                                                 Updated.
                                             </p>
                                             <button className="join-btn">
                                                 <Link
                                                     to="/register"
                                                     className="link-behaviour"
                                                 >
                                                     JOIN MOVIES GALAXY IT'S
                                                     FREE
                                                 </Link>
                                             </button>
                                         </div>
                                     </div>
                                 );
                             }
                         }}
                     />
                 );
             }
}

export default Home;
