import React from 'react';

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="firstsection" className="frontp">
        <div>
          <h1>Hello</h1>
          <button className="fpbutton">Portfolio</button>
        </div>
      </div>
    );
  }
}

export default IntroPage;
