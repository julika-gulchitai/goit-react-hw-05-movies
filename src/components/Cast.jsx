import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import styled from 'styled-components';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(res => setActors(res));
  }, [movieId]);

  return (
    <div>
      {actors.length > 0 ? (
        <StyledActors>
          {actors.map(actor => (
            <ActorCard key={actor.id}>
              <img
                width="130"
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actors.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </ActorCard>
          ))}
        </StyledActors>
      ) : null}
    </div>
  );
};
export default Cast;

const StyledActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
`;

const ActorCard = styled.li`
  background-color: aliceblue;
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-bottom: 7px;
  margin: 0;
  width: 150px;
  height: 180px
  border-radius: 5px;

  & img {
    width: 100%;}
    & p {
      padding: 0;
  margin: 0;
      font-size: 12px;
      justify-content: center;
      text-align: center;
    }
  
`;
