import React from 'react';
import { Motion, spring } from 'react-motion';
import style from '../styles/audioElements.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { full: false, hover: false };
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onClick() {
    this.setState({ full: !this.state.full });
  }
  onMouseOver() {
    this.setState({ hover: true });
  }
  onMouseOut() {
    this.setState({ hover: false });
  }
  getMotionStyle() {
    if (this.state.hover) {
      return {
        opacity: spring(1)
      };
    }
    return {
      opacity: spring(0.8)
    };
  }
  getStyle(motionStyle) {
    return Object.assign({}, this.props.style, {
      transform: `translate3d(0, -${motionStyle.y}px, 0)`,
      backgroundColor: `rgba(255, 255, 255, ${motionStyle.opacity})`
    });
  }
  render() {
    return (
      <Motion
        style={this.getMotionStyle()}
      >
        {interpolatedStyle =>
          <p
            className={style.comment}
            style={this.getStyle(interpolatedStyle)}
            onClick={this.onClick}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
          >
            {this.props.content}
          </p>
        }
      </Motion>
    );
  }
}

export default Comment;
