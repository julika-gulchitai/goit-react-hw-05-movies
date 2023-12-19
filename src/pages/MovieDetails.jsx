import { StyledIconLink } from 'components/Layout';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { AiFillBackward } from 'react-icons/ai';

import {
  useLocation,
  useNavigate,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import styled from 'styled-components';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');
  const tmbd = 'https://image.tmdb.org/t/p/w500';
  // src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  // src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}

  useEffect(() => {
    fetchMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  const hangleGoBack = () => {
    navigate(goBack.current);
  };

  return (
    <>
      <Wrapper>
        <ButttonBack onClick={hangleGoBack}>
          <StyledIconLink to="/">
            <AiFillBackward />
          </StyledIconLink>
        </ButttonBack>
        <WrapperCard>
          {movie !== undefined && (
            <WrapperPost>
              <div>
                {
                  <img
                    src={movie.poster_path ? `${tmbd + movie.poster_path}` : ''}
                    alt={movie.media_type}
                  />
                }
              </div>
              <WrapperText>
                <StyledTitle>{movie.title}</StyledTitle>
                <p>{movie.overview}</p>
                <p style={{ marginTop: 'auto' }}>
                  Release_date:{movie.release_date}
                </p>
              </WrapperText>
            </WrapperPost>
          )}
        </WrapperCard>
        <WrapperCard>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </WrapperCard>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

const ButttonBack = styled.button`
  padding-top: 0;
  background-color: transparent;
  border-width: 0;
  display: block;
  margin-right: auto;
`;

const StyledTitle = styled.h2`
  color: #434d49;
  padding-top: 0;
`;
const WrapperCard = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  padding: 10px;
  img {
    /* width: 40%; */
    margin-right: 10px;

    width: 300px;
  }
  h1 {
    margin-top: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapperPost = styled.div`
  display: flex;
  flex-direction: row;
`;
const WrapperText = styled.div`
  color: #434d49;
  display: flex;
  flex-direction: column;
`;
