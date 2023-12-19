import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cast from './Cast';

import { Reviews } from './Reviews';
import Home from 'pages/Home';
import Movie from './Movie';
import Layout from './Layout';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
