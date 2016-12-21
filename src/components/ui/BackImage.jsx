import React from 'react';
import { backImage } from '../../styles/audioElements.css';

class BackImage extends React.Component {
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
