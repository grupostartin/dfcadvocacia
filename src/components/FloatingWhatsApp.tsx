import React, { useState, useEffect } from 'react';
import { OFFICE_DATA } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past Hero (e.g. 500px)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
    {visible && (
    <motion.aside
      aria-label="Contato rápido"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="fixed bottom-6 right-6 z-40 pointer-events-auto"
    >
      <a
        href={OFFICE_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-white text-[#0A0A0A] shadow-2xl border border-neutral-200/80 hover:bg-neutral-100 transition-all duration-200 hover:scale-[1.03]"
        title="Falar no WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-[#0A0A0A] animate-pulse" />
        <span className="text-xs font-bold tracking-tight font-display uppercase">
          WhatsApp DFC
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.aside>
    )}
    </AnimatePresence>
  );
};
