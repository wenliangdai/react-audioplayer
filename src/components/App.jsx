import React from 'react';
import Audio from './Audio';
import playlist from '../songs/playlist.json';

const App = () => (
  <Audio
    width={800}
    height={400}
    songImage={true}
    color="#3498db"
    autoPlay={true}
    playlist={playlist.source}
  />
);

export default App;
