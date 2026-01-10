
import React from 'react';
import { Certification } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';

interface CertificationCardProps {
  cert: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  return (
    <SpotlightCard className="min-w-[300px] md:min-w-[360px] snap-center">
      <div className="flex flex-col bg-white dark:bg-[#151520] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-none transition-all duration-300 group h-full">
        <div className="h-52 w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800">
          {cert.image && (
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
          )}
          
          {cert.credentialLink && (
            <a 
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20"
            >
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-white font-medium border border-white/30 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 hover:border-white/50">
                <span>View Credential</span>
                <i className="fa-solid fa-external-link-alt text-sm"></i>
              </div>
            </a>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-10">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-8 line-clamp-2">
            {cert.title}
          </h3>
          
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 group-hover:text-brand-accent dark:group-hover:text-blue-400 transition-colors">
              <i className="fa-solid fa-building-columns"></i>
              <span className="font-medium truncate max-w-[140px]" title={cert.issuer}>{cert.issuer}</span>
            </div>
            
            <div className="px-2.5 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-mono text-gray-500 dark:text-gray-500 group-hover:border-brand-accent/50 dark:group-hover:border-blue-400/50 transition-colors">
              {cert.date}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
