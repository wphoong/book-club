import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage.js';
import DashboardPage from '../components/DashboardPage.js';
import LoginPage from '../components/LoginPage.js';
import AccountSettings from "../components/AccountSettings.js";
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/accountsettings" component={AccountSettings} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;