import React, { PropTypes } from 'react';
import HOCAudio from './HOCAudio';
import SongImage from './SongImage';
import MainPlayer from './MainPlayer';
import { LikeBtn, PlaylistBtn } from './buttons/index';
import style from '../styles/audioReset.css';
import { audio, boxShadowShallow } from '../styles/audioComponents.css';

class Audio extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    songImage: PropTypes.bool,
    color: PropTypes.string,
    songImageSrc: PropTypes.string,
    controlStates: PropTypes.shape({
      playing: PropTypes.bool,
      playingState: PropTypes.oneOf([0, 1, 2]),
      volume: PropTypes.number
    }),
    controlCallbacks: PropTypes.shape({
      setVolume: PropTypes.func,
      togglePlayPause: PropTypes.func,
      togglePlayingState: PropTypes.func,
      skipToNext: PropTypes.func,
      skipToPrevious: PropTypes.func
    }),
    timelineStates: PropTypes.shape({
      title: PropTypes.string,
      playing: PropTypes.bool,
      progress: PropTypes.number,
      duration: PropTypes.number
    }),
    timelineCallbacks: PropTypes.shape({
      setProgress: PropTypes.func,
      togglePlayPause: PropTypes.func
    })
  }
  static defaultProps = {
    width: 800,
    height: 400,
    songImage: false,
    color: '#282828'
  }
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
    const height = songImage ? this.props.height : 60;
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
              width={width}
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
