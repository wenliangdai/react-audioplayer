import React, { PropTypes } from 'react';
import { resetStyle } from '../utility/styles';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width || 400,
      translate: 0,
      time: 0,
      holding: false,
      showDragger: false
    };
    this.changeTranslate = this.changeTranslate.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onClickTrack = this.onClickTrack.bind(this);
    this.cleanEventListeners = this.cleanEventListeners.bind(this);
  }
  onMouseDown(e) {
    this.setState({ holding: true });
    document.onmousemove = this.onMouseMove(e.clientX, this.state.translate);
    document.onmouseup = this.cleanEventListeners();
  }
  onMouseMove(offset, startPosition) {
    return (event) => {
      if (this.state.holding) {
        const translate = (event.clientX - offset) + startPosition;
        this.changeTranslate(translate);
      }
    };
  }
  cleanEventListeners() {
    return () => {
      if (document.onmousemove !== null) {
        document.onmousemove = null;
      }
      document.onmouseup = null;
      this.setState({ holding: false });
    };
  }
  onClickTrack(e) {
    this.changeTranslate(e.clientX - e.target.parentNode.getBoundingClientRect().left);
  }
  getStyle() {
    const defaultStyle = Object.assign({}, resetStyle, {
      flex: '0 1 auto',
      width: '400px',
      height: '60px',
      display: 'flex',
      alignItems: 'center'
    });
    if (this.props.style) {
      return Object.assign({}, defaultStyle, this.props.style);
    }
    return defaultStyle;
  }
  getSVGWidth() {
    return this.state.width;
  }
  getSVGHeight() {
    return this.props.height || 12;
  }
  changeTranslate(translate) {
    let newTranslate = translate;
    if (translate < 0) { newTranslate = 0; }
    const max = this.getSVGWidth() - this.getSVGHeight();
    if (translate > max) { newTranslate = max; }
    this.setState({
      translate: newTranslate,
      time: Math.floor((newTranslate / max) * this.props.duration)
    });
  }
  render() {
    const trackWidth = this.getSVGWidth();
    const trackHeight = 4;
    const draggerLength = 12;
    const halfHeightDiff = 4; // (draggerLength - trackHeight) / 2
    return (
      <div className="timelineContainer" style={this.getStyle()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={trackWidth}
          height={draggerLength}
          viewBox={`0 0 ${trackWidth} ${draggerLength}`}
          onMouseOver={() => {
            this.setState({ showDragger: true });
          }}
          onMouseOut={() => {
            this.setState({ showDragger: false });
          }}
        >
          <g onClick={this.onClickTrack}>
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
              display: (this.state.showDragger || this.state.holding) ? 'inline' : 'none'
            }}
          >
            <rect x="0" y="0" width={draggerLength} height={draggerLength} fill={`${this.props.color}`} rx="4" ry="4" />
            <rect x={halfHeightDiff} y={halfHeightDiff} width={trackHeight} height={trackHeight} fill="#fff" rx="1" ry="1" />
          </g>
        </svg>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      // Set the width of track to the width of its container
      width: document.querySelector('.timelineContainer').getBoundingClientRect().width || 400
    });
  }
}
Timeline.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  duration: PropTypes.number.isRequired,
  color: PropTypes.string
};
Timeline.defaultProps = {
  color: '#212121'
};

export default Timeline;
