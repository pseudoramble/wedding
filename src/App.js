import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Intro, Landing } from './pages';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/wedding" component={Intro} />
    </Switch>
  </BrowserRouter>
);

export default App;