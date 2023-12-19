import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Cast from './Cast';
import Gallery from '../components/Gallery/Gallery';
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
          <Route path="movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export const StyledLink = styled.div`
  display: grid;
  place-content: center;
  color: green;
  width: 100%;
`;
