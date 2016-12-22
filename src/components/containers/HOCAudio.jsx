import React, { PropTypes } from 'react';

const HOCAudio = (Audio) => {
  return class AudioWrapper extends React.Component {
    static propTypes = {
      autoPlay: PropTypes.bool,
      playlist: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        src: PropTypes.string,
        img: PropTypes.string
      })).isRequired,
      color: PropTypes.string
    };
    static defaultProps = {
      autoPlay: false,
      color: '#212121'
    };
    constructor(props) {
      super(props);
      // bind methods
      this.loadSrc = this.loadSrc.bind(this);
      this.togglePlayPause = this.togglePlayPause.bind(this);
      this.onCanPlay = this.onCanPlay.bind(this);
      this.onEnded = this.onEnded.bind(this);
      this.onPlay = this.onPlay.bind(this);
      this.onPause = this.onPause.bind(this);
      this.setProgress = this.setProgress.bind(this);
      this.skipToNext = this.skipToNext.bind(this);
      this.skipToPrevious = this.skipToPrevious.bind(this);

      this.state = {
        autoPlay: this.props.autoPlay,
        playing: false,
        progress: 0,
        duration: 0
      };
      this.currentPlaylistPos = 0;
    }
    componentDidMount() {
      console.log('Audio mounted!');
      // set audio element event listeners
      this.audioElement = document.createElement('audio');
      this.audioElement.autoplay = this.props.autoPlay;
      this.audioElement.addEventListener('canplay', this.onCanPlay);
      this.audioElement.addEventListener('ended', this.onEnded);
      this.audioElement.addEventListener('play', this.onPlay);
      this.audioElement.addEventListener('pause', this.onPause);
      this.audioElement.addEventListener('volumechange', this.onVolumeChange);

      this.loadSrc();
    }
    componentWillUnmount() {
      this.audioElement.removeEventListener('canplay');
      this.audioElement.removeEventListener('ended');
      this.audioElement.removeEventListener('play');
      this.audioElement.removeEventListener('pause');
      this.audioElement.removeEventListener('volumechange');
      this.audioElement = null;
    }
    onCanPlay() {
      console.log('audio oncanplay');
      this.setState({
        duration: this.audioElement.duration
      });
    }
    onEnded() {
      console.log('audio onended');
      if (this.currentPlaylistPos + 1 < this.props.playlist.length) {
        this.currentPlaylistPos++;
        this.loadSrc();
      }
      this.clearInterval();
      this.setState({ progress: 0 });
    }
    onPlay() {
      console.log('audio onplay');
      this.setState({ playing: true });
      this.intervalId = setInterval(() => {
        this.setState({ progress: this.audioElement.currentTime });
      }, 1000);
    }
    onPause() {
      console.log('audio onpause');
      this.setState({ playing: false });
      this.clearInterval();
    }
    onVolumeChange() {
      console.log('audio onvolumechange');
    }
    setProgress(progress) {
      console.log(progress);
      this.audioElement.currentTime = progress;
      this.setState({ progress });
    }
    clearInterval() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    loadSrc() {
      console.log('load src');
      if (this.currentPlaylistPos < this.props.playlist.length) {
        this.audioElement.src = this.props.playlist[this.currentPlaylistPos].src;
        this.audioElement.load();
      }
    }
    togglePlayPause() {
      if (this.state.playing) {
        this.audioElement.pause();
      } else {
        this.audioElement.play();
      }
    }
    skipToNext() {
      if (this.currentPlaylistPos < this.props.playlist.length - 1) {
        this.currentPlaylistPos++;
      } else if (this.props.playlist.length > 0) {
        this.currentPlaylistPos = 0;
      }
      this.loadSrc();
      this.setState({ progress: 0 });
      this.clearInterval();
    }
    skipToPrevious() {
      if (this.currentPlaylistPos > 0) {
        this.currentPlaylistPos--;
      } else if (this.props.playlist.length > 0) {
        this.currentPlaylistPos = this.props.playlist.length - 1;
      }
      this.loadSrc();
      this.setState({ progress: 0 });
      this.clearInterval();
    }
    render() {
      const newProps = {
        color: this.props.color,
        backImageUrl: this.props.playlist[this.currentPlaylistPos].img,
        HOCStates: {
          playing: this.state.playing,
          progress: this.state.progress,
          duration: this.state.duration
        },
        HOCHandlers: {
          togglePlayPause: this.togglePlayPause,
          setProgress: this.setProgress,
          skipToNext: this.skipToNext,
          skipToPrevious: this.skipToPrevious
        }
      }
      return <Audio {...newProps} />;
    }
  }
}

export default HOCAudio;
