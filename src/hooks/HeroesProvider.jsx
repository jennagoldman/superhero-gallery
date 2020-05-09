import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchHeroes } from '../services/marvel-api.js';
import PropTypes from 'prop-types';

export const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchHeroes()
      .then(heroes => setHeroes(heroes));
  }, []);

  return (
    <HeroesContext.Provider value={{ heroes, setHeroes }}>
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
