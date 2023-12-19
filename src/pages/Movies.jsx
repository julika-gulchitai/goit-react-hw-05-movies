import React, { useEffect, useState } from 'react';
import { fetchMovieBySearch } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovieBySearch().then(res => setMovies(res));
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
