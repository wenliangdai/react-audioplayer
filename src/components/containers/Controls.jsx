import React, { PropTypes } from 'react';
import { SkipNextBtn, PlayBtn, SkipPrevBtn, LoopBtn, VolumeBtn } from '../ui/buttons/index';
import {controls, controls_left, controls_right} from '../../styles/audioComponents.css';

class Controls extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    playing: PropTypes.bool,
    playingState: PropTypes.number,
    togglePlayPause: PropTypes.func,
    togglePlayingState: PropTypes.func,
    skipToNext: PropTypes.func,
    skipToPrevious: PropTypes.func
  };
  render() {
    return (
      <div className={controls}>
        <div className={controls_left}>
          <SkipPrevBtn
            color={this.props.color}
            onClick={this.props.skipToPrevious}
          />
          <PlayBtn
            color={this.props.color}
            playing={this.props.playing}
            onClick={this.props.togglePlayPause}
          />
          <SkipNextBtn
            color={this.props.color}
            onClick={this.props.skipToNext}
          />
        </div>
        <div className={controls_right}>
          <LoopBtn
            color={this.props.color}
            playingState={this.props.playingState}
            onClick={this.props.togglePlayingState}
          />
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
