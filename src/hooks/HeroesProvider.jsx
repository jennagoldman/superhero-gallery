import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);

  return (
    <HeroesContext.Provider value={{ heroes, setHeroes }}>
      {children}
    </HeroesContext.Provider>
  );
};

HeroesProvider.propTypes = {
  children: PropTypes.node
};
