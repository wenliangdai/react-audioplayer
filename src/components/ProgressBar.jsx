import React, { PropTypes } from 'react';

const ProgressBar = ({
  width,
  height,
  barWidth,
  barHeight,
  handlerWidth,
  translate,
  duration,
  onMouseDown,
  onMouseOver,
  onMouseOut,
  children
}, { color }) => {
  const diff = (height - barHeight) / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <g onMouseDown={onMouseDown}>
        {/* A rect to expand the area of clicking */}
        <rect
          x={0}
          y={0}
          width={barWidth}
          height={height}
          opacity="0"
        />
        <rect
          x={0}
          y={diff}
          width={barWidth}
          height={barHeight}
          fill="#E0E0E0"
        />
        <rect
          x={0}
          y={diff}
          width={translate}
          height={barHeight}
          fill={color}
        />
      </g>
      { children }
    </svg>
  );
};
ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  barHeight: PropTypes.number.isRequired,
  translate: PropTypes.number.isRequired,
  onMouseDown: PropTypes.func.isRequired
};
ProgressBar.contextTypes = {
  color: PropTypes.string
};

export default ProgressBar;
