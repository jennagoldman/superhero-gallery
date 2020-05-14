import React from 'react';
import { useToggle } from '../../hooks/ThemeProvider.jsx';
import styles from './Toggle.css';

const Toggle = () => {
  const toggle = useToggle();

  return (
    <section>
      <input type="checkbox" onChange={toggle} id="toggle" className={styles.checkbox} />
      <label htmlFor="toggle" className={styles.toggle}></label>
    </section>
  );
};

export default Toggle;
