import React from 'react';
import { render } from 'react-dom';
import App from './components/containers/App';
import { resetStyle } from './components/utility/styles';

const SomeApp = () => (
  <div
    style={Object.assign({}, resetStyle, {
      width: '800px',
      height: '400px'
    })}
  >
    <App />
  </div>
);

render(
  <SomeApp />,
  document.getElementById('app')
);
