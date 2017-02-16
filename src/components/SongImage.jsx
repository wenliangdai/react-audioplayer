import React, { PropTypes } from 'react';
import { songImage } from '../styles/audioElements.css';

class SongImage extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    height: PropTypes.number
  };
  static defaultProps = {
    src: '',
    className: '',
    height: 340
  };
  render() {
    const className = `${songImage} ${this.props.className}`.trim();
    return (
      <div className={className} style={{
        height: `${this.props.height}px`
      }}>
        {
          // If the browser doesn't support CSS3 object-fit, then use a <div> with background-image instead.
          ('objectFit' in document.documentElement.style) ?
            <img
              src={this.props.src}
              alt=""
            /> :
            <div
              style={{ backgroundImage: `url(${this.props.src})` }}
            />
        }
      </div>
    );
  }
}

export default SongImage;
