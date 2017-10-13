import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header page-scroll">
        <Link className="navbar-brand" activeClassName="active" to="/">
          HOME
        </Link>
      </div>

      <ul className="nav justify-content-end">
        <li>
          <Link className="nav-link" activeClassName="active" to="/about">
            about
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/news">
            news
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/contact">
            contact
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/book">
            book
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/work">
            work
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
