import React from 'react';
import { useHeroes } from '../../hooks/HeroesProvider.jsx';
import styles from './HeroesList.css';

const HeroesList = () => {
  const heroes = useHeroes();

  const heroNodes = heroes.map(hero => (
    <li key={hero.id}>
      <p>{hero.name}</p>
      <img src={hero.imageUrl} alt={hero.name} />
      <p>{hero.description}</p>
      <a href={hero.comicsUrl}></a>
    </li>
  ));
  return (
    <ul>
      {heroNodes}
    </ul>
  );
};

export default HeroesList;
