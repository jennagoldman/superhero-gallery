import React from 'react';
import { useHeroes, useOffset, useHandleOffset } from '../../hooks/HeroesProvider.jsx';

const Paging = () => {
  const heroes = useHeroes();
  const offset = useOffset();
  const handleOffset = useHandleOffset();

  return (
    <>
      <button onClick={() => handleOffset(-25)} disabled={offset === 0}>&lt;</button>
      <button onClick={() => handleOffset(25)} disabled={heroes.length < 25}>&gt;</button>
    </>
  );
};

export default Paging;
