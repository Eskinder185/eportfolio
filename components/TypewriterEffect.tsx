import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  lines: string[];
  delay?: number;
  speed?: number;
}

export function TypewriterEffect({ lines, delay = 0, speed = 50 }: TypewriterEffectProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (currentLineIndex < lines.length - 1) {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentText('');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentLineIndex, lines, speed, isTyping]);

  if (!isTyping) return null;

  return (
    <motion.div
      className="font-mono text-sm text-green-400 bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 max-w-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <span className="ml-2 text-xs text-gray-400">terminal</span>
      </div>
      
      <div className="space-y-1">
        {lines.slice(0, currentLineIndex).map((line, index) => (
          <div key={index} className="text-green-400">
            <span className="text-gray-500">$ </span>
            {line}
          </div>
        ))}
        
        {currentLineIndex < lines.length && (
          <div className="text-green-400">
            <span className="text-gray-500">$ </span>
            {currentText}
            <motion.span
              className="ml-1 bg-green-400 w-2 h-4 inline-block"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
