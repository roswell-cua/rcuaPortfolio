import React from 'react';
import { Link } from 'react-router-dom';

class AboutMe extends React.Component {
  render() {
    return (
      <div id="aboutmep" className="frontp">
        <div>
          <h1>About me Page</h1>
          <Link to="/projects" className="fpbutton">
            Click me for projects
          </Link>
        </div>
      </div>
    );
  }
}

export default AboutMe;
