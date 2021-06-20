import { MoviesContainer } from './styles/MovieContainer';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { useEffect, useState } from 'react';
import { MoviesService } from './api/MoviesService';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data: { results = [] } = {} } = await MoviesService.getMovies();
    setMovies(results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
