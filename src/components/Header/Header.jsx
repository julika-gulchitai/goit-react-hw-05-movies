import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './Header.styled.js';

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/">Home44</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </StyledHeader>
  );
};
