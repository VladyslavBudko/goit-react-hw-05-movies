import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const MY_KEY = '0dd125b83baab4c44161e46f210352be';
const trending = 'trending/movie/day';

const fetchTrandingMovies = async page => {
  const response = await axios.get(`${baseURL}/${trending}?api_key=${MY_KEY}`);
 
  console.log(response);
  const total = response.data.total_results;
  const results = response.data.results;
  return { total, results };
};

export default fetchTrandingMovies;
