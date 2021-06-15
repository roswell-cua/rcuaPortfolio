import React from 'react';
import IntroPage from './IntroPage.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import NavBar from './NavBar.jsx';

const routerBaseName = 'https://roswell-cua.github.io/';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename={routerBaseName}>
        <NavBar />
        <Route
          exact
          path="/"
          render={() => {
            return <IntroPage />;
          }}
        />
        <Route
          exact
          path="/aboutme"
          render={() => {
            return <AboutMe />;
          }}
        />
        <Route
          exact
          path="/projects"
          render={() => {
            return <Projects />;
          }}
        />
      </Router>
    );
  }
}

export default App;
