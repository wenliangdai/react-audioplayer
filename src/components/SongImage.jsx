import React, { PropTypes } from 'react';
import { songImage } from '../styles/audioElements.css';

class SongImage extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  };
  static defaultProps = {
    src: '',
    className: '',
    height: 340
  };
  render() {
    const className = `${songImage} ${this.props.className}`.trim();
    const albumLength = Math.min(this.props.width * 0.4, this.props.height) - 80;
    const scrollBarWidth = 15;
    return (
      <div className={className} style={{
        height: `${this.props.height}px`
      }}>
        <section style={{
          width: `${this.props.width * 0.4}px`
        }}>
          <img
            src={this.props.src}
            alt="Album cover image"
            style={{
              width: `${albumLength}px`,
              height: `${albumLength}px`
            }}
          />
        </section>
        <section style={{
          width: `${this.props.width * 0.6 + scrollBarWidth}px`,
          marginRight: `-${scrollBarWidth}px`
        }}>
          <p>Comments AreaComments AreaComments AreaComments Area</p>
          <p>Comments Area</p>
          <p>Comments Area</p>
          <p>Comments Area</p>
          <p>Comments Area</p>
          <p>Comments Area</p>
          <p>Comments Area</p>
          <p>Comments Area</p>
          <p>Comments Area</p>
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
