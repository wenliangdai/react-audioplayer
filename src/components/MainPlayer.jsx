import React, { PropTypes } from 'react';
import Timeline from './Timeline';
import Controls from './Controls';
import ButtonGroup from './ButtonGroup';
import { mainPlayer } from '../styles/audioElements.css';

const MainPlayer = ({
  className,
  style,
  controlStates,
  controlCallbacks,
  timelineStates,
  timelineCallbacks,
  children
}) => {
  const classNameCollection = `${mainPlayer} ${className}`.trim();
  return (
    <div className={classNameCollection} style={style}>
      <Controls
        {...controlStates}
        {...controlCallbacks}
      />
      <Timeline
        {...timelineStates}
        {...timelineCallbacks}
      />
      {
        React.Children.count(children) > 0 ?
          <ButtonGroup>
            { children }
          </ButtonGroup> :
          null
      }
    </div>
  );
};
MainPlayer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({})
};
MainPlayer.defaultProps = {
  className: '',
  style: {}
};

export default MainPlayer;
