import React, { Component } from 'react'
import '../Assets/CSS/CrewItem.css'
class CrewItem extends Component {
    render() {
        const {crew} = this.props;
        return (
            <div className = 'crew-item'>
                <h5 className="crew-name">{crew.name}</h5>
                <small className="crew-role">{crew.job}</small>
            </div>
        )
    }
}
export default CrewItem;