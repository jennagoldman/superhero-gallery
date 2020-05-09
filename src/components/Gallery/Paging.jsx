import React from 'react';
import { useHeroes } from '../../hooks/HeroesProvider.jsx';

const Paging = () => {
  const heroes = useHeroes();

  return (
    <>
      <button>&lt;</button>
      <button>&gt;</button>
    </>
  );
};

export default Paging;
