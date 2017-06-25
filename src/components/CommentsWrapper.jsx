import React from 'react';
import PropTypes from 'prop-types';
import CommentsContainer from './CommentsContainer';
import FullComment from './FullComment';
import style from '../styles/audioElements.css';

class CommentsWrapper extends React.PureComponent {
  static propTypes = {
    songImageSrc: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    comment: PropTypes.bool
  };
  static defaultProps = {
    songImageSrc: '',
    height: 340
  };
  constructor(props) {
    super(props);
    this.state = {
      fullComment: false,
      fullCommentTextNode: null
    };
    this.onClickComment = this.onClickComment.bind(this);
    this.documentClickHandler = this.documentClickHandler.bind(this);
  }
  componentDidMount() {
    if (this.props.comment) {
      const commentsContainer = document.querySelector(`.${style.commentsContainer}`);
      commentsContainer.addEventListener('click', this.onClickComment);
    }
  }
  onClickComment(e) {
    const target = e.target;
    if (target.tagName.toLowerCase() === 'p') {
      if (!this.state.fullComment) {
        this.setState({
          fullComment: true,
          fullCommentTextNode: target.firstChild
        });

        return document.addEventListener('click', this.documentClickHandler);
      }

      if (target.firstChild === this.state.fullCommentTextNode) {
        document.removeEventListener('click', this.documentClickHandler);
        return this.setState({ fullComment: false });
      }

      this.setState({ fullCommentTextNode: target.firstChild });
    }
  }
  documentClickHandler(event) {
    if (!document.querySelector(`.${style.commentsContainer}`).contains(event.target)) {
      this.setState({ fullComment: false });
      document.removeEventListener(event.type, this.documentClickHandler);
    }
  }
  render() {
    const {
      songImageSrc,
      width,
      height,
      progress,
      comments,
      comment
    } = this.props;
    const albumLength = Math.min(width * 0.4, height) - 40;
    return (
      <div
        className={style.commentsWrapper}
        style={{
          height: `${height}px`
        }}
      >
        <section className={style.albumCoverContainer}>
          <div
            className={style.coverWrapper}
            style={{
              width: `${albumLength}px`,
              height: `${albumLength}px`
            }}
          >
            <img
              src={songImageSrc}
              alt="Album cover"
            />
            {
              comment ? <FullComment
                className={style.fullComment}
                show={this.state.fullComment}
                content={this.state.fullCommentTextNode}
              /> : null
            }
          </div>
        </section>
        {
          comment ? <CommentsContainer
            className={style.commentsContainer}
            height={height}
            progress={progress}
            comments={comments}
          /> : null
        }

        <div className={style.commentsWrapperBackgroundMask} />
        <div
          className={style.commentsWrapperBackground}
          style={{
            backgroundImage: `url(${songImageSrc})`
          }}
        />
      </div>
    );
  }
}

export default CommentsWrapper;
