import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="App">
      <header>
        <h1>Yuxiang (Sean) Ye</h1>
        <nav>
          <h2><a href="#About_Me">About Me</a></h2>
          <h2><a href="#Work">Work</a></h2>
          <h2><a href="#Contact_Me">Contact Me</a></h2>
          <h3>
            <button onClick={() => window.location.href = './assets/WordDoc/YuxiangYe-Resume.docx'}>
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
        <aside id="Work">Work</aside>
        <section id="Work_Section">
          <article className="Work_Images">
            <a href="https://github.com/Seanye333/Challenge1-HoriseonWeb.git" target="_blank">
              <h1 className="images_title">Horiseon Services</h1>
              <img className="large" src="./assets/Images/HoriseonWeb_Screenshot.png" alt="an overview of horiseon Services website layout is displayed" />
              <h2 className="code_types">CSS/HTML</h2>
            </a>
          </article>
          {/* ... (similar structure for other work items) ... */}
        </section>
        <aside id="Contact_Me">Contact</aside>
        <section id="Contact_Me_Section">
          <a href="tel:+1-347-993-7692">☎️ Phone</a>
          <a href="mailto:seanye86@gmail.com">📧 E-mail</a>
          <a href="https://github.com/Seanye333">📀 GitHub</a>
          <a href="https://www.linkedin.com/in/yuxiang-ye/">📋 Linkedin</a>
          <a href="https://www.instagram.com/arrrsean/?igshid=MmIzYWVlNDQ5Yg%3D%3D">📷 Instagram</a>
        </section>
      </main>
      <footer>
        <p>👉 Thank you for visiting my resume web page! Please feel free to reach out to me! 👈</p>
      </footer>
    </div>
    </>
  )
}

export default App
