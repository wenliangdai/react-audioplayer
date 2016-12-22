import React, { PropTypes } from 'react';
import BackImage from '../ui/BackImage';
import BottomStack from './BottomStack';
import HOCAudio from './HOCAudio';
import { audio, boxShadowShallow } from '../../styles/audioComponents.css';

const Audio = ({
  color,
  backImageUrl,
  HOCStates,
  HOCCallbacks
}) => (
  <div className={`${audio} ${boxShadowShallow}`}>
    <BackImage src={backImageUrl} />
    <BottomStack
      color={color}
      {...HOCStates}
      {...HOCCallbacks}
    />
  </div>
);

export default HOCAudio(Audio);
