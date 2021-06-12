import React from 'react';

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <button className="fpbutton">Portfolio</button>
        </div>
      </div>
    );
  }
}

export default IntroPage;
