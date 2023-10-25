import React from "react";
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Yuxiang (Sean) Ye</h1>
        <nav>
          <h2><Link to="/">About Me</Link></h2>
          <h2><Link to="/project">Projects</Link></h2>
          <h2><Link to="/contact">Contact Me</Link></h2>
          <h3>
            <button onClick={() => window.location.href = '/src/assets/WordDoc/YuxiangYe-Resume.docx'}>
              Download Resume File
            </button>
          </h3>
        </nav>
      </header>
      <main>
      {/* <aside id="About_Me">About Me</aside>
        <section id="About_Me_Section"> */}
          {/* <img src="/src/assets/Images/Sean_Ye.JPG" alt="A picture of Sean Ye is displayed on the About Me section" /> */}
          {/* <p>
            My name is Sean Ye. I have five years of experience as an Electrical/Control Project Engineer, specializing in process improvement and automation projects in an industrial manufacturing environment. Seeking a challenging position with a company to utilize my experience and knowledge, with opportunities for career growth and advancement. Strengths include Project Management, Electrical Power Systems design, Control Systems design and analysis, and various programming skills. Currently working on my PMP Certification. Bilingual in Chinese and English.
          </p>
        </section> */}
        <Outlet />
      </main>
      <footer>
      <div>
      <aside id="Contact_Me">Contact</aside>
      <section id="Contact_Me_Section">
        <a href="tel:+1-347-993-7692">☎️ Phone</a>
        <a href="mailto:seanye86@gmail.com">📧 E-mail</a>
        <a href="https://github.com/Seanye333">📀 GitHub</a>
        <a href="https://www.linkedin.com/in/yuxiang-ye/">📋 Linkedin</a>
        <a href="https://www.instagram.com/arrrsean/?igshid=MmIzYWVlNDQ5Yg%3D%3D">📷 Instagram</a>
      </section>
      </div>
        <p>👉 Thank you for visiting my resume web page! Please feel free to reach out to me! 👈</p>
      </footer>
    </div>
  );
}

export default App;
