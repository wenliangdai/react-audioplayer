import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../src/components/buttons/Button.jsx';

describe('<Button />', () => {

  it('should handle onClick event', () => {
    let clicked = false;
    const onClickMockFn = jest.fn().mockImplementation(() => {
      clicked = true;
    });
    const wrapper = shallow(
      <Button
        onClick={onClickMockFn}
      />
    );
    wrapper.find('button').simulate('click');
    expect(clicked).toBe(true);
    expect(onClickMockFn).toHaveBeenCalledTimes(1);
  });

  it('should handle onMouseOver & onMouseOut events', () => {
    const wrapper = shallow(
      <Button />
    );
    wrapper.find('button').simulate('mouseover');
    expect(wrapper.state('mouseOver')).toBe(true);
    expect(wrapper.find('button').props().style.border).not.toBeNull();
    wrapper.find('button').simulate('mouseout');
    expect(wrapper.state('mouseOver')).toBe(false);
    expect(wrapper.find('button').props().style.border).toBeNull();
  });

});