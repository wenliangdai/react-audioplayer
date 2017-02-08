import React, { PropTypes } from 'react';
import ProgressBar from './ProgressBar';
import ProgressBarHandler from './ProgressBarHandler';
import { timeLine } from '../styles/audioElements.css';

class Timeline extends React.Component {
  static propTypes = {
    barWidth: PropTypes.number,
    height: PropTypes.number,
    duration: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      barWidth: this.props.width || 0,
      translate: 0
    };
    this.holding = false;
    this.onmousemoveSaver = null;
    this.onmouseupSaver = null;
    this.changeTranslate = this.changeTranslate.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onClickTrack = this.onClickTrack.bind(this);
    this.clearEventListeners = this.clearEventListeners.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.duration !== 0 && !this.holding) {
      const lengthPerSecond = this.state.barWidth / nextProps.duration;
      const length = nextProps.progress * lengthPerSecond;
      this.changeTranslate(length);
    }
  }
  onMouseDown(e) {
    e.stopPropagation();
    this.holding = true;
    if (document.onmousemove) {
      this.onmousemoveSaver = document.onmousemove;
    }
    if (document.onmouseup) {
      this.onmouseupSaver = document.onmouseup;
    }
    document.onmousemove = this.onMouseMove(e.pageX, this.state.translate);
    document.onmouseup = this.clearEventListeners;
  }
  onMouseMove(offset, startPosition) {
    return (event) => {
      if (this.holding) {
        const translate = event.pageX - offset + startPosition;
        this.changeTranslate(translate);
      }
    };
  }
  clearEventListeners(e) {
    document.onmousemove = this.onmousemoveSaver;
    document.onmouseup = this.onmouseupSaver;
    this.holding = false;
    this.props.setProgress((this.state.translate / this.state.barWidth) * this.props.duration);
  }
  onClickTrack(e) {
    e.stopPropagation();
    const timelineDisToLeft = e.target.parentNode.getBoundingClientRect().left;
    const diff = e.pageX - timelineDisToLeft;
    this.changeTranslate(diff);
    this.props.setProgress((diff / this.state.barWidth) * this.props.duration);
  }
  changeTranslate(newTranslate) {
    let translate = newTranslate;
    const max = this.state.barWidth;
    if (translate < 0) { translate = 0; }
    if (translate > max) { translate = max; }
    this.setState({ translate });
  }
  render() {
    const handlerLength = 12;
    const containerWidth = this.state.barWidth + handlerLength;
    const barHeight = 4;
    return (
      <div className={timeLine} style={{width: containerWidth}}>
        <ProgressBar
          width={containerWidth}
          height={handlerLength}
          barWidth={this.state.barWidth}
          barHeight={barHeight}
          translate={this.state.translate}
          onClick={this.onClickTrack}
        >
          <ProgressBarHandler
            length={handlerLength}
            translate={`translate(${this.state.translate})`}
            onMouseDown={this.onMouseDown}
          />
        </ProgressBar>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      barWidth: Math.round(document.querySelector(`.${timeLine}`).parentNode.getBoundingClientRect().width / 2)
    });
  }
}

export default Timeline;
