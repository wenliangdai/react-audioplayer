import React from 'react';
import PropTypes from 'prop-types';

const VolumeBar = ({
  width,
  height,
  barWidth,
  handlerWidth,
  handlerHeight,
  translate,
  onClick,
  children
}, { color }) => {
  const diff = (width - barWidth) / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g onClick={onClick}>
        <rect
          x={diff}
          y={handlerHeight / 2}
          width={barWidth}
          height={height - handlerHeight}
          fill={color}
        />
        <rect
          x={diff}
          y={handlerHeight / 2}
          width={barWidth}
          height={translate}
          fill="#E0E0E0"
        />
      </g>
      { children }
    </svg>
  );
};
VolumeBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  barWidth: PropTypes.number.isRequired,
  translate: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
VolumeBar.contextTypes = {
  color: PropTypes.string
};

export default VolumeBar;
