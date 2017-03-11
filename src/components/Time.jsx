import React, { PropTypes } from 'react';
import style from '../styles/audioElements.css';

const length2two = function(num) {
  if (num === 0) {return '00'; }
  if (num >= 10) { return `${num}`; }
  return `0${num}`;
}

const makeTimeString = function(h, m, s) {
  let ss = length2two(s);
  if (h === 0) {
    return `${m}:${ss}`;
  } else {
    const ms = length2two(m);
    return `${h}:${ms}:${ss}`;
  }
}

const Time = ({ time }, { color }) => {
  let remaining = time;
  const hour = Math.floor(remaining / 3600);
  remaining -= hour * 3600;
  const minute = Math.floor(remaining / 60);
  remaining -= minute * 60;
  const second = Math.floor(remaining);
  const timeString = makeTimeString(hour, minute, second);
  return (
    <p className={style.time}>
      {timeString}
    </p>
  );
};
Time.contextTypes = {
  color: React.PropTypes.string
};

export default Time;
