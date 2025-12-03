import './App.css'

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1>Manny Ball</h1>
        <p className="subtitle">Frontend Developer in Training</p>
        <p className="tagline">Building modern web applications with React</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a Computer Systems Technology student with a passion for frontend development. 
          Currently working as an IT Specialist Intern while actively learning React and 
          modern web development practices. I'm focused on building practical, real-world 
          projects to showcase my growing skills.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-item">HTML5</div>
          <div className="skill-item">CSS3</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Git & GitHub</div>
          <div className="skill-item">Responsive Design</div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <p className="projects-placeholder">Projects coming soon as I build out my portfolio!</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new opportunities and collaborations.</p>
        <div className="contact-links">
          <a href="https://github.com/devops-mj" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="separator"> | </span>
          <a href="mailto:mjthechosen@gmail.com">Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Manny Ball | Frontend Developer in Training</p>
      </footer>
    </div>
  )
}

export default App