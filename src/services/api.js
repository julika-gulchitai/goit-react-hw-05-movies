import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = 'fd8ed35fd5e62e5eb969497540b2a96f';
// const ALT_IMG = 'http://image.tmdb.org/t/p/w500';
// token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDhlZDM1ZmQ1ZTYyZTVlYjk2OTQ5NzU0MGIyYTk2ZiIsInN1YiI6IjY1N2VlMzZjMzIzZWJhM2NmYjg3YWU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kaaBNzgo9Fuzy5_qSDwAVRNgVIYsfuYMifzihljaNY0

export const fetchMovie = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return data.results;
};

export const fetchMovieBySearch = async query => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: KEY,
      query: query,
    },
  });
  return data.results;
};

export const fetchCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data.results;
};
export const fetchReview = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data?.results;
};
