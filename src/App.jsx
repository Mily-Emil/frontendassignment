import './App.css'
import AssetGallery from './components/AssetGallery'

const projects = [
  {
    id: 1,
    category: 'UI / UX',
    title: 'Laundry App',
    description: 'A simple mobile experience for scheduling laundry pickups and tracking orders.',
    accent: 'coral',
  },
  {
    id: 2,
    category: '3D Design',
    title: 'Studio Objects',
    description: 'A collection of modeled objects exploring shape, light, and material in Blender.',
    accent: 'blue',
  },
  {
    id: 3,
    category: 'Game Project',
    title: 'Pixel Quest',
    description: 'An early game concept focused on exploration, playful interactions, and discovery.',
    accent: 'yellow',
  },
]

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-number">0{project.id}</div>
      <div className="project-art" aria-hidden="true">
        <span>{project.id === 1 ? '✦' : project.id === 2 ? '◒' : '◆'}</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button type="button">View project <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="page-shell">
      <nav className="navbar">
        <a className="brand" href="#top">EW<span>.</span></a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
        <a className="contact-link" href="mailto:emiliano@example.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-intro">
          <p className="eyebrow">Computer science student / designer</p>
          <h1>Ideas made <em>visible.</em></h1>
          <p className="hero-text">A selection of projects where design, technology, and curiosity meet.</p>
          <a className="scroll-link" href="#projects"><span>↓</span> Explore my work</a>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span>✳</span>
          <p>Selected<br />work<br />2026</p>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">01 / The collection</p>
          <h2>Selected projects</h2>
          <p className="section-note">{projects.length} projects / and counting</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow">02 / About</p>
        <div>
          <h2>Learning by making<br /><em>better things.</em></h2>
          <p>I am Emiliano, a computer science student from Indonesia exploring digital products, 3D design, and interactive experiences.</p>
        </div>
      </section>

      <AssetGallery />

      <footer>
        <span>Frontend assignment / React</span>
        <span>Made with curiosity © 2026</span>
      </footer>
    </main>
  )
}

export default App
