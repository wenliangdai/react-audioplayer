import React from 'react';
import { render } from 'react-dom';
import Audio from './Audio';
import SongImage from './SongImage';
import MainPlayer from './MainPlayer';
import Controls from './Controls';
import { LikeBtn, PlaylistBtn } from './buttons/index';
import style from '../styles/audioReset';
import playlist from '../songs/playlist.json';

const App = () => (
  <div className={style.rootContainer}>
    <Audio
      color="#3498db"
      autoPlay={true}
      playlist={playlist.source}
    >
      <SongImage />
      <MainPlayer>
        <LikeBtn />
        <PlaylistBtn />
      </MainPlayer>
    </Audio>
  </div>
);

export default App;
