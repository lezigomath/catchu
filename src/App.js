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
          <Route path="/Profile" component={Profile} />
          <Route path="/Connection" component={Connection} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
