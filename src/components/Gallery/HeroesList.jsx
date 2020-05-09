import React from 'react';
import { useHeroes } from '../../hooks/HeroesProvider.jsx';

const HeroesList = () => {
  const heroes = useHeroes();

  return (
    <ul>
      
    </ul>
  );
};

export default HeroesList;
