import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { CyberBackground } from './components/CyberBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { ExternalLinkHandler } from './components/ExternalLinkHandler';
import { SmoothScrollHandler } from './components/SmoothScrollHandler';
import './styles/globals.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <CyberBackground />
      <ScrollProgress progress={scaleX} />
      <ExternalLinkHandler />
      <SmoothScrollHandler />
      <Header activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Floating navigation dots */}
      <motion.div 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        {['home', 'about', 'projects', 'skills', 'education', 'contact'].map((section) => (
          <motion.button
            key={section}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section
                ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_20px_#22d3ee]'
                : 'border-gray-500 hover:border-cyan-400'
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
}