import React, { PropTypes } from 'react';
import BackImage from '../ui/BackImage';
import BottomStack from './BottomStack';
import { resetStyle, boxShadowSmall } from '../utility/styles';

class Audio extends React.Component {
  static propTypes = {
    autoPlay: PropTypes.bool,
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

    this.state = {
      autoPlay: this.props.autoPlay,
      playing: false,
      progress: 0,
      duration: 0
    };
  }
  componentDidMount() {
    console.log('Audio mounted!');
    // set audio element event listeners
    this.audioElement = document.createElement('audio');
    this.audioElement.addEventListener('canplay', this.onCanPlay);
    this.audioElement.addEventListener('ended', this.onEnded);
    this.audioElement.addEventListener('play', this.onPlay);
    this.audioElement.addEventListener('pause', this.onPause);
    this.audioElement.addEventListener('volumechange', this.onVolumeChange);
    this.loadSrc('../../songs/song.mp3');
  }
  componentWillUnmount() {
    this.audioElement.addEventListener('canplay');
    this.audioElement.addEventListener('ended');
    this.audioElement.addEventListener('play');
    this.audioElement.addEventListener('pause');
    this.audioElement.addEventListener('volumechange');
    this.audioElement = null;
  }
  onCanPlay() {
    console.log('audio oncanplay');
    this.setState({ duration: this.audioElement.duration });
  }
  onEnded() {
    console.log('audio onended');
    this.setState({ progress: this.state.duration });
    this.clearInterval();
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
    console.log('audio onpause');
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
  getStyle() {
    const defaultStyle = Object.assign({}, resetStyle, boxShadowSmall, {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minWidth: '400px',
      height: '100%',
      minHeight: '360px',
      margin: 'auto'
    });
    if (this.props.style) {
      return Object.assign({}, defaultStyle, this.props.style);
    }
    return defaultStyle;
  }
  loadSrc(source) {
    this.audioElement.src = source;
    this.audioElement.load();
  }
  togglePlayPause() {
    if (this.state.playing) {
      this.audioElement.pause();
    } else {
      this.audioElement.play();
    }
  }
  render() {
    return (
      <div style={this.getStyle()}>
        <BackImage src="//oglm0zj29.bkt.gdipper.com/images/Adele.jpg" />
        <BottomStack
          color={this.props.color}
          togglePlayPause={this.togglePlayPause}
          playing={this.state.playing}
          progress={this.state.progress}
          duration={this.state.duration}
          setProgress={this.setProgress}
        />
      </div>
    );
  }
}

export default Audio;
