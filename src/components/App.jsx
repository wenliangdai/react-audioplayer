import React from 'react';
import Audio from './Audio';
import playlist from '../playlist.json';

const App = () => (
  <Audio
    width={600}
    height={300}
    fullPlayer={true}
    comment={true}
    onCommentSubmit={(text) => {
      alert(text);
    }}
    color="#F44336"
    autoPlay={true}
    volumeOrientationDown={false}
    playlist={playlist.playlist}
    style={{
      boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)'
    }}
  />
);

export default App;
