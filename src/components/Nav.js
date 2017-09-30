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
        <Link className="navbar-brand" to="/">
          HOME
        </Link>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">home22</Link>
          </li>
          <li>
            <Link to="/about">about22</Link>
          </li>
          <li>
            <Link to="/news">news</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/book">book</Link>
          </li>
          <li>
            <Link to="/work">work</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>);

export default Nav;
