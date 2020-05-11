import React from 'react';
import { useTheme } from '../../hooks/ThemeProvider';
import Toggle from './Toggle.jsx';
import styles from './Header.css';

const Header = () => {
  const theme = useTheme();

  return (
    <header className={`${styles[theme]}`}>
      <h1>Marvel Superheroes Gallery</h1>
      <Toggle />
    </header>
  ); 
};

export default Header;
