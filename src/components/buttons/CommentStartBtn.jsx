import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const CommentStartBtn = (props, context) => (
  <Button {...props}>
    <svg width="15px" height="16px" viewBox="21 22 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.25075,25.00075 L33.75,25.00075 L33.75,31.75075 L23.99925,31.75075 L23.99925,33.25075 C23.99925,33.66475 24.33675,34.00075 24.75,34.00075 L32.99925,34.00075 L36,37.00075 L36,25.75075 C36,25.336 35.664,25.00075 35.25075,25.00075 M31.50075,22 L21.75,22 C21.336,22 21,22.336 21,22.75075 L21,33.25075 L23.99925,30.25075 L31.50075,30.25075 C31.914,30.25075 32.25,29.91475 32.25,29.5 L32.25,22.75075 C32.25,22.336 31.914,22 31.50075,22" id="Fill-6" stroke="none" fill={context.color} fillRule="evenodd" />
    </svg>
  </Button>
);
CommentStartBtn.contextTypes = {
  color: PropTypes.string
};

export default CommentStartBtn;
