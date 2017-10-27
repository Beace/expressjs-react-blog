import React from 'react';
import './index.css';

const Header = () =>
  (<header className="intro-header home-header">
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <div className="site-heading">
            <h1>React & NodeJS Clean Blog</h1>
            <hr className="small d-none d-md-block" />
            <span className="subheading d-none d-md-block">Writing the clean blog, talking the deep story.</span>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
