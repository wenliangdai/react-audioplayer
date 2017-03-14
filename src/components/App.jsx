import React from 'react';
import Audio from './Audio';
import playlist from '../songs/playlist.json';

const App = () => (
  <Audio
    width={800}
    height={200}
    fullPlayer={true}
    comment={true}
    // onCommentSubmit={(text) => {
    //   console.log(text);
    // }}
    // color="#F44336"
    autoPlay={true}
    volumeOrientationDown={false}
    playlist={playlist.source}
    style={{
      border: '1px solid black'
    }}
  />
);

export default App;
