import profilePhoto from './ME.jpeg';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder-large">
              <img src={profilePhoto} alt="My Photo" className="profile-photo" />
            </div>
          </div>

          <div className="about-text">
            <h3>Who Am I?</h3>
            <p>
              I'm a passionate web developer with 2+ years of experience in creating dynamic, 
              user-friendly web applications. I have a strong Knowledge of JavaScript, React, Node.js,
               and various web technologies.
            </p>
            <h3 style={{ marginTop: '20px' }}>My Journey</h3>
            <p>
              Starting from a curiosity about how websites work, I've evolved into a full-stack 
              developer. I love solving complex problems and turning creative ideas into 
              functional applications that users love.
            </p>

            <h3 style={{ marginTop: '20px' }}>What I Do</h3>
            <ul className="about-list">
              <li>✓ Frontend Development (React, JavaScript)</li>
              <li>✓ Backend Development (Node.js, Express)</li>
              <li>✓ UI/UX Design</li>
              <li>✓ Database Design (MongoDB, MySQL)</li>
              <li>✓ Web Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
