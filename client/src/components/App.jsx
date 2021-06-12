import React from 'react';
import IntroPage from './IntroPage.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return <IntroPage />;
          }}
        />
        <Route
          exact
          path="/PortfolioHome"
          render={() => {
            return <AboutMe />;
          }}
        />
      </Router>
    );
  }
}

export default App;
