import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = ({ target }) => {
    if(target.checked) setTheme('dark');
    if(!target.checked) setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const useToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return toggleTheme;
};
