import React from 'react';
import HeroesList from './HeroesList.jsx';
import Paging from './Paging.jsx';

const Gallery = () => (
  <main>
    <Paging />
    <HeroesList />
  </main>
);

export default Gallery;
