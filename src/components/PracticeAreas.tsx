import React, { useState } from 'react';
import { PRACTICE_AREAS, PracticeArea } from '../data/content';
import { PracticeAreaModal } from './PracticeAreaModal';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <section id="atuacao" className="bg-[#F7F7F7] text-[#0A0A0A] py-20 lg:py-28 relative border-y border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-16">
          <div className="lg:col-span-6 flex items-center gap-4">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              02 / ÁREAS DE ATUAÇÃO
            </span>
            <div className="flex-1 h-[1px] bg-neutral-300 hidden sm:block" />
          </div>

          <Reveal className="lg:col-span-6 lg:text-right" delay={0.1}>
            <p className="text-sm lg:text-[15px] text-neutral-600 font-normal">
              Aconselhamento consultivo, contencioso e preventivo estruturado com rigor.
            </p>
          </Reveal>
        </div>

        {/* Practice Areas Editorial List */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedArea(area)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArea(area);
                }
              }}
              className="group relative py-7 sm:py-8 lg:py-9 cursor-pointer transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:bg-white before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-black before:origin-top before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center">
                {/* Number / Index */}
                <div className="lg:col-span-2">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 group-hover:text-black transition-colors font-medium">
                    {area.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-9 transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 group-hover:text-black mb-1.5 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-4xl font-normal">
                    {area.summary}
                  </p>
                </div>

                {/* Arrow Action */}
                <div className="lg:col-span-1 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle helper note */}
        <div className="mt-8 text-right">
          <span className="text-[11px] text-neutral-400 font-mono">
            Clique em qualquer área para visualizar escopo detalhado e opções de consulta.
          </span>
        </div>
      </div>

      {/* Modal for detailed area examination */}
      <PracticeAreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
      />
    </section>
  );
};
