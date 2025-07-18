import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import Crypto from './pages/crypto/Crypto';

function App() {

  return (
    <div className="App">
      <Router>
          <ScrollToTopRoute exact={true} path='/'>
            <Home />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/game'>
            <Game />
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/crypto'>
            <Crypto />
          </ScrollToTopRoute>
      </Router>

    </div>
  );
}

export default App;
