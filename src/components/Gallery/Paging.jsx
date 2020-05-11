import React from 'react';
import { useHeroes, useOffset, useHandleOffset } from '../../hooks/HeroesProvider.jsx';
import styles from './Paging.css';

const Paging = () => {
  const heroes = useHeroes();
  const offset = useOffset();
  const handleOffset = useHandleOffset();

  return (
    <section className={styles.pagingSection}>
      <button onClick={() => handleOffset(-25)} disabled={offset === 0}>&lt;</button>
      <span>Browse Superheroes</span>
      <button onClick={() => handleOffset(25)} disabled={heroes.length < 25}>&gt;</button>
    </section>
  );
};

export default Paging;
