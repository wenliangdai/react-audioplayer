import React, { PropTypes } from 'react';
import Button from './Button';
import { svgBtnDefault } from '../../../styles/audioElements.css';

export default class PlayBtn extends Button {
  static propTypes = {
    color: PropTypes.string,
    playing: PropTypes.bool,
    onClick: PropTypes.func
  };
  getShape() {
    if (this.props.playing) {
      return (
        <svg width="19px" height="20px" viewBox="58 20 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="PauseBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(58.000000, 20.000000)">
            <path d="M0,1.00959142 C0,0.452009475 0.45097518,0 0.990777969,0 L5.00922203,0 C5.55641359,0 6,0.450969333 6,1.00959142 L6,18.7999324 C6,19.3575143 5.54902482,19.8095238 5.00922203,19.8095238 L0.990777969,19.8095238 C0.443586406,19.8095238 0,19.3585545 0,18.7999324 L0,1.00959142 Z" id="Rectangle-Left" fill={`${this.props.color}`} />
            <path d="M12,1.00959142 C12,0.452009475 12.4509752,0 12.990778,0 L17.009222,0 C17.5564136,0 18,0.450969333 18,1.00959142 L18,18.7999324 C18,19.3575143 17.5490248,19.8095238 17.009222,19.8095238 L12.990778,19.8095238 C12.4435864,19.8095238 12,19.3585545 12,18.7999324 L12,1.00959142 Z" id="Rectangle-Right" fill={`${this.props.color}`} />
          </g>
        </svg>
      );
    }
    return (
      <svg width="19px" height="23px" viewBox="58 18 19 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="PlayBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(58.000000, 19.000000)">
          <path d="M17.6003477,10.0198528 C18.1298431,10.333827 18.1365811,10.8388843 17.6003477,11.1568539 L0.958736127,21.0248095 C0.429240785,21.3387837 2.06047222e-15,21.1536537 2.06047222e-15,20.5903967 L0,0.586309989 C0,0.0324162152 0.422502718,-0.166072497 0.958736127,0.151897156" id="Triangle" fill={`${this.props.color}`} />
        </g>
      </svg>
    );
  }
  render() {
    return (
      <button
        className={svgBtnDefault}
        onClick={this.props.onClick}
      >
        { this.getShape() }
      </button>
    );
  }
  componentDidMount() {
    console.log('play button mounted!');
  }
}
