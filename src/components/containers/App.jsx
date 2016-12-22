import React from 'react';
import { render } from 'react-dom';
import Audio from './Audio';
import style from '../../styles/audioReset';
import playlist from '../../songs/playlist.json';

const App = () => (
  <div className={style.rootContainer}>
    <Audio
      color="#F44336"
      autoPlay={true}
      playlist={playlist.source}
    />
  </div>
);

export default App;
