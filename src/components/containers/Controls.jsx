import React, { PropTypes } from 'react';
import { SkipNextBtn, PlayBtn, SkipPrevBtn, LoopBtn, VolumeBtn } from '../ui/buttons/index';
import {controls, controls_left, controls_right} from '../../styles/audioComponents.css';

class Controls extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    togglePlayPause: PropTypes.func,
    playing: PropTypes.bool
  };
  render() {
    return (
      <div className={controls}>
        <div className={controls_left}>
          <SkipPrevBtn color={this.props.color} />
          <PlayBtn
            playing={this.props.playing}
            togglePlayPause={this.props.togglePlayPause}
            color={this.props.color}
          />
          <SkipNextBtn color={this.props.color} />
        </div>
        <div className={controls_right}>
          <LoopBtn color={this.props.color} />
          <VolumeBtn
            initialVolume={0}
            color={this.props.color}
          />
        </div>
      </div>
    );
  }
}

export default Controls;
