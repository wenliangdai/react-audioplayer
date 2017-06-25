import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const PlaylistBtn = (props, context) => (
  <Button {...props}>
    <svg width="19px" height="18px" viewBox="765 361 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="PlaylistBtn-Copy" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(765.000000, 361.000000)">
        <rect id="top-square" fill={`${context.color}`} x="2" y="0" width="3.2" height="3.2" rx="1" />
        <rect id="top-rect" fill={`${context.color}`} x="6" y="0" width="12" height="3.2" rx="1" />
        <path d="M2,6.59495888 C2,6.04545826 2.44494629,5.6 2.99495888,5.6 L4.20504112,5.6 C4.75454174,5.6 5.2,6.04494629 5.2,6.59495888 L5.2,7.80504112 C5.2,8.35454174 4.78325135,8.62678315 4.25926663,8.47475921 L4.5697688,8.55631879 C4.03418028,8.46836829 3.15351466,8.43425474 2.61502527,8.56095724 L2.94073337,8.47475921 C2.42118068,8.65438474 2,8.35505371 2,7.80504112 L2,6.59495888 Z" id="mid-square" fill={`${context.color}`} />
        <rect id="mid-rect" fill={`${context.color}`} x="6" y="5.6" width="12" height="3.2" rx="1" />
        <rect id="bottom-square" fill={`${context.color}`} x="2" y="11.2" width="3.2" height="3.2" />
        <path d="M7.9211643,12.1427979 C7.74379016,11.622105 8.046875,11.2 8.59719572,11.2 L17.0028043,11.2 C17.5535403,11.2 18,11.6449463 18,12.1949589 L18,13.4050411 C18,13.9545417 17.553125,14.4 17.0028043,14.4 L8.59719572,14.4 C8.04645973,14.4 7.77104579,13.9816559 7.9211643,13.4572021 L7.83604665,13.7830078 C7.92542445,13.2401076 7.9611611,12.3552734 7.83604665,11.8169922 L7.9211643,12.1427979 Z" id="bottom-rect" fill={`${context.color}`} />
        <g id="PlayBtn-1-Copy" transform="translate(0.000000, 9.200000)">
          <ellipse id="Outline" fill={`${context.color}`} cx="3.6" cy="3.6" rx="3.6" ry="3.6" />
          <path d="M5.25122326,3.49771599 C5.33339038,3.55420589 5.334436,3.64507525 5.25122326,3.70228401 L2.66877674,5.47771599 C2.58660962,5.53420589 2.52,5.5008975 2.52,5.3995569 L2.52,1.8004431 C2.52,1.70078713 2.585564,1.66507525 2.66877674,1.72228401" id="Triangle" fill="#FFFFFF" />
        </g>
      </g>
    </svg>
  </Button>
);
PlaylistBtn.contextTypes = {
  color: PropTypes.string
};

export default PlaylistBtn;
