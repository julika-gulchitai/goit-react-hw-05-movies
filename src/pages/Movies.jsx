import React, { useEffect, useState } from 'react';
import { fetchMovieBySearch } from 'services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Search from '../components/Search';
import { Styledli } from './Home';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [, setNotSuchFilms] = useState(false);
  const movie = searchParams.get('movie') ?? '';
  const takesFilmsbyQuery = query => {
    query ? setSearchParams({ movie: query }) : setSearchParams({});
  };

  useEffect(() => {
    async function getMovie() {
      try {
        const task = await fetchMovieBySearch(movie);
        setFilms(task);
        if (task.lendth === 0) {
          setNotSuchFilms(true);
        }
      } catch (error) {
        console.log(console.error());
      }
    }

    getMovie();
  }, [movie]);

  return (
    <>
      <Search setQuery={takesFilmsbyQuery} />

      <ul>
        {films.map(film => (
          <Styledli key={film.id}>
            <Link
              state={{ from: location }}
              to={`/movies/${film.id.toString()}`}
            >
              {film.title}
            </Link>
          </Styledli>
        ))}
      </ul>
    </>
  );
};

export default Movies;
