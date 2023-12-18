import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Cast from '../components/Cast/Cast';
import Gallery from '../components/Gallery/Gallery';
import { Reviews } from './Reviews/Reviews';
import Home from 'pages/Home';
import Movie from './Movie/Movie';
import Layout from './Layout';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 20,
    //   color: '#010101',
    // }}
    >
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
