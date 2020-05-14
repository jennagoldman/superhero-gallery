import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '../../hooks/ThemeProvider.jsx';
import Header from './Header.jsx';

describe('Header', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
