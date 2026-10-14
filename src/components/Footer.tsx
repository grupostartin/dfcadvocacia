import React, { useState } from 'react';
import { OFFICE_DATA, NAV_LINKS } from '../data/content';
import { PrivacyModal } from './PrivacyModal';
import { ArrowUpRight } from 'lucide-react';
import { getLayoutTop } from './SectionTransition3D';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#0A0A0A] text-white pt-12 pb-16 border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-neutral-900">
          {/* Column 1: Escritório Central */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              ESCRITÓRIO CENTRAL
            </span>
            <p className="text-sm font-semibold text-white tracking-tight">
              {OFFICE_DATA.address.street}
            </p>
            <p className="text-xs text-neutral-400">
              {OFFICE_DATA.address.neighborhood} — {OFFICE_DATA.cityState}
            </p>
            <p className="text-xs text-neutral-500 font-mono">
              CEP {OFFICE_DATA.address.zipCode}
            </p>
          </div>

          {/* Column 2: Comunicação Direta */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              COMUNICAÇÃO DIRETA
            </span>
            <p className="text-xs text-neutral-300 font-mono">
              WhatsApp: {OFFICE_DATA.phoneFormatted}
            </p>
            <div>
              <a
                href={OFFICE_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <span>Instagram: {OFFICE_DATA.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div>
              <a
                href={OFFICE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <span>Atendimento WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Navegação Rápida */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              NAVEGAÇÃO RÁPIDA
            </span>
            <ul className="space-y-2 text-xs text-neutral-400">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Conformidade e Ética */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              CONFORMIDADE E ÉTICA
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Atuação em estrita conformidade com o Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e diretrizes da LGPD (Lei Geral de Proteção de Dados nº 13.709/2018).
            </p>
            <div>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-xs text-neutral-400 underline underline-offset-4 hover:text-white transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} DFC Advocacia. Todos os direitos reservados. Belo Horizonte — MG.</p>
          <p className="text-neutral-400">Excelência • Ética • Eficiência Jurídica</p>
        </div>
      </div>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};
