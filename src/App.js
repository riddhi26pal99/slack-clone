import React from 'react';
import './App.css';
import Header from './Components/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <>
        <Switch>
          {/*<Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>*/}
          <Route path="/" exact>
            <Header />
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
