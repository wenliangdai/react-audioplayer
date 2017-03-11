import React, { PropTypes } from 'react';
import Timeline from './Timeline';
import Controls from './Controls';
import ButtonGroup from './ButtonGroup';
import style from '../styles/audioElements.css';

const MainPlayer = ({
  width,
  className,
  controlStates,
  controlCallbacks,
  timelineStates,
  timelineCallbacks,
  children
}) => {
  const classNameCollection = `${style.mainPlayer} ${className}`.trim();
  return (
    <div className={classNameCollection}>
      <Controls
        {...controlStates}
        {...controlCallbacks}
      />
      <Timeline
        appWidth={width}
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
  className: PropTypes.string
};
MainPlayer.defaultProps = {
  className: ''
};

export default MainPlayer;
