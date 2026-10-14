import React from 'react';
import { OFFICE_DATA } from '../data/content';
import { ArrowUpRight, Check } from 'lucide-react';
import { Reveal, SectionKicker } from './Reveal';

export const AttendanceSection: React.FC = () => {
  return (
    <section id="atendimento" className="bg-[#0A0A0A] text-white py-20 lg:py-28 relative border-b border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <SectionKicker label="03 / ATENDIMENTO" dark className="mb-8" />

        {/* Lead statement */}
        <Reveal className="max-w-2xl mb-14 lg:mb-18">
          <p className="text-lg sm:text-xl lg:text-[22px] text-neutral-300 font-light leading-relaxed">
            Flexibilidade estruturada para adequar-se à sua rotina, garantindo pontualidade, sigilo absoluto e rapidez nas devolutivas.
          </p>
        </Reveal>

        {/* Two Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Presencial */}
          <Reveal className="h-full">
          <div className="h-full bg-neutral-950 border border-neutral-800/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-600 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(255,255,255,0.12)] transition-all duration-500 group">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-900">
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                  MODALIDADE PRESENCIAL
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 font-normal">
                Localizado no bairro Minaslândia, com ambiente reservado, silencioso e acolhedor para tratar de suas questões com total sigilo. Agendamentos programados com hora marcada.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-900 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Check className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Sala para reuniões reservada • Estacionamento acessível</span>
            </div>
          </div>
          </Reveal>

          {/* Card 2: Digital */}
          <Reveal className="h-full" delay={0.15}>
          <div className="h-full bg-neutral-950 border border-neutral-800/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-600 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(255,255,255,0.12)] transition-all duration-500 group">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-900">
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                  MODALIDADE DIGITAL
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 font-normal">
                Videoconferências criptografadas, assinatura digital com validade jurídica e envio seguro de documentos via WhatsApp ou e-mail institucional.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-900 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Check className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Google Meet / Zoom • Assinatura eletrônica ICP-Brasil</span>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Bottom Strip Box */}
        <Reveal delay={0.1} className="rounded-2xl border border-neutral-800/90 bg-neutral-950/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left font-normal">
            Nossa equipe esclarece prazos, valores e metodologia sem burocracia.
          </p>

          <a
            href={OFFICE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A0A0A] hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase font-display transition-all duration-200 shrink-0"
          >
            <span>CONSULTAR PELO WHATSAPP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
