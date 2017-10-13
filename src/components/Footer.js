import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <ul className="row align-items-center">
        <li className="col text-center">
          <a>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-twitter fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="col text-center">
          <a>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-facebook fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="col text-center">
          <a>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-github fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
      </ul>
      <p className="copyright text-muted">
        Copyright &copy; Beace React && Node Clean Blog 2016
      </p>
    </div>
  </footer>
);

export default Footer;
