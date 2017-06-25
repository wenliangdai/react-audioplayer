import React from 'react';
import PropTypes from 'prop-types';
import Timeline from './Timeline';
import Controls from './Controls';
import CommentInputContainer from './CommentInputContainer';
import Time from './Time';
import style from '../styles/audioElements.css';

class MainPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressTime: 0 };
    this.updateProgressTime = this.updateProgressTime.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.setState({ progressTime: newProps.timelineStates.progress });
  }
  updateProgressTime(progressTime) {
    this.setState({ progressTime });
  }
  render() {
    const {
      width,
      name,
      comment,
      volumeOrientationDown,
      className,
      onCommentSubmit,
      controlStates,
      controlCallbacks,
      timelineStates,
      timelineCallbacks
    } = this.props;
    const classNameCollection = `${style.mainPlayer} ${className}`.trim();
    return (
      <div className={classNameCollection}>
        <Timeline
          appWidth={width}
          updateProgressTime={this.updateProgressTime}
          {...timelineStates}
          {...timelineCallbacks}
        />
        <div className={style.btnStack}>
          <Controls
            volumeOrientationDown={volumeOrientationDown}
            {...controlStates}
            {...controlCallbacks}
          />
          {
            comment ?
              <CommentInputContainer
                onCommentSubmit={onCommentSubmit}
              /> : null
          }
          <div className={style.timeNameContainer} style={{ color: this.context.color }}>
            <div className={style.nameContainer} title={name}>{name}</div>
            <div className={style.timeContainer}>
              <Time time={this.state.progressTime} />
              <span>{'/'}</span>
              <Time time={timelineStates.duration} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
MainPlayer.propTypes = {
  className: PropTypes.string
};
MainPlayer.defaultProps = {
  className: ''
};
MainPlayer.contextTypes = {
  color: PropTypes.string
};

export default MainPlayer;
