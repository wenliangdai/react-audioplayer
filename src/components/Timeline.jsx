import React, { PropTypes } from 'react';
import AudioTitleTime from './AudioTitleTime';
import ProgressBar from './ProgressBar';
import ProgressBarHandler from './ProgressBarHandler';
import style from '../styles/audioElements.css';

class Timeline extends React.Component {
  static propTypes = {
    appWidth: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      showHandler: false,
      barWidth: props.appWidth - 12,
      translate: 0
    };
    this.holding = false;
    this.shouldTogglePlayPause = this.props.playing;
    this.onmousemoveSaver = null;
    this.onmouseupSaver = null;
    this.changeTranslate = this.changeTranslate.bind(this);
    this._onMouseDownProgressBar = this._onMouseDownProgressBar.bind(this);
    this._onMouseOverProgressBar = this._onMouseOverProgressBar.bind(this);
    this._onMouseOutProgressBar = this._onMouseOutProgressBar.bind(this);
    this._onMouseDownProgressBarHandler = this._onMouseDownProgressBarHandler.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.duration !== 0 && !this.holding) {
      const lengthPerSecond = this.state.barWidth / nextProps.duration;
      const length = nextProps.progress * lengthPerSecond;
      this.changeTranslate(length);
      this.shouldTogglePlayPause = nextProps.playing;
    }
  }
  _onMouseOverProgressBar() {
    this.setState({ showHandler: true });
  }
  _onMouseOutProgressBar() {
    this.setState({ showHandler: false });
  }
  _onMouseDownProgressBar(e) {
    e.stopPropagation();
    console.log('Timeline: _onMouseDownProgressBar');
    if (this.shouldTogglePlayPause) { this.props.togglePlayPause(); }
    const timelineDisToLeft = e.target.parentNode.getBoundingClientRect().left;
    const newTranslate = e.pageX - timelineDisToLeft;
    this.changeTranslate(newTranslate);
    this.holding = true;
    if (document.onmousemove) { this.onmousemoveSaver = document.onmousemove; }
    if (document.onmouseup) { this.onmouseupSaver = document.onmouseup; }
    document.onmousemove = this._onMouseMove(e.pageX, newTranslate);
    document.onmouseup = this._onMouseUp;
  }
  _onMouseDownProgressBarHandler(e) {
    e.stopPropagation();
    this.holding = true;
    if (this.shouldTogglePlayPause) { this.props.togglePlayPause(); }
    if (document.onmousemove) { this.onmousemoveSaver = document.onmousemove; }
    if (document.onmouseup) { this.onmouseupSaver = document.onmouseup; }
    document.onmousemove = this._onMouseMove(e.pageX, this.state.translate);
    document.onmouseup = this._onMouseUp;
  }
  _onMouseMove(mouseDownX, startTranslate) {
    return (event) => {
      if (this.holding) {
        const translate = (event.pageX - mouseDownX) + startTranslate;
        this.changeTranslate(translate);
      }
    };
  }
  _onMouseUp() {
    console.log('Timeline: _onMouseUp()');
    /* When the _onMouseUp() event happen really quick after the _onMouseDownProgressBar(),
       i.e. React hasn't called setState, enqueue a togglePlayPause() to the loop. */
    if (this.shouldTogglePlayPause && this.props.playing) { setTimeout(() => this.props.togglePlayPause(), 0); }
    // Normally, when this.shouldTogglePlayPause is true, this.props.playing should be false, except the case above.
    if (this.shouldTogglePlayPause && !this.props.playing) { this.props.togglePlayPause(); }
    document.onmousemove = this.onmousemoveSaver;
    document.onmouseup = this.onmouseupSaver;
    this.holding = false;
    this.props.setProgress((this.state.translate / this.state.barWidth) * this.props.duration);
  }
  changeTranslate(newTranslate) {
    let translate = newTranslate;
    const max = this.state.barWidth;
    if (translate < 0) { translate = 0; }
    if (translate > max) { translate = max; }
    this.setState({ translate });
  }
  render() {
    const handlerWidth = 12;
    const handlerHeight = 12;
    const containerWidth = this.state.barWidth + handlerWidth;
    const barHeight = 4;
    return (
      <div className={style.timeLine} style={{ width: containerWidth, transform: 'translateY(-4px)' }}>
        <ProgressBar
          width={containerWidth}
          height={handlerHeight}
          barWidth={this.state.barWidth + handlerWidth}
          barHeight={barHeight}
          handlerWidth={handlerWidth}
          translate={this.state.translate}
          duration={this.props.duration}
          onMouseDown={this._onMouseDownProgressBar}
          onMouseOver={this._onMouseOverProgressBar}
          onMouseOut={this._onMouseOutProgressBar}
        >
          <ProgressBarHandler
            width={handlerWidth}
            height={handlerHeight}
            visibility={this.state.showHandler || this.holding}
            translate={`translate(${this.state.translate})`}
            onMouseDown={this._onMouseDownProgressBarHandler}
          />
        </ProgressBar>
      </div>
    );
  }
  // componentDidMount() {
  //   if (this.state.barWidth === 0) {
  //     this.setState({
  //       barWidth: Math.round(document.querySelector(`.${style.timeLine}`).parentNode.getBoundingClientRect().width * (2 / 5))
  //     });
  //   }
  // }
}

export default Timeline;
