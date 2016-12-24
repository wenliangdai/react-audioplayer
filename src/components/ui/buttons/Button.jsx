import React, { PropTypes } from 'react';
import { svgBtnDefault } from '../../../styles/audioElements.css';

class Button extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string
  };
  static defaultProps = {
    color: '#212121',
    onClick: null
  };
  render() {
    return (
      <button
        className={svgBtnDefault}
        onClick={this.props.onClick}
      >
        { this.props.children }
      </button>
    );
  }
}

export default Button;
