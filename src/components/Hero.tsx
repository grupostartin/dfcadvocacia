import { getLayoutTop } from './SectionTransition3D';
import React, { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { OFFICE_DATA, PRACTICE_AREAS } from '../data/content';
import { ArrowRight, ArrowDown, Star } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const LINE_ONE = ['Advocacia', 'com', 'seriedade.'];
const LINE_TWO = ['Atendimento', 'com', 'clareza.'];

/** Word that slides up from behind a clipping mask. */
const MaskedWord: React.FC<{ word: string; delay: number; className?: string }> = ({
  word,
  delay,
  className = '',
}) => (
  <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em] mr-[0.22em] last:mr-0">
    <motion.span
      className={`inline-block ${className}`}
      initial={{ y: '110%', rotate: 4 }}
      animate={{ y: '0%', rotate: 0 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {word}
    </motion.span>
  </span>
);

/** Animated number that counts from 0 to `to` once mounted. */
const CountUp: React.FC<{ to: number; decimals?: number; delay?: number }> = ({
  to,
  decimals = 0,
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.8,
      delay,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [to, decimals, delay]);
  return <span ref={ref}>{(0).toFixed(decimals)}</span>;
};

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Cursor-following spotlight
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${springX}px ${springY}px, rgba(255,255,255,0.075), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  const handleScrollToAreas = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#atuacao');
    if (target) {
      const top = getLayoutTop(target as HTMLElement) - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const marqueeItems = [...PRACTICE_AREAS, ...PRACTICE_AREAS];

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] bg-[#0A0A0A] text-white flex flex-col pt-28 lg:pt-32 overflow-hidden border-b border-neutral-900"
    >
      {/* ── Background layers ─────────────────────────────── */}

      {/* Vertical grid lines drawing in from the top */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 lg:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={`border-l border-white/[0.045] origin-top ${i >= 6 ? 'hidden lg:block' : ''}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.6, delay: 0.05 * i, ease: EASE }}
          />
        ))}
      </div>

      {/* Drifting aurora orbs */}
      <motion.div style={{ scale: orbScale }} className="absolute inset-0 pointer-events-none">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />
      </motion.div>

      {/* Cursor spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none hidden md:block" style={{ background: spotlight }} />

      {/* Giant outlined monogram */}
      <motion.div
        aria-hidden="true"
        style={{ y: watermarkY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute -right-[4vw] bottom-[8vh] font-display font-extrabold leading-none select-none pointer-events-none text-[38vw] lg:text-[30vw] tracking-[-0.06em] text-transparent hero-outline"
      >
        DFC
      </motion.div>

      {/* Film grain + bottom fade */}
      <div className="absolute inset-0 pointer-events-none hero-grain opacity-[0.06] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex-1 flex flex-col">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="self-start inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md pl-2 pr-4 py-1.5"
        >
          <span className="relative flex w-2 h-2 ml-1">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-300">
            Agenda aberta · Presencial & Online
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div style={{ y: headlineY, opacity: headlineOpacity }} className="my-auto py-12 lg:py-10">
          <h1 className="font-display text-[44px] leading-[1.02] sm:text-7xl md:text-8xl lg:text-[min(7.4vw,108px)] font-extrabold tracking-[-0.045em]">
            <span className="block text-neutral-50 lg:whitespace-nowrap">
              {LINE_ONE.map((w, i) => (
                <MaskedWord key={w} word={w} delay={0.35 + i * 0.09} />
              ))}
            </span>
            <span className="block font-light tracking-[-0.035em] lg:whitespace-nowrap">
              {LINE_TWO.map((w, i) => (
                <MaskedWord key={w} word={w} delay={0.7 + i * 0.09} className="hero-shimmer-text" />
              ))}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease: EASE }}
            className="mt-10 lg:mt-12 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16"
          >
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-neutral-400">
              Advocacia em Belo Horizonte com preço justo e condições de pagamento facilitadas.
              Atendimento técnico, seguro e transparente.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={OFFICE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-shine group relative overflow-hidden inline-flex items-center justify-between gap-5 pl-7 pr-2 py-2 rounded-full bg-white text-[#0A0A0A] shadow-[0_0_60px_-12px_rgba(255,255,255,0.45)] hover:shadow-[0_0_80px_-8px_rgba(255,255,255,0.6)] transition-shadow duration-500"
              >
                <span className="text-sm font-bold tracking-wider uppercase font-display">
                  Falar no WhatsApp
                </span>
                <span className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#atuacao"
                onClick={handleScrollToAreas}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-md text-sm font-semibold tracking-wide text-neutral-200 hover:bg-white/[0.07] hover:border-white/30 transition-all duration-300"
              >
                Áreas de atuação
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative border-t border-white/10 py-7 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8"
        >
          <motion.div
            className="absolute -top-px left-0 h-px w-full origin-left bg-gradient-to-r from-white/60 via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 1.4, ease: EASE }}
          />

          <div>
            <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
              Nota no Google
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold tracking-tight">
                <CountUp to={5} decimals={1} delay={1.6} />
              </span>
              <div className="flex" aria-label="Avaliação 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + i * 0.08, type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
              Áreas de atuação
            </span>
            <span className="text-2xl font-display font-bold tracking-tight">
              <CountUp to={PRACTICE_AREAS.length} delay={1.7} />
            </span>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
              Minas Gerais
            </span>
            <span className="text-lg font-display font-semibold tracking-tight">Belo Horizonte</span>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8 flex items-end justify-between">
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">
                Atendimento
              </span>
              <span className="text-lg font-display font-semibold tracking-tight">Seg–Sex · 9h–18h</span>
            </div>
            <a
              href="#escritorio"
              onClick={(e) => {
                e.preventDefault();
                const t = document.querySelector('#escritorio');
                if (t) window.scrollTo({ top: getLayoutTop(t as HTMLElement) - 80, behavior: 'smooth' });
              }}
              aria-label="Rolar para o conteúdo"
              className="hidden lg:flex w-11 h-11 rounded-full border border-white/15 items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
            >
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Practice-areas marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative z-10 border-t border-white/10 bg-white/[0.02] backdrop-blur-sm py-4 overflow-hidden hero-marquee-mask"
      >
        <div className="hero-marquee flex w-max">
          {marqueeItems.map((area, i) => (
            <span
              key={`${area.id}-${i}`}
              className="flex items-center gap-10 pr-10 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 whitespace-nowrap"
            >
              {area.title}
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
