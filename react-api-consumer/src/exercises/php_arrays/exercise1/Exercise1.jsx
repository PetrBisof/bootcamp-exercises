import React from 'react';

export default class Exercise1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="basic-ul">
                {
                    this.props.data.map(item => (
                        <li>
                            <h1>Movie name</h1>
                            { item }
                        </li>
                    ))
                }
            </ul>
        );
    }
}