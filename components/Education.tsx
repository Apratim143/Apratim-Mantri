import React from 'react';
import { EDUCATION } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
           <h2 className="text-3xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Education</h2>
           <div className="h-1.5 w-16 bg-brand-accent dark:bg-nyc-purple shadow-[0_0_10px_rgba(188,19,254,0.5)]"></div>
        </div>
        
        <div className="md:w-2/3 grid gap-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="group flex gap-6 p-6 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-gray-100 dark:hover:border-white/10 dark:hover:shadow-[0_0_20px_rgba(188,19,254,0.1)]">
              <div className="mt-1 text-gray-400 dark:text-white group-hover:text-brand-accent dark:group-hover:text-blue-400 text-3xl transition-colors duration-300">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                <p className="text-lg text-brand-accent dark:text-nyc-cyan font-medium mb-1">{edu.degree}</p>
                <p className="text-sm text-gray-400 mb-4 font-mono">{edu.period}</p>
                {edu.details && (
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {edu.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};