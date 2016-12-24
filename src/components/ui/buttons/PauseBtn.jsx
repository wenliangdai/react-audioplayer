import React, { PropTypes } from 'react';
import Button from './Button';

export default class PauseBtn extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
  };
  render() {
    return (
      <Button {...this.props}>
        <svg width="19px" height="20px" viewBox="58 20 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="PauseBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(58.000000, 20.000000)">
            <path d="M0,1.00959142 C0,0.452009475 0.45097518,0 0.990777969,0 L5.00922203,0 C5.55641359,0 6,0.450969333 6,1.00959142 L6,18.7999324 C6,19.3575143 5.54902482,19.8095238 5.00922203,19.8095238 L0.990777969,19.8095238 C0.443586406,19.8095238 0,19.3585545 0,18.7999324 L0,1.00959142 Z" id="Rectangle-Left" fill={`${this.props.color}`} />
            <path d="M12,1.00959142 C12,0.452009475 12.4509752,0 12.990778,0 L17.009222,0 C17.5564136,0 18,0.450969333 18,1.00959142 L18,18.7999324 C18,19.3575143 17.5490248,19.8095238 17.009222,19.8095238 L12.990778,19.8095238 C12.4435864,19.8095238 12,19.3585545 12,18.7999324 L12,1.00959142 Z" id="Rectangle-Right" fill={`${this.props.color}`} />
          </g>
        </svg>
      </Button>
    );
  }
}
