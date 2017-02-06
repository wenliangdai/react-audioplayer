import React, { PropTypes } from 'react';

const progressBarHandler = ({
  length,
  translate,
  onMouseDown
}, { color }) => (
  <g
    transform={`translate(${translate})`}
    onMouseDown={onMouseDown}
  >
    <rect x="0" y="0" width={length} height={length} fill={color} rx="10" ry="10" />
    <rect x={length/4} y={length/4} width={length/2} height={length/2} fill="#fff" rx="10" ry="10" />
  </g>
);
progressBarHandler.propTypes = {
  length: PropTypes.number.isRequired,
  translate: PropTypes.number.isRequired,
  onMouseDown: PropTypes.func
};
progressBarHandler.contextTypes = {
  color: PropTypes.string
};

export default progressBarHandler;
