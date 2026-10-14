import React, { useState } from 'react';
import { OFFICE_DATA } from '../data/content';
import { ScheduleModal } from './ScheduleModal';
import { ArrowUpRight, MapPin, Navigation, Compass } from 'lucide-react';
import { Reveal, SectionKicker } from './Reveal';

export const LocationSection: React.FC = () => {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [showLiveMap, setShowLiveMap] = useState(false);

  return (
    <section id="localizacao" className="bg-white text-[#0A0A0A] py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <SectionKicker label="04 / LOCALIZAÇÃO" className="mb-14 lg:mb-18" />

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Description, Card, Buttons */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
                Ponto de referência com facilidade de locomoção e discrição na região norte da capital mineira.
              </p>

              {/* Office Address Card */}
              <div className="border border-neutral-200 rounded-xl p-7 bg-neutral-50/50 space-y-2">
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                  DFC ADVOCACIA
                </span>
                <p className="text-base font-semibold text-neutral-900 tracking-tight">
                  {OFFICE_DATA.address.street}
                </p>
                <p className="text-sm text-neutral-600">
                  {OFFICE_DATA.address.neighborhood} — {OFFICE_DATA.cityState}
                </p>
                <p className="text-sm font-mono text-neutral-500">
                  CEP: {OFFICE_DATA.address.zipCode}
                </p>
                <div className="pt-3 border-t border-neutral-200/80 mt-3">
                  <p className="text-xs text-neutral-700 font-mono">
                    WhatsApp / Tel: {OFFICE_DATA.phoneFormatted}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={OFFICE_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-black text-white hover:bg-neutral-800 text-xs font-bold tracking-wider uppercase font-display transition-all duration-200 shadow-sm"
              >
                <span>ABRIR NO GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setScheduleModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-neutral-300 text-black hover:border-black hover:bg-neutral-50 text-xs font-bold tracking-wider uppercase font-display transition-all duration-200"
              >
                <span>AGENDAR VISITA</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          {/* Right Column: Stylized Monochrome Radar Card */}
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="bg-[#0A0A0A] text-white rounded-2xl border border-neutral-800 p-6 sm:p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px] lg:min-h-[460px]">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400 pb-4 border-b border-neutral-800/80 z-10 relative">
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-[10px] text-neutral-300 uppercase">
                    COORDENADAS DFC
                  </span>
                  <span className="text-neutral-400">{OFFICE_DATA.coordinates.degrees}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowLiveMap(!showLiveMap)}
                    className="text-[10px] underline underline-offset-4 text-neutral-400 hover:text-white transition-colors"
                  >
                    {showLiveMap ? 'Modo Radar' : 'Mapa Interativo'}
                  </button>
                  <span className="text-neutral-400 uppercase hidden sm:inline">MINAS GERAIS, BR</span>
                </div>
              </div>

              {/* Center Content: Either Live Map Embed or Architectural Radar Graphic */}
              {showLiveMap ? (
                <div className="my-6 rounded-xl overflow-hidden border border-neutral-800 h-[280px] relative z-10">
                  <iframe
                    title="Localização DFC Advocacia Belo Horizonte"
                    src="https://maps.google.com/maps?q=Rua+Joana+Ang%C3%A9lica,+115,+Minasl%C3%A2ndia,+Belo+Horizonte+-+MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter grayscale invert contrast-125"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="relative my-8 py-12 flex flex-col items-center justify-center text-center overflow-hidden">
                  {/* Dot matrix background */}
                  <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

                  {/* Concentric subtle radar circles */}
                  <div className="absolute w-72 h-72 rounded-full border border-neutral-800/80 pointer-events-none" />
                  <div className="absolute w-48 h-48 rounded-full border border-neutral-800/60 pointer-events-none" />
                  <div className="absolute w-24 h-24 rounded-full border border-neutral-800/40 pointer-events-none" />

                  {/* Pulsing ring */}
                  <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-25 pointer-events-none" />

                  {/* Center Monogram Seal Badge */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center font-display font-extrabold text-sm tracking-wider shadow-2xl mb-4">
                    DFC
                  </div>

                  <p className="relative z-10 text-xs sm:text-sm font-medium tracking-wider text-neutral-300 uppercase font-mono">
                    Minaslândia • Belo Horizonte • MG
                  </p>
                  <span className="relative z-10 text-[11px] text-neutral-500 font-mono mt-1">
                    Atendimento presencial reservado
                  </span>
                </div>
              )}

              {/* Card Footer Bar */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-800/80 font-mono z-10 relative">
                <span className="text-[11px]">
                  Atendimento com hora marcada
                </span>
                <a
                  href={OFFICE_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-neutral-300 hover:text-white transition-colors"
                >
                  <span>Ver rotas ampliadas</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </section>
  );
};
