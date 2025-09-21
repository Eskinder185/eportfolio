import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

interface StatCardProps {
  label: string;
  value: string;
  subtitle: string;
  delay: number;
}

export function StatCard({ label, value, subtitle, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const targetValue = parseInt(value.replace('+', ''));

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = targetValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.floor(stepValue * currentStep));
      
      if (currentStep >= steps) {
        setCount(targetValue);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasAnimated, targetValue]);

  return (
    <TiltCard
      className="group relative"
      strength={12}
    >
      <motion.div
        className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300"
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.6, 
          delay,
          type: 'spring',
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(34, 211, 238, 0.2)'
        }}
        onViewportEnter={() => setHasAnimated(true)}
      >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        layoutId={`stat-bg-${label}`}
      />

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: [
            '0 0 0 1px rgba(34, 211, 238, 0.2)',
            '0 0 20px 1px rgba(34, 211, 238, 0.1)',
            '0 0 0 1px rgba(34, 211, 238, 0.2)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-sm text-cyan-400 font-medium mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {label}
        </motion.div>
        
        <motion.div
          className="text-3xl font-bold text-white mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: delay + 0.3,
            type: 'spring',
            stiffness: 200
          }}
        >
          {count}{value.includes('+') ? '+' : ''}
        </motion.div>
        
        <motion.div
          className="text-sm text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.4 }}
        >
          {subtitle}
        </motion.div>
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-4 right-4 text-cyan-400/30"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {label.includes('Experience') ? '⚡' : '🚀'}
      </motion.div>
    </motion.div>
    </TiltCard>
  );
}
