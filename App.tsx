import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { AIChat } from './components/AIChat';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
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
      // Header height is h-20 (5rem/80px). We add 20px extra padding for breathing room.
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
    { name: 'Technical Expertise', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Pro Bono Work', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="min-h-screen bg-transparent text-brand-black dark:text-white selection:bg-nyc-cyan selection:text-black transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/60 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 transition-all duration-300">
        <div className="px-6 md:px-12 h-20 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl md:text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white hover:text-brand-accent dark:hover:text-nyc-cyan transition-colors"
          >
            Apratim Mantri
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-accent dark:hover:text-nyc-cyan transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-nyc-cyan hover:text-brand-accent hover:bg-blue-50 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <i className="fa-solid fa-sun text-lg"></i> : <i className="fa-solid fa-moon text-lg"></i>}
            </button>
          </div>

          {/* Mobile Header Controls (Theme Toggle Only - No Nav) */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-nyc-cyan"
            >
              {darkMode ? <i className="fa-solid fa-sun text-lg"></i> : <i className="fa-solid fa-moon text-lg"></i>}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <footer className="bg-white dark:bg-transparent text-gray-900 dark:text-white py-20 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300 backdrop-blur-sm">
        {/* Decorative background element for footer */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 dark:bg-nyc-purple/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 dark:bg-nyc-cyan/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 md:mb-0">
              Let's build something<br/>
              <span className="text-brand-accent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-nyc-cyan dark:to-nyc-purple">great together.</span>
            </h2>
            <div className="flex flex-col gap-4">
               <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-xl md:text-2xl hover:text-brand-accent dark:hover:text-nyc-cyan transition-colors flex items-center gap-3 group">
                {PERSONAL_INFO.contact.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="text-lg md:text-xl text-gray-500 dark:text-gray-400 hover:text-brand-accent dark:hover:text-nyc-cyan transition-colors">
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
                 className="flex items-center gap-2 hover:text-brand-accent dark:hover:text-nyc-cyan cursor-pointer transition-colors"
               >
                 <i className="fa-brands fa-linkedin text-lg"></i> LinkedIn
               </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gemini Powered Chat */}
      <AIChat />
    </div>
  );
};

export default App;