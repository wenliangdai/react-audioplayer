import React, { PropTypes } from 'react';
import style from '../styles/audioElements.css';

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
    const className = `${style.songImage} ${this.props.className}`.trim();
    const albumLength = Math.min(this.props.width * 0.4, this.props.height) - 80;
    const scrollBarWidth = 15;
    return (
      <div className={className} style={{
        height: `${this.props.height}px`
      }}>
        <section style={{ width: `${this.props.width * 0.4}px` }}>
          <img
            src={this.props.src}
            alt="Album cover image"
            style={{
              width: `${albumLength}px`,
              height: `${albumLength}px`
            }}
          />
        </section>
        <section
          style={{
            width: `${this.props.width * 0.6 + scrollBarWidth}px`,
            marginRight: `-${scrollBarWidth}px`
          }}
        >
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
        <div className={style.songImageMask}></div>
        <div className={style.songImageBackground} style={{ backgroundImage: `url(${this.props.src})` }}/>
      </div>
    );
  }
}

export default SongImage;
