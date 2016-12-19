import React, { PropTypes } from 'react';
import { SkipNextBtn, PlayBtn, SkipPrevBtn, LoopBtn, VolumeBtn } from '../ui/buttons/index';
import { resetStyle } from '../utility/styles';

class Controls extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    togglePlayPause: PropTypes.func,
    playing: PropTypes.bool
  };
  getStyle() {
    const defaultStyle = Object.assign({}, resetStyle, style.container);
    if (this.props.style) {
      return Object.assign({}, defaultStyle, this.props.style);
    }
    return defaultStyle;
  }
  render() {
    return (
      <div style={this.getStyle()}>
        <div style={style.left}>
          <SkipPrevBtn color={this.props.color} />
          <PlayBtn
            playing={this.props.playing}
            togglePlayPause={this.props.togglePlayPause}
            color={this.props.color}
          />
          <SkipNextBtn color={this.props.color} />
        </div>
        <div style={style.right}>
          <LoopBtn color={this.props.color} />
          <VolumeBtn
            initialVolume={0}
            color={this.props.color}
          />
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    flex: '0 1 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '200px',
    minHeight: '60px',
    width: '200px',
    height: '60px'
  },
  left: {
    flex: '4 1 auto',
    display: 'flex'
  },
  right: {
    flex: '1 1 auto',
    display: 'flex'
  }
};

export default Controls;
