import { useEffect, useState } from 'react';
import { MoviesService } from '../api/MoviesService';
import { MoviesList } from '../components/MoviesList';
import { MoviesContainer } from '../styles/MovieContainer';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data: { results = [] } = {} } = await MoviesService.getMovies();
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
};
