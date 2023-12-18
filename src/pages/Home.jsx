import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovie } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(res => setMovies(res));
  }, []);

  return (
    <>
      <div>
        <h2>The most popular movies that may interest you</h2>
        <hr />
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id.toString()}`}>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
