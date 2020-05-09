import React from 'react';
import { useHeroes } from '../../hooks/HeroesProvider.jsx';
import styles from './HeroesList.css';

const HeroesList = () => {
  const heroes = useHeroes();

  const heroNodes = heroes.map(hero => (
    <li key={hero.id}>
      <div className={styles.heroDiv}>
        <p>{hero.name}</p>
        <img src={hero.imageUrl} alt={hero.name} />
        <a href={hero.comicsUrl}>View Comics</a>
      </div>
    </li>
  ));
  return (
    <ul>
      {heroNodes}
    </ul>
  );
};

export default HeroesList;
