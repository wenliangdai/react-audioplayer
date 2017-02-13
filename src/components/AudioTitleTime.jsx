import React, { PropTypes } from 'react';
import Time from './Time';
import { audioTitleTime } from '../styles/audioElements.css';

const AudioTitleTime = ({
  title,
  progress,
  duration
}, { color }) => {
  return (
    <div className={audioTitleTime} style={{ color }}>
      <p>{title}</p>
      <div>
        <Time time={progress} />
        {'/'}
        <Time time={duration} />
      </div>
    </div>
  );
};
AudioTitleTime.contextTypes = {
  color: React.PropTypes.string
};

export default AudioTitleTime;
