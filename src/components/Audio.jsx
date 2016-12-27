import React, { PropTypes } from 'react';
import HOCAudio from './HOCAudio';
import { audio, boxShadowShallow } from '../styles/audioComponents.css';

class Audio extends React.PureComponent {
  static childContextTypes = {
    color: PropTypes.string
  };
  getChildContext() {
    return { color: this.props.color };
  }
  render() {
    const {
      color,
      songImageSrc,
      controlStates,
      controlCallbacks,
      timelineStates,
      timelineCallbacks,
      children
    } = this.props;
    return (
      <div className={`${audio} ${boxShadowShallow}`}>
        {
          React.Children.map(children, (child) => {
            switch (child.type.displayName) {
              case 'SongImage':
                return React.cloneElement(child, { src: songImageSrc });
              case 'MainPlayer':
                return React.cloneElement(child, {
                  controlStates,
                  controlCallbacks,
                  timelineStates,
                  timelineCallbacks
                });
              default:
                return child;
            }
          })
        }
      </div>
    );
  }
}

export default HOCAudio(Audio);
