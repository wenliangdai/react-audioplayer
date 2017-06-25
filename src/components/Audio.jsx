import React from 'react';
import PropTypes from 'prop-types';
import HOCAudio from './HOCAudio';
import CommentsWrapper from './CommentsWrapper';
import MainPlayer from './MainPlayer';
import styleNormalize from '../styles/audioReset.css';
import style from '../styles/audioComponents.css';

class Audio extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fullPlayer: PropTypes.bool,
    autoPlay: PropTypes.bool,
    comment: PropTypes.bool,
    volumeOrientationDown: PropTypes.bool,
    onCommentSubmit: PropTypes.func,
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
    width: 400,
    height: 300,
    songImage: false,
    color: '#212121',
    fullPlayer: false,
    autoPlay: false,
    comment: false,
    volumeOrientationDown: false,
    onCommentSubmit: null
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
      name,
      fullPlayer,
      comment,
      volumeOrientationDown,
      onCommentSubmit,
      CommentsWrapperStates,
      controlStates,
      controlCallbacks,
      timelineStates,
      timelineCallbacks
    } = this.props;
    const height = fullPlayer ? this.props.height : 52;
    const newStyle = Object.assign({}, {
      width: `${width}px`,
      height: `${height}px`
    }, this.props.style);
    
    const _width = parseInt(newStyle.width);
    const _height = parseInt(newStyle.height);
    
    return (
      <div
        className={`${styleNormalize.rootContainer} ${style.audio}`}
        style={newStyle}
      >
        {
          fullPlayer ?
            <CommentsWrapper
              comment={comment}
              width={_width}
              height={_height - 52}
              progress={timelineStates.progress}
              {...CommentsWrapperStates}
            /> : null
        }
        <MainPlayer
          width={_width}
          name={name}
          comment={fullPlayer ? comment : false}
          volumeOrientationDown={volumeOrientationDown}
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
