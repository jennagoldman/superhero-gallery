import React from 'react';
import { useHeroes } from '../../hooks/HeroesProvider.jsx';
import HeroItem from './HeroItem.jsx';
import styles from './HeroesList.css';

const HeroesList = () => {
  const heroes = useHeroes();

  const heroNodes = heroes.map(hero => (
    <li key={hero.id} className={styles.heroListItem}>
      <HeroItem {...hero} />
    </li>
  ));
  return (
    <ul className={styles.heroesList}>
      {heroNodes}
    </ul>
  );
};

export default HeroesList;
