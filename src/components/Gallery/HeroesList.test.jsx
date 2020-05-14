import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '../../hooks/ThemeProvider.jsx';
import { HeroesProvider } from '../../hooks/HeroesProvider.jsx';
import HeroesList from './HeroesList.jsx';

describe('Gallery', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <ThemeProvider>
        <HeroesProvider>
          <HeroesList />
        </HeroesProvider>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
