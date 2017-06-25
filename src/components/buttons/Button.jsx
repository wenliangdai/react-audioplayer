import React from 'react';
import PropTypes from 'prop-types';
import { combineClassNames } from '../../util-functions';
import { svgBtnDefault } from '../../styles/audioElements.css';

class Button extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func
  };
  static defaultProps = {
    onClick: null
  };
  constructor(props) {
    super(props);
    this.state = { mouseOver: false };
  }
  render() {
    const newClassName = combineClassNames(svgBtnDefault, this.props.className);
    return (
      <button
        className={newClassName}
        onClick={this.props.onClick}
        onMouseOver={() => {
          this.setState({ mouseOver: true });
        }}
        onMouseOut={() => {
          this.setState({ mouseOver: false });
        }}
        style={{
          border: this.state.mouseOver ? `1px solid ${this.context.color}` : null
        }}
      >
        { this.props.children }
      </button>
    );
  }
}
Button.contextTypes = {
  color: PropTypes.string
};

export default Button;
