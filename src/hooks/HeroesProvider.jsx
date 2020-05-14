import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchHeroes } from '../services/marvel-api.js';
import PropTypes from 'prop-types';

export const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchHeroes(0)
      .then(heroes => setHeroes(heroes));
  }, []);

  useEffect(() => {
    if(offset > 0) {
      fetchHeroes(offset)
        .then(heroes => setHeroes(heroes));
    }
  }, [offset]);

  const handleOffset = by => setOffset(prevOffset => prevOffset + by);

  return (
    <HeroesContext.Provider value={{ heroes, offset, handleOffset }}>
      {children}
    </HeroesContext.Provider>
  );
};

HeroesProvider.propTypes = {
  children: PropTypes.node
};

export const useHeroes = () => {
  const { heroes } = useContext(HeroesContext);
  return heroes;
};

export const useOffset = () => {
  const { offset } = useContext(HeroesContext);
  return offset;
};

export const useHandleOffset = () => {
  const { handleOffset } = useContext(HeroesContext);
  return handleOffset;
};
