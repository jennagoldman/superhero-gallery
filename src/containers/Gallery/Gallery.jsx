import React, { useState, useEffect } from 'react';
import { fetchHeroes } from '../../services/marvel-api';

const Gallery = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchHeroes()
      .then(heroes => setHeroes(heroes));
  }, []);

  return (
    <h2>Heroes Gallery</h2>
  );
};

export default Gallery;
