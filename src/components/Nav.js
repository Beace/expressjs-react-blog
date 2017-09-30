import React from 'react';
import { Link } from 'react-router';

const Nav = () =>
  (<nav className="navbar navbar-default navbar-custom navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header page-scroll">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          Menu <i className="fa fa-bars" />
        </button>
        <Link className="navbar-brand" activeClassName="active" to="/">
          HOME
        </Link>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link activeClassName="active" to="/about">about</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/news">news</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/contact">contact</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/book">book</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/work">work</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>);

export default Nav;
