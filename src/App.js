import dash1 from "./assets/Dashboard1.png";
import dash2 from "./assets/Dashboard2.png";
import dash3 from "./assets/Dashboard3.png";

import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Hi, I'm Latheef 👋</h1>
        <h2>I build modern websites and web applications</h2>
        <p>Focused on creating clean, responsive and user-friendly designs.</p>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills ⚡</h2>
        <div className="skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>Power BI</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Projects 🚀</h2>

        {/* Featured */}
        <div className="project-card">
          <h3>Creativa</h3>
          <p>Creative talent discovery platform built with React.</p>
          <a href="https://artistverse-creativa.vercel.app" target="_blank">
            Live Demo
          </a>
        </div>

        {/* Other Projects */}
        <div className="project-card">
          <h3>YouTube Clone</h3>
          <p>Built using HTML, CSS and JavaScript.</p>
           <a href="https://youtube-clone-alpha-one-65.vercel.app" target="_blank">
            Live Demo
          </a>
        </div>

        <div className="project-card">
          <h3>Artistverse (HTML Version)</h3>
          <p>Static version built using HTML, CSS and JavaScript.</p>
           <a href="https://artistverse-ten.vercel.app" target="_blank">
            Live Demo
          </a>
        </div>
      </section>

      {/* DATA PROJECTS */}
      <section className="projects">
        <h2>Data Projects 📊</h2>
        <p>Interactive dashboards built using Power BI</p>
        <p>Foucsed on data visualization and insights using Power BI.</p>

        <div className="Dashboard-container">
          <img src={dash1} alt="dashboard" />
           <img src={dash2} alt="dashboard" />
            <img src={dash3} alt="dashboard" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Me 📩</h2>
        <p>Email: latheefee2004@gmail.com</p>
      </section>

    </div>
  );
}

export default App;