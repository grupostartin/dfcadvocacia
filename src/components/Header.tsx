import React, { useState, useEffect } from 'react';
import { OFFICE_DATA, NAV_LINKS } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { getLayoutTop } from './SectionTransition3D';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const offsetPosition = getLayoutTop(target as HTMLElement) - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Wordmark & Location */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors group"
          >
            <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
            <span className="font-display text-xs lg:text-sm font-semibold tracking-wider uppercase text-neutral-300 group-hover:text-white whitespace-nowrap">
              DFC ADVOCACIA <span className="text-neutral-500 font-normal hidden sm:inline">— BELO HORIZONTE / MG</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-medium tracking-wider uppercase text-neutral-400">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-4">
            <a
              href={OFFICE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0A0A0A] hover:bg-neutral-200 text-xs font-semibold whitespace-nowrap tracking-tight transition-all duration-200 hover:shadow-lg"
              title="Iniciar conversa no WhatsApp comercial"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] text-white flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
              NAVEGAÇÃO INSTITUCIONAL
            </p>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl font-display font-medium tracking-tight text-neutral-200 hover:text-white hover:translate-x-2 transition-all flex items-center justify-between border-b border-neutral-900 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-neutral-900">
            <p className="text-xs text-neutral-400">
              {OFFICE_DATA.address.street} • {OFFICE_DATA.address.neighborhood}
              <br />
              {OFFICE_DATA.cityState}
            </p>
            <a
              href={OFFICE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-neutral-200 transition-colors"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
