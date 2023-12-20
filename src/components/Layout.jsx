import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { RiHomeSmileLine } from 'react-icons/ri';

const Layout = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">
            <RiHomeSmileLine size="2rem" />
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <StyledMainContent>
        <Outlet />
      </StyledMainContent>
      <StyledFooter>&copy; All right reserved 2023</StyledFooter>
    </StyledWrapper>
  );
};

export default Layout;

const StyledWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  background: radial-gradient(
    ellipse farthest-corner at 95% 95%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );

  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px 0;
  font-size: 1rem;

  nav {
    display: flex;
    gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  margin-right: 5px;
  &.active {
    color: #7e918a;
    text-decoration: underline;
  }
`;

export const StyledIconLink = styled(NavLink)`
  font-size: 2rem;
  margin-top: 10px;
  margin-right: 15px;
  color: #7e918a;
`;

export const StyledMainContent = styled.div`
  flex-grow: 1;
  padding: 10px;
`;
export const StyledFooter = styled.footer`
  font-size: 15px;
  text-align: center;
  padding-bottom: 5px;
`;
