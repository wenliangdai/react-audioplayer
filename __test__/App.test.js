import React from 'react';
import { mount } from 'enzyme';
import Audio from '../src/components/Audio.jsx';
import playlist from '../src/songs/playlist.json';

describe('<Audio />', () => {

  it('should propagate props `width` and `height` correctly', () => {
    const wrapper = mount(
      <Audio
        playlist={playlist.playlist}
      />
    );
    expect(wrapper.find('Audio').prop('width')).toEqual(400);
    expect(wrapper.find('Audio').prop('height')).toEqual(300);
    wrapper.setProps({
      width: 600,
      height: 200
    });
    expect(wrapper.find('Audio').prop('width')).toEqual(600);
    expect(wrapper.find('Audio').prop('height')).toEqual(200);
  });

  it('should propagate `color` correctly', () => {
    const wrapper = mount(
      <Audio
        playlist={playlist.playlist}
      />
    );
    expect(wrapper.find('Audio').prop('color')).toEqual('#212121');
    wrapper.setProps({ color: '#123456' });
    expect(wrapper.find('Audio').prop('color')).toEqual('#123456');
  });

  it('should render playingState(cycle, repeat, shuffle) buttons correctly', () => {
    const wrapper = mount(
      <Audio
        playlist={playlist.playlist}
      />
    );
    expect(wrapper.find('CycleBtn')).toHaveLength(1);
    wrapper.setState({ playingState: 1 });
    expect(wrapper.find('RepeatBtn')).toHaveLength(1);
    wrapper.setState({ playingState: 2 });
    expect(wrapper.find('ShuffleBtn')).toHaveLength(1);
  });

  it('should skip to previous/next when clicking on SkipPrevBtn/SkipNextBtn', () => {
    const wrapper = mount(
      <Audio
        playlist={playlist.playlist}
      />
    );
    wrapper.find('SkipNextBtn').simulate('click');
    expect(wrapper.state('currentPlaylistPos')).toEqual(1);
    wrapper.find('SkipPrevBtn').simulate('click');
    expect(wrapper.state('currentPlaylistPos')).toEqual(0);
  });

  it('should not render <CommentsWrapper /> if prop songImage={false}, which is the default', () => {
    const wrapper = mount(
      <Audio
        playlist={playlist.playlist}
      />
    );
    expect(wrapper.find('CommentsWrapper')).toHaveLength(0);
    wrapper.setProps({ fullPlayer: true });
    expect(wrapper.find('CommentsWrapper')).toHaveLength(1);
  });

  it('should switch between PlayBtn/PauseBtn when state.playing changes', () => {
    const wrapper = mount(
      <Audio
        playlist={playlist.playlist}
      />
    );
    expect(wrapper.find('PlayBtn')).toHaveLength(1);
    expect(wrapper.find('PauseBtn')).toHaveLength(0);
    wrapper.setState({ playing: true });
    expect(wrapper.find('PlayBtn')).toHaveLength(0);
    expect(wrapper.find('PauseBtn')).toHaveLength(1);
  });

});
