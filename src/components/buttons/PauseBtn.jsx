import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const PauseBtn = (props, context) => (
  <Button {...props}>
    <svg width="15px" height="16px" viewBox="60 22 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="PauseBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(60.000000, 22.000000)">
        <path d="M0,0.991339547 C0,0.443837833 0.447459618,0 1.00111708,0 L3.66554959,0 C4.21845128,0 4.66666667,0.457197498 4.66666667,0.991339547 L4.66666667,14.8562795 C4.66666667,15.4037812 4.21920705,15.847619 3.66554959,15.847619 L1.00111708,15.847619 C0.448215384,15.847619 0,15.3904215 0,14.8562795 L0,0.991339547 Z" id="Rectangle-Left" fill={`${context.color}`} />
        <path d="M9.33333333,0.991339547 C9.33333333,0.443837833 9.78079295,0 10.3344504,0 L12.9988829,0 C13.5517846,0 14,0.457197498 14,0.991339547 L14,14.8562795 C14,15.4037812 13.5525404,15.847619 12.9988829,15.847619 L10.3344504,15.847619 C9.78154872,15.847619 9.33333333,15.3904215 9.33333333,14.8562795 L9.33333333,0.991339547 Z" id="Rectangle-Right" fill={`${context.color}`} />
      </g>
    </svg>
  </Button>
);
PauseBtn.contextTypes = {
  color: PropTypes.string
};

export default PauseBtn;
