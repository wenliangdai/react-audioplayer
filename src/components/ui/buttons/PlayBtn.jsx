import React, { PropTypes } from 'react';
import Button from './Button';

export default class PlayBtn extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
  };
  render() {
    return (
      <Button {...this.props}>
        <svg width="19px" height="23px" viewBox="58 18 19 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="PlayBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(58.000000, 19.000000)">
            <path d="M17.6003477,10.0198528 C18.1298431,10.333827 18.1365811,10.8388843 17.6003477,11.1568539 L0.958736127,21.0248095 C0.429240785,21.3387837 2.06047222e-15,21.1536537 2.06047222e-15,20.5903967 L0,0.586309989 C0,0.0324162152 0.422502718,-0.166072497 0.958736127,0.151897156" id="Triangle" fill={`${this.props.color}`} />
          </g>
        </svg>
      </Button>
    );
  }
}
