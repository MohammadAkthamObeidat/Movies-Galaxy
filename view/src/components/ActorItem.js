import React, { Component } from 'react';
import '../Assets/CSS/ActorItem.css';
class ActorItem extends Component {
    render() {
        const {cast} = this.props;
        return (
            <div>
                <div className="actor-container">
                    <img
                        className="actor-img"
                        src={require('../Assets/Images/user.svg')}
                        alt=""
                    />
                    <div className="names">
                        <p className="real-name">{cast.name}</p>
                        <p className="role-name">{cast.character}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ActorItem;
