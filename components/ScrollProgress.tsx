import { motion } from 'framer-motion';

interface ScrollProgressProps {
  progress: any; // Framer Motion motion value
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-50 origin-left"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
    />
  );
}
