import React, { Component } from 'react';
import { render } from 'react-dom';

const Header = () =>
  (<header
    className="intro-header"
    style={{ backgroundImage: "url('images/home-bg.jpg')" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div className="site-heading">
            <h1>React Clean Blog</h1>
            <hr className="small" />
            <span className="subheading">A Clean Blog By NodeJS And React</span>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
