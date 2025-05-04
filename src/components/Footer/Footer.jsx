import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-main-message">Thank you for visiting!</p>
      <p className="footer-secondary-message">
        Please contact me <a href="contact.html">here</a> if you would like to reachout
      </p>
      <div className="footer-icons-container">
        <a href="http://github.com/brandonbrown4792" target="_blank">
          <i className="fab fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a href="http://linkedin.com/in/brandonbrown4792" target="_blank">
          <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://dev.to/brandonbrown4792" target="_blank">
          <i className="fab fa-dev fa-2x"></i>
        </a>
      </div>
    </div>
  )
}