import React from 'react';
import './index.scss';

export default class Questions extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="question">
          {this.props.question}
        </div>
        <div className="answer">{this.props.answer}</div>
      </div>
    );
  }
}
