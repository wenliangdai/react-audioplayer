import React from 'react';
import Button from './Button';
import { svgBtnDefault } from '../../../styles/audioElements.css';

export default class LoopBtn extends Button {
  constructor(props) {
    super(props);
  }
  renderCycle() {
    return (
      <svg width="19px" height="17px" viewBox="138 22 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="LoopBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(147.000000, 30.159091) scale(-1, 1) translate(-147.000000, -30.159091) translate(138.000000, 23.000000)">
            <g id="Arrow-Top" fill={`${this.props.color}`}>
                <path d="M14.4475396,1.57009921 C14.9393902,0.751426771 15.7407446,0.757929722 16.2286883,1.57009921 L16.9535295,2.77657829 C17.4453801,3.59525073 17.060982,4.25891587 16.1052225,4.25891587 L14.5710054,4.25891587 C13.6106478,4.25891587 13.2347547,3.58874778 13.7226984,2.77657829 L14.4475396,1.57009921 Z" id="Triangle" transform="translate(15.337986, 2.351384) rotate(90.000000) translate(-15.337986, -2.351384) "></path>
                <rect id="Rectangle" x="1.3685982" y="1.63636364" width="12.2727273" height="1.63636364"></rect>
                <rect id="Rectangle-Copy" transform="translate(0.712399, 5.905138) rotate(90.000000) translate(-0.712399, -5.905138) " x="-3.55637612" y="5.19461202" width="8.53754941" height="1.42105263"></rect>
            </g>
            <g id="Arrow-Bottom" transform="translate(9.204545, 9.204545) scale(-1, -1) translate(-9.204545, -9.204545) translate(0.409091, 4.090909)" fill={`${this.props.color}`}>
                <path d="M14.4475396,1.57009921 C14.9393902,0.751426771 15.7407446,0.757929722 16.2286883,1.57009921 L16.9535295,2.77657829 C17.4453801,3.59525073 17.060982,4.25891587 16.1052225,4.25891587 L14.5710054,4.25891587 C13.6106478,4.25891587 13.2347547,3.58874778 13.7226984,2.77657829 L14.4475396,1.57009921 Z" id="Triangle" transform="translate(15.337986, 2.351384) rotate(90.000000) translate(-15.337986, -2.351384) "></path>
                <rect id="Rectangle" x="1.3685982" y="1.63636364" width="12.2727273" height="1.63636364"></rect>
                <rect id="Rectangle-Copy" transform="translate(0.712399, 5.905138) rotate(90.000000) translate(-0.712399, -5.905138) " x="-3.55637612" y="5.19461202" width="8.53754941" height="1.42105263"></rect>
            </g>
        </g>
      </svg>
    );
  }
  renderRepeat() {
    return (
      <svg width="19px" height="17px" viewBox="138 22 19 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="RepeatBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(147.000000, 30.500000) scale(-1, 1) translate(-147.000000, -30.500000) translate(138.000000, 23.000000)">
              <g id="Arrow-Top" fill={`${this.props.color}`}>
                  <path d="M14.4475396,1.57009921 C14.9393902,0.751426771 15.7407446,0.757929722 16.2286883,1.57009921 L16.9535295,2.77657829 C17.4453801,3.59525073 17.060982,4.25891587 16.1052225,4.25891587 L14.5710054,4.25891587 C13.6106478,4.25891587 13.2347547,3.58874778 13.7226984,2.77657829 L14.4475396,1.57009921 Z" id="Triangle" transform="translate(15.337986, 2.351384) rotate(90.000000) translate(-15.337986, -2.351384) "></path>
                  <rect id="Rectangle" x="1.3685982" y="1.63636364" width="12.2727273" height="1.63636364"></rect>
                  <rect id="Rectangle-Copy" transform="translate(0.712399, 5.905138) rotate(90.000000) translate(-0.712399, -5.905138) " x="-3.55637612" y="5.19461202" width="8.53754941" height="1.42105263"></rect>
              </g>
              <g id="Arrow-Bottom" transform="translate(9.204545, 9.204545) scale(-1, -1) translate(-9.204545, -9.204545) translate(0.409091, 4.090909)" fill={`${this.props.color}`}>
                  <path d="M14.4475396,1.57009921 C14.9393902,0.751426771 15.7407446,0.757929722 16.2286883,1.57009921 L16.9535295,2.77657829 C17.4453801,3.59525073 17.060982,4.25891587 16.1052225,4.25891587 L14.5710054,4.25891587 C13.6106478,4.25891587 13.2347547,3.58874778 13.7226984,2.77657829 L14.4475396,1.57009921 Z" id="Triangle" transform="translate(15.337986, 2.351384) rotate(90.000000) translate(-15.337986, -2.351384) "></path>
                  <rect id="Rectangle" x="1.3685982" y="1.63636364" width="12.2727273" height="1.63636364"></rect>
                  <rect id="Rectangle-Copy" transform="translate(0.712399, 5.905138) rotate(90.000000) translate(-0.712399, -5.905138) " x="-3.55637612" y="5.19461202" width="8.53754941" height="1.42105263"></rect>
              </g>
              <text id="1" transform="translate(9.500000, 7.500000) scale(-1, 1) translate(-9.500000, -7.500000) " fontFamily="Roboto-Bold, Roboto" fontSize="7.5" fontWeight="bold" fill={`${this.props.color}`}>
                  <tspan x="8" y="10">1</tspan>
              </text>
          </g>
      </svg>
    );
  }
  renderShuffle() {
    return (
      <svg width="19px" height="14px" viewBox="138 23 19 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="RandomBtn" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(147.000000, 29.893617) scale(-1, 1) translate(-147.000000, -29.893617) translate(138.000000, 23.000000)">
              <g id="Arrow-Top" transform="translate(9.000000, 6.148936) scale(-1, -1) translate(-9.000000, -6.148936) translate(0.000000, 0.212766)" fill={`${this.props.color}`}>
                  <rect id="Rectangle" x="5.74468085" y="8.75884498" width="8.42553191" height="1.64680858"></rect>
                  <path d="M2.97165596,0.792575179 C2.80133561,0.258388343 3.07103657,0.0205747889 3.57244297,0.260634375 L3.86897867,0.402607507 C4.37110452,0.64301155 4.74637685,1.28459653 4.70589215,1.85362892 L4.03852507,11.2338014 L3.542177,10.9993707 C3.03253029,10.758659 2.67999589,10.1143427 2.75179077,9.56290502 C2.75179077,9.56290502 3.68618887,2.89872346 3.2562446,1.63927351 C2.82630033,0.37982355 2.97165596,0.792575179 2.97165596,0.792575179 Z" id="Rectangle-2" transform="translate(3.714344, 5.633966) rotate(-30.000000) translate(-3.714344, -5.633966) "></path>
                  <path d="M15.0557786,8.82263453 C15.5530161,7.99499578 16.3540793,7.98647683 16.8564349,8.82263453 L17.4018117,9.73039986 C17.8990492,10.5580386 17.5273405,11.2289724 16.5549875,11.2289724 L15.3572259,11.2289724 C14.3923003,11.2289724 14.0080462,10.5665576 14.5104018,9.73039986 L15.0557786,8.82263453 Z" id="Triangle" transform="translate(15.955987, 9.443198) rotate(90.000000) translate(-15.955987, -9.443198) "></path>
              </g>
              <g id="Arrow-Bottom" transform="translate(9.000000, 7.680851) scale(-1, 1) translate(-9.000000, -7.680851) translate(0.000000, 1.744681)" fill={`${this.props.color}`}>
                  <rect id="Rectangle" x="5.74468085" y="8.75884498" width="8.42553191" height="1.64680858"></rect>
                  <path d="M2.97165596,0.792575179 C2.80133561,0.258388343 3.07103657,0.0205747889 3.57244297,0.260634375 L3.86897867,0.402607507 C4.37110452,0.64301155 4.74637685,1.28459653 4.70589215,1.85362892 L4.03852507,11.2338014 L3.542177,10.9993707 C3.03253029,10.758659 2.67999589,10.1143427 2.75179077,9.56290502 C2.75179077,9.56290502 3.68618887,2.89872346 3.2562446,1.63927351 C2.82630033,0.37982355 2.97165596,0.792575179 2.97165596,0.792575179 Z" id="Rectangle-2" transform="translate(3.714344, 5.633966) rotate(-30.000000) translate(-3.714344, -5.633966) "></path>
                  <path d="M15.0557786,8.82263453 C15.5530161,7.99499578 16.3540793,7.98647683 16.8564349,8.82263453 L17.4018117,9.73039986 C17.8990492,10.5580386 17.5273405,11.2289724 16.5549875,11.2289724 L15.3572259,11.2289724 C14.3923003,11.2289724 14.0080462,10.5665576 14.5104018,9.73039986 L15.0557786,8.82263453 Z" id="Triangle" transform="translate(15.955987, 9.443198) rotate(90.000000) translate(-15.955987, -9.443198) "></path>
              </g>
          </g>
      </svg>
    );
  }
  render() {
    let svgElement;
    switch (this.props.playingState) {
      case 0:
        svgElement = this.renderCycle();
        break;
      case 1:
        svgElement = this.renderRepeat();
        break;
      case 2:
        svgElement = this.renderShuffle()
        break;
    }
    return (
      <button
        className={svgBtnDefault}
        onClick={this.props.onClick}
      >
        { svgElement }
      </button>
    );
  }
}
