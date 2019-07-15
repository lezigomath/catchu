import React from 'react';
import Home from './pages/Home'
import Profile from './pages/Profile';
import Connection from './pages/Connection';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Profiel" component={Profile} />
          <Route path="/Connection" component={Connection} />
        </Switch>
      </BrowserRouter>
      <h1>Cat Chu</h1>
    </div>
  );
}

export default App;
