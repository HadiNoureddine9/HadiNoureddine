import { motion } from 'motion/react';

const techBadges = [
  { name: 'AWS', x: '15%', y: '45%', delay: 0 },
  { name: 'Terraform', x: '20%', y: '58%', delay: 0.2 },
  { name: 'AWS', x: '28%', y: '65%', delay: 0.4 },
  { name: 'AWS', x: '38%', y: '68%', delay: 0.6 },
  { name: 'Docker', x: '50%', y: '70%', delay: 0.8 },
  { name: 'Kubernetes', x: '62%', y: '68%', delay: 1 },
  { name: 'Docker', x: '72%', y: '65%', delay: 1.2 },
  { name: 'GitHub', x: '80%', y: '58%', delay: 1.4 },
  { name: 'CI/CD', x: '85%', y: '45%', delay: 1.6 },
];

export function TechBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techBadges.map((badge, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: [0, 0.9, 0.9, 0.7],
            scale: [0.5, 1, 1],
            y: [20, 0, 0, -10],
          }}
          transition={{
            duration: 2,
            delay: badge.delay + 1,
            ease: 'easeOut',
          }}
        >
          {/* Badge container */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: badge.delay,
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(2)',
              }}
            />
            
            {/* Badge card */}
            <div
              className="relative px-6 py-3 rounded-full border backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(147, 51, 234, 0.08))',
                borderColor: 'rgba(6, 182, 212, 0.3)',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.03)',
              }}
            >
              <div className="text-cyan-300 text-sm tracking-wide">
                {badge.name}
              </div>
            </div>
            
            {/* Connecting line to center (subtle) */}
            <svg
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: '200px',
                height: '200px',
                overflow: 'visible',
              }}
            >
              <motion.line
                x1="0"
                y1="0"
                x2={`${(50 - parseFloat(badge.x)) * 10}`}
                y2={`${(50 - parseFloat(badge.y)) * 8}`}
                stroke="rgba(6, 182, 212, 0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: badge.delay + 1.5 }}
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
