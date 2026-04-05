import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Store',
      description: 'A fully functional e-commerce platform with product listings, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'Project 1',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
      image: 'Project 2',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with interactive charts and reports.',
      technologies: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      image: 'Project 3',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
      image: 'Project 4',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with user authentication and content management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'Project 5',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript'],
      image: 'Project 6',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder-project">{project.image}</div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link" title="View on GitHub">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live} className="project-link" title="View Live">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
