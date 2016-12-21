import React from 'react';
import { render } from 'react-dom';
import Audio from './Audio';
import style from '../../styles/audioReset';

const App = () => (
  <div
    className={style.rootContainer}
  >
    <Audio color="#F44336" />
  </div>
);

export default App;
