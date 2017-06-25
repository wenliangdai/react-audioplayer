import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const PlayBtn = (props, context) => (
  <Button {...props}>
    <svg width="15px" height="18px" viewBox="60 21 15 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="PlayBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(60.000000, 22.000000)">
        <path d="M13.6891593,7.74261351 C14.1009891,7.98522993 14.1062298,8.37550147 13.6891593,8.62120529 L0.745683654,16.2464437 C0.333853944,16.4890602 1.60258951e-15,16.3460052 1.60258951e-15,15.9107611 L0,0.453057719 C0,0.0250488936 0.328613225,-0.128328748 0.745683654,0.117375075" id="Triangle" fill={`${context.color}`} />
      </g>
    </svg>
  </Button>
);
PlayBtn.contextTypes = {
  color: PropTypes.string
};

export default PlayBtn;
