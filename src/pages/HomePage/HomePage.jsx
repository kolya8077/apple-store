// import { useState, useEffect } from 'react';
// import { Trending } from 'components/trending/Trending';
// import { fetchTrending } from 'servise/api';
// import { useLocation } from 'react-router-dom';
import { Loading } from 'components/loading.style';

const HomePage = () => {
  // const [trendingFilms, setTrendingFilms] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetchTrending().then(setTrendingFilms);
  //   setIsLoading(true);
  // }, []);

  // const location = useLocation();

  return (
    <>
      <div>
          <Loading> Завантаження... </Loading>
      </div>
    </>
  );
};

export default HomePage;
