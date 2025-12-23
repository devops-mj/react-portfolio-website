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
  <div className="projects-grid">
    
    {/* Weather App */}
    <div className="project-card">
      <h3>Weather Forecast App</h3>
      <p className="project-description">
        A weather application that displays current conditions and 5-day forecast for any city using the OpenWeatherMap API.
      </p>
      <div className="project-tech">
        <span className="tech-badge">React</span>
        <span className="tech-badge">API Integration</span>
        <span className="tech-badge">Async/Await</span>
      </div>
      <a 
        href="https://devops-mj.github.io/weather-app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
      >
        View Live Demo →
      </a>
    </div>

    {/* Todo App */}
    <div className="project-card">
      <h3>Todo List App</h3>
      <p className="project-description">
        A task management application featuring CRUD operations, filtering, and data persistence using localStorage.
      </p>
      <div className="project-tech">
        <span className="tech-badge">React</span>
        <span className="tech-badge">localStorage</span>
        <span className="tech-badge">useEffect</span>
      </div>
      <a 
        href="https://devops-mj.github.io/todo-app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
      >
        View Live Demo →
      </a>
    </div>

    {/* Military Supply Depot */}
    <div className="project-card">
      <h3>Military Supply Depot</h3>
      <p className="project-description">
        An e-commerce product filtering application with search, category filters, price ranges, and sorting functionality.
      </p>
      <div className="project-tech">
        <span className="tech-badge">React</span>
        <span className="tech-badge">Complex State</span>
        <span className="tech-badge">E-commerce</span>
      </div>
      <a 
        href="https://devops-mj.github.io/product-filter-military/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
      >
        View Live Demo →
      </a>
    </div>

    {/* Expense Tracker */}
    <div className="project-card">
      <h3>Freelancer Expense Tracker</h3>
      <p className="project-description">
        A financial tracking application for freelancers with income/expense management, categorization, and visual analytics using pie charts.
      </p>
      <div className="project-tech">
        <span className="tech-badge">React</span>
        <span className="tech-badge">Recharts</span>
        <span className="tech-badge">Data Visualization</span>
      </div>
      <a 
        href="https://devops-mj.github.io/expense-tracker/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
      >
        View Live Demo →
      </a>
     </div> 
  </div>
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