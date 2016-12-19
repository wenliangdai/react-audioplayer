import React from 'react';
import { render } from 'react-dom';
import Audio from './components/containers/Audio';
import { resetStyle } from './components/utility/styles';

const App = () => (
  <div
    style={Object.assign({}, resetStyle, {
      width: '800px',
      height: '400px'
    })}
  >
    <Audio color="#F44336" />
  </div>
);

render(
  <App />,
  document.getElementById('app')
);
