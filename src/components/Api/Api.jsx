import axios from 'axios';

export const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w500/`;

const baseURL = 'https://api.themoviedb.org/3';
const MY_KEY = '0dd125b83baab4c44161e46f210352be';
const trending = 'trending/movie/day';
const urlParams = {
  params: {
    api_key: MY_KEY,
    language: 'en-US',
  },
};

export const fetchTrandingMovies = async page => {
  const response = await axios.get(`${baseURL}/${trending}`, {
    params: { ...urlParams.params, page },
  });

  const total = response.data.total_results;
  const results = response.data.results;
  return { total, results };
};

export const fetchMovieId = async id => {
  const response = await axios.get(`${baseURL}/movie/${id}`, urlParams);
  return response.data;
};

export const fetchingByName = async (query, page) => {
  const response = await axios.get(`${baseURL}/search/movie`, {
    params: { ...urlParams.params, query, page },
  });

  if (response.data.total_results === 0) {
    return Promise.reject(new Error(`Sorry! No Movies with ${query}`));
  } else {
    const total = response.data.total_results;
    const results = response.data.results;
    return { total, results };
  }
};

export const fetchingCast = async id => {
  const response = await axios.get(`${baseURL}/movie/${id}/credits`, urlParams);

  if (response.data.cast.length === 0) {
    return Promise.reject(new Error(`Sorry! No cast was found.`));
  } else {
    return response.data.cast;
  }
};

export const fetchingReviews = async id => {
  const response = await axios.get(`${baseURL}/movie/${id}/reviews`, urlParams);

  if (response.data.total_results === 0) {
    return Promise.reject(new Error(`Sorry! No reviews was found.`));
  } else {
    return response.data.results;
  }
};
