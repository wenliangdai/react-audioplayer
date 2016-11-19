import React, { PropTypes } from 'react';
import Timeline from '../ui/Timeline';
import Controls from './Controls';
import BottomRightGroup from './BottomRightGroup';
import { resetStyle } from '../utility/styles';

class BottomStack extends React.Component {
  render() {
    return (
      <div
        className="trackContainer"
        style={Object.assign({}, resetStyle, style)}
      >
        <Controls color={this.props.color} />
        <Timeline
          color={this.props.color}
          duration={this.props.duration}
        />
        <BottomRightGroup color={this.props.color} />
      </div>
    );
  }
  componentDidMount() {
    console.log(document.querySelector('.trackContainer').getBoundingClientRect());
  }
}
BottomStack.propTypes = {
  duration: PropTypes.number.isRequired,
  color: PropTypes.string
};
BottomStack.defaultProps = {
  color: '#212121'
};

const style = {
  flex: '0 1 auto',
  width: '100%',
  height: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export default BottomStack;
