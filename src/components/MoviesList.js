import { MovieItem } from './MoviesItem';

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      {movies.map((movie, index) => <MovieItem title={movie.title} key={index} />)}
    </ul>
  </section>
);
