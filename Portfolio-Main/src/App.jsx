import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './App.css';
// import ContactList from '/src/components/ContactList';
// import ProjectList from '/src/components/work';


function App() {
  return (
    <>
    <div className="App">
      <header>
        <h1>Yuxiang (Sean) Ye</h1>
        <nav>
          <h2><a href="#About_Me">About Me</a></h2>
          <h2><a onClick={() => window.location.href = '/src/assets/WordDoc/YuxiangYe-Resume.docx'}> Projects </a></h2>
          <h2><a onClick={() => window.location.href = '/src/assets/WordDoc/YuxiangYe-Resume.docx'}> Contact Me</a></h2>
          <h3>
            <button onClick={() => window.location.href = '/src/assets/WordDoc/YuxiangYe-Resume.docx'}>
              Download Resume File
            </button>
          </h3>
        </nav>
      </header>
      <main>
        <aside id="About_Me">About Me</aside>
        <section id="About_Me_Section">
          <img src="./assets/Images/Sean_Ye.JPG" alt="A picture of Sean Ye is displayed on the About Me section" />
          <p>
            My name is Sean Ye. I have five years of experience as an Electrical/Control Project Engineer, specializing in process improvement and automation projects in an industrial manufacturing environment. Seeking a challenging position with a company to utilize my experience and knowledge, with opportunities for career growth and advancement. Strengths include Project Management, Electrical Power Systems design, Control Systems design and analysis, and various programming skills. Currently working on my PMP Certification. Bilingual in Chinese and English.
          </p>
        </section>
        {/* <div>
         <ProjectList />
        </div>
        <div>
         <ContactList />
        </div> */}
      </main>
      <footer>
        <p>👉 Thank you for visiting my resume web page! Please feel free to reach out to me! 👈</p>
      </footer>
    </div>
    </>
    )
  }; 

export default App
