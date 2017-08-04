import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const HOCAudio = (Audio) => {
  return class HOCAudioComponent extends React.Component {
    static propTypes = {
      playlist: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        src: PropTypes.string,
        img: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
          time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
          content: PropTypes.string
        }))
      })).isRequired
    };
    constructor(props) {
      super(props);
      if (!this.props.playlist || this.props.playlist.length === 0) {
        throw new Error('You should provide a playlist which contains at least 1 audio object');
      }
      if (this.props.fullPlayer) {
        this.props.playlist.forEach((song) => {
          if (!song.img) {
            throw new Error('You should provide song.img when the fullPlayer is enabled.');
          }
          if (this.props.comment && !song.comments) {
            throw new Error('You turned on commenting function and you need to provide the `comments` field for each song in the playlist');
          }
        });
      }

      // bind methods
      this.playNext = props.autoPlay; // A boolean to determine whether to play the next song or not
      this.loadSrc = this.loadSrc.bind(this);
      this.togglePlayPause = this.togglePlayPause.bind(this);
      this.onCanPlay = this.onCanPlay.bind(this);
      this.onEnded = this.onEnded.bind(this);
      this.onPlay = this.onPlay.bind(this);
      this.onPause = this.onPause.bind(this);
      // this.onTimeUpdate = this.onTimeUpdate.bind(this);
      this.setVolume = this.setVolume.bind(this);
      this.setProgress = this.setProgress.bind(this);
      this.skipToNext = this.skipToNext.bind(this);
      this.skipToPrevious = this.skipToPrevious.bind(this);
      this.togglePlayingState = this.togglePlayingState.bind(this);
      this.playEventHandler = this.playEventHandler.bind(this);
      this.pauseEventHandler = this.pauseEventHandler.bind(this);
      this.skipToNextEventHandler = this.skipToNextEventHandler.bind(this);
      this.skipToPreviousEventHandler = this.skipToPreviousEventHandler.bind(this);

      const discardPileSize = Math.ceil(props.playlist.length / 2);
      this.state = {
        playing: false,
        currentPlaylistPos: 0,
        playingState: 0, // 0: cycle, 1: repeat, 2: shuffle
        progress: 0,
        duration: 0,
        volume: 1,
        shuffleState: {
          size: discardPileSize,
          drawPile: [...Array(props.playlist.length).keys()], // initialise full playlist indexes
          discardPile: []
        }
      };
    }
    onCanPlay() {
      // console.log('audio oncanplay');
      this.playNext = this.state.playing;
      this.setState({
        duration: this.audioElement.duration
      });
    }
    onPlay() {
      // console.log('audio onplay');
      this.playNext = true;
      this.setState({ playing: true });
      this.intervalId = setInterval(() => {
        this.setState({ progress: this.audioElement.currentTime });
      }, 900);
    }
    onPause() {
      // console.log('audio onpause');
      this.setState({ playing: false });
      this._clearInterval();
    }
    onEnded() {
      // console.log('audio onended');
      if (this.playNext) {
        this.handleEndedProgress();
      }
    }
    // onTimeUpdate(e) {
    //   this.setState({ progress: this.audioElement.currentTime });
    //   console.log(e.target.currentTime);
    // }
    handleEndedProgress() {
      this.playNext = true;
      switch (this.state.playingState) {
        case 0: {
          this.skipToNext();
          break;
        }
        case 1: {
          this.setState({ progress: 0 });
          this.audioElement.currentTime = 0;
          this.togglePlayPause();
          break;
        }
        case 2: {
          const ss = this.state.shuffleState;
          const currentSongIndex = ss.drawPile.indexOf(this.state.currentPlaylistPos);
          const newDrawPile = ss.drawPile;
          const newDiscardPile = ss.discardPile;
          if (currentSongIndex !== -1) {
            newDrawPile.splice(currentSongIndex, 1);
            newDiscardPile.push(this.state.currentPlaylistPos);
          }
          const index = Math.floor(Math.random() * ss.drawPile.length);
          const sliced = newDrawPile.slice(index, index + 1);
          this.setState({
            currentPlaylistPos: sliced[0],
            shuffleState: {
              size: ss.size,
              drawPile: newDrawPile,
              discardPile: newDiscardPile
            }
          });
          if (newDiscardPile.length === ss.size) {
            const shiftedElement = newDiscardPile.shift();
            newDrawPile.push(shiftedElement);
            this.setState({
              shuffleState: {
                size: ss.size,
                drawPile: newDrawPile,
                discardPile: newDiscardPile
              }
            });
          }
          this.loadSrc();
          break;
        }
        default: {
          // console.log('onend BUG!!!');
          break;
        }
      }
    }
    setVolume(volume) {
      // console.log(`volume is set to ${volume}`);
      this.audioElement.volume = volume;
      this.setState({ volume });
    }
    setProgress(newProgress) {
      let progress = newProgress;
      const duration = this.audioElement.duration;
      if (progress > duration) {
        progress = duration;
      }
      this.audioElement.currentTime = progress;
      this.setState({ progress });
      // console.log(`progress is set to ${progress}`);
    }
    _clearInterval() {
      // console.log('interval cleared');
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    loadSrc() {
      // console.log('load src');
      if (this.state.currentPlaylistPos < this.props.playlist.length) {
        this.audioElement.src = this.props.playlist[this.state.currentPlaylistPos].src;
        this.audioElement.load();
        if (this.playNext) {
          this.audioElement.play();
        }
        this.setState({ progress: 0 });
        this._clearInterval();
      }
    }
    togglePlayPause() {
      // console.log('toggle playpause');
      if (this.state.playing) {
        // console.log('togglePlayPause(): playing');
        this.audioElement.pause();
      } else if (this.audioElement.currentTime === this.audioElement.duration) {
        this.handleEndedProgress();
      } else {
        this.audioElement.play();
      }
    }
    skipToNext() {
      // console.log('skip to next');
      this.state.currentPlaylistPos = this.setCycleNumPos(this.state.currentPlaylistPos, 1, this.props.playlist.length);
      this.loadSrc();
    }
    skipToPrevious() {
      // console.log('skip to next');
      this.state.currentPlaylistPos = this.setCycleNumPos(this.state.currentPlaylistPos, -1, this.props.playlist.length);
      this.loadSrc();
    }
    togglePlayingState() {
      this.setState({
        playingState: this.setCycleNumPos(this.state.playingState, 1, 3)
      });
    }
    setCycleNumPos(currentVal, change, length) {
      let newPos = currentVal + change;
      if (newPos >= length) {
        newPos -= length;
      }
      if (newPos < 0) {
        newPos += length;
      }
      return newPos;
    }
    render() {
      const newProps = Object.assign({}, {
        name: this.props.playlist[this.state.currentPlaylistPos].name,
        CommentsWrapperStates: {
          songImageSrc: this.props.playlist[this.state.currentPlaylistPos].img,
          comments: (this.props.fullPlayer && this.props.comment) ? this.props.playlist[this.state.currentPlaylistPos].comments : null,
          pos: this.state.currentPlaylistPos
        },
        controlStates: {
          playing: this.state.playing,
          playingState: this.state.playingState,
          volume: this.state.volume * 100
        },
        controlCallbacks: {
          setVolume: this.setVolume,
          togglePlayPause: this.togglePlayPause,
          togglePlayingState: this.togglePlayingState,
          skipToNext: this.skipToNext,
          skipToPrevious: this.skipToPrevious
        },
        timelineStates: {
          playing: this.state.playing,
          progress: this.state.progress,
          duration: this.state.duration
        },
        timelineCallbacks: {
          setProgress: this.setProgress,
          togglePlayPause: this.togglePlayPause
        },
        children: this.props.children
      }, this.props);
      return <Audio {...newProps} />;
    }

    playEventHandler() {
      this.audioElement.play();
    }

    pauseEventHandler() {
      this.audioElement.pause();
    }

    skipToNextEventHandler() {
      this.skipToNext();
    }

    skipToPreviousEventHandler() {
      this.skipToPrevious();
    }

    componentDidMount() {
      // console.log('Audio mounted!');
      // set audio element event listeners
      this.audioElement = document.createElement('audio');
      this.audioElement.addEventListener('canplay', this.onCanPlay);
      this.audioElement.addEventListener('ended', this.onEnded);
      this.audioElement.addEventListener('play', this.onPlay);
      this.audioElement.addEventListener('pause', this.onPause);
      this.audioElement.addEventListener('volumechange', this.onVolumeChange);

      this.loadSrc();
      this.setState({ volume: this.audioElement.volume });

      ReactDOM.findDOMNode(this).addEventListener('audio-play', this.playEventHandler);
      ReactDOM.findDOMNode(this).addEventListener('audio-pause', this.pauseEventHandler);
      ReactDOM.findDOMNode(this).addEventListener('audio-skip-to-next', this.skipToNextEventHandler);
      ReactDOM.findDOMNode(this).addEventListener('audio-skip-to-previous', this.skipToPreviousEventHandler);
    }

    componentWillUnmount() {
      this._clearInterval();
      this.audioElement.removeEventListener('canplay', this.onCanPlay);
      this.audioElement.removeEventListener('ended', this.onEnded);
      this.audioElement.removeEventListener('play', this.onPlay);
      this.audioElement.removeEventListener('pause', this.onPause);
      this.audioElement.removeEventListener('volumechange', this.onVolumeChange);
      this.audioElement = null;

      ReactDOM.findDOMNode(this).removeEventListener('audio-play', this.playEventHandler);
      ReactDOM.findDOMNode(this).removeEventListener('audio-pause', this.pauseEventHandler);
      ReactDOM.findDOMNode(this).removeEventListener('audio-skip-to-next', this.skipToNextEventHandler);
      ReactDOM.findDOMNode(this).removeEventListener('audio-skip-to-previous', this.skipToPreviousEventHandler);
    }
  };
  
};

export default HOCAudio;
