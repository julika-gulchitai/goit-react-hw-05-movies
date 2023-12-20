import axios from 'axios';
export const TMBD = 'https://image.tmdb.org/t/p/w500';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'fd8ed35fd5e62e5eb969497540b2a96f';

export const fetchMovie = async () => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });
  console.log('fetchMovie', data.results);
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  console.log('fetchMovieById', data);

  return data;
};

export const fetchMovieBySearch = async query => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: KEY,
      query: query,
    },
  });
  console.log('fetchSearch', data);
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  console.log('fetchCast', data.cast);
  return data.cast;
};
export const fetchReview = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  console.log('fetchRew', data.results);
  return data.results;
};
