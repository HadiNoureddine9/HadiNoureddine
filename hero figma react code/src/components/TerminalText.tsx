import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface TerminalTextProps {
  bootComplete: boolean;
}

export function TerminalText({ bootComplete }: TerminalTextProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    { text: '> Initializing System...', delay: 2000 },
    { text: '> Loading: Hadi Noureddine', delay: 2400 },
    { text: '> Role: Full-Stack Cloud Architect', delay: 2800 },
    { text: '> Expertise: Scalable · Resilient · Production-Ready', delay: 3200 },
    { text: '> Status: ████████████ 100% ✓', delay: 3600 },
    { text: '> System Online', delay: 4000 },
  ];

  useEffect(() => {
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const line = lines[currentLineIndex];
    const timeout = setTimeout(() => {
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex < line.text.length) {
          setCurrentText(line.text.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setDisplayedLines((prev) => [...prev, line.text]);
          setCurrentText('');
          setCurrentLineIndex((prev) => prev + 1);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, line.delay);

    return () => clearTimeout(timeout);
  }, [currentLineIndex]);

  return (
    <motion.div
      className="w-full max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.8 }}
    >
      <div 
        className="p-6 rounded-lg border border-white/10 backdrop-blur-xl"
        style={{
          background: 'rgba(10, 14, 26, 0.6)',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {displayedLines.map((line, index) => (
          <div key={index} className="text-[#10B981] text-sm mb-2">
            {line}
          </div>
        ))}
        {currentText && (
          <div className="text-[#10B981] text-sm mb-2">
            {currentText}
            {showCursor && <span className="inline-block w-2 h-4 bg-[#10B981] ml-1" />}
          </div>
        )}
      </div>

      {/* Name and Title - Appears after boot */}
      {bootComplete && (
        <motion.div
          className="mt-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#E5E7EB]"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 40px rgba(229, 231, 235, 0.3)',
            }}
          >
            HADI NOUREDDINE
          </h1>
          <p 
            className="text-xl md:text-2xl text-[#9CA3AF]"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Architecting scalable cloud systems from concept to production
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
