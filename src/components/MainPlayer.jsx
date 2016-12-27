import React, { PropTypes } from 'react';
import Timeline from './Timeline';
import Controls from './Controls';
import { mainPlayer } from '../styles/audioElements.css';

class MainPlayer extends React.PureComponent {
  render() {
    return (
      <div className={mainPlayer}>
         <Controls
           {...this.props.controlStates}
           {...this.props.controlCallbacks}
         />
         <Timeline
           {...this.props.timelineStates}
           {...this.props.timelineCallbacks}
         />
         { this.props.children }
      </div>
    );
  }
}

export default MainPlayer;
