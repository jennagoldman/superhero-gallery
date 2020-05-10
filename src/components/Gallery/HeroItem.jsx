import React from 'react';
import styles from './HeroesItem.css';

const HeroItem = ({ name, imageUrl, comicsUrl }) => (
  <div className={styles.heroDiv}>
    <p className={styles.heroName}>{name}</p>
    <img src={imageUrl} alt={name} />
    <a href={comicsUrl} target="_blank" rel="noopener noreferrer">View Comics</a>
  </div>
);

export default HeroItem;
