import React from 'react';
import { Link } from 'react-router-dom';

class AboutMe extends React.Component {
  render() {
    return (
      <div id="aboutmep" className="aboutme">
        <div className="personal-info">
          <div className="section title">
            <h1>About Me</h1>
          </div>
          <div className="all-projects">
            <div className="aboutme-item">
              <div className="aboutme-info">
                <h1>Technologies</h1>
                <p className="infop">
                  Front End: Javascript ES6+, React, React-Native, HTML, CSS,
                  webpack, babel
                  <br></br>
                  Back End: Node/Express, MySQL, MongoDB, Nginx
                  <br></br>
                  Others:Docker, Kubernetes, Mocha/Chai, Jest/Enzyme,
                  Git/Github, Trello, Asana, New Relic, Loader.io, K6.io
                </p>
                <h1>
                  <Link to="/projects" className="fpbutton">
                    Click me for projects
                  </Link>
                </h1>
                <div></div>
              </div>
            </div>
            <div className="aboutme-item">
              <div className="aboutme-info">
                <h1>Background/Education</h1>
                <p className="infop">
                  <div>
                    <b>Education:</b>
                    <br></br>
                    Software Engineering Immersive @ Hack Reactor, B.S.
                    <br></br>
                    Biochemistry & Molecular Biology @ UC Davis
                  </div>
                  <div>
                    <b>Non-traditional?</b>
                    <br></br>
                    As you can see, before I became a software engineer, I was a
                    pre-med student! When I finished college and worked as a
                    scribe for an emergency department, I quickly realized that
                    my passion wasn't for medicine but for computers! Dating
                    back to my high school days, I was always immersed with
                    computer games, mostly running a private server of a game I
                    love to play. Being reminded of how much fun I had then, I
                    decided to try out programming in a more serious tone.
                    Flashforward to today, I finished up a bootcamp and am
                    currently pursuing opportunities to learn more and more
                    about this programming world! I can gladly say that I am
                    enjoying everything so far, from making gorgeous looking
                    webpages to solving data structures/algorithms.
                  </div>
                  <div>
                    <b>Addressing the elephant in the room!</b>
                    <br></br>
                    Let's face the facts, if you're here reading about me,
                    you're probably a company/job I applied for! I am indeed
                    looking for a place to grow and be part of a team. I know
                    that I come from a non-traditional background but I can
                    assure you that i'm just as good as any other engineer out
                    there! After finishing up a Software Engineering Immersive
                    program, I obtained familiarity with full-stack applications
                    such as Javascript with React for the front-end, server-side
                    technologies such as Node.js and Express, and MongoDB and
                    MySQL for relational/non-relational databases. On top of the
                    current technologies I know, I am constantly pushing myself
                    to learn new technologies on a daily basis. I am currently
                    motivated and eager to find a place to use these newfound
                    skills and continually grow both professionally and
                    personally.
                  </div>
                </p>
              </div>
            </div>
            <div className="aboutme-item">
              <div className="aboutme-info">
                <h1>Contact Me</h1>
                <p>Email: ross.cua@gmail.com</p>
                <div className="infop">
                  LinkedIn:{' '}
                  <a href="https://www.linkedin.com/in/johnroswellcua/">
                    LinkedIn Profile
                  </a>
                  <br></br>
                  <p>
                    Github Page:
                    <a href="https://github.com/roswell-cua"> Github Profile</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
