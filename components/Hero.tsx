import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const TYPING_STRINGS = [
  "Social Media Manager",
  "Ads Manager",
  "Web Developer",
  "Digital Marketer"
];

export const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  // Using stable LinkedIn URL
  const PROFILE_IMAGE_URL = "https://media.licdn.com/dms/image/v2/D4D03AQGGDBPIpziIDQ/profile-displayphoto-scale_400_400/B4DZpJbf1kJEAk-/0/1762168538161?e=1766016000&v=beta&t=o4hI97aDO5pKwp1O5r4ZUWIw2U_k9-vW80Vz3GK5bPU";
  
  useEffect(() => {
    const currentString = TYPING_STRINGS[textIndex];
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentString.length) {
      // Finished typing, pause before deleting
      typeSpeed = 2000;
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next string
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPING_STRINGS.length);
      typeSpeed = 500;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('skills');
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

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-28 pb-12 bg-gray-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300">
      
      {/* Background Patterns & Spotlights for Nightlife Vibe */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] dark:opacity-[0.2] pointer-events-none"></div>
      
      {/* Light Mode Spotlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none dark:hidden"></div>
      
      {/* Dark Mode Neon Spotlights */}
      <div className="hidden dark:block absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-nyc-cyan/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="hidden dark:block absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-nyc-purple/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl z-10 relative mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-blue-200 dark:border-nyc-cyan/30 bg-blue-50 dark:bg-nyc-cyan/10 rounded-full text-xs font-bold tracking-wider uppercase text-blue-700 dark:text-nyc-cyan backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-nyc-cyan animate-pulse"></span>
            Available for Work
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-gray-200 dark:to-gray-400">
            {PERSONAL_INFO.name}
          </h1>
          
          <p className="text-2xl md:text-4xl text-gray-500 dark:text-gray-400 font-light mb-8 h-12">
            I am a <span className="text-brand-accent dark:text-nyc-cyan font-medium drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">
              {TYPING_STRINGS[textIndex].substring(0, charIndex)}
            </span>
            <span className="animate-blink ml-1 text-brand-accent dark:text-nyc-purple">|</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-10 border-l-4 border-brand-accent dark:border-nyc-purple pl-6 mx-auto lg:mx-0 text-left">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="flex items-center gap-2 px-8 py-4 bg-brand-accent dark:bg-gradient-to-r dark:from-nyc-cyan dark:to-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:opacity-90 transition-all text-sm font-semibold shadow-lg shadow-blue-500/20 dark:shadow-nyc-cyan/30 hover:-translate-y-1">
              <i className="fa-solid fa-envelope text-lg"></i> Contact Me
            </a>
            <a 
              href={`https://linkedin.com/in/${PERSONAL_INFO.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg hover:border-brand-accent hover:text-brand-accent dark:hover:border-nyc-purple dark:hover:text-nyc-purple transition-all text-sm font-semibold bg-white/50 dark:bg-white/5 backdrop-blur-sm"
            >
              <i className="fa-brands fa-linkedin text-lg"></i> LinkedIn
            </a>
            <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg hover:border-brand-accent hover:text-brand-accent dark:hover:border-nyc-cyan dark:hover:text-nyc-cyan transition-all text-sm font-semibold bg-white/50 dark:bg-white/5 backdrop-blur-sm">
              <i className="fa-solid fa-phone text-lg"></i> Call
            </a>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="relative flex flex-col items-center gap-8 group">
             {/* Neon Glow behind image in dark mode */}
             <div className="absolute inset-0 bg-gradient-to-tr from-nyc-cyan to-nyc-purple rounded-full blur-xl opacity-0 dark:opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10 h-[80%]"></div>

             {/* Image Container - Removed shadow in light mode for cleaner look */}
             <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
               {!imgError ? (
                  <img 
                    src={PROFILE_IMAGE_URL}
                    alt="Apratim Mantri"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal"
                    onError={() => setImgError(true)}
                  />
               ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-4xl text-gray-400">
                    AM
                  </div>
               )}
             </div>

              <a 
                href="https://drive.google.com/file/d/1f88LRGckUpOvidYXEVdXuCruzWvcTiHa/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 px-8 py-3.5 rounded-xl font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto justify-center
                  bg-brand-black text-white hover:bg-brand-accent 
                  dark:bg-transparent dark:text-nyc-cyan dark:border dark:border-nyc-cyan dark:hover:bg-nyc-cyan dark:hover:text-black dark:shadow-[0_0_20px_rgba(0,243,255,0.3)]
                "
              >
                <i className="fa-solid fa-download"></i>
                Download My Resume
              </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#skills" 
        onClick={handleScrollDown}
        className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 animate-bounce hover:text-brand-accent dark:hover:text-nyc-cyan transition-colors z-10 cursor-pointer"
      >
        <i className="fa-solid fa-arrow-down text-2xl"></i>
      </a>
    </section>
  );
};
