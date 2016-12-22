import React, { PropTypes } from 'react';
import { backImage } from '../../styles/audioElements.css';

class BackImage extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired
  };
  componentDidUpdate() {
    console.log('BackImage updated!');
  }
  render() {
    return (
      <div className={backImage}>
        <img
          src={this.props.src}
          alt=""
        />
      </div>
    );
  }
}

export default BackImage;
