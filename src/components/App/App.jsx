import React from 'react';
import ThemeProvider from '../../hooks/ThemeProvider.jsx';
import HeroesProvider from '../../hooks/HeroesProvider.jsx';
import Header from '../Header/Header.jsx';
import Gallery from '../Gallery/Gallery.jsx';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <HeroesProvider>
          <Gallery />
        </HeroesProvider>
      </ThemeProvider>
    </>
  );
}
  
