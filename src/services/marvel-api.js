export const fetchHeroes = () => {
  return fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(json => json.data.results.map(hero => ({
      id: hero.id,
      name: hero.name,
      imageUrl: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
      comicsUrl: hero.urls[0].url,
      description: hero.description
    })));
};
