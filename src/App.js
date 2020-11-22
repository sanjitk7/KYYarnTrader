import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Inquiry from './components/Inquiry/Inquiry'
import Dashboard from './components/Dashboard/Dashboard'
import Products from './components/Product/Product'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/inquiry">
            <Inquiry />
          </Route>
          <Route path="/dashboard/:page">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
