import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, Translation } from '../types';
import { X, Eye, Code } from 'lucide-react'; // Importamos los iconos necesarios

interface ProjectCardProps {
  project: Project;
  t: Translation;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, t }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Obtener la traducción específica del proyecto si existe, de lo contrario usar fallback
  const projectT = t.portfolio.projects[project.id] || { title: project.title, description: project.description };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col h-full hover:border-primary/30 hover:shadow-[0_0_30px_rgba(70,236,19,0.15)] transition-all duration-300"
      >
        <div className="h-60 bg-gray-900 relative overflow-hidden">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
            alt={projectT.title}
            src={project.image}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-[4px]">
            <motion.button 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleZoom}
              className="w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(70,236,19,0.5)] transition-transform"
              aria-label="Zoom Image"
            >
              {/* Reemplazado Material Symbol por Lucide Eye */}
              <Eye className="w-7 h-7" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLinkClick}
              className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform"
              aria-label="View Code/Demo"
            >
              {/* Reemplazado Material Symbol por Lucide Code */}
              <Code className="w-7 h-7" />
            </motion.button>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className={`text-[9px] font-black uppercase tracking-[0.1em] px-2.5 py-1.5 rounded-md ${
                  idx % 2 === 0 
                    ? 'text-accent-blue bg-accent-blue/10 border border-accent-blue/20' 
                    : 'text-accent-violet bg-accent-violet/10 border border-accent-violet/20'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-black mb-3 text-primary tracking-tight group-hover:drop-shadow-[0_0_10px_rgba(70,236,19,0.4)] transition-all">
            {projectT.title}
          </h3>
          
          <p className="text-sm text-gray-400 font-body leading-relaxed mb-4 flex-1 line-clamp-3">
            {projectT.description}
          </p>
        </div>
      </motion.article>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleZoom}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[210]"
              onClick={toggleZoom}
              aria-label="Close Zoom"
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={project.image} 
                alt={projectT.title} 
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(70,236,19,0.2)] border border-white/10"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center px-4">
                <h3 className="text-2xl font-black text-white tracking-tighter mb-2">{projectT.title}</h3>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">{projectT.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;