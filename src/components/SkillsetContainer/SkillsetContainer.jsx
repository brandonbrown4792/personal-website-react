import React from 'react';

export default function SkillsetContainer({ skillsetRef }) {
  return (
    <div ref={skillsetRef} className="skillset-container">
      <h1 id="skillset" className="section-title">Skillset</h1>
      <div className="skill-images-container">
        <div className="horizontal-list">
          <ul>
            <li>
              <img className="skill-image" src="Skills Logos/Rails Logo.png" alt="rails" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/React Logo.png" alt="react" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/GraphQL Logo.png" alt="graphql" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/Redux Logo.png" alt="redux" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/Git Logo.png" alt="git" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/SQL Logo.png" alt="sql" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/HTML5 Logo.png" alt="html5" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/CSS3 Logo.png" alt="css3" />
            </li>
            <li>
              <img className="skill-image" src="Skills Logos/C Sharp Logo.png" alt="c#" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};
