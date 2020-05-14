import React from 'react';
import { useTheme } from '../../hooks/ThemeProvider.jsx';
import HeroesList from './HeroesList.jsx';
import Paging from './Paging.jsx';
import styles from './Gallery.css';

const Gallery = () => {
  const theme = useTheme();

  return (
    <main className={`${styles[theme]}`}>
      <Paging />
      <HeroesList />
    </main>
  );
};

export default Gallery;
