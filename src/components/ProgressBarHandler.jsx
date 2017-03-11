import React, { PropTypes } from 'react';

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
    <rect x={0} y="0" width={width} height={height} fill={color}/>
    <rect x={width / 4} y={height / 4} width={width / 2} height={height / 2} fill="#fff" />
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
