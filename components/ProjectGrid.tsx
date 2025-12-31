
import React from 'react';
import { motion } from 'framer-motion';
import { Project, Translation } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  t: Translation;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, t }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="relative w-full max-w-7xl mx-auto pt-32 pb-20 px-6 md:px-12 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 w-full">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-primary"></div>
            <span className="text-primary text-[11px] font-black uppercase tracking-[0.3em]">{t.portfolio.badge}</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">
            {t.portfolio.title}
          </h2>
        </div>
        
        <a 
          href="https://github.com/tocanto" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-black text-white border-b-2 border-primary/40 pb-1 hover:text-primary hover:border-primary transition-all group tracking-widest uppercase"
        >
          {t.portfolio.viewGithub} 
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            arrow_outward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} t={t} />
        ))}
      </div>

      {/* Sequential Scroll Indicator */}
      <motion.button 
        onClick={scrollToContact}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold group-hover:text-primary transition-colors">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-primary transition-colors">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.button>
    </section>
  );
};

export default ProjectGrid;
