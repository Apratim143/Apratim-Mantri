import React from 'react';
import { SKILLS } from '../constants';
import { SkillCard } from './SkillCard';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/5 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-gray-900 dark:text-white">
            Strategic Capabilities
          </h2>
          <div className="h-1.5 w-24 bg-brand-accent dark:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(59,130,246,0.6)] rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A comprehensive toolkit designed to cover every aspect of your digital presence, from acquisition to retention.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((cat, idx) => (
            <SkillCard key={idx} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};