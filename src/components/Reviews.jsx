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
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h3 style={{ marginBottom: '0' }}>Author: {item.author}</h3>
              <p style={{ color: '#434d49', marginTop: '10px' }}>
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews yet</p>
      )}
    </>
  );
};
export default Reviews;
