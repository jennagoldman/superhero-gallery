import React from 'react';
import { useTheme, useToggle } from '../../hooks/ThemeProvider';
import styles from './Header.css';

const Header = () => {
  const toggle = useToggle();
  const theme = useTheme();

  return (
    <header className={`${styles[theme]}`}>
      <h1>Marvel Superheroes Gallery</h1>
      <input type="checkbox" onChange={toggle} id="toggle" className={styles.checkbox} />
      <label htmlFor="toggle" className={styles.toggle}></label>
    </header>
  ); 
};

export default Header;
