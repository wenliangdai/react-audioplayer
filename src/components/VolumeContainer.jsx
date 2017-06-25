import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { VolumeHighBtn, VolumeLowBtn, VolumeMutedBtn } from './buttons/index';
import ProgressBarHandler from './ProgressBarHandler';
import VolumeBar from './VolumeBar';
import style from '../styles/audioComponents.css';

class VolumeContainer extends React.PureComponent {
  static propTypes = {
    volumeOrientationDown: PropTypes.bool,
    volume: PropTypes.number.isRequired,
    setVolume: PropTypes.func.isRequired
  };
  static defaultProps = {
    volumeOrientationDown: false
  };
  constructor(props) {
    super(props);
    this.state = {
      mouseOverBox: false,
      translate: props.volume,
      volume: props.volume,
      mutedVolume: 100
    };
    this.handlerWidth = 12;
    this.handlerHeight = 12;
    this.svgWidth = 12;
    this.svgHeight = 72;
    this.volumeWidth = 4;
    this.holding = false;
    this.onClick = this.onClick.bind(this);
    this.onClickMute = this.onClickMute.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseDragging = this.onMouseDragging.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);

    this.onDraggingFunctionRef = null;
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
    this.onDraggingFunctionRef = this.onMouseDragging(e.clientY, this.state.translate);
    document.addEventListener('mousemove', this.onDraggingFunctionRef);
    document.addEventListener('mouseup', this._onMouseUp);
  }
  onMouseDragging(mouseDownX, startTranslate) {
    return (e) => {
      if (this.holding) {
        let newTranslate = (e.clientY - mouseDownX) + startTranslate;
        if (newTranslate < 0) {
          newTranslate = 0;
        }
        if (newTranslate > 72 - this.handlerHeight) {
          newTranslate = 72 - this.handlerHeight;
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
    this.setState({ mouseOverBox: true });
  }
  onMouseOut() {
    this.setState({ mouseOverBox: false });
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
    this.holding = false;
    this.props.setVolume(this.state.volume / 100);
    document.removeEventListener('mousemove', this.onDraggingFunctionRef);
    document.removeEventListener('mouseup', this._onMouseUp);
  }
  render() {
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
    const motionH = this.props.volumeOrientationDown ? 40 : 90;
    return (
      <div
        className={style.volumeContainer}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <Motion
          style={{
            h: spring((this.state.mouseOverBox || this.holding) ? motionH : 0),
            opacity: spring(this.state.mouseOverBox ? 1 : 0)
          }}
        >
          {({ h, opacity }) =>
            <div
              className={style.volumeAdjustBox}
              style={{
                width: '40px',
                height: this.props.volumeOrientationDown ? `${h * (9 / 4)}px` : `${h}px`,
                transform: this.props.volumeOrientationDown ? `translate3d(0, ${h}px, 0)` : `translate3d(0, -${h}px, 0)`,
                opacity
              }}
            >
              <VolumeBar
                width={this.svgWidth}
                height={this.svgHeight}
                barWidth={this.volumeWidth}
                handlerWidth={this.handlerWidth}
                handlerHeight={this.handlerHeight * (h / 80)}
                translate={this.state.translate}
                onClick={this.onClick}
              >
                <ProgressBarHandler
                  width={this.handlerWidth}
                  height={this.handlerHeight}
                  visibility={true}
                  translate={`translate(0, ${this.state.translate})`}
                  onMouseDown={this.onMouseDown}
                />
              </VolumeBar>
            </div>
          }
        </Motion>
        <VolumeBtn onClick={this.onClickMute} />
      </div>
    );
  }
}

export default VolumeContainer;
