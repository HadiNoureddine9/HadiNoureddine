import { motion, MotionValue, useTransform } from 'motion/react';

interface DepthGridProps {
  scrollProgress: MotionValue<number>;
}

export function DepthGrid({ scrollProgress }: DepthGridProps) {
  // Cinematic camera movement on scroll
  const rotateX = useTransform(scrollProgress, [0, 0.3], [60, 50]);
  const z = useTransform(scrollProgress, [0, 0.3], [0, -200]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Perspective container */}
      <motion.div
        className="absolute inset-0"
        style={{
          perspective: '1200px',
          perspectiveOrigin: 'center 60%',
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            rotateX,
            z,
          }}
        >
          {/* Precision grid */}
          <svg 
            width="100%" 
            height="120%" 
            className="absolute -top-10"
            style={{ opacity: 0.1 }}
          >
            <defs>
              <pattern
                id="precision-grid"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.4)"
                  strokeWidth="0.5"
                />
              </pattern>

              <linearGradient id="depth-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                <stop offset="40%" stopColor="rgba(139, 92, 246, 1)" />
                <stop offset="60%" stopColor="rgba(59, 130, 246, 1)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
              </linearGradient>

              <radialGradient id="fade-gradient">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
                <stop offset="70%" stopColor="rgba(139, 92, 246, 0.05)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#precision-grid)" />
            <rect width="100%" height="100%" fill="url(#depth-gradient)" style={{ mixBlendMode: 'overlay', opacity: 0.2 }} />
            <ellipse cx="50%" cy="50%" rx="40%" ry="25%" fill="url(#fade-gradient)" />
          </svg>

          {/* Architectural markers */}
          {[
            { x: '20%', y: '30%' },
            { x: '80%', y: '30%' },
            { x: '20%', y: '70%' },
            { x: '80%', y: '70%' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3"
              style={{
                left: pos.x,
                top: pos.y,
                border: '1px solid rgba(139, 92, 246, 0.3)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
            >
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                style={{
                  background: '#8B5CF6',
                  boxShadow: '0 0 8px rgba(139, 92, 246, 0.6)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ambient gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '1000px',
          height: '1000px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
