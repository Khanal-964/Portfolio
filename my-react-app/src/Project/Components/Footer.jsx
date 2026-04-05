import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>Full-stack developer passionate about creating beautiful and functional web applications.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/bhuwan.khanal.65431" title="Facebook" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://x.com/khanalb964" title="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/bhawani-prasad-khanal-a23a02323" title="LinkedIn" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Khanal-964/Project" title="GitHub" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/bhuwan9189/" title="Instagram" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Bhawani Prasad Khanal. All rights reserved.</p>
          <p>Designed & Built with ❤️ by Bhawani Prasad Khanal</p>
        </div>
      </div>
    </footer>
  );
}
