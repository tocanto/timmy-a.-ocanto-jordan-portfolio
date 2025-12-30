import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Link as LinkIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import { Translation } from '../types';

interface ContactProps {
  t: Translation;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC<ContactProps> = ({ t }) => {
  // Estado inicial con el campo trampa 'mobile'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobile: '' // <--- Campo Honeypot (invisible para humanos)
  });
  
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Petición al script PHP (que ahora verificará si 'mobile' tiene datos)
      const response = await fetch('./contact.php', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        // Limpiamos el formulario (incluyendo el honeypot por si acaso)
        setFormData({ name: '', email: '', message: '', mobile: '' });
        
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Uplink failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-4xl mx-auto pt-32 pb-24 px-4 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8 md:p-12 rounded-3xl border-t border-primary/20 relative overflow-hidden w-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.contact.title}</h2>
              <p className="text-gray-400 font-body">{t.contact.subtitle}</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:&#104;&#111;&#108;&#97;&#64;&#116;&#111;&#99;&#97;&#110;&#116;&#111;&#46;&#100;&#101;&#118;" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold">{t.contact.email}</div>
                  {/* Ofuscación visual: Rompemos el string para confundir a los scrapers simples */}
                  <div className="text-sm font-medium flex gap-0.5">
                    <span>hola</span>
                    <span>@</span>
                    <span>tocanto</span>
                    <span>.dev</span>
                  </div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 uppercase font-bold">{t.contact.socials}</div>
                  <div className="flex gap-4 mt-1">
                    <a href="https://github.com/tocanto" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/tocanto" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/tocantodev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* --- HONEYPOT START (Trampa para bots) --- */}
            <div className="hidden">
              <input 
                type="text" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                tabIndex={-1} 
                autoComplete="off"
              />
            </div>
            {/* --- HONEYPOT END --- */}

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-primary ml-2">{t.contact.ident}</label>
              <input 
                type="text" 
                name="name"
                required
                disabled={status === 'loading' || status === 'success'}
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.ident}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body disabled:opacity-50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-primary ml-2">{t.contact.comms}</label>
              <input 
                type="email" 
                name="email"
                required
                disabled={status === 'loading' || status === 'success'}
                value={formData.email}
                onChange={handleChange}
                placeholder="email@address.com"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body disabled:opacity-50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-primary ml-2">{t.contact.transmission}</label>
              <textarea 
                rows={4}
                name="message"
                required
                disabled={status === 'loading' || status === 'success'}
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.transmissionPlaceholder}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body resize-none disabled:opacity-50"
              ></textarea>
            </div>
            
            <motion.button 
              type="submit"
              disabled={status !== 'idle'}
              whileHover={status === 'idle' ? { scale: 1.02 } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              className={`w-full h-12 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2
                ${status === 'idle' ? 'bg-primary text-black hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''}
                ${status === 'loading' ? 'bg-primary/50 text-black/50 cursor-wait' : ''}
                ${status === 'success' ? 'bg-green-500 text-white' : ''}
                ${status === 'error' ? 'bg-red-500 text-white' : ''}
              `}
            >
              {status === 'idle' && t.contact.btn}
              {status === 'loading' && (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  ESTABLISHING UPLINK...
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  TRANSMISSION COMPLETE
                </>
              )}
              {status === 'error' && (
                <>
                  <AlertCircle className="w-5 h-5" />
                  UPLINK FAILED
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-[10px] text-primary font-bold uppercase tracking-widest mt-2"
                >
                  System: Message received and decrypted.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-[10px] text-red-400 font-bold uppercase tracking-widest mt-2"
                >
                  Terminal: Communication breakdown. Try again.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </motion.div>

      <motion.button 
        onClick={scrollToTop}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group z-20 mt-20"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-primary transition-colors rotate-180">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold group-hover:text-primary transition-colors">Top</span>
      </motion.button>
    </section>
  );
};

export default Contact;