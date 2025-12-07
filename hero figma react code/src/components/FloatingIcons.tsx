import { motion } from 'motion/react';
import { Cloud, Code2, Database, Server, Cpu, Network, Box, GitBranch } from 'lucide-react';

const techIcons = [
  { Icon: Cloud, x: '15%', y: '25%', delay: 0, label: 'AWS' },
  { Icon: Code2, x: '85%', y: '30%', delay: 0.5, label: 'Code' },
  { Icon: Database, x: '20%', y: '65%', delay: 1, label: 'Data' },
  { Icon: Server, x: '80%', y: '70%', delay: 1.5, label: 'Server' },
  { Icon: Cpu, x: '10%', y: '45%', delay: 2, label: 'Compute' },
  { Icon: Network, x: '90%', y: '50%', delay: 2.5, label: 'Network' },
  { Icon: Box, x: '25%', y: '80%', delay: 3, label: 'Container' },
  { Icon: GitBranch, x: '75%', y: '20%', delay: 3.5, label: 'Git' },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map(({ Icon, x, y, delay, label }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, z: -100 }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0],
            scale: [0, 1, 1, 0.8],
            y: [0, -30, -30, -60],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Holographic container */}
          <div className="relative">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent)',
                filter: 'blur(20px)',
                transform: 'scale(2)',
              }}
            />
            
            {/* Icon container with glassmorphism */}
            <motion.div
              className="relative bg-cyan-500/5 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4"
              animate={{
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay,
              }}
              style={{
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.1), inset 0 0 20px rgba(6, 182, 212, 0.05)',
              }}
            >
              <Icon 
                className="w-8 h-8 text-cyan-400"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))',
                }}
              />
              
              {/* Label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="text-xs text-cyan-400/60 font-mono">{label}</div>
              </div>
            </motion.div>
            
            {/* Scan lines effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.03) 2px, rgba(6, 182, 212, 0.03) 4px)',
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Additional floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -100],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
