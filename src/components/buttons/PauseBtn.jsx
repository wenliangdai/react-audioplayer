import React from 'react';
import Button from './Button';

const PauseBtn = (props, context) => (
  <Button {...props}>
    {/* <svg width="19px" height="20px" viewBox="58 20 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="PauseBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(58.000000, 20.000000)">
        <path d="M0,1.00959142 C0,0.452009475 0.45097518,0 0.990777969,0 L5.00922203,0 C5.55641359,0 6,0.450969333 6,1.00959142 L6,18.7999324 C6,19.3575143 5.54902482,19.8095238 5.00922203,19.8095238 L0.990777969,19.8095238 C0.443586406,19.8095238 0,19.3585545 0,18.7999324 L0,1.00959142 Z" id="Rectangle-Left" fill={`${context.color}`} />
        <path d="M12,1.00959142 C12,0.452009475 12.4509752,0 12.990778,0 L17.009222,0 C17.5564136,0 18,0.450969333 18,1.00959142 L18,18.7999324 C18,19.3575143 17.5490248,19.8095238 17.009222,19.8095238 L12.990778,19.8095238 C12.4435864,19.8095238 12,19.3585545 12,18.7999324 L12,1.00959142 Z" id="Rectangle-Right" fill={`${context.color}`} />
      </g>
    </svg> */}

<svg width="15px" height="16px" viewBox="60 22 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="PauseBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(60.000000, 22.000000)">
    <path d="M0,0.991339547 C0,0.443837833 0.447459618,0 1.00111708,0 L3.66554959,0 C4.21845128,0 4.66666667,0.457197498 4.66666667,0.991339547 L4.66666667,14.8562795 C4.66666667,15.4037812 4.21920705,15.847619 3.66554959,15.847619 L1.00111708,15.847619 C0.448215384,15.847619 0,15.3904215 0,14.8562795 L0,0.991339547 Z" id="Rectangle-Left" fill={`${context.color}`} />
    <path d="M9.33333333,0.991339547 C9.33333333,0.443837833 9.78079295,0 10.3344504,0 L12.9988829,0 C13.5517846,0 14,0.457197498 14,0.991339547 L14,14.8562795 C14,15.4037812 13.5525404,15.847619 12.9988829,15.847619 L10.3344504,15.847619 C9.78154872,15.847619 9.33333333,15.3904215 9.33333333,14.8562795 L9.33333333,0.991339547 Z" id="Rectangle-Right" fill={`${context.color}`} />
  </g>
</svg>
  </Button>
);
PauseBtn.contextTypes = {
  color: React.PropTypes.string
};

export default PauseBtn;
