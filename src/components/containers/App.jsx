import React from 'react';
import BackImage from '../ui/BackImage';
import BottomStack from './BottomStack';
import { resetStyle, boxShadowSmall } from '../utility/styles';

class App extends React.Component {
  getStyle() {
    const defaultStyle = Object.assign({}, resetStyle, boxShadowSmall, {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minWidth: '400px',
      height: '100%',
      minHeight: '360px',
      margin: 'auto'
    });
    if (this.props.style) {
      return Object.assign({}, defaultStyle, this.props.style);
    }
    return defaultStyle;
  }
  render() {
    return (
      <div style={this.getStyle()}>
        <BackImage src="//oglm0zj29.bkt.gdipper.com/images/Adele.jpg" />
        <BottomStack
          duration={240}
          color="#F44336"
        />
      </div>
    );
  }
};

export default App;
