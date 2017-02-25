import React, { PropTypes } from 'react';
import { VolumeHighBtn, VolumeLowBtn, VolumeMutedBtn } from './buttons/index';
import ProgressBarHandler from './ProgressBarHandler';
import VolumeBar from './VolumeBar';
import { volumeContainer, volumeAdjustBox, boxShadowShallow, volumeAdjustBoxToBottom } from '../styles/audioComponents.css';

class VolumeContainer extends React.PureComponent {
  static propTypes = {
    downwards: PropTypes.bool,
    volume: PropTypes.number.isRequired,
    setVolume: PropTypes.func.isRequired
  };
  static defaultProps = {
    downwards: false
  };
  constructor(props) {
    super(props);
    this.state = {
      translate: props.volume,
      volume: props.volume,
      mutedVolume: 100
    };
    this.svgWidth = 12;
    this.svgHeight = 72;
    this.volumeWidth = 4;
    this.draggerLength = 12;
    this.holding = false;
    this.onmousemoveSaver = null;
    this.onmouseupSaver = null;
    this.onClick = this.onClick.bind(this);
    this.onClickMute = this.onClickMute.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseDragging = this.onMouseDragging.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (!this.holding) {
      this.setState({
        translate: (100 - nextProps.volume) * 0.6,
        volume: Math.round(nextProps.volume)
      });
    }
  }
  onClick(e) {
    const newVolume = Math.round(100 - ((e.clientY - e.target.getBoundingClientRect().top) / 0.6)) / 100;
    this.props.setVolume(newVolume);
  }
  onMouseDown(e) {
    this.holding = true;
    if (document.onmousemove) {
      this.onmousemoveSaver = document.onmousemove;
    }
    if (document.onmouseup) {
      this.onmouseupSaver = document.onmouseup;
    }
    document.onmousemove = this.onMouseDragging(e.clientY, this.state.translate);
    document.onmouseup = this._onMouseUp;
  }
  onMouseDragging(mouseDownX, startTranslate) {
    return (e) => {
      if (this.holding) {
        let newTranslate = (e.clientY - mouseDownX) + startTranslate;
        if (newTranslate < 0) {
          newTranslate = 0;
        }
        if (newTranslate > 60) {
          newTranslate = 60;
        }
        this.setState({
          translate: newTranslate,
          volume: Math.round(100 - (newTranslate / 0.6))
        });
        this.props.setVolume(this.state.volume / 100);
      }
    };
  }
  onMouseOver() {
    document.querySelector('.volumebar-show-hide').hidden = false;
  }
  onMouseOut() {
    if (!this.holding) {
      document.querySelector('.volumebar-show-hide').hidden = true;
    }
  }
  onClickMute() {
    if (this.state.volume > 0) {
      this.setState({ mutedVolume: this.state.volume });
      this.props.setVolume(0);
    } else {
      this.props.setVolume(this.state.mutedVolume / 100);
    }
  }
  _onMouseUp() {
    document.onmousemove = this.onmousemoveSaver;
    document.onmouseup = this.onmouseupSaver;
    this.holding = false;
    if (!document.querySelector('.volumebar-show-hide').hidden) {
      document.querySelector('.volumebar-show-hide').hidden = true;
    }
    this.props.setVolume(this.state.volume / 100);
  }
  render() {
    let boxClassName = `${volumeAdjustBox} ${boxShadowShallow}`;
    if (this.props.downwards) {
      boxClassName = `${volumeAdjustBox} ${boxShadowShallow} ${volumeAdjustBoxToBottom}`;
    }
    let VolumeBtn;
    if (this.state.volume > 0) {
      if (this.state.volume > 50) {
        VolumeBtn = VolumeHighBtn;
      } else {
        VolumeBtn = VolumeLowBtn;
      }
    } else {
      VolumeBtn = VolumeMutedBtn;
    }
    return (
      <div
        className={volumeContainer}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <section className="volumebar-show-hide" hidden>
          <div className={boxClassName} hidden>
            <p>{this.state.volume}</p>
            <VolumeBar
              width={this.svgWidth}
              height={this.svgHeight}
              barWidth={this.volumeWidth}
              translate={this.state.translate}
              onClick={this.onClick}
            >
              <ProgressBarHandler
                length={this.svgWidth}
                textWidth={0}
                translate={`translate(0, ${this.state.translate})`}
                onMouseDown={this.onMouseDown}
              />
            </VolumeBar>
          </div>
        </section>
        <VolumeBtn onClick={this.onClickMute} />
      </div>
    );
  }
}

export default VolumeContainer;
