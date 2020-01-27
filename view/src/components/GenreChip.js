import React, { Component } from 'react';
import '../Assets/CSS/GenerChip.css';
class GenreChip extends Component {
    render() {
        return (
            <div className="chip">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default GenreChip;
