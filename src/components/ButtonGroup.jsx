import React from 'react';
import { flexButtonBox } from '../styles/audioComponents.css';

class ButtonGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.style = {
      width: `${React.Children.count(props.children) * 40}px`
    };
  }
  render() {
    return (
      <div
        className={flexButtonBox}
        style={this.style}
      >
        { this.props.children }
      </div>
    );
  }
}

export default ButtonGroup;
