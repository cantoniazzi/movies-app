import { MoviesContainer } from './styles/MovieContainer';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MoviesList movies={[]} />
      </MoviesContainer>
    </div>
  );
}

export default App;
