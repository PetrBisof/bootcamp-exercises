import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                <h3>{this.props.name}</h3>
                <img src={this.props.image_url} />
                <p>{this.props.description}</p>
                
            </div>
        );
    }
}