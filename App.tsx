import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { AIChat } from './components/AIChat';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: `mailto:${PERSONAL_INFO.contact.email}` },
  ];

  return (
    <div className="min-h-screen bg-transparent text-brand-black dark:text-white selection:bg-brand-accent/30 selection:text-brand-accent transition-colors duration-300">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#050510]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Apratim Mantri
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={link.href.startsWith('#') ? (e) => handleNavClick(e, link.href) : undefined}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-accent dark:hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white hover:bg-brand-accent hover:text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white"
            >
              {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 dark:text-white text-2xl focus:outline-none"
            >
              {mobileMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1a1a2e] border-b border-gray-100 dark:border-white/10 shadow-xl py-4 px-6 flex flex-col gap-4 animate-slide-up-fade">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.href.startsWith('#')) handleNavClick(e, link.href);
                }} 
                className="text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-100 dark:border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
      </main>

      <footer className="bg-white dark:bg-transparent text-gray-900 dark:text-white py-20 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 dark:bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 dark:bg-purple-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 md:mb-0">
              Let's build something<br/>
              <span className="text-brand-accent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600">great together.</span>
            </h2>
            <div className="flex flex-col gap-4">
               <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-xl md:text-2xl hover:text-brand-accent dark:hover:text-blue-400 transition-colors flex items-center gap-3 group">
                {PERSONAL_INFO.contact.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="text-lg md:text-xl text-gray-500 dark:text-gray-400 hover:text-brand-accent dark:hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.contact.phone}
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-white/10 pt-8 text-gray-500 dark:text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Apratim Mantri.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a 
                 href={`https://linkedin.com/in/${PERSONAL_INFO.contact.linkedin}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:text-brand-accent dark:hover:text-blue-400 cursor-pointer transition-colors"
               >
                 <i className="fa-brands fa-linkedin text-lg"></i> LinkedIn
               </a>
            </div>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;