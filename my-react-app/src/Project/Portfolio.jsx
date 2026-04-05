import { useState } from 'react';
import './Portfolio.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-container">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
}
