import React, { PropTypes } from 'react';

const HOCAudio = (Audio) => {
  return class HOCAudioComponent extends React.Component {
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
      this.setVolume = this.setVolume.bind(this);
      this.setProgress = this.setProgress.bind(this);
      this.skipToNext = this.skipToNext.bind(this);
      this.skipToPrevious = this.skipToPrevious.bind(this);
      this.setCycleNumPos = this.setCycleNumPos.bind(this);
      this.togglePlayingState = this.togglePlayingState.bind(this);

      const discardPileSize = Math.ceil(props.playlist.length / 2);
      this.state = {
        autoPlay: props.autoPlay,
        playing: false,
        currentPlaylistPos: 0,
        playingState: 0, // 0: cycle, 1: repeat, 2: shuffle
        progress: 0,
        duration: 0,
        volume: 1,
        shuffleState: {
          size: discardPileSize,
          drawPile: [...Array(props.playlist.length).keys()], // initialise full playlist indexes
          discardPile: new Array()
        }
      };
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
      this.setState({ volume: this.audioElement.volume });
    }
    componentWillUnmount() {
      this.clearInterval();
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
    onEnded() {
      console.log('audio onended');
      switch (this.state.playingState) {
        case 0:
          this.skipToNext();
          break;
        case 1:
          this.setState({ progress: 0 });
          this.togglePlayPause();
          break;
        case 2:
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
        default:
          console.log('onend BUG!!!');
          break;
      }
    }
    setVolume(volume) {
      console.log(`volume is set to ${volume}`);
      this.audioElement.volume = volume;
      this.setState({ volume: volume });
    }
    setProgress(progress) {
      const duration = this.audioElement.duration;
      if (progress > duration) {
        progress = duration;
      }
      this.audioElement.currentTime = progress;
      this.setState({ progress });
      console.log(`progress is set to ${progress}`);
    }
    clearInterval() {
      console.log('interval cleared');
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    loadSrc() {
      console.log('load src');
      if (this.state.currentPlaylistPos < this.props.playlist.length) {
        this.audioElement.src = this.props.playlist[this.state.currentPlaylistPos].src;
        this.audioElement.load();
        this.setState({ progress: 0 });
        this.clearInterval();
      }
    }
    togglePlayPause() {
      console.log('toggle playpause');
      if (this.state.playing) {
        this.audioElement.pause();
      } else {
        this.audioElement.play();
      }
    }
    skipToNext() {
      console.log('skip to next');
      this.state.currentPlaylistPos = this.setCycleNumPos(this.state.currentPlaylistPos, 1, this.props.playlist.length);
      this.loadSrc();
    }
    skipToPrevious() {
      console.log('skip to next');
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
      const newProps = {
        color: this.props.color,
        songImageSrc: this.props.playlist[this.state.currentPlaylistPos].img,
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
          progress: this.state.progress,
          duration: this.state.duration
        },
        timelineCallbacks: {
          setProgress: this.setProgress
        },
        children: this.props.children
      }
      return <Audio {...newProps} />;
    }
  }
}

export default HOCAudio;
