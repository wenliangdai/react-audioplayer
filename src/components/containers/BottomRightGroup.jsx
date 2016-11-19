import React, { PropTypes } from 'react';
import { LikeBtn, ShareBtn } from '../ui/Buttons';
import { resetStyle } from '../utility/styles';

class BottomRightGroup extends React.Component {
  render() {
    return (
      <div style={Object.assign({}, resetStyle, style)}>
        <LikeBtn color={this.props.color} />
        <ShareBtn color={this.props.color} />
      </div>
    );
  }
}
BottomRightGroup.propTypes = {
  color: PropTypes.string
};
BottomRightGroup.defaultProps = {
  color: '#212121'
};

const style = {
  width: '100px',
  height: '60px',
  display: 'flex',
  alignItems: 'center'
};

export default BottomRightGroup;
