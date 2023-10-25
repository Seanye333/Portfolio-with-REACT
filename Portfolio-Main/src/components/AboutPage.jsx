import React from "react";
import '../components/About.css';

function AboutMe() {
return (
    <div>
        <aside id="About_Me">About Me</aside>
        <section id="About_Me_Section">
          <img src="/src/assets/Images/Sean_Ye.JPG" 
          alt="A picture of Sean Ye is displayed on the About Me section"
          className="about-image" 
          />
          <p>
            My name is Sean Ye. I have five years of experience as an Electrical/Control Project Engineer, specializing in process improvement and automation projects in an industrial manufacturing environment. Seeking a challenging position with a company to utilize my experience and knowledge, with opportunities for career growth and advancement. Strengths include Project Management, Electrical Power Systems design, Control Systems design and analysis, and various programming skills. Currently working on my PMP Certification. Bilingual in Chinese and English.
          </p>
        </section>
    </div>
);
}

export default AboutMe;
