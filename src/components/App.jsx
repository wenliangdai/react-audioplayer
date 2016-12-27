import React from 'react';
import { render } from 'react-dom';
import Audio from './Audio';
import SongImage from './SongImage';
import MainPlayer from './MainPlayer';
import Controls from './Controls';
import ButtonGroup from './ButtonGroup';
import { LikeBtn, PlaylistBtn } from './buttons/index';
import style from '../styles/audioReset';
import playlist from '../songs/playlist.json';

const App = () => (
  <div className={style.rootContainer}>
    <Audio
      color="#F44336"
      autoPlay={true}
      playlist={playlist.source}
    >
      <SongImage />
      <MainPlayer>
        <ButtonGroup>
          <LikeBtn />
          <PlaylistBtn />
        </ButtonGroup>
      </MainPlayer>
    </Audio>
  </div>
);

export default App;
