import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Audio from '../src/components/Audio.jsx';
import SongImage from '../src/components/SongImage';
import MainPlayer from '../src/components/MainPlayer';
import { LikeBtn, PlaylistBtn } from '../src/components/buttons/index';

import playlist from '../src/songs/playlist.json';

test('Audio ', () => {
  const component = shallow(
    <Audio
      color="#3498db"
      autoPlay={true}
      playlist={playlist.source}
    >
      <SongImage />
      <MainPlayer>
        <LikeBtn />
        <PlaylistBtn />
      </MainPlayer>
    </Audio>
  );
  console.log(component.props.children);
  // let tree = component.toJSON();
  // console.log(tree);
  // expect(tree).toMatchSnapshot();
});
