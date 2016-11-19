import React, { PropTypes } from 'react';
import _ from 'lodash';

class Button extends React.Component {
  getStyle() {
    const defaultStyle = {
      width: 'auto',
      height: '40px',
      flex: '1 1 auto',
      margin: '0',
      padding: '0',
      backgroundColor: '#fff',
      border: 'none',
      outline: 'none',
      cursor: 'pointer'
    };
    if (this.props.style) {
      return Object.assign({}, defaultStyle, this.props.style);
    }
    return defaultStyle;
  }
  getSVGGroupScale() {
    const width = _.replace(this.getStyle().width, 'px', '');
    return `scale(${_.floor(width / 24, 2)})`;
  }
  getSVGAttributes() {
    const width = _.replace(this.getStyle().width, 'px', '');
    const height = _.replace(this.getStyle().height, 'px', '');
    return {
      width,
      height,
      viewBox: `0 0 ${width} ${height}`
    };
  }
}
Button.propTypes = {
  style: PropTypes.shape({}),
  color: PropTypes.string
};
Button.defaultProps = {
  color: '#212121'
};

export class SkipPrevBtn extends Button {
  render() {
    return (
      <button style={this.getStyle()}>
        <svg width="17px" height="14px" viewBox="19 23 17 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="SkipPrevBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(28.000000, 29.857143) scale(-1, 1) translate(-28.000000, -29.857143) translate(20.000000, 23.000000)">
            <path d="M9.96631913,1.82122963 C10.2358164,1.33680006 10.6756124,1.34193159 10.9422549,1.82122963 L16.18498,11.2451898 C16.4544772,11.7296193 16.230297,12.1223271 15.6761737,12.1223271 L5.23240032,12.1223271 C4.68189716,12.1223271 4.4569516,11.7244878 4.72359406,11.2451898 L9.96631913,1.82122963 Z" id="Triangle-Left" fill={`${this.props.color}`} transform="translate(10.456183, 6.825239) rotate(90.000000) translate(-10.456183, -6.825239) "></path>
            <path d="M4.80722381,2.0399444 C5.07672103,1.55551482 5.51651712,1.56064636 5.78315958,2.0399444 L11.0258846,11.4639045 C11.2953819,11.9483341 11.0712017,12.3410419 10.5170784,12.3410419 L0.073305001,12.3410419 C-0.477198162,12.3410419 -0.702143719,11.9432026 -0.435501265,11.4639045 L4.80722381,2.0399444 Z" id="Triangle-Right" fill={`${this.props.color}`} transform="translate(5.297088, 7.043954) rotate(90.000000) translate(-5.297088, -7.043954) "></path>
          </g>
        </svg>
      </button>
    );
  }
}

export class SkipNextBtn extends Button {
  render() {
    return (
      <button style={this.getStyle()}>
        <svg width="17px" height="14px" viewBox="98 23 17 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="SkipNextBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(98.000000, 23.000000)">
            <path d="M9.96631913,1.82122963 C10.2358164,1.33680006 10.6756124,1.34193159 10.9422549,1.82122963 L16.18498,11.2451898 C16.4544772,11.7296193 16.230297,12.1223271 15.6761737,12.1223271 L5.23240032,12.1223271 C4.68189716,12.1223271 4.4569516,11.7244878 4.72359406,11.2451898 L9.96631913,1.82122963 Z" id="Triangle-Right" fill={`${this.props.color}`} transform="translate(10.456183, 6.825239) rotate(90.000000) translate(-10.456183, -6.825239) "></path>
            <path d="M4.80722381,2.0399444 C5.07672103,1.55551482 5.51651712,1.56064636 5.78315958,2.0399444 L11.0258846,11.4639045 C11.2953819,11.9483341 11.0712017,12.3410419 10.5170784,12.3410419 L0.073305001,12.3410419 C-0.477198162,12.3410419 -0.702143719,11.9432026 -0.435501265,11.4639045 L4.80722381,2.0399444 Z" id="Triangle-Left" fill={`${this.props.color}`} transform="translate(5.297088, 7.043954) rotate(90.000000) translate(-5.297088, -7.043954) "></path>
          </g>
        </svg>
      </button>
    );
  }
}

export class PlayBtn extends Button {
  constructor(props) {
    super(props);
    let playing = false;
    if (this.props.playing !== undefined) {
      playing = this.props.playing;
    }
    this.state = { playing };
    this.switchState = this.switchState.bind(this);
  }
  switchState() {
    this.setState({
      playing: !this.state.playing
    });
  }
  getShape() {
    if (this.state.playing) {
      return (
        <svg width="19px" height="20px" viewBox="58 20 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="PauseBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(58.000000, 20.000000)">
            <path d="M0,1.00959142 C0,0.452009475 0.45097518,0 0.990777969,0 L5.00922203,0 C5.55641359,0 6,0.450969333 6,1.00959142 L6,18.7999324 C6,19.3575143 5.54902482,19.8095238 5.00922203,19.8095238 L0.990777969,19.8095238 C0.443586406,19.8095238 0,19.3585545 0,18.7999324 L0,1.00959142 Z" id="Rectangle-Left" fill={`${this.props.color}`}></path>
            <path d="M12,1.00959142 C12,0.452009475 12.4509752,0 12.990778,0 L17.009222,0 C17.5564136,0 18,0.450969333 18,1.00959142 L18,18.7999324 C18,19.3575143 17.5490248,19.8095238 17.009222,19.8095238 L12.990778,19.8095238 C12.4435864,19.8095238 12,19.3585545 12,18.7999324 L12,1.00959142 Z" id="Rectangle-Right" fill={`${this.props.color}`}></path>
          </g>
        </svg>
      );
    }
    return (
      <svg width="19px" height="23px" viewBox="58 18 19 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="PlayBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(58.000000, 19.000000)">
          <path d="M17.6003477,10.0198528 C18.1298431,10.333827 18.1365811,10.8388843 17.6003477,11.1568539 L0.958736127,21.0248095 C0.429240785,21.3387837 2.06047222e-15,21.1536537 2.06047222e-15,20.5903967 L0,0.586309989 C0,0.0324162152 0.422502718,-0.166072497 0.958736127,0.151897156" id="Triangle" fill={`${this.props.color}`}></path>
        </g>
      </svg>
    );
  }
  render() {
    return (
      <button
        style={this.getStyle()}
        onClick={this.switchState}
      >
        { this.getShape() }
      </button>
    );
  }
}

export class VolumnBtn extends Button {
  constructor(props) {
    super(props);
    this.state = {
      volume: this.props.initialVolume
    };
    this.adjustVolume = this.adjustVolume.bind(this);
  }
  adjustVolume(volume) {
    this.setState({ volume });
  }
  getShape() {
    if (this.state.volume >= 50) {
      return (
        <svg width="17px" height="16px" viewBox="168 22 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="VolumeBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(168.000000, 22.000000)">
            <path d="M9.77777778,14.1180227 C12.3475556,13.3325731 14.2222222,10.8913849 14.2222222,7.99954387 C14.2222222,5.10861509 12.3475556,2.66742688 9.77777778,1.88197731 L9.77777778,0 C13.3395556,0.831062204 16,4.09327784 16,7.99954387 C16,11.9067222 13.3395556,15.16985 9.77777778,16 L9.77777778,14.1180227 Z M9.77777778,11.6740977 L9.77777778,4.32590227 C11.0933333,4.99914476 12,6.38941787 12,7.99954387 C12,9.61058213 11.0933333,11.0008552 9.77777778,11.6740977 Z M1.10550986,10.736302 C0.494953625,10.736302 0,10.2311777 0,9.62865429 L0,6.37043346 C0,5.75869655 0.494384766,5.26278579 1.10550986,5.26278579 L0.222415924,5.26278579 C2.06325811,5.26278579 4.59758031,4.19337216 5.88191054,2.87528424 L7.22583686,1.49603378 C7.65339536,1.05723722 8,1.20395116 8,1.82261332 L8,14.1764744 C8,14.7956359 7.6512519,14.9396507 7.22583686,14.503054 L5.88191054,13.1238035 C4.59710016,11.8052228 2.06828139,10.736302 0.222415924,10.736302 L1.10550986,10.736302 Z" id="ic_sound" fill={`${this.props.color}`}></path>
          </g>
        </svg>
      );
    } else if (this.state.volume > 0) {
      return (
        <svg width="17px" height="16px" viewBox="168 22 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="VolumeBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(168.000000, 22.000000)">
            <path d="M9.77777778,14.1180227 C12.3475556,13.3325731 14.2222222,10.8913849 14.2222222,7.99954387 C14.2222222,5.10861509 12.3475556,2.66742688 9.77777778,1.88197731 L9.77777778,0 C13.3395556,0.831062204 16,4.09327784 16,7.99954387 C16,11.9067222 13.3395556,15.16985 9.77777778,16 L9.77777778,14.1180227 Z M9.77777778,11.6740977 L9.77777778,4.32590227 C11.0933333,4.99914476 12,6.38941787 12,7.99954387 C12,9.61058213 11.0933333,11.0008552 9.77777778,11.6740977 Z M1.10550986,10.736302 C0.494953625,10.736302 0,10.2311777 0,9.62865429 L0,6.37043346 C0,5.75869655 0.494384766,5.26278579 1.10550986,5.26278579 L0.222415924,5.26278579 C2.06325811,5.26278579 4.59758031,4.19337216 5.88191054,2.87528424 L7.22583686,1.49603378 C7.65339536,1.05723722 8,1.20395116 8,1.82261332 L8,14.1764744 C8,14.7956359 7.6512519,14.9396507 7.22583686,14.503054 L5.88191054,13.1238035 C4.59710016,11.8052228 2.06828139,10.736302 0.222415924,10.736302 L1.10550986,10.736302 Z" id="ic_sound" fill={`${this.props.color}`}></path>
          </g>
        </svg>
      );
    }
    return (
      <svg width="9px" height="18px" viewBox="168 21 9 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="VolumeMuteBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(168.000000, 22.000000)">
          <path d="M1.11030579,11.1687318 C0.497100833,11.1687318 0,10.6713038 0,10.064524 L0,5.93371971 C0,5.32388256 0.495344925,4.82951187 1.11030579,4.82951187 L0.577097914,4.82951187 C2.41842256,4.82951187 4.92409205,3.73493648 6.16951769,2.38919324 L8.04682525,0.360670709 C8.46279218,-0.0888018767 8.8,0.034519187 8.8,0.655985732 L8.8,15.3422579 C8.8,15.9548285 8.46396687,16.0883148 8.04682525,15.637573 L6.16951769,13.6090504 C4.92223418,12.2612997 2.41015896,11.1687318 0.577097914,11.1687318 L1.11030579,11.1687318 Z" id="ic_sound" fill={`${this.props.color}`}></path>
        </g>
      </svg>
    );
  }
  render() {
    return (
      <button style={this.getStyle()}>
        { this.getShape() }
      </button>
    );
  }
}

export class LoopBtn extends Button {
  render() {
    return (
      <button style={this.getStyle()}>
        <svg width="17px" height="13px" viewBox="140 23 17 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="LoopPrevBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(148.000000, 29.894737) scale(-1, 1) translate(-148.000000, -29.894737) translate(140.000000, 24.000000)">
            <g id="Arrow-Top" transform="translate(0.842105, 0.000000)" fill={`${this.props.color}`}>
              <path d="M11.7092636,0.954021728 C11.9946349,0.47840284 12.4564961,0.477040909 12.7426846,0.954021728 L13.5294038,2.26522038 C13.8147751,2.74083927 13.5997445,3.12640456 13.0513917,3.12640456 L11.4005565,3.12640456 C10.8511864,3.12640456 10.6363559,2.7422012 10.9225444,2.26522038 L11.7092636,0.954021728 Z" id="Triangle" transform="translate(12.226540, 1.820706) rotate(90.000000) translate(-12.226540, -1.820706) "></path>
              <rect id="Rectangle" x="1.2134268" y="1.2134268" width="9.70741443" height="1.2134268"></rect>
              <rect id="Rectangle-Copy" transform="translate(0.606713, 4.853707) rotate(90.000000) translate(-0.606713, -4.853707) " x="-3.03356701" y="4.24699381" width="7.28056082" height="1.2134268"></rect>
            </g>
            <g id="Arrow-Top-Bottom" transform="translate(7.638619, 6.895976) scale(-1, -1) translate(-7.638619, -6.895976) translate(0.480724, 2.264397)" fill={`${this.props.color}`}>
              <path d="M11.7092636,0.954021728 C11.9946349,0.47840284 12.4564961,0.477040909 12.7426846,0.954021728 L13.5294038,2.26522038 C13.8147751,2.74083927 13.5997445,3.12640456 13.0513917,3.12640456 L11.4005565,3.12640456 C10.8511864,3.12640456 10.6363559,2.7422012 10.9225444,2.26522038 L11.7092636,0.954021728 Z" id="Triangle" transform="translate(12.226540, 1.820706) rotate(90.000000) translate(-12.226540, -1.820706) "></path>
              <rect id="Rectangle" x="1.2134268" y="1.2134268" width="9.70741443" height="1.2134268"></rect>
              <rect id="Rectangle-Copy" transform="translate(0.606713, 4.853707) rotate(90.000000) translate(-0.606713, -4.853707) " x="-3.03356701" y="4.24699381" width="7.28056082" height="1.2134268"></rect>
            </g>
          </g>
        </svg>
      </button>
    );
  }
}

export class LikeBtn extends Button {
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
  getShape() {
    if (this.state.liked) {
      return (
        <svg width="20px" height="18px" viewBox="23 21 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Like" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(23.000000, 21.000000)">
            <path d="M10,3.375 C9.25555556,1.4265 7.17,0 5,0 C2.17444444,0 0,2.1735 0,5.0625 C0,9.032625 4.21444444,12.10275 10,18 C15.7855556,12.10275 20,9.032625 20,5.0625 C20,2.1735 17.8255556,0 15,0 C12.8277778,0 10.7444444,1.4265 10,3.375 Z" id="Shape" fill={`${this.props.color}`}></path>
          </g>
        </svg>
      );
    }
    return (
      <svg width="20px" height="18px" viewBox="21 20 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path d="M10,3.375 C9.25555556,1.4265 7.17,0 5,0 C2.17444444,0 0,2.1735 0,5.0625 C0,9.032625 4.21444444,12.10275 10,18 C15.7855556,12.10275 20,9.032625 20,5.0625 C20,2.1735 17.8255556,0 15,0 C12.8277778,0 10.7444444,1.4265 10,3.375 Z" id="path-1"></path>
          <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="20" height="18" fill="white">
            <use xlinkHref="#path-1"></use>
          </mask>
        </defs>
        <g id="Dislike" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(21.000000, 20.000000)">
          <use id="Shape" stroke={`${this.props.color}`} mask="url(#mask-2)" strokeWidth="4" xlinkHref="#path-1"></use>
        </g>
      </svg>
    );
  }
  render() {
    return (
      <button
        style={this.getStyle()}
        onClick={this.toggle}
      >
        { this.getShape() }
      </button>
    );
  }
}
LikeBtn.propTypes = {
  liked: PropTypes.bool
};
LikeBtn.defaultProps = {
  liked: false
};

export class ShareBtn extends Button {
  render() {
    return (
      <button style={this.getStyle()}>
        <svg width="16px" height="18px" viewBox="40 1 16 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Share" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(40.000000, 1.000000)">
            <path d="M13.3333333,12.6401606 C12.6577778,12.6401606 12.0533333,12.9052209 11.5911111,13.3204819 L5.25333333,9.65381526 C5.29777778,9.45060241 5.33333333,9.24738956 5.33333333,9.03534137 C5.33333333,8.82329317 5.29777778,8.62008032 5.25333333,8.41686747 L11.52,4.78554217 C12,5.22730924 12.6311111,5.50120482 13.3333333,5.50120482 C14.8088889,5.50120482 16,4.31726908 16,2.85060241 C16,1.38393574 14.8088889,0.2 13.3333333,0.2 C11.8577778,0.2 10.6666667,1.38393574 10.6666667,2.85060241 C10.6666667,3.0626506 10.7022222,3.26586345 10.7466667,3.46907631 L4.48,7.10040161 C4,6.65863454 3.36888889,6.38473896 2.66666667,6.38473896 C1.19111111,6.38473896 0,7.5686747 0,9.03534137 C0,10.502008 1.19111111,11.6859438 2.66666667,11.6859438 C3.36888889,11.6859438 4,11.4120482 4.48,10.9702811 L10.8088889,14.6457831 C10.7644444,14.8313253 10.7377778,15.0257028 10.7377778,15.2200803 C10.7377778,16.6425703 11.9022222,17.8 13.3333333,17.8 C14.7644444,17.8 15.9288889,16.6425703 15.9288889,15.2200803 C15.9288889,13.7975904 14.7644444,12.6401606 13.3333333,12.6401606 L13.3333333,12.6401606 Z" id="Shape" fill={`${this.props.color}`}></path>
          </g>
        </svg>
      </button>
    );
  }
}
