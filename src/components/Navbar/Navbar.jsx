import React from 'react';

export default function Navbar({ projectsRef, scrollToSection, includeProjectsLink = true }) {
  return (
    <div id="navbar">
    <div className="horizontal-list">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {includeProjectsLink && (
          <li>
            <a id="projects-nav-link" onClick={() => scrollToSection(projectsRef)}>Projects</a>
          </li>
        )}
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  )
}