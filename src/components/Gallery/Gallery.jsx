import React from 'react';
import { useHeroes } from '../../hooks/HeroesProvider.jsx';
import HeroesList from './HeroesList.jsx';
import Paging from './Paging.jsx';

const Gallery = () => {
  const heroes = useHeroes();

  return (
    <>
      <Paging heroes={heroes} />
      <HeroesList heroes={heroes} />
    </>
  );
};

export default Gallery;
