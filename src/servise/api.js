import axios from 'axios';

const API_KEY = '1f2d7fc7209a3cc852325c2be14de280';
const BASE_URL = 'https://api.themoviedb.org';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&language=uk-UA`
  );

  console.log(response)

  return response.data.results;
};

