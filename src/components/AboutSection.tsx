import React from 'react';
import { Reveal, SectionKicker } from './Reveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="escritorio" className="bg-white text-[#0A0A0A] py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <SectionKicker label="01 / O ESCRITÓRIO" />

        {/* Main Two-Column Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">
          <Reveal>
            <p className="text-xl sm:text-2xl lg:text-[26px] leading-[1.45] text-neutral-900 font-normal">
              A <strong className="font-semibold text-black">DFC Advocacia</strong> é um escritório consolidado em Belo Horizonte, Minas Gerais. Disponibilizamos atendimento presencial e virtual de alta proximidade para pessoas físicas e jurídicas que demandam orientação estratégica, segura e sem complexidades artificiais.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg sm:text-xl lg:text-[22px] leading-[1.5] text-neutral-600 font-normal">
              Nossa prática diária é guiada por padrões éticos intransigentes, análise pormenorizada de cada caso e diálogo franco. Simplificamos trâmites jurídicos sem abrir mão da densidade técnica, colocando suas prioridades no centro de cada deliberação.
            </p>
          </Reveal>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-neutral-200 mb-14 lg:mb-16" />

        {/* 3 Pillars Sub-columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Pillar 01.01 */}
          <Reveal className="space-y-4">
            <span className="text-xs font-mono tracking-widest text-neutral-400 block">
              01.01
            </span>
            <p className="text-sm lg:text-[15px] leading-relaxed text-neutral-700">
              Cada processo é precedido de estudo aprofundado da doutrina e jurisprudência contemporânea, estruturando defesas consistentes.
            </p>
          </Reveal>

          {/* Pillar 01.02 */}
          <Reveal delay={0.12} className="space-y-4">
            <span className="text-xs font-mono tracking-widest text-neutral-400 block">
              01.02
            </span>
            <p className="text-sm lg:text-[15px] leading-relaxed text-neutral-700">
              Informações prestadas com presteza e vocabulário acessível. Você entende cada fase e movimento da sua demanda.
            </p>
          </Reveal>

          {/* Pillar 01.03 */}
          <Reveal delay={0.24} className="space-y-4">
            <span className="text-xs font-mono tracking-widest text-neutral-400 block">
              01.03
            </span>
            <p className="text-sm lg:text-[15px] leading-relaxed text-neutral-700">
              Tratamento confidencial, dedicado e personalizado, construindo relações de confiança duradoura com cada cliente.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
