import React, { PropTypes } from 'react';
import * as Buttons from './buttons/index';
import VolumeContainer from './VolumeContainer';
import ButtonGroup from './ButtonGroup';

class Controls extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    playing: PropTypes.bool,
    volume: PropTypes.number,
    playingState: PropTypes.number,
    setVolume: PropTypes.func,
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
      <ButtonGroup>
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
        <PlayingStateBtn
          color={this.props.color}
          onClick={this.props.togglePlayingState}
        />
        <VolumeContainer
          color={this.props.color}
          volume={this.props.volume}
          setVolume={this.props.setVolume}
        />
      </ButtonGroup>
    );
  }
}

export default Controls;
