import React from 'react';
import { Motion, spring } from 'react-motion';
import style from '../styles/audioElements.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { full: false, hover: false };
  }
  getMotionStyle() {
    if (this.state.hover) {
      return {
        // y: spring(10),
        // h: spring(100),
        opacity: spring(1)
      };
    }
    return {
      // y: spring(0),
      // h: spring(35),
      opacity: spring(0.8)
    };
  }
  getStyle(motionStyle) {
    // if (Object.keys(motionStyle) === 0) {return this.props.style;}
    return Object.assign({}, this.props.style, {
      transform: `translate3d(0, -${motionStyle.y}px, 0)`,
      // height: `${motionStyle.h}px`,
      backgroundColor: `rgba(255, 255, 255, ${motionStyle.opacity})`
    });
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
  render() {
    return (
      <Motion
        style={this.getMotionStyle()}
      >
        {interpolatedStyle =>
          <p
            className={style.comment}
            style={this.getStyle(interpolatedStyle)}
            onClick={this.onClick.bind(this)}
            onMouseOver={this.onMouseOver.bind(this)}
            onMouseOut={this.onMouseOut.bind(this)}
          >
            {this.props.content}
          </p>
        }
      </Motion>
    );
  }
}

export default Comment;
