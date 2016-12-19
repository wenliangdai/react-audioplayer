import React from 'react';
import { resetStyle } from '../utility/styles';

class BackImage extends React.Component {
  getStyle() {
    const defaultStyle = Object.assign({}, resetStyle, {
      flex: '1 1 auto',
      width: '100%',
      height: '0px'
    });
    if (this.props.style) {
      return Object.assign({}, defaultStyle, this.props.style);
    }
    return defaultStyle;
  }
  render() {
    return (
      <div style={this.getStyle()}>
        <img
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
          src={this.props.src}
          alt=""
        />
      </div>
    );
  }
}

export default BackImage;
