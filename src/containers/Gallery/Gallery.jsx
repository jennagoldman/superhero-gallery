import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch('https://gateway.marvel.com/v1/public/characters?apikey=1f02de49106b672f61d699663164616b')
      .then(res => res.json())
      .then(json => json.data.results)
      .then(results => setGallery(results));
  });

  return (
    <h2>Heroes Gallery</h2>
  );
};

export default Gallery;
