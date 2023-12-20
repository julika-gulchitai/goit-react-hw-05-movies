import React, { useEffect, useState } from 'react';
import { fetchMovieBySearch } from 'services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movie = () => {
  // const [query, setQuery] = useState([]);
  // const location = useLocation;
  // const [searchParams, setSearchParams] = useSearchParams();    const hederSubmit = ((e) => {
  //     e.preventDedault;
  //     const q = e.target.value
  // };
  //   setQuery(q);
  return (
    <form>
      <input
        type="text"
        placeholder="Find a movie"
        style={{ width: '300px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Movie;
