import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section title">
              Past <span>Projects</span>
            </h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h1>UTeachMe</h1>
                <h2>
                  Technologies used: React, Node, Express, MongoDB, Amazon EC2
                </h2>
                <a href="https://github.com/Uteach-me/utm-course-overview">
                  Github project link{' '}
                </a>
                <p>
                  In this project, I worked with a group of people to design a
                  webpage for an e-commerce type website. My task was to create
                  a collasible data table for the overview section of the
                  selected course. In this project I was able to use React API
                  states and lifecycle methods to deliver a modular user
                  interface. To make sure it would render correctly with data
                  sets, I architected a seed in MongoDB w/lean queries and
                  loaded them up to the front-end. When everything was said and
                  done, I uploaded the component up to an AWS EC2 t2.micro and
                  ran a few tests to get a webpage Performance score in the 98th
                  Percentile.
                </p>
              </div>
              <div className="project-img">
                <img src="/images/collapsebar.gif" alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project BARK</h1>
                <h2>
                  Technologies used: Node, Express, MySQL, MongoDB, Nginx, New
                  Relic, Loader.io
                </h2>
                <a href="https://github.com/6-BARK/PhotoGallery">
                  Github project link{' '}
                </a>
                <p>
                  In this project, backend work was prioritized. Given a photo
                  gallery service, the task at hand was to stress test requests
                  and scale up the microservice. I was able to benchmark both a
                  non-relational database(mongoDB) and a relational
                  database(MySQL) to determine which database to test on New
                  Relic and to pick for performance. I generated and loaded
                  sample data sets of up to 20 million to simulate production
                  level data. I then horizontally scaled the microservice on a
                  cloud based web service to handle up to 10,000 RPS using Node,
                  Express, and Nginx.
                </p>
              </div>
              <div className="project-img">
                <img src="/images/loader1.png" alt="img" />
                <img src="/images/loader2.png" alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Sticker Store</h1>
                <h2>
                  Technologies used: React-redux, React-native, Node, Express,
                  MySQL
                </h2>
                <p>
                  In this project, I explored the difference between react and
                  react native. I coded up a sample mini store front that was
                  IOS and Android friendly. Using stores, actions, and reducers
                  with react redux made everything much more smoothly. Once the
                  front-end was done, everything was then connected onwards to a
                  mySQL database using node/express to hold sample customer
                  data.
                </p>
              </div>
              <div className="project-img">
                <img src="/images/shop1.gif" alt="img" />
                <img src="/images/shop2.gif" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
