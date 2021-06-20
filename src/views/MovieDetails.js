import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesService } from '../api/MoviesService';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const { data = {} } = await MoviesService.getMovieById(id);
      setMovie(data);
    }
    fetchMovie();
  }, [id]);

  return (
    <>
      <h1>{movie.title}</h1>
      <article>{movie.overview}</article>
    </>
  );
};
