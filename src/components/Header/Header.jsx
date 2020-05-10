import React from 'react';
import { useToggle } from '../../hooks/ThemeProvider';

const Header = () => {
  const toggle = useToggle();

  return (
    <header>
      <h1>Marvel Superheroes Gallery</h1>
      <input type="checkbox" onChange={toggle} id="toggle" />
      <label htmlFor="toggle">Toggle Dark Mode</label>
    </header>
  ); 
};

export default Header;
