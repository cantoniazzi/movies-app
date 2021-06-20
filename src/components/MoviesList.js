import { MovieItem } from './MoviesItem';

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      {movies.map((movie, index) => <MovieItem { ...movie } key={index} />)}
    </ul>
  </section>
);
