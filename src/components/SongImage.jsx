import React, { PropTypes } from 'react';
import { songImage, songImageLeft, songImageRight } from '../styles/audioElements.css';

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
    const albumLength = this.props.height - 60;
    return (
      <div className={className} style={{
        height: `${this.props.height}px`
      }}>
        <section className={songImageLeft}>
          <img
            src={this.props.src}
            alt="Album cover image"
            style={{
              width: `${albumLength}px`,
              height: `${albumLength}px`
            }}
          />
        </section>
        <section className={songImageRight}>
          <p>Comments Area</p>
        </section>
        {
          // If the browser doesn't support CSS3 object-fit, then use a <div> with background-image instead.
          ('objectFit' in document.documentElement.style) ?
            <img
              src={this.props.src}
              alt="Player background image"
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
