import React, { useRef, useState, useEffect, useCallback } from 'react';
import { CERTIFICATIONS } from '../constants';
import { CertificationCard } from './CertificationCard';

export const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const { scrollLeft, scrollWidth, clientWidth } = current;
      const scrollAmount = 384; 
      
      if (direction === 'left') {
        if (scrollLeft <= 10) {
          current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (!isPaused) {
      interval = setInterval(() => {
        scroll('right');
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, scroll]);

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/5 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
             <h2 className="text-4xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Certifications & Achievements</h2>
             <div className="h-1.5 w-24 bg-brand-accent dark:bg-nyc-cyan shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(0,243,255,0.6)]"></div>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all border-gray-300 dark:border-white/20 hover:bg-brand-accent hover:text-white dark:hover:bg-nyc-cyan dark:hover:text-black hover:border-transparent cursor-pointer text-gray-600 dark:text-white"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all border-gray-300 dark:border-white/20 hover:bg-brand-accent hover:text-white dark:hover:bg-nyc-cyan dark:hover:text-black hover:border-transparent cursor-pointer text-gray-600 dark:text-white"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
        >
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};