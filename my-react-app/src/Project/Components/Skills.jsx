import { FaStar } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      description: 'Building interactive user interfaces with modern frameworks and responsive design principles.',
      skills: [
        'React',
        'JavaScript',
        'HTML/CSS',
        'Responsive Design',
      ]
    },
    {
      category: 'Backend Development',
      description: 'Creating robust server-side applications and managing databases for scalable solutions.',
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'MYSQL',
      ]
    },
    {
      category: 'Tools & Platforms',
      description: 'Utilizing essential development tools and version control systems for efficient workflow.',
      skills: [
        'Git/GitHub',
        'VS Code',
      ]
    },
    {
      category: 'Soft Skills',
      description: 'Essential interpersonal and problem-solving abilities for successful project delivery.',
      skills: [
        'Problem Solving',
        'Communication',
            'Teamwork',
        'Project Management',
      ]
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          I specialize in creating modern, responsive web applications using cutting-edge technologies.
          My expertise spans both frontend and backend development, ensuring seamless user experiences
          and robust functionality.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.category}</h3>
              <p className="skill-description">{category.description}</p>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlights">
          <h3>Why Choose Me?</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <FaStar className="highlight-icon" />
              <h4>Quality Code</h4>
              <p>Clean, maintainable, and efficient code</p>
            </div>
            <div className="highlight-card">
              <FaStar className="highlight-icon" />
              <h4>Fast Delivery</h4>
              <p>Projects completed on time</p>
            </div>
            <div className="highlight-card">
              <FaStar className="highlight-icon" />
              <h4>24/7 Support</h4>
              <p>Always available for your needs</p>
            </div>
            <div className="highlight-card">
              <FaStar className="highlight-icon" />
              <h4>Responsive Design</h4>
              <p>Works perfectly on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
