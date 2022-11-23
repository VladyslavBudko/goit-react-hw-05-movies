import axios from 'axios';

// export const BASE_GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
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

