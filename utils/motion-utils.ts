import { useReducedMotion } from 'framer-motion';

export const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();

  return {
    fadeInUp: {
      initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: shouldReduceMotion ? 0 : 0.5 }
    }
  };
};
