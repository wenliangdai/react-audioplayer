import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const SkipPrevBtn = (props, context) => (
  <Button {...props}>
    <svg width="17px" height="14px" viewBox="19 23 17 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="SkipPrevBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(28.000000, 29.857143) scale(-1, 1) translate(-28.000000, -29.857143) translate(20.000000, 23.000000)">
        <path d="M9.96631913,1.82122963 C10.2358164,1.33680006 10.6756124,1.34193159 10.9422549,1.82122963 L16.18498,11.2451898 C16.4544772,11.7296193 16.230297,12.1223271 15.6761737,12.1223271 L5.23240032,12.1223271 C4.68189716,12.1223271 4.4569516,11.7244878 4.72359406,11.2451898 L9.96631913,1.82122963 Z" id="Triangle-Left" fill={`${context.color}`} transform="translate(10.456183, 6.825239) rotate(90.000000) translate(-10.456183, -6.825239) " />
        <path d="M4.80722381,2.0399444 C5.07672103,1.55551482 5.51651712,1.56064636 5.78315958,2.0399444 L11.0258846,11.4639045 C11.2953819,11.9483341 11.0712017,12.3410419 10.5170784,12.3410419 L0.073305001,12.3410419 C-0.477198162,12.3410419 -0.702143719,11.9432026 -0.435501265,11.4639045 L4.80722381,2.0399444 Z" id="Triangle-Right" fill={`${context.color}`} transform="translate(5.297088, 7.043954) rotate(90.000000) translate(-5.297088, -7.043954) " />
      </g>
    </svg>
  </Button>
);
SkipPrevBtn.contextTypes = {
  color: PropTypes.string
};

export default SkipPrevBtn;
