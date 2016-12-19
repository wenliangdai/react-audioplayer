import React, { PropTypes } from 'react';

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
    color: PropTypes.string
  };
  static defaultProps = {
    color: '#212121'
  };
  getStyle() {
    const defaultStyle = {
      width: 'auto',
      height: '40px',
      flex: '1 1 auto',
      margin: '0',
      padding: '0',
      backgroundColor: '#fff',
      border: 'none',
      outline: 'none',
      cursor: 'pointer'
    };
    if (this.props.style) {
      return Object.assign({}, defaultStyle, this.props.style);
    }
    return defaultStyle;
  }
}

export default Button;
