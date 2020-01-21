import React, { Component } from 'react';
import '../Assets/CSS/ActorItem.css';
class ActorItem extends Component {
    render() {
        return (
            <div>
                <div className="actor-container">
                    <img className = 'actor-img' src={require('../Assets/Images/actor.svg')} alt="" />
                    <div className="names">
                        <p className="real-name">Alex</p>
                        <p className="role-name">Jin</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ActorItem;
