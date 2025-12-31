import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Starfield from './components/Starfield'; 
import { Language } from './types';
import { PROJECTS, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-background-dark text-white font-display selection:bg-primary selection:text-background-dark min-h-screen relative">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] left-[50%] translate-x-[-50%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>
      
      <Starfield />

      <div className="relative z-10">
        <Navbar lang={lang} setLang={setLang} t={t} />
        
        <main>
          <Hero t={t} />
          <About t={t} />
          <Services t={t} />
          <ProjectGrid projects={PROJECTS} t={t} />
          <Contact t={t} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;