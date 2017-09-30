import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

const App = ({ children }) => (
  <div>
    <Nav />
    {children}
    <hr />
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
