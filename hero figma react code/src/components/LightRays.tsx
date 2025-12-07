import { motion } from 'motion/react';

export function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Diagonal light rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bottom-0"
          style={{
            left: `${i * 15}%`,
            width: '2px',
            background: 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
            transform: 'skewX(-15deg)',
            transformOrigin: 'top',
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 0.5,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Horizontal scan lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
            filter: 'blur(1px)',
          }}
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 12,
            delay: i * 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
