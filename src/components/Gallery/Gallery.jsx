import React from 'react';
import { useHeroes } from '../../hooks/HeroesProvider.jsx';
import HeroesList from './HeroesList.jsx';
import Paging from './Paging.jsx';

const Gallery = () => {
  const heroes = useHeroes();

  return (
    <>
      <HeroesList heroes={heroes} />
      <Paging heroes={heroes} />
    </>
  );
};

export default Gallery;
