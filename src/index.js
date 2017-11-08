import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from 'containers/App';
import routes from './routes';
const rootRoute = {
  component: App,
  childRoutes: routes,
};
render(
  (
    <Router
      history={browserHistory}
      render={applyRouterMiddleware(useScroll())}
      routes={rootRoute}
    />
  ),
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
