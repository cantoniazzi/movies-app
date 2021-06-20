import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { About } from './views/About';
import { Home } from './views/Home';
import { MovieDetails } from './views/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
