import React, { useEffect, useState } from 'react';
import { fetchMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovie().then(res => setMovies(res));
  }, []);
  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
