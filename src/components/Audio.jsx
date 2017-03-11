import React, { PropTypes } from 'react';
import HOCAudio from './HOCAudio';
import CommentsWrapper from './CommentsWrapper';
import MainPlayer from './MainPlayer';
import { LikeBtn, PlaylistBtn } from './buttons/index';
import styleNormalize from '../styles/audioReset.css';
import style from '../styles/audioComponents.css';

class Audio extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fullPlayer: PropTypes.bool,
    color: PropTypes.string,
    CommentsWrapperStates: PropTypes.shape({
      songImageSrc: PropTypes.string,
    }),
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
      fullPlayer,
      onCommentSubmit,
      CommentsWrapperStates,
      controlStates,
      controlCallbacks,
      timelineStates,
      timelineCallbacks,
      children
    } = this.props;
    const height = fullPlayer ? this.props.height : 52;
    return (
      <div
        className={`${styleNormalize.rootContainer} ${style.audio} ${style.boxShadowShallow}`}
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
      >
        {
          fullPlayer ?
            <CommentsWrapper
              width={width}
              height={height - 52}
              progress={timelineStates.progress}
              {...CommentsWrapperStates}
            /> : null
        }
        <MainPlayer
          width={width}
          onCommentSubmit={fullPlayer ? onCommentSubmit : null}
          controlStates={controlStates}
          controlCallbacks={controlCallbacks}
          timelineStates={timelineStates}
          timelineCallbacks={timelineCallbacks}
        >
          {/* <LikeBtn />
          <PlaylistBtn /> */}
        </MainPlayer>
      </div>
    );
  }
}

export default HOCAudio(Audio);
