import React, { Component } from 'react'
import '../Assets/CSS/CrewItem.css'
class CrewItem extends Component {
    render() {
        return (
            <div className = 'crew-item'>
                <h5 className="crew-name">Jill Culton</h5>
                <small className="crew-role">Director, writer</small>
            </div>
        )
    }
}
export default CrewItem;