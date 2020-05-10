import React from 'react';
import styles from './HeroItem.css';
import PropTypes from 'prop-types';

const HeroItem = ({ name, imageUrl, comicsUrl }) => (
  <div className={styles.heroDiv}>
    <p className={styles.heroName}>{name}</p>
    <img src={imageUrl} alt={name} />
    <a href={comicsUrl} target="_blank" rel="noopener noreferrer">View Comics</a>
  </div>
);

HeroItem.propTypes  = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  comicsUrl:  PropTypes.string.isRequired
};

export default HeroItem;
