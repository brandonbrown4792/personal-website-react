import React from 'react';

export default function Projects({ projectsRef }) {
  return (
    <div ref={projectsRef}>
      <h1 id="projects" className="section-title">Projects</h1>
      <div className="projects-container container">
        <div className="project">
          <div className="row">
            <div className="six columns">
              <div className="project-title">Bulletin</div>
              <img className="project-image" src="Projects/Bulletin.png" />
              <div className="project-demo">
                <a href="https://www.youtube.com/watch?v=LRW9Y2imcJs" target="_blank">
                  <i className="fab fa-youtube"></i>Video Demo
                </a><br />
                <a href="https://github.com/brandonbrown4792/bulletin-backend" target="_blank">
                  <i className="fas fa-code-branch"></i>Backend
                </a>
                <a href="https://github.com/brandonbrown4792/bulletin-frontend" target="_blank">
                  <i className="fas fa-code-branch"></i>Frontend
                </a>
              </div>
            </div>
            <div className="six columns">
              <div className="project-subtitle">Overview</div>
              <p className="project-overview">
                Bulletin is a social networking platform centered around news.
                As the rise of social media continues, younger generations stray away from traditional news sites and
                articles and turn to resources such as Twitter and Facebook.
                This app seeks to combine traditional news outlets with a social media interface for a more captivating
                and engaging experience.
                With Bulletin, users are able to follow specific news sources or interests as well as follow other users.
                Using this approach, Bulletin strives to become a one-stop-shop news outlet for any generational user.
              </p>
              <div className="project-subtitle">Features</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="twelve columns">
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Customizable user feed
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Messaging to other users
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Searchable tags to find posts easier
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Notifications to prioritize user experience
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="project-subtitle">Technologies Used</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Ruby on Rails</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Postgresql</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>React JS</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Redux</li>
                    </div>
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>News API</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>React Material UI</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>HTML</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>CSS</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="row">
            <div className="six columns">
              <div className="project-title">Dispatch</div>
              <img className="project-image" src="Projects/Dispatch.png" />
              <div className="project-demo">
                <a href="https://github.com/brandonbrown4792/dispatch-backend" target="_blank">
                  <i className="fas fa-code-branch"></i>Backend
                </a>
                <a href="https://github.com/brandonbrown4792/dispatch-frontend" target="_blank">
                  <i className="fas fa-code-branch"></i>Frontend
                </a>
              </div>
            </div>
            <div className="six columns">
              <div className="project-subtitle">Overview</div>
              <p className="project-overview">
                Dispatch is a nurse dispatcher application that allows for digital scheduling of appointments for
                patients.
                An integrated map provides the dispatcher easier management of appointments. The appointments are also
                available in a list view.
                Nurses may log in to view their patient appointments in a map view.
                Patients may log in to view their appointments.
              </p>
              <div className="project-subtitle">Features</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="twelve columns">
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Integrated map for dispatchers and patients
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Integrated list view for of appointments for
                        dispatchers
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Appointment filtering by nurse, patient,
                        appointment reason, appointment status, and date
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Messaging between users
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div id="projects" className="project-subtitle">Technologies Used</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Ruby on Rails</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Postgresql</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>React JS</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Mapbox API</li>
                    </div>
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>React Material UI</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>HTML</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>CSS</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="row">
            <div className="six columns">
              <div className="project-title">The Mix</div>
              <img className="project-image" src="Projects/The Mix.png" />
              <div className="project-demo">
                <a href="https://github.com/brandonbrown4792/the-mix-backend" target="_blank">
                  <i className="fas fa-code-branch"></i>Backend
                </a>
                <a href="https://github.com/brandonbrown4792/the-mix-frontend" target="_blank">
                  <i className="fas fa-code-branch"></i>Frontend
                </a>
              </div>
            </div>
            <div className="six columns">
              <div className="project-subtitle">Overview</div>
              <p className="project-overview">
                The Mix is the perfect place to find your next cocktail.
                Using an external api to source existing cocktails and the giving each user the ability to create their
                own
                cocktail,
                The Mix is the perfect spot to share and find cocktails.
              </p>
              <div className="project-subtitle">Features</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="twelve columns">
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Search cocktails by name or ingredient
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Review and favorite cocktails
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Add user created cocktails
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div id="projects" className="project-subtitle">Technologies Used</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Ruby on Rails</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Postgresql</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>JavaScript</li>
                    </div>
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>HTML</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>CSS</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="row">
            <div className="six columns">
              <div className="project-title">On Trak</div>
              <img className="project-image" src="Projects/On Trak.png" />
              <div className="project-demo">
                <a href="https://github.com/brandonbrown4792/on-trak-app" target="_blank">
                  <i className="fas fa-code-branch"></i>Source Code
                </a>
              </div>
            </div>
            <div className="six columns">
              <div className="project-subtitle">Overview</div>
              <p className="project-overview">
                On Trak is a collaborative task management application.
                Users are able to create individual or shared lists to make group task management easy.
              </p>
              <div className="project-subtitle">Features</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="twelve columns">
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Create individual or collaborative lists
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Create user groups for easy list assignement
                      </li>
                      <li>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>Update list contents and completion as
                        necessary
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div id="projects" className="project-subtitle">Technologies Used</div>
              <div className="container">
                <div className="row">
                  <ul className="project-list">
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Ruby on Rails</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Postgresql</li>
                    </div>
                    <div className="six columns">
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Rails ERB Frontend</li>
                      <li><i className="fa fa-check-circle" aria-hidden="true"></i>Semantic UI</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}