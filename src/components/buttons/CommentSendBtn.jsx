import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const CommentSendBtn = (props, context) => (
  <Button {...props}>
    <svg width="16px" height="14px" viewBox="360 23 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon id="Fill-5" stroke="none" fill={context.color} fillRule="evenodd" points="360 28.3335873 371.429116 29.8567075 360 31.3813515 360.008381 36.7149388 376 29.8567075 360.008381 23" />
    </svg>
  </Button>
);
CommentSendBtn.contextTypes = {
  color: PropTypes.string
};

export default CommentSendBtn;
