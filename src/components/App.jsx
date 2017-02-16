import React from 'react';
import Audio from './Audio';
import playlist from '../songs/playlist.json';

const App = () => (
  <Audio
    width={600}
    height={200}
    songImage={false}
    color="#3498db"
    autoPlay={true}
    playlist={playlist.source}
  />
);

export default App;
