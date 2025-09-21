import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        setIsGlitching(true);
        
        const glitchInterval = setInterval(() => {
          const glitchedText = text
            .split('')
            .map((char, index) => {
              if (Math.random() < 0.3) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              }
              return char;
            })
            .join('');
          
          setDisplayText(glitchedText);
        }, 50);

        setTimeout(() => {
          clearInterval(glitchInterval);
          setDisplayText(text);
          setIsGlitching(false);
        }, 200);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span 
      className={`${isGlitching ? 'glitching' : ''} ${className}`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0040, -2px 0 #00ffff' 
          : '0 0 8px rgba(34, 211, 238, 0.35), 0 0 16px rgba(34, 211, 238, 0.15)',
        animation: isGlitching ? 'none' : 'softNeon 8s ease-in-out infinite'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {displayText}
    </motion.span>
  );
}
