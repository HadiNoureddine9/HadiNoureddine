import { motion } from 'motion/react';
import { useMemo } from 'react';

interface StarfieldParticlesProps {
  mousePosition: { x: number; y: number };
}

export function StarfieldParticles({ mousePosition }: StarfieldParticlesProps) {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.2,
      depth: Math.random(), // 0-1, affects parallax speed
      color: Math.random() > 0.7 ? '#00D9FF' : Math.random() > 0.4 ? '#8B5CF6' : '#E5E7EB',
      twinkleDelay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            x: mousePosition.x * star.depth * 10,
            y: mousePosition.y * star.depth * 10,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
