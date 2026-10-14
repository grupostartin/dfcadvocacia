import React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Fades and lifts its children into view once they enter the viewport. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, y = 28 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/** Section kicker with a hairline that draws itself in. */
export const SectionKicker: React.FC<{ label: string; dark?: boolean; className?: string }> = ({
  label,
  dark = false,
  className = 'mb-14 lg:mb-20',
}) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <motion.span
      className={`text-xs font-mono tracking-widest uppercase text-neutral-400`}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {label}
    </motion.span>
    <motion.div
      className={`flex-1 h-[1px] origin-left ${dark ? 'bg-neutral-800' : 'bg-neutral-200'}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    />
  </div>
);
