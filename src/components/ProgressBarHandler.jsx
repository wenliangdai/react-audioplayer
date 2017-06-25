import React from 'react';
import PropTypes from 'prop-types';

const progressBarHandler = ({
  width,
  height,
  translate,
  visibility,
  onMouseDown
}, { color }) => (
  <g
    visibility={visibility ? 'visible' : 'hidden'}
    transform={translate}
    onMouseDown={onMouseDown}
  >
    <rect x={0} y="0" width={width} height={height} fill={color} />
    <rect x={width / 3} y={height / 3} width={width / 3} height={height / 3} fill="#fff" />
  </g>
);
progressBarHandler.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  translate: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func.isRequired
};
progressBarHandler.contextTypes = {
  color: PropTypes.string
};

export default progressBarHandler;
