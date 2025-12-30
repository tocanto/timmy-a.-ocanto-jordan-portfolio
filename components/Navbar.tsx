
import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Translation } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.nav.home, id: 'root' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.work, id: 'portfolio' },
    { name: t.nav.contact, id: 'contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-6 px-4 pointer-events-none">
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-[850px] w-full shadow-2xl shadow-black/50 pointer-events-auto relative">
        <div 
          className="flex items-center gap-2 text-white cursor-pointer"
          onClick={(e) => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          <Terminal className="w-5 h-5 text-primary" />
          <h2 className="text-white text-lg font-bold tracking-tight">TOJ<span className="text-primary">.</span></h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
            className="hidden md:flex items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
          >
            <span className="text-[10px] font-black tracking-widest text-primary">{lang === 'EN' ? 'EN / ES' : 'ES / EN'}</span>
          </button>
          
          <button 
            className="md:hidden text-white flex items-center justify-center w-8 h-8 rounded-full bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-20 left-0 right-0 glass-panel rounded-3xl p-8 flex flex-col gap-6 items-center shadow-2xl border border-white/10 md:hidden overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 hover:text-primary transition-colors py-2"
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                >
                  {link.name}
                </a>
              ))}

              <div className="h-px w-full bg-white/5 my-2"></div>

              <button 
                onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
                className="flex items-center justify-center rounded-full h-10 px-8 bg-primary text-black font-black text-[10px] tracking-[0.3em] uppercase w-full"
              >
                {lang === 'EN' ? 'SPANISH' : 'ENGLISH'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
