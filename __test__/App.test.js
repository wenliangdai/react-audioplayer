import React from 'react';
import { mount } from 'enzyme';
import Audio from '../src/components/Audio.jsx';
import * as Button from '../src/components/buttons';
import playlist from '../src/songs/playlist.json';

describe('<Audio />', () => {

  it('should switch PlayBtn to PauseBtn when state.playing become true', () => {
    const wrapper = mount(
      <Audio
        width={800}
        color="#3498db"
        autoPlay={true}
        playlist={playlist.source}
      />
    );
    expect(wrapper.find('PlayBtn')).toHaveLength(1);
    wrapper.setState({ playing: true });
    expect(wrapper.find('PauseBtn')).toHaveLength(1);
  });

});
