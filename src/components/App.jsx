import React from 'react';
import Audio from './Audio';
import playlist from '../songs/playlist.json';

const App = () => (
  <Audio
    width={600}
    height={200}
    fullPlayer={true}
    comment={true}
    onCommentSubmit={(e, text) => {
      console.log(e, text);
    }}
    color="#F44336"
    autoPlay={false}
    volumeOrientationDown={false}
    playlist={playlist.source}
  />
);

export default App;
