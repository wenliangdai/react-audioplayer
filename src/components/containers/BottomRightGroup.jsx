import React, { PropTypes } from 'react';
import { LikeBtn, ShareBtn } from '../ui/buttons/index';
import { bottomRightGroup } from '../../styles/audioComponents.css';

class BottomRightGroup extends React.Component {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#212121'
  };

  render() {
    return (
      <div className={bottomRightGroup}>
        <LikeBtn color={this.props.color} />
        <ShareBtn color={this.props.color} />
      </div>
    );
  }
}

export default BottomRightGroup;
