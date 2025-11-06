import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'tech-stack', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Sidebar activeSection={activeSection} />
      <main className="ml-0 lg:ml-64">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
