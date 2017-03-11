import React from 'react';
import { Motion, spring, presets } from 'react-motion';

class FullComment extends React.Component {
  render() {
    return (
      <Motion
        style={{
          y: spring(this.props.show ? 0 : 100),
          yc: spring(this.props.show ? 0 : 100),
          o: spring(this.props.show ? 1 : 0),
        }}
      >
        {({y, yc, o}) =>
          <div
            className={this.props.className}
            style={{
              transform: `translate3d(0, ${y}%, 0)`,
              opacity: `${o}`
            }}
          >
            <p
              className="testppp"
              style={{
                transform: `translate3d(0, ${yc}%, 0)`,
              }}
            >
              {this.props.content ? this.props.content.nodeValue : null}
            </p>
          </div>
        }
      </Motion>
    );
  }
}

export default FullComment;
