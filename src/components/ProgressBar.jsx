import React, { PropTypes } from 'react';

const ProgressBar = ({
  width,
  height,
  trackHeight,
  translate,
  onClick,
  onMouseOver,
  onMouseOut,
  children
}, { color }) => {
  const diff = (height - trackHeight) / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <g>
        <rect
          x={height / 2}
          y={diff}
          width={width - (height)}
          height={trackHeight}
          fill="#E0E0E0" rx="2" ry="2"
        />
        <rect
          x={height / 2}
          y={diff}
          width={translate}
          height={trackHeight}
          fill={`${color}`} rx="2" ry="2"
        />
      </g>
      { children }
    </svg>
  );
};
ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  trackHeight: PropTypes.number.isRequired,
  translate: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
};
ProgressBar.contextTypes = {
  color: PropTypes.string
};
export default ProgressBar;
