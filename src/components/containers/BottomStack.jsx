import React, { PropTypes } from 'react';
import Timeline from '../ui/Timeline';
import Controls from './Controls';
import BottomRightGroup from './BottomRightGroup';
import { bottomStack } from '../../styles/audioElements.css';

const BottomStack = ({
  togglePlayPause,
  playing,
  color,
  progress,
  duration,
  setProgress
}) => (
  <div className={bottomStack}>
    <Controls
      color={color}
      togglePlayPause={togglePlayPause}
      playing={playing}
    />
    <Timeline
      duration={duration}
      color={color}
      progress={progress}
      setProgress={setProgress}
    />
    <BottomRightGroup color={color} />
  </div>
);
BottomStack.propTypes = {
  color: PropTypes.string,
  togglePlayPause: PropTypes.func,
  playing: PropTypes.bool,
  progress: PropTypes.number,
  duration: PropTypes.number,
  setProgress: PropTypes.func
};

export default BottomStack;
