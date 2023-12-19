import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovie } from 'services/api';
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(res => setMovies(res));
  }, []);

  return (
    <>
      <h2>The most popular movies that may interest you today</h2>
      <hr />
      <ul>
        {movies.map(movie => (
          <Styledli key={movie.id}>
            <Link to={`movies/${movie.id.toString()}`}>
              {movie.original_title}
            </Link>
          </Styledli>
        ))}
      </ul>
    </>
  );
};
export default Home;

const Styledli = styled.li`
  display: flex;
  font-size: 20px;
  gap: 10px;
  line-height: 1.5;
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  & a:hover {
    color: #ad90b0;
  }
`;
