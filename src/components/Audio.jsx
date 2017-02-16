import React, { PropTypes } from 'react';
import HOCAudio from './HOCAudio';
import SongImage from './SongImage';
import MainPlayer from './MainPlayer';
import { LikeBtn, PlaylistBtn } from './buttons/index';
import style from '../styles/audioReset.css';
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
      width,
      songImage,
      songImageSrc,
      controlStates,
      controlCallbacks,
      timelineStates,
      timelineCallbacks,
      children
    } = this.props;
    const height = songImage ? height : 60;
    return (
      <div
        className={`${style.rootContainer} ${audio} ${boxShadowShallow}`}
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
      >
        {
          songImage ?
            <SongImage
              src={songImageSrc}
              height={height - 60}
            /> : null
        }
        <MainPlayer
          width={width}
          controlStates={controlStates}
          controlCallbacks={controlCallbacks}
          timelineStates={timelineStates}
          timelineCallbacks={timelineCallbacks}
        >
          <LikeBtn />
          <PlaylistBtn />
        </MainPlayer>
      </div>
    );
  }
}

export default HOCAudio(Audio);
