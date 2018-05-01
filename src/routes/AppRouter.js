import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage.js';
import DashboardPage from '../components/DashboardPage.js';
import LoginPage from "../components/LoginPage.js";

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;