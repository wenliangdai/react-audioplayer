import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class LikeBtn extends React.PureComponent {
  static propTypes = {
    liked: PropTypes.bool
  };
  static defaultProps = {
    liked: false
  };
  static contextTypes = {
    color: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      liked: !this.state.liked
    });
  }
  renderLike() {
    return (
      <svg width="20px" height="18px" viewBox="23 21 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Like" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(23.000000, 21.000000)">
          <path d="M10,3.375 C9.25555556,1.4265 7.17,0 5,0 C2.17444444,0 0,2.1735 0,5.0625 C0,9.032625 4.21444444,12.10275 10,18 C15.7855556,12.10275 20,9.032625 20,5.0625 C20,2.1735 17.8255556,0 15,0 C12.8277778,0 10.7444444,1.4265 10,3.375 Z" id="Shape" fill={`${this.context.color}`} />
        </g>
      </svg>
    );
  }
  renderDislike() {
    return (
      <svg width="20px" height="18px" viewBox="21 20 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path d="M10,3.375 C9.25555556,1.4265 7.17,0 5,0 C2.17444444,0 0,2.1735 0,5.0625 C0,9.032625 4.21444444,12.10275 10,18 C15.7855556,12.10275 20,9.032625 20,5.0625 C20,2.1735 17.8255556,0 15,0 C12.8277778,0 10.7444444,1.4265 10,3.375 Z" id="path-1" />
          <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="20" height="18" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
        </defs>
        <g id="Dislike" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(21.000000, 20.000000)">
          <use id="Shape" stroke={`${this.context.color}`} mask="url(#mask-2)" strokeWidth="4" xlinkHref="#path-1" />
        </g>
      </svg>
    );
  }
  render() {
    return (
      <Button {...this.props} onClick={this.toggle}>
        { this.state.liked ? this.renderLike() : this.renderDislike() }
      </Button>
    );
  }
}
