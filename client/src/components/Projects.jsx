import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section title">
              Recent <span>Projects</span>
            </h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h1>Project 1</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="project-img">
                <img src="../../dist/images/project.jpeg" alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 2</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="project-img">
                <img src="../../client/dist/images/project.jpeg" alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 3</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="project-img">
                <img src="../../client/dist/images/project.jpeg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
