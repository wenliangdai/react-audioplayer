import _ from 'lodash';
import React, { PropTypes } from 'react';
import { timeLine } from '../../styles/audioElements.css';

class Timeline extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    duration: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    color: PropTypes.string
  };
  static defaultProps = {
    color: '#212121'
  };
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width || 400,
      translate: 0,
      time: 0,
      holding: false,
      showDragger: false,
      lastProgress: 0
    };
    this.changeTranslate = this.changeTranslate.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onClickTrack = this.onClickTrack.bind(this);
    this.clearEventListeners = this.clearEventListeners.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.duration !== 0) {
      const lengthPerSecond = this.state.width / nextProps.duration;
      const length = nextProps.progress * lengthPerSecond;
      this.changeTranslate(length);
    }
  }
  onMouseDown(e) {
    this.setState({ holding: true });
    document.onmousemove = this.onMouseMove(e.clientX, this.state.translate);
    document.onmouseup = this.clearEventListeners;
  }
  onMouseMove(offset, startPosition) {
    return (event) => {
      if (this.state.holding) {
        const translate = (event.clientX - offset) + startPosition;
        this.changeTranslate(translate);
      }
    };
  }
  clearEventListeners() {
    document.onmousemove = null;
    document.onmouseup = null;
    this.setState({ holding: false });
    this.props.setProgress(_.divide(this.state.translate, this.state.width) * this.props.duration);
  }
  onClickTrack(e) {
    const val = e.clientX - e.target.parentNode.getBoundingClientRect().left;
    this.changeTranslate(val);
    this.props.setProgress(_.divide(val, this.state.width) * this.props.duration);
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
      time: Math.floor(_.divide(newTranslate, max) * this.props.duration)
    });
  }
  render() {
    const trackWidth = this.getSVGWidth() + this.getSVGHeight();
    const trackHeight = 4;
    const draggerLength = 12;
    const halfHeightDiff = 4; // (draggerLength - trackHeight) / 2
    return (
      <div className={timeLine}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={trackWidth}
          height={draggerLength}
          viewBox={`0 0 ${trackWidth} ${draggerLength}`}
          onClick={this.onClickTrack}
          onMouseOver={() => {
            this.setState({ showDragger: true });
          }}
          onMouseOut={() => {
            this.setState({ showDragger: false });
          }}
        >
          <g>
            <rect
              x={draggerLength / 2}
              y={halfHeightDiff}
              width={trackWidth - (draggerLength)}
              height={trackHeight}
              fill="#E0E0E0" rx="2" ry="2"
            />
            <rect
              x={draggerLength / 2}
              y={halfHeightDiff}
              width={this.state.translate}
              height={trackHeight}
              fill={`${this.props.color}`} rx="2" ry="2"
            />
          </g>
          <g
            transform={`translate(${this.state.translate})`}
            cursor="pointer"
            onMouseDown={this.onMouseDown}
            style={{
              // display: (this.state.showDragger || this.state.holding) ? 'inline' : 'none'
            }}
          >
            <rect x="0" y="0" width={draggerLength} height={draggerLength} fill={`${this.props.color}`} rx="10" ry="10" />
            <rect x={halfHeightDiff} y={halfHeightDiff} width={trackHeight} height={trackHeight} fill="#fff" rx="10" ry="10" />
          </g>
        </svg>
      </div>
    );
  }
  componentDidMount() {
    const trackWidth = (document.querySelector(`.${timeLine}`).getBoundingClientRect().width || 400) - this.getSVGHeight();
    this.setState({
      // Set the width of track to the width of its container
      width: trackWidth
    });
  }
}

export default Timeline;
