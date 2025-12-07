import { motion } from 'motion/react';

export function VolumetricLighting() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central light beams creating tunnel effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left"
          style={{
            width: '200%',
            height: '2px',
            background: `linear-gradient(to right, rgba(6, 182, 212, ${0.15 - i * 0.015}), transparent)`,
            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
            filter: 'blur(2px)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Diagonal speed lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 8}%`,
            top: '-10%',
            width: '1px',
            height: '120%',
            background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.1), transparent)',
            transform: 'rotate(15deg)',
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Central glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Warm amber accent glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
