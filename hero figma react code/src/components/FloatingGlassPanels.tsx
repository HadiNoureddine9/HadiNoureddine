import { motion } from 'motion/react';

interface FloatingGlassPanelsProps {
  loaded: boolean;
  mouseX: any;
  mouseY: any;
}

export function FloatingGlassPanels({ loaded, mouseX, mouseY }: FloatingGlassPanelsProps) {
  const panels = [
    { delay: 0.3, x: -300, y: -100, rotate: -8, z: -100, size: 'w-64 h-96' },
    { delay: 0.5, x: 350, y: -50, rotate: 12, z: -150, size: 'w-56 h-80' },
    { delay: 0.7, x: -250, y: 150, rotate: 5, z: -200, size: 'w-72 h-64' },
    { delay: 0.4, x: 300, y: 180, rotate: -15, z: -120, size: 'w-48 h-72' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {panels.map((panel, index) => (
        <motion.div
          key={index}
          className={`absolute top-1/2 left-1/2 ${panel.size} rounded-2xl backdrop-blur-md border border-white/10`}
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(139, 92, 246, 0.05) 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            transformStyle: 'preserve-3d',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            rotateZ: 0,
            rotateY: 0,
            scale: 0.8,
          }}
          animate={{
            x: loaded ? panel.x : 0,
            y: loaded ? panel.y : 0,
            opacity: loaded ? 1 : 0,
            rotateZ: loaded ? panel.rotate : 0,
            rotateY: loaded ? [0, 5, 0] : 0,
            scale: loaded ? 1 : 0.8,
          }}
          transition={{
            duration: 1.8,
            delay: panel.delay,
            ease: [0.16, 1, 0.3, 1],
            rotateY: {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Inner glow */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-50"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1), transparent 70%)',
            }}
          />

          {/* Technical lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <line x1="20%" y1="30%" x2="80%" y2="30%" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="0.5" />
            <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="0.5" />
            <line x1="20%" y1="70%" x2="80%" y2="70%" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="0.5" />
          </svg>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-purple-400/40" />
          <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-purple-400/40" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-purple-400/40" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-purple-400/40" />
        </motion.div>
      ))}
    </div>
  );
}
