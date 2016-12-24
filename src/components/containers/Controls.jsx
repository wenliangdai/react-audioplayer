import React, { PropTypes } from 'react';
import * as Buttons from '../ui/buttons/index';
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
    let PlayPauseBtn, PlayingStateBtn;
    switch (this.props.playing) {
      case true:
        PlayPauseBtn = Buttons.PauseBtn;
        break;
      case false:
        PlayPauseBtn = Buttons.PlayBtn;
        break;
    }
    switch (this.props.playingState) {
      case 0:
        PlayingStateBtn = Buttons.CycleBtn;
        break;
      case 1:
        PlayingStateBtn = Buttons.RepeatBtn;
        break;
      case 2:
        PlayingStateBtn = Buttons.ShuffleBtn;
        break;
    }
    return (
      <div className={controls}>
        <div className={controls_left}>
          <Buttons.SkipPrevBtn
            color={this.props.color}
            onClick={this.props.skipToPrevious}
          />
          <PlayPauseBtn
            color={this.props.color}
            onClick={this.props.togglePlayPause}
          />
          <Buttons.SkipNextBtn
            color={this.props.color}
            onClick={this.props.skipToNext}
          />
        </div>
        <div className={controls_right}>
          <PlayingStateBtn
            color={this.props.color}
            onClick={this.props.togglePlayingState}
          />
          <Buttons.VolumeBtn
            initialVolume={0}
            color={this.props.color}
          />
        </div>
      </div>
    );
  }
}

export default Controls;
