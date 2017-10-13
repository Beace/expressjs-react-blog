import React from 'react';

const Header = () =>
  (<header
    className="intro-header"
    style={{ backgroundImage: "url('images/home-bg.jpg')" }}
  >
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <div className="site-heading">
            <h1>React & NodeJS Clean Blog</h1>
            <hr className="small" />
            <span className="subheading">A Clean Blog By NodeJS And React</span>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
