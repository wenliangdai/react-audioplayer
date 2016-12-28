import React, { PropTypes } from 'react';
import Timeline from './Timeline';
import Controls from './Controls';
import ButtonGroup from './ButtonGroup';
import { mainPlayer } from '../styles/audioElements.css';

class MainPlayer extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  };
  static defaultProps = {
    className: ''
  };
  render() {
    const className = `${mainPlayer} ${this.props.className}`.trim();
    return (
      <div className={className} style={this.props.style}>
         <Controls
           {...this.props.controlStates}
           {...this.props.controlCallbacks}
         />
         <Timeline
           {...this.props.timelineStates}
           {...this.props.timelineCallbacks}
         />
         {
           React.Children.count(this.props.children) > 0 ?
           <ButtonGroup>
             { this.props.children }
           </ButtonGroup> :
           null
         }

      </div>
    );
  }
}

export default MainPlayer;
