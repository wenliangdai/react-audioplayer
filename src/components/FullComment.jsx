import React from 'react';
import { Motion, spring } from 'react-motion';

const FullComment = ({
  show,
  className,
  content
}) => (
  <Motion
    style={{
      y: spring(show ? 0 : 100),
      yc: spring(show ? 0 : 100),
      o: spring(show ? 1 : 0),
    }}
  >
    {({ y, yc, o }) =>
      <div
        className={className}
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
          {content ? content.nodeValue : null}
        </p>
      </div>
    }
  </Motion>
);

export default FullComment;
