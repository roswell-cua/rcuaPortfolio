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
                  Front End: Javascript ES6+, Typescript , React, React-Redux, React-Hooks, React-Native, HTML, CSS,
                  webpack, babel
                  <br></br>
                  Back End: Node/Express, MSSQL, MySQL, MongoDB, Nginx
                  <br></br>
                  Cloud: Microsoft Azure Services
                  <br></br>
                  Others:Swagger, Docker, Kubernetes, Mocha/Chai, Jest/Enzyme,
                  Git/Github, Trello, Asana, New Relic, Loader.io, K6.io
                </p>
                <h1>
                  <Link to="/projects" className="fpbutton">
                    Click me for projects
                  </Link>
                </h1>
              </div>
            </div>
            <div className="aboutme-item">
              <div className="aboutme-info">
                <h1>Work Experience</h1>
                <div className="infop">
                <p>
                    <br></br>
                    Company: <b>Trackonomy Systems</b>
                    <br></br>
                    Title: <b>Full Stack Engineer</b>
                    <br></br>
                    <br></br>
                    Responsibilities: 
                    <br></br>
                    <br></br>
                    <ul>
                      <li>{`\u25CF`} Collaborated across multiple departments, working closely with project managers to ensure project requirements were met. Provided valuable metrics and insights to executives, aiding in informed decision-making.</li>
                      <br></br>
                      <li>{`\u25CF`} Designed and implemented API logic to govern the functionality of in-house hardware, standardized documentation with Swagger, and ensured robustness through Jest mock testing. Utilized  Auth0 to implement  seamless authentication across in-house APIs, enhancing security and access control measures.</li>
                      <br></br>
                      <li>{`\u25CF`} Developed a sophisticated logic network to be customizable to specific needs of individual customers, such as email/phone notifications for specific tracking requirements or real-time data streaming for others.</li>
                      <br></br>
                      <li>{`\u25CF`} Processed large volumes of data. Played a key role in devising the logic for seamless data transmission and accurate interpretation between systems leveraging Azure Cosmos, MSSQL, and Node.js to check for devices and determine their location.</li>
                      <br></br>
                      <li>{`\u25CF`} Enhanced in-house operations through the development of bespoke full-stack apps for various departments, facilitating streamlined hardware setting modifications by non-technical staff through in-house built React UIs.</li>
                    </ul>
                    <br></br>
                  </p>
                  <br></br>
                  <p>
                    Company: <b>theCoderSchool</b>
                    <br></br>
                    Title: <b>Code Coach</b>
                    <br></br>
                    <br></br>
                    Responsibilities:
                    <br></br>
                    <br></br>
                    <ul>
                      <li>{`\u25CF`} Developed coding passion in kids K-12 by introducing them to computer science</li>
                      <br></br>
                      <li>{`\u25CF`} Created curriculum, ie: basic visual games to teach programming concepts in python/javascript</li>
                    </ul>
                  </p> 
                </div>
              </div>
            </div>
            <div className="aboutme-item">
              <div className="aboutme-info">
                <h1>Background/Education</h1>
                <div className="infop">
                  <p>
                    <b>Education:</b>
                    <br></br>
                    Software Engineering Immersive @ Hack Reactor.
                    <br></br>
                    Biochemistry & Molecular Biology @ UC Davis
                  </p>
                  <p>
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
                  </p>
                  <p>
                    <b>Addressing the elephant in the room!</b>
                    <br></br>
                    Let's face the facts, if you're here reading about me,
                    you're probably a company/job I applied for! I am indeed
                    looking for a place to grow and be part of a team. I know
                    that I come from a non-traditional background but I can
                    assure you that i'm just as good as any other engineer out
                    there!
                  </p>
                </div>
              </div>
            </div>
            <div className="aboutme-item">
              <div className="aboutme-info">
                <h1>Contact Me</h1>
                <p>Email: ross.cua@gmail.com</p>
                <div className="infop">
                  <p>
                    LinkedIn:{' '}
                    <a href="https://www.linkedin.com/in/johnroswellcua/">
                      LinkedIn Profile
                    </a>
                  </p>
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
