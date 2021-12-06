import React from 'react';
import './style.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <br />
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <br />
        <NavLink activeClassName="active" to="/contact">
          Conatct
        </NavLink>
        <br />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
