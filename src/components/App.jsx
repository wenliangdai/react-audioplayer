import React from 'react';
import ReactDOM from 'react-dom';
import Audio from './Audio';
import playlist from '../songs/playlist.json';

// const App = () => (
//   <Audio
//     width={600}
//     height={300}
//     fullPlayer={true}
//     comment={true}
//     onCommentSubmit={(text) => {
//       alert(text);
//     }}
//     color="#212121"
//     autoPlay={true}
//     playlist={playlist.playlist}
//     style={{
//       boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
//       width: '800px',
//       height: '400px'
//     }}
//   />
// );

class App extends React.Component {
  someMethod() {
    // some code ...
    ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
  }

  render() {
    return (
      <Audio
        width={600}
        height={300}
        fullPlayer={true}
        comment={true}
        onCommentSubmit={(text) => {
          alert(text);
        }}
        color="#212121"
        autoPlay={true}
        playlist={playlist.playlist}
        style={{
          boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
          width: '800px',
          height: '400px'
        }}
        
        // store a reference of the audio component
        ref={audioComponent => { this.audioComponent = audioComponent; }}
      />
    )
  }
}

export default App;
