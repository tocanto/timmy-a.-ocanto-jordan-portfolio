
import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';
import Starfield from './Starfield';

interface HeroProps {
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 overflow-hidden">
      <Starfield />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-medium tracking-wide text-accent-blue mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          {t.hero.status}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
          Timmy A. <br/>
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Ocanto Jordan</span><span className="text-primary">.</span>
        </h1>

        <p className="text-base md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed font-body">
          {t.hero.tagline.split('immersive digital experiences').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i !== arr.length - 1 && <span className="text-accent-blue font-medium">immersive digital experiences</span>}
            </React.Fragment>
          ))}
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <a 
            href="#portfolio"
            onClick={(e) => handleScrollTo(e, 'portfolio')}
            className="flex items-center justify-center h-12 px-8 rounded-full bg-primary text-background-dark font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(70,236,19,0.4)] transition-all transform hover:scale-105 active:scale-95"
          >
            {t.hero.viewProjects}
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="flex items-center justify-center h-12 px-8 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/5 hover:border-white/40 transition-all active:scale-95"
          >
            {t.hero.contactMe}
          </a>
        </div>
      </motion.div>

      <motion.a 
        href="#about"
        onClick={(e) => handleScrollTo(e, 'about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-primary transition-colors">Scroll</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white group-hover:text-primary transition-colors"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;
