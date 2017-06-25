import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const VolumeLowBtn = (props, context) => (
  <Button {...props}>
    <svg width="17px" height="16px" viewBox="168 22 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="VolumeBtn-Low" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(168.000000, 23.000000)">
        <path d="M11.7777778,10.5751111 L11.7777778,3.41511111 C13.0933333,4.07111111 14,5.42577778 14,6.99466667 C14,8.56444444 13.0933333,9.91911111 11.7777778,10.5751111 Z M2.4359809,9.66133333 C2.1951953,9.66133333 2,9.45877291 2,9.22488428 L2,4.76444905 C2,4.5234049 2.19116211,4.328 2.4359809,4.328 L4.2315979,4.328 C4.96279952,4.328 5.98170757,3.90184798 6.49810791,3.38544765 L9.68036652,0.203189039 C9.85689521,0.0266603408 10,0.0846053602 10,0.324793959 L10,13.6645394 C10,13.9082286 9.862113,13.9678908 9.68036652,13.7861443 L6.49810791,10.6038857 C5.97755062,10.0833284 4.96842787,9.66133333 4.2315979,9.66133333 L2.4359809,9.66133333 Z" id="ic_sound" fill={`${context.color}`} />
      </g>
    </svg>
  </Button>
);
VolumeLowBtn.contextTypes = {
  color: PropTypes.string
};

export default VolumeLowBtn;
