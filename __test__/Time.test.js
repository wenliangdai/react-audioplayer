import React from 'react';
import Time from '../src/components/Time.jsx';
import renderer from 'react-test-renderer';

test('Time show correct time string when given different currentTime prop', () => {
  const component = renderer.create(
    <Time time={200} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
