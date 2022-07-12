import axios from 'axios';

const API_KEY = '0bad0c478cca5baa77b2d3f25afa29cf';
const URL = 'https://api.themoviedb.org/3/';

export async function getMovies() {
  const response = await axios.get(
    `${URL}trending/movie/week?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieById(movieId) {
  const response = await axios.get(`${URL}movie/${movieId}?api_key=${API_KEY}`);
  return response;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(
    `${URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieReview(movieId) {
  const response = await axios.get(
    `${URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
}

export async function getMoviesBySearchForm(movieName) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${movieName}&page=1`
  );

  return response;
}
