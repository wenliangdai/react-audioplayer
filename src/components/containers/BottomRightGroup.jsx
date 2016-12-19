import React, { PropTypes } from 'react';
import { LikeBtn, ShareBtn } from '../ui/buttons/index';
import { resetStyle } from '../utility/styles';

class BottomRightGroup extends React.Component {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#212121'
  };

  render() {
    return (
      <div style={Object.assign({}, resetStyle, style)}>
        <LikeBtn color={this.props.color} />
        <ShareBtn color={this.props.color} />
      </div>
    );
  }
}

const style = {
  width: '100px',
  height: '60px',
  display: 'flex',
  alignItems: 'center'
};

export default BottomRightGroup;
