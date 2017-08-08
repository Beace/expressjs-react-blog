import React from 'react';
import { render } from 'react-dom';
import 'react-hot-loader/patch';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

// Routes
import routes from './routes';

const Routes = (
  <Router history={browserHistory}>
    <AppContainer>
      {routes}
    </AppContainer>
  </Router>
);

const app = document.getElementById('app');
const renderApp = render(Routes, app);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = routes;
    renderApp({ routes: nextRoutes() });
  });
}
