import React, { PropTypes } from 'react';
import Timeline from '../ui/Timeline';
import Controls from './Controls';
import BottomRightGroup from './BottomRightGroup';
import { resetStyle } from '../utility/styles';

const BottomStack = ({
  togglePlayPause,
  playing,
  color,
  progress,
  duration,
  setProgress
}) => (
  <div style={Object.assign({}, resetStyle, style)}>
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

const style = {
  flex: '0 1 auto',
  width: '100%',
  height: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export default BottomStack;
