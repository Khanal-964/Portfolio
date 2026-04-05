import { FaArrowRight } from 'react-icons/fa';
import profilePhoto from './ME.jpeg';

export default function Hero({ setActiveSection }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Bhawani Prasad Khanal, currently pursuing my B.Tech at Jain Deemed-to-be University.</h1>
        <p className="hero-subtitle">Full Stack Developer |   Web designer   |   Problem Solver   </p>
        <p className="hero-description">
          Crafting beautiful and functional websites that help businesses grow online.
          Let's transform the  ideas into reality.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => setActiveSection('projects')}
          >
            View My Work <FaArrowRight />
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setActiveSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
    </section>
  );
}
