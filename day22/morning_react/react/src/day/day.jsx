import React from 'react';
import './index.scss';

export default class Day extends React.Component {
  render() {
    return (
      <div class="day-forecast">
        <div class="day-forecast__header">${weekday}</div>
        <div class="day-forecast__body">
          <div class="day-forecast__image ${weather}"></div>
          <div class="day-forecast__temps">
            <span class="temp-day">${tempDay}</span>
            <span class="temp-night">${tempNight}</span>
          </div>
        </div>
      </div>
    );
  }
}