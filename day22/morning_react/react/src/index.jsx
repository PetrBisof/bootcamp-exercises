import React from 'react';
import ReactDOM from 'react-dom';

import Background from './background/contact.jsx';
import weeklyForecast from './weeklyForecast/week.jsx';
import Day from './day/day.jsx'
import './index.scss';
import './index.html';

class Back extends React.Component {
  render() {
    return (
      <>
      <Background/>
      </>
     
    );
  }
}

class weekly extends React.Component {
  render() {
    return (
      <>
      <weeklyForecast/>
      </>
     
    );
  }
}

class dailyForecast

ReactDOM.render(<Back />, document.getElementById('app'));

