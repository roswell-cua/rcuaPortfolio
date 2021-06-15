import React from 'react';
import IntroPage from './IntroPage.jsx';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename="/rcuaPortfolio">
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
