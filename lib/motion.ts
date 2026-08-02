import type { Variants, Transition } from "framer-motion";

export const easeOutExpo: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const transitionMicro: Transition = {
  duration: 0.28,
  ease: easeOutExpo,
};

export const transitionBase: Transition = {
  duration: 0.65,
  ease: easeOutExpo,
};

export const transitionHero: Transition = {
  duration: 1,
  ease: easeOutExpo,
};

export const transitionPage: Transition = {
  duration: 0.5,
  ease: easeOutExpo,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionBase },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: transitionBase },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: transitionBase },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: transitionBase },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0.4 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { ...transitionBase, duration: 0.8 },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...transitionHero, duration: 0.8 },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: transitionPage },
  exit: { opacity: 0, y: -8, transition: { duration: 0.35, ease: easeOutExpo } },
};

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};
