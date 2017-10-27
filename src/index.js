import React from 'react';
import { render } from 'react-dom';
import 'react-hot-loader/patch';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

// Routes
import routes from './routes';

const Routes = (
  <Router
    history={browserHistory}
    render={
      applyRouterMiddleware(useScroll())
    }
  >
    {routes}
  </Router>
);

const app = document.getElementById('app');
render(Routes, app);
