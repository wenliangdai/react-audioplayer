import React from 'react';
import PropTypes from 'prop-types';
import { TransitionMotion, spring } from 'react-motion';
import Comment from './Comment';

class CommentsContainer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    height: PropTypes.number,
    progress: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      visibleComments: [],
      commentHeight: 32,
      scroll: true,
      clearScreen: false
    };
    this.willLeave = this.willLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      height,
      progress,
      comments
    } = nextProps;
    // get the comments whose .time are smaller than audio progress
    const filteredComments = comments.filter((comment) => {
      return progress >= comment.time;
    })
    .sort(this.sortComments);

    const length = filteredComments.length;
    if (length === 0) { return this.setState({ visibleComments: [] }); }

    const maxItems = Math.floor(height / this.state.commentHeight);
    if (length > maxItems) {
      return this.setState({
        visibleComments: filteredComments.slice(length - maxItems, length)
      });
    }
    return this.setState({ visibleComments: filteredComments });
  }

  shouldComponentUpdate() {
    return this.state.scroll;
  }

  onMouseEnter() {
    this.setState({ scroll: false });
  }

  onMouseLeave() {
    this.setState({ scroll: true });
  }

  sortComments(a, b) {
    if (a.time < b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  }

  willEnter() {
    return {
      height: 0,
      opacity: 0
    };
  }

  willLeave() {
    if (this.state.clearScreen) { return null; }
    return {
      height: spring(0),
      opacity: spring(0),
      fontSize: 0
    };
  }

  render() {
    return (
      <TransitionMotion
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        styles={this.state.visibleComments.map(item => ({
          key: `${item.time}`,
          data: item.content,
          style: {
            height: spring(this.state.commentHeight),
            opacity: spring(1)
          }
        }))}
      >
        {interpolatedStyles =>
          <div className={this.props.className} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            {interpolatedStyles.map(config => (
              <Comment
                key={config.key}
                content={config.data}
                style={config.style}
              />
            ))}
          </div>
        }
      </TransitionMotion>
    );
  }
}

export default CommentsContainer;
