import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReview(movieId).then(res => setReviews(res));
  }, [movieId]);

  return (
    <>
      {' '}
      {reviews && (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h4>Author: {item.author}</h4>
              <p style={{ color: '#434d49' }}>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
