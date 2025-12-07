import { motion } from 'motion/react';

interface GridBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function GridBackground({ mousePosition }: GridBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #0F1419 0%, #0A0E1A 100%)',
        }}
      />

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 41, 59, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 41, 59, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 30,
        }}
      />

      {/* Perspective grid (like a floor) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              rgba(139, 92, 246, 0.1) 79px,
              rgba(139, 92, 246, 0.1) 80px
            )
          `,
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
      />

      {/* Central glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
