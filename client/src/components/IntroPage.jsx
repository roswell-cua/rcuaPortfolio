import React from 'react';
import { Link } from 'react-router-dom';

class IntroPage extends React.Component {
  render() {
    return (
      <div id="firstsection" className="frontp">
        <div>
          <h1>
            Hello,<span></span>
          </h1>
          <h1>
            My name is <span></span>
          </h1>
          <h1>
            John Roswell Cua <span></span>
          </h1>
          <Link to="/aboutme" className="fpbutton">
            About Me
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroPage;
