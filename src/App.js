import React from 'react';
import Home from './Home'
import Profil from './Profil';
import Connection from './Connection';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Profil" component={Profil} />
          <Route path="/Connection" component={Connection} />
        </Switch>
      </BrowserRouter>
      <h1>Cat Chu</h1>
    </div>
  );
}

export default App;
