
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 py-8 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-300 text-sm font-body">
          © {new Date().getFullYear()} Timmy A. Ocanto Jordan. System Online.
        </p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono text-primary">v2.1.0 [STABLE]</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
