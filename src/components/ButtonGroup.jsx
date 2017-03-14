import React from 'react';
import style from '../styles/audioComponents.css';

const ButtonGroup = ({ children }) => {
  const newStyle = { width: `${React.Children.count(children) * 40}px` };
  return (
    <div
      className={style.flexButtonBox}
      style={newStyle}
    >
      { children }
    </div>
  );
};

export default ButtonGroup;
