import React from 'react';
import { shallow, mount } from 'enzyme';
import ProgressBar from '../src/components/ProgressBar.jsx';

describe('<ProgressBar />', () => {

  it('should render UI correctly', () => {
    const wrapper = shallow(
      <ProgressBar
        width={100}
        height={20}
        barHeight={10}
        translate={0}
        onMouseDown={jest.fn()}
      />
    );
    const diff = (20 - 10) / 2; // (height - barHeight) / 2
    const rectsWrapper = wrapper.find('rect');
    expect(rectsWrapper).toHaveLength(3);
    expect(rectsWrapper.at(0).prop('x')).toEqual(0);
    expect(rectsWrapper.at(0).prop('y')).toEqual(0);
    expect(rectsWrapper.at(0).prop('width')).toEqual(100);
    expect(rectsWrapper.at(0).prop('height')).toEqual(20);
    expect(rectsWrapper.at(1).prop('x')).toEqual(0);
    expect(rectsWrapper.at(1).prop('y')).toEqual(diff);
    expect(rectsWrapper.at(1).prop('width')).toEqual(100);
    expect(rectsWrapper.at(1).prop('height')).toEqual(10);
    expect(rectsWrapper.at(2).prop('x')).toEqual(0);
    expect(rectsWrapper.at(2).prop('y')).toEqual(diff);
    expect(rectsWrapper.at(2).prop('width')).toEqual(0);
    expect(rectsWrapper.at(2).prop('height')).toEqual(10);
  });

  it('should handle onMouseDown event', () => {
    const onMouseDownMockFn = jest.fn();
    // use mount rather than shallow so that the event propagation would behave as the real environment
    const wrapper = mount(
      <ProgressBar
        width={100}
        height={20}
        barWidth={80}
        barHeight={10}
        translate={0}
        onMouseDown={onMouseDownMockFn}
      />
    );
    onMouseDownMockFn.mockImplementation(() => wrapper.setProps({ translate: 50 }));
    wrapper.find('g').simulate('mousedown');
    wrapper.find('rect').at(0).simulate('mousedown');
    wrapper.find('rect').at(1).simulate('mousedown');
    wrapper.find('rect').at(2).simulate('mousedown');
    expect(onMouseDownMockFn).toHaveBeenCalledTimes(4);
    expect(wrapper.find('rect').at(2).prop('width')).toEqual(50);
  });

});
