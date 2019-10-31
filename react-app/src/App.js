import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HTML5Elements from './components/HTML5Elements';
import Css from './components/Css';
import Questions from './components/Questions';

const styles = {
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={styles.ul}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
          </ul>
        </nav>

        <hr style={{margin: 0}} />

        <Switch>
          <Route exact path="/">
            <HTML5Elements />
          </Route>
          <Route path="/css">
            <Css />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
