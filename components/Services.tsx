import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Translation } from '../types';
import { Terminal, Code2, Zap } from 'lucide-react';

interface ServicesProps {
  t: Translation;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('portfolio');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  // Función para asignar iconos modernos
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Terminal className="text-4xl" />;
      case 1: return <Code2 className="text-4xl" />;
      case 2: return <Zap className="text-4xl" />; // Zap es el rayo para "Speed"
      default: return <Code2 className="text-4xl" />;
    }
  };

  return (
    <section id="services" className="relative w-full max-w-6xl mx-auto pt-32 pb-20 px-6 flex flex-col items-center">
      <div className="flex flex-col items-center text-center mb-16 w-full">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[2px] w-12 bg-primary" />
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">{t.services.badge}</span>
          <span className="h-[2px] w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">{t.services.title}<span className="text-gray-600">.</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24 w-full">
        {SERVICES.map((service, index) => {
          const itemContent = t.services.items[service.id as keyof typeof t.services.items];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 transition-all ${service.accent}`}>
                {/* Icono reemplazado aquí */}
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{itemContent.title}</h3>
              <p className="text-gray-400 font-body leading-relaxed text-sm">
                {itemContent.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Sequential Scroll Indicator */}
      <motion.button 
        onClick={scrollToPortfolio}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-2 cursor-pointer group z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-bold group-hover:text-primary transition-colors">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-primary transition-colors">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.button>
    </section>
  );
};

export default Services;