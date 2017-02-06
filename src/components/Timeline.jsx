import React, { PropTypes } from 'react';
import ProgressBar from './ProgressBar';
import ProgressBarHandler from './ProgressBarHandler';
import { timeLine } from '../styles/audioElements.css';

class Timeline extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    duration: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
  };
  static contextTypes = {
    color: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width || 400,
      translate: 0,
      time: 0
    };
    this.holding = false;
    this.hovering = false;
    this.onmousemoveSaver = null;
    this.onmouseupSaver = null;
    this.changeTranslate = this.changeTranslate.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onClickTrack = this.onClickTrack.bind(this);
    this.clearEventListeners = this.clearEventListeners.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.duration !== 0 && !this.holding) {
      const lengthPerSecond = this.state.width / nextProps.duration;
      const length = nextProps.progress * lengthPerSecond;
      this.changeTranslate(length);
    }
  }
  onMouseOver(e) {
    this.hovering = true;
  }
  onMouseOut(e) {
    this.hovering = false;
  }
  onMouseDown(e) {
    this.holding = true;
    if (document.onmousemove) {
      this.onmousemoveSaver = document.onmousemove;
    }
    if (document.onmouseup) {
      this.onmouseupSaver = document.onmouseup;
    }
    document.onmousemove = this.onMouseMove(e.clientX, this.state.translate);
    document.onmouseup = this.clearEventListeners;
  }
  onMouseMove(offset, startPosition) {
    return (event) => {
      if (this.holding) {
        const translate = event.clientX - offset + startPosition;
        this.changeTranslate(translate);
      }
    };
  }
  clearEventListeners(e) {
    document.onmousemove = this.onmousemoveSaver;
    document.onmouseup = this.onmouseupSaver;
    if (!this.hovering) {
      this.holding = false;
    }
    this.props.setProgress((this.state.translate / this.state.width) * this.props.duration);
  }
  onClickTrack(e) {
    if (!this.holding) {
      const val = e.clientX - e.target.parentNode.getBoundingClientRect().left;
      this.changeTranslate(val);
      this.props.setProgress((val / this.state.width) * this.props.duration);
    } else {
      this.holding = false;
    }
  }
  getSVGWidth() {
    return this.state.width;
  }
  getSVGHeight() {
    return this.props.height || 12;
  }
  changeTranslate(translate) {
    let newTranslate = translate;
    const max = this.getSVGWidth();
    if (translate < 0) { newTranslate = 0; }
    if (translate > max) { newTranslate = max; }
    this.setState({
      translate: newTranslate,
      time: Math.floor((newTranslate / max) * this.props.duration)
    });
  }
  render() {
    const containerWidth = this.getSVGWidth() + 12;
    const trackHeight = 4;
    const draggerLength = 12;
    return (
      <div className={timeLine} style={{width: containerWidth}}>
        <ProgressBar
          width={containerWidth}
          height={draggerLength}
          trackHeight={trackHeight}
          translate={this.state.translate}
          onClick={this.onClickTrack}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          <ProgressBarHandler
            length={draggerLength}
            translate={this.state.translate}
            onMouseDown={this.onMouseDown}
          />
        </ProgressBar>
      </div>
    );
  }
  componentDidMount() {
    const trackWidth = Math.round(document.querySelector(`.${timeLine}`).parentNode.getBoundingClientRect().width / 2 - 12);
    this.setState({
      width: trackWidth
    });
  }
}

export default Timeline;
