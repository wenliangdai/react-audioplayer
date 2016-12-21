import React from 'react';
import Button from './Button';
import { svgBtnDefault } from '../../../styles/audioElements.css';

export default class LoopBtn extends Button {
  render() {
    return (
      <button className={svgBtnDefault}>
        <svg width="17px" height="13px" viewBox="140 23 17 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="LoopPrevBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(148.000000, 29.894737) scale(-1, 1) translate(-148.000000, -29.894737) translate(140.000000, 24.000000)">
            <g id="Arrow-Top" transform="translate(0.842105, 0.000000)" fill={`${this.props.color}`}>
              <path d="M11.7092636,0.954021728 C11.9946349,0.47840284 12.4564961,0.477040909 12.7426846,0.954021728 L13.5294038,2.26522038 C13.8147751,2.74083927 13.5997445,3.12640456 13.0513917,3.12640456 L11.4005565,3.12640456 C10.8511864,3.12640456 10.6363559,2.7422012 10.9225444,2.26522038 L11.7092636,0.954021728 Z" id="Triangle" transform="translate(12.226540, 1.820706) rotate(90.000000) translate(-12.226540, -1.820706) " />
              <rect id="Rectangle" x="1.2134268" y="1.2134268" width="9.70741443" height="1.2134268" />
              <rect id="Rectangle-Copy" transform="translate(0.606713, 4.853707) rotate(90.000000) translate(-0.606713, -4.853707) " x="-3.03356701" y="4.24699381" width="7.28056082" height="1.2134268" />
            </g>
            <g id="Arrow-Top-Bottom" transform="translate(7.638619, 6.895976) scale(-1, -1) translate(-7.638619, -6.895976) translate(0.480724, 2.264397)" fill={`${this.props.color}`}>
              <path d="M11.7092636,0.954021728 C11.9946349,0.47840284 12.4564961,0.477040909 12.7426846,0.954021728 L13.5294038,2.26522038 C13.8147751,2.74083927 13.5997445,3.12640456 13.0513917,3.12640456 L11.4005565,3.12640456 C10.8511864,3.12640456 10.6363559,2.7422012 10.9225444,2.26522038 L11.7092636,0.954021728 Z" id="Triangle" transform="translate(12.226540, 1.820706) rotate(90.000000) translate(-12.226540, -1.820706) " />
              <rect id="Rectangle" x="1.2134268" y="1.2134268" width="9.70741443" height="1.2134268" />
              <rect id="Rectangle-Copy" transform="translate(0.606713, 4.853707) rotate(90.000000) translate(-0.606713, -4.853707) " x="-3.03356701" y="4.24699381" width="7.28056082" height="1.2134268" />
            </g>
          </g>
        </svg>
      </button>
    );
  }
}
