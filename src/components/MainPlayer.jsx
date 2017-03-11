import React, { PropTypes } from 'react';
import Timeline from './Timeline';
import Controls from './Controls';
import CommentInputContainer from './CommentInputContainer';
import Time from './Time';
import ButtonGroup from './ButtonGroup';
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
      className,
      onCommentSubmit,
      controlStates,
      controlCallbacks,
      timelineStates,
      timelineCallbacks,
      children
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
            {...controlStates}
            {...controlCallbacks}
          />
          <CommentInputContainer
            onCommentSubmit={onCommentSubmit}
          />
          <div className={style.timeContainer} style={{ color: this.context.color }}>
            <Time time={this.state.progressTime} />
            <span>{'/'}</span>
            <Time time={timelineStates.duration} />
          </div>
          {/* {
            React.Children.count(children) > 0 ?
              <ButtonGroup>
                { children }
              </ButtonGroup> :
              null
          } */}
        </div>
      </div>
    );
  }
};
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
