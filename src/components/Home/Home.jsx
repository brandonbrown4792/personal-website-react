import React, { useRef } from 'react';
import Navbar from '../Navbar';
import Introduction from '../Introduction';
import SkillsetContainer from '../SkillsetContainer';
import Projects from '../Projects'
import Footer from '../Footer';

export default function Home() {
  const projectsRef = useRef(null);
  const skillsetRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar projectsRef={projectsRef} scrollToSection={scrollToSection} />
      <Introduction scrollToSection={scrollToSection} skillsetRef={skillsetRef} />
      <SkillsetContainer skillsetRef={skillsetRef} />
      <hr />
      <Projects projectsRef={projectsRef} />
      <Footer />
    </>
  )
}
