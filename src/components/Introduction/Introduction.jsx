import React from 'react';
import IntroIcon from '../IntroIcon';
import styles from './Introduction.module.css';

export default function Introduction({ scrollToSection, skillsetRef }) {
  return (
    <div className={styles.introduction}>
      <img id="main-image-atlanta" src="Atlanta.png" alt="main" />
      <img id="main-image-mobile" src="MobileBackground.png" alt="main" />
      <div className={styles.introductionTitle}>
        <h1>Brandon Brown</h1>
        <h2>Full Stack Web Developer</h2>
        <h4 id="location"><i className="fas fa-map-marker-alt"></i> Atlanta Area</h4>
        <div className={`${styles.introIconsContainer} container`}>
          <div className="row">
            <IntroIcon href="http://github.com/brandonbrown4792" iconClass="fa-github" name="Github" />
            <IntroIcon href="http://linkedin.com/in/brandonbrown4792" iconClass="fa-linkedin" name="LinkedIn" />
            <IntroIcon href="https://dev.to/brandonbrown4792" iconClass="fa-dev" name="Dev.to" />
            <IntroIcon href="/resume" iconClass="fas fa-book" name="Resume" />
          </div>
        </div>
        <a id="scroll-down" onClick={() => scrollToSection(skillsetRef)}>
          <i className="fas fa-angle-double-down fa-3x"></i>
        </a>
      </div>
    </div>
  )
};
