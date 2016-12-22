import React, { PropTypes } from 'react';
import BackImage from '../ui/BackImage';
import BottomStack from './BottomStack';
import HOCAudio from './HOCAudio';
import { audio, boxShadowShallow } from '../../styles/audioComponents.css';

const Audio = ({
  color,
  backImageUrl,
  HOCStates,
  HOCHandlers
}) => (
  <div className={`${audio} ${boxShadowShallow}`}>
    <BackImage src={backImageUrl} />
    <BottomStack
      color={color}
      {...HOCStates}
      {...HOCHandlers}
    />
  </div>
);

export default HOCAudio(Audio);
