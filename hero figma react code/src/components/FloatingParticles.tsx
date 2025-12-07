import { motion } from 'motion/react';

export function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <filter id="particle-glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            r={particle.size}
            fill={particle.id % 3 === 0 ? '#8B5CF6' : particle.id % 2 === 0 ? '#3B82F6' : '#06B6D4'}
            filter="url(#particle-glow)"
            initial={{
              cx: `${particle.x}%`,
              cy: `${particle.y}%`,
              opacity: 0,
            }}
            animate={{
              cx: `${particle.x}%`,
              cy: [`${particle.y}%`, `${(particle.y + 20) % 100}%`, `${particle.y}%`],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
