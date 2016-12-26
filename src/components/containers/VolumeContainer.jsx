import React, { PropTypes } from 'react';
import { VolumeHighBtn, VolumeLowBtn, VolumeMutedBtn } from '../ui/buttons/index';
import { volumeContainer, volumeAdjustBox, boxShadowShallow } from '../../styles/audioComponents.css';

class VolumeContainer extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    volume: PropTypes.number,
    setVolume: PropTypes.func
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
    this.clearEventListeners = this.clearEventListeners.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (!this.holding) {
      this.setState({
        translate: (100 - nextProps.volume) * 0.54,
        volume: Math.round(nextProps.volume)
      });
    }
  }
  onClick(e) {
    const newVolume = Math.round(100 - (e.clientY - e.target.getBoundingClientRect().top) / 0.54) / 100;
    this.props.setVolume(newVolume);
    console.log(newVolume);
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
    document.onmouseup = this.clearEventListeners;
  }
  onMouseDragging(offset, startPosition) {
    return (e) => {
      if (this.holding) {
        let newTranslate = e.clientY - offset + startPosition;
        if (newTranslate < 0) {
          newTranslate = 0;
        }
        if (newTranslate > 54) {
          newTranslate = 54;
        }
        this.setState({
          translate: newTranslate,
          volume: Math.round(100 - newTranslate / 0.54)
        });
        this.props.setVolume(this.state.volume / 100);
      }
    };
  }
  clearEventListeners() {
    document.onmousemove = this.onmousemoveSaver;
    document.onmouseup = this.onmouseupSaver;
    this.holding = false;
    this.props.setVolume(this.state.volume / 100);
  }
  onMouseOver(e) {
    document.querySelector(`.${volumeAdjustBox}`).style.display = 'flex';
  }
  onMouseOut(e) {
    document.querySelector(`.${volumeAdjustBox}`).style.display = 'none';
  }
  onClickMute(e) {
    if (this.state.volume > 0) {
      this.setState({ mutedVolume: this.state.volume });
      this.props.setVolume(0);
    } else {
      this.props.setVolume(this.state.mutedVolume / 100);
    }
  }
  render() {
    const offsetX = (this.svgWidth - this.volumeWidth) / 2;
    const offsetY = this.draggerLength / 2;
    return (
      <div
        className={volumeContainer}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <div className={`${volumeAdjustBox} ${boxShadowShallow}`}>
          <p>{this.state.volume}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={this.svgWidth}
            height={this.svgHeight}
            viewBox={`0 0 ${this.svgWidth} ${this.svgHeight - this.draggerLength}`}
          >
            <g
              onClick={this.onClick}
            >
              <rect
                x={offsetX}
                y={offsetY}
                width={this.volumeWidth}
                height={this.svgHeight - this.draggerLength}
                fill={`${this.props.color}`} rx="2" ry="2"
              />
              <rect
                x={offsetX}
                y={offsetY}
                width={this.volumeWidth}
                height={this.state.translate}
                fill="#E0E0E0" rx="2" ry="2"
              />
            </g>
            <g
              transform={`translate(0, ${this.state.translate})`}
              onMouseDown={this.onMouseDown}
              onMouseMove={this.onMouseDragging}
            >
              <rect x="0" y="0" width={this.svgWidth} height='12' fill={`${this.props.color}`} rx="10" ry="10" />
              <rect x={offsetX} y={offsetX} width={this.volumeWidth} height={this.volumeWidth} fill="#fff" rx="10" ry="10" />
            </g>
          </svg>
        </div>
        {
          this.state.volume > 0 ?
          (this.state.volume > 50 ?
          <VolumeHighBtn
            color={this.props.color}
            onClick={this.onClickMute}
          /> : <VolumeLowBtn
            color={this.props.color}
            onClick={this.onClickMute}
          />) :
          <VolumeMutedBtn
            color={this.props.color}
            onClick={this.onClickMute}
          />
        }
      </div>
    );
  }
}

export default VolumeContainer;
