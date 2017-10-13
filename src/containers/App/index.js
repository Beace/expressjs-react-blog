import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './style.css';
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
