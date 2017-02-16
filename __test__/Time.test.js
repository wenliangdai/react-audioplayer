import React from 'react';
import Time from '../src/components/Time.jsx';
import { shallow } from 'enzyme';

describe('<Time />', () => {

  it('should render one <p> html element', () => {
    const wrapper = shallow(<Time time={200} />);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should show time string correctly when given different time prop', () => {
    const wrapper = shallow(<Time time={200} />);
    expect(wrapper.text()).toEqual('3:20');

    wrapper.setProps({ time: 11.11 });
    expect(wrapper.text()).toEqual('0:11');

    wrapper.setProps({ time: 1.11 });
    expect(wrapper.text()).toEqual('0:01');

    wrapper.setProps({ time: 6793.2 });
    expect(wrapper.text()).toEqual('1:53:13');

    wrapper.setProps({ time: 39827.6 });
    expect(wrapper.text()).toEqual('11:03:47');
  });

});
