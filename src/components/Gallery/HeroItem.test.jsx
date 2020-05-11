import React from 'react';
import { shallow } from 'enzyme';
import HeroItem from './HeroItem.jsx';

describe('ArtistsList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<HeroItem name="Loki" imageUrl="http://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313.jpg" comicsUrl="http://marvel.com/comics/characters/1009407/loki?utm_campaign=apiRef&utm_source=1f02de49106b672f61d699663164616b" />);
    expect(wrapper).toMatchSnapshot();
  });
});
