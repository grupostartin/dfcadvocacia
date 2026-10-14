import React from 'react';
import { OFFICE_DATA } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionKicker } from './Reveal';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="bg-[#0A0A0A] text-white pt-20 lg:pt-28 pb-16 relative border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <SectionKicker label="05 / CONTATO IMEDIATO" dark className="mb-10" />

        {/* Lead statement */}
        <Reveal className="max-w-3xl mb-14 lg:mb-18">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-neutral-100 tracking-tight leading-[1.3]">
            Informações, esclarecimentos e agendamentos jurídicos em Belo Horizonte. Soluções céleres com respaldo integral.
          </p>
        </Reveal>

        {/* Massive White Capsule Action Card */}
        <Reveal delay={0.1}>
        <a
          href={OFFICE_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-shine group block bg-white text-[#0A0A0A] rounded-2xl p-8 sm:p-12 hover:shadow-[0_0_100px_-20px_rgba(255,255,255,0.45)] transition-all duration-500 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                CANAIS OFICIAIS DFC
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0A0A0A] group-hover:translate-x-1 transition-transform">
                Falar pelo WhatsApp Agora
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-mono mt-2">
                Linha direta: {OFFICE_DATA.phoneFormatted} • Resposta ágil
              </p>
            </div>

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-neutral-900 transition-all duration-300">
              <ArrowUpRight className="w-7 h-7 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </a>
        </Reveal>
      </div>
    </section>
  );
};
