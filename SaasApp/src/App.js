import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './LandingPages/pages/Home';
import Dashboard from './User/pages/Dashboard';

const  App  = () => {
  return (
  <Router>
    <Switch>
    <Route path = "/" exact>
      <Home />
    </Route>
    <Route path= "/dashboard" > 
      <Dashboard />
    </Route>
    <Redirect to = "/" />
    </Switch>
  </Router>)
}

export default App;
