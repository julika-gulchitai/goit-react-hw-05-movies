import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from './NotFound';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';
// import Home from 'pages/Home';
// import Movies from '../pages/Movies';
// import Layout from './Layout';

const Home = lazy(() => import('pages/Home'));
const Layout = lazy(() => import('./Layout'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
