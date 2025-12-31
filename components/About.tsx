
import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';

interface AboutProps {
  t: Translation;
}

const About: React.FC<AboutProps> = ({ t }) => {
  // Ordered technologies as requested: JavaScript (ES6+), TypeScript, React, WordPress, PHP, Tailwind CSS, Technical SEO, Web3
  const techItems = [
    { name: 'JavaScript (ES6+)', icon: 'js', symbol: 'code' },
    { name: 'TypeScript', symbol: 'code' },
    { name: 'React', symbol: 'code_blocks' },
    { name: 'WordPress', symbol: 'terminal' },
    { name: 'PHP', symbol: 'settings_input_component' },
    { name: 'Tailwind CSS', symbol: 'palette' },
    { name: t.nav.home === 'Inicio' ? 'SEO Técnico' : 'Technical SEO', symbol: 'search_insights' },
    { name: 'Web3', symbol: 'token' },
  ];

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('services');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto pt-32 pb-20 px-6 md:px-12 flex flex-col items-center">
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 w-full">
        {/* Left Column: Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group hidden lg:block"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] bg-background-surface shadow-2xl">
            <img 
              src="https://tocanto.dev/images/tocanto-profile-picture.webp" 
              alt="Timmy Portrait"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">{t.about.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter text-white">
              {t.about.title1} <br/>
              <span className="text-gray-600/60">{t.about.title2}</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Bio Box with Left Primary Border Only */}
            <div className="rounded-3xl border-l-[6px] border-l-primary border-t border-r border-b border-white/5 bg-[#0a0c0b]/80 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <p className="text-base md:text-lg text-gray-200 leading-relaxed font-body tracking-tight relative z-10">
                {t.about.bio}
              </p>
            </div>
          </motion.div>

          {/* Technologies Section - Redesigned as Pills */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-black uppercase text-gray-400 tracking-[0.2em]">{t.about.tech}</h3>
            <div className="flex flex-wrap gap-3">
              {techItems.map((item) => (
                <div 
                  key={item.name}
                  className="flex items-center gap-3 py-2.5 px-6 rounded-full bg-white/[0.03] border border-white/10 transition-all duration-300 group hover:bg-white/5 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(70,236,19,0.1)] cursor-default"
                >
                  <div className="flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                     {item.icon === 'js' ? (
                       <span className="font-black text-[10px] leading-none border border-current rounded-sm px-0.5">JS</span>
                     ) : (
                       <span className="material-symbols-outlined text-[18px]">{item.symbol}</span>
                     )}
                  </div>
                  <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sequential Scroll Indicator */}
      <motion.button 
        onClick={scrollToServices}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group z-20 mt-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-bold group-hover:text-primary transition-colors">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-primary transition-colors">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.button>
    </section>
  );
};

export default About;
