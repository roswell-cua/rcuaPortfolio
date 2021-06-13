import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav class="brown">
        <div class="nav-wrapper">
          <a
            href="https://github.com/roswell-cua/rcuaPortfolio"
            class="brand-logo"
          >
            John Roswell Cua
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/">Cover</Link>
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
