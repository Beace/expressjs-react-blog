import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
export default class Root extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Router
        history={browserHistory}
        render={applyRouterMiddleware(useScroll())}
      >
        {this.props.routes}
      </Router>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.object,
};
