import React from 'react';
import Navbar from '../Navbar';

export default function About() {
  return (
    <>
      <Navbar includeProjectsLink={false} />
      <div class="introduction">
        <img id="main-image-atlanta" src="../Atlanta.png" alt="main" />
        <div class="about-box container">
          <div class="row">
            <div class="four columns">
              <img class="profile-picture" src="../ProfilePicture.png" />
            </div>
            <div class="eight columns">
              <div class="about-content">
                <p> Hello, my name is Brandon Brown.</p><br />

                <p>I am an electrical engineer turned full stack software developer with strengths in Ruby on Rails,
                  JavaScript, React, GraphQL, Redux, Git, SQL, HTML, CSS, C#, and .NET. I have a passion for learning new
                  technologies, solving complex problems, and collaborating with others.</p><br />

                <p>In December of 2014, I graduated from the Georgia Institute of Technology with a bachelor of science
                  degree in Electrical Engineering. After graduation, I found myself working in as an industrial
                  automation engineering consultant providing engineering and controls solutions to specialty chemical
                  plants, distribution facilities, and paper mills.</p><br />

                <p>In my early professional years, I developed a passion for learning, writing, and debugging code. I
                  spent
                  many hours on YouTube watching tutorials (mostly C# at the time) and some more writing my own small
                  applications. Thus, after 5 years working in the industrial automation industry, I decided to change my
                  career focus to a software development role by enrolling in Flatiron School's Software Development
                  Immersive.</p><br />

                <p>After graduating from Flatiron, I found a job working as a Software Engineer for a local restaurant SAAS 
                  startup called Popmenu. At Popmenu, I learned GraphQL and was able to strengthen my full stack web development 
                  skills. While there, I was able to create features including an infinitely nesting data structure for restaurants 
                  to control their menus, a tier-based delivery system based on delivery distance, and an online ordering delay 
                  system to help restaurants mitigate large influxes of online orders.</p><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
