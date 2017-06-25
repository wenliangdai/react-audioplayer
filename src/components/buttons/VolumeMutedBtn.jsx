import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const VolumeMutedBtn = (props, context) => (
  <Button {...props}>
    <svg width="17px" height="16px" viewBox="168 22 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="VolumeBtn-Muted" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(168.000000, 23.000000)">
        <g id="Group">
          <g id="Material/Icons-black/close" transform="translate(9.846154, 4.000000)" fill={`${context.color}`}>
            <polygon id="Shape" points="5.82294197 0.56 5.26294197 0 3.02294197 2.24 0.78294197 0 0.22294197 0.56 2.46294197 2.8 0.22294197 5.04 0.78294197 5.6 3.02294197 3.36 5.26294197 5.6 5.82294197 5.04 3.58294197 2.8" />
          </g>
          <path d="M0.435980903,9.66133333 C0.195195299,9.66133333 0,9.45877291 0,9.22488428 L0,4.76444905 C0,4.5234049 0.191162109,4.328 0.435980903,4.328 L2.2315979,4.328 C2.96279952,4.328 3.98170757,3.90184798 4.49810791,3.38544765 L7.68036652,0.203189039 C7.85689521,0.0266603408 8,0.0846053602 8,0.324793959 L8,13.6645394 C8,13.9082286 7.862113,13.9678908 7.68036652,13.7861443 L4.49810791,10.6038857 C3.97755062,10.0833284 2.96842787,9.66133333 2.2315979,9.66133333 L0.435980903,9.66133333 Z" id="ic_sound" fill={`${context.color}`} />
        </g>
      </g>
    </svg>
  </Button>
);
VolumeMutedBtn.contextTypes = {
  color: PropTypes.string
};

export default VolumeMutedBtn;
