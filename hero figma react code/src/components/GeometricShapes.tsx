import { motion } from 'motion/react';

export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="shape-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Large rotating hexagon */}
        <motion.path
          d="M 300,100 L 400,150 L 400,250 L 300,300 L 200,250 L 200,150 Z"
          fill="none"
          stroke="url(#shape-gradient)"
          strokeWidth="1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '300px 200px' }}
        />

        {/* Floating triangle */}
        <motion.path
          d="M 700,400 L 800,550 L 600,550 Z"
          fill="none"
          stroke="url(#shape-gradient)"
          strokeWidth="1"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '700px 475px' }}
        />

        {/* Small circles orbiting */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const centerX = 50;
          const centerY = 70;
          const radius = 15;

          return (
            <motion.circle
              key={i}
              r="3"
              fill="url(#shape-gradient)"
              animate={{
                cx: [`${centerX + radius * Math.cos(angle)}%`, `${centerX + radius * Math.cos(angle + 2 * Math.PI)}%`],
                cy: [`${centerY + radius * Math.sin(angle)}%`, `${centerY + radius * Math.sin(angle + 2 * Math.PI)}%`],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 30,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}

        {/* Grid squares rotating */}
        {[...Array(4)].map((_, i) => (
          <motion.rect
            key={`square-${i}`}
            x={100 + i * 200}
            y={500}
            width="60"
            height="60"
            fill="none"
            stroke="url(#shape-gradient)"
            strokeWidth="1"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 25 + i * 2,
              delay: i * 1,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ transformOrigin: `${130 + i * 200}px 530px` }}
          />
        ))}
      </svg>
    </div>
  );
}
