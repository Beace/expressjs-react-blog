import React from 'react';
import { render } from 'react-dom';
import 'react-hot-loader/patch';
import { Router, browserHistory } from 'react-router';

// Routes
import routes from './routes';

const Routes = (
  <Router history={browserHistory}>
    {routes}
  </Router>
);

const app = document.getElementById('app');
render(Routes, app);
