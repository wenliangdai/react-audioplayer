import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const CloseBtn = (props, context) => (
  <Button {...props}>
    <svg width="14px" height="14px" viewBox="354 23 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon id="Shape" stroke="none" fill={context.color} fillRule="evenodd" points="368 24.4 366.6 23 361 28.6 355.4 23 354 24.4 359.6 30 354 35.6 355.4 37 361 31.4 366.6 37 368 35.6 362.4 30" />
    </svg>
  </Button>
);
CloseBtn.contextTypes = {
  color: PropTypes.string
};

export default CloseBtn;
