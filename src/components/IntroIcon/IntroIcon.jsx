import React from 'react';

export default function IntroIcon({ href, iconClass, name }) {
  return (
    <div className="three columns">
      <a href={href} target="_blank">
        <i className={`fab ${iconClass} fa-2x`} aria-hidden="true"></i>
        <p>{name}</p>
      </a>
    </div>
  )
}