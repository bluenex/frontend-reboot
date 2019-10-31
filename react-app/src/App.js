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

function App() {
  return (
    <Router>
      <div>
        <ul>
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

        <hr />

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
