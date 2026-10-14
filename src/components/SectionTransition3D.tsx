import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'motion/react';

interface SectionTransition3DProps {
  children: React.ReactNode;
  /** Animate the section rising/tilting in as it enters from below. */
  enter?: boolean;
  /** Animate the section tilting/receding away as it leaves through the top. */
  exit?: boolean;
}

const SPRING = { stiffness: 140, damping: 28, mass: 0.4 };

/** Layout-based page offset — unaffected by the 3D transforms applied below. */
export const getLayoutTop = (el: HTMLElement) => {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
};

const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setMobile(mq.matches);
    update();
    // Safari < 14 only supports the legacy addListener API
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);
  return mobile;
};

/**
 * Wraps a section in a perspective stage. While scrolling, the incoming section
 * swings up from a tilted, scaled-down plane (like a page being lifted toward the
 * viewer) and the outgoing one folds back into the depth, with a shading layer
 * that follows the tilt to sell the lighting.
 */
export const SectionTransition3D: React.FC<SectionTransition3DProps> = ({
  children,
  enter = true,
  exit = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mobile = useIsMobile();
  const k = mobile ? 0.55 : 1; // softer on small screens

  // 0 → 1 while the section's top travels from the bottom of the viewport to 20% from the top
  const { scrollYProgress: enterRaw } = useScroll({ target: ref, offset: ['start end', 'start 20%'] });
  // 0 → 1 while the section's bottom travels from 70% of the viewport to the very top
  const { scrollYProgress: exitRaw } = useScroll({ target: ref, offset: ['end 70%', 'end start'] });

  const inP = useSpring(enterRaw, SPRING);
  const outP = useSpring(exitRaw, SPRING);

  const e = (v: MotionValue<number>, from: number, to: number, on: boolean) =>
    useTransform(v, [0, 1], on ? [from, to] : [to, to]);

  const enterRotate = e(inP, 24 * k, 0, enter);
  const enterScale = e(inP, 0.86, 1, enter);
  const enterY = e(inP, 120 * k, 0, enter);
  const enterRadius = e(inP, 48 * k, 0, enter);
  const enterShade = e(inP, 0.4, 0, enter);

  const exitRotate = useTransform(outP, [0, 1], exit ? [0, -14 * k] : [0, 0]);
  const exitScale = useTransform(outP, [0, 1], exit ? [1, 0.9] : [1, 1]);
  const exitZ = useTransform(outP, [0, 1], exit ? [0, -160 * k] : [0, 0]);
  const exitRadius = useTransform(outP, [0, 1], exit ? [0, 40 * k] : [0, 0]);
  const exitShade = useTransform(outP, [0, 1], exit ? [0, 0.5] : [0, 0]);

  const rotateX = useTransform([enterRotate, exitRotate], ([a, b]: number[]) => a + b);
  const scale = useTransform([enterScale, exitScale], ([a, b]: number[]) => a * b);
  const radius = useTransform([enterRadius, exitRadius], ([a, b]: number[]) => Math.max(a, b));
  const shade = useTransform([enterShade, exitShade], ([a, b]: number[]) => Math.max(a, b));
  // Pivot near the edge that is still on screen: top while entering, bottom while leaving.
  const originY = useTransform(outP, (v) => (v > 0.001 ? '100%' : '0%'));

  return (
    <div ref={ref} className="relative [perspective:1600px] [perspective-origin:50%_50%]">
      <motion.div
        className="relative overflow-hidden will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden]"
        style={{
          rotateX,
          scale,
          y: enterY,
          z: exitZ,
          borderRadius: radius,
          originY,
          boxShadow: '0 40px 120px -40px rgba(0,0,0,0.6)',
        }}
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black z-[5]"
          style={{ opacity: shade }}
        />
      </motion.div>
    </div>
  );
};
