import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="brown">
        <div className="nav-wrapper">
          <a
            href="https://github.com/roswell-cua/rcuaPortfolio"
            className="brand-logo"
          >
            My github for this portfolio
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Start Here!!</Link>
            </li>
            <li>
              <Link to="aboutme">About Me</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
