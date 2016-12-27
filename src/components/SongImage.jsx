import React, { PropTypes } from 'react';
import { songImage } from '../styles/audioElements.css';

class SongImage extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string
  };
  componentDidUpdate() {
    console.log('SongImage updated!');
  }
  render() {
    return (
      <div className={songImage}>
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
