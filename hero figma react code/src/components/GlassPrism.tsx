import { motion } from 'motion/react';

interface GlassPrismProps {
  mousePosition: { x: number; y: number };
}

export function GlassPrism({ mousePosition }: GlassPrismProps) {
  const layers = [
    { 
      label: 'Frontend',
      color: 'from-purple-500/20 to-blue-500/20',
      delay: 0,
      size: 'w-64 h-64',
    },
    { 
      label: 'Backend',
      color: 'from-blue-500/20 to-cyan-500/20',
      delay: 0.2,
      size: 'w-56 h-56',
    },
    { 
      label: 'Cloud',
      color: 'from-cyan-500/20 to-purple-500/20',
      delay: 0.4,
      size: 'w-48 h-48',
    },
  ];

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {layers.map((layer, index) => (
        <motion.div
          key={layer.label}
          className={`absolute ${layer.size} rounded-3xl backdrop-blur-[40px] border border-white/10 bg-gradient-to-br ${layer.color}`}
          style={{
            boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.2), inset 0 0 60px rgba(255, 255, 255, 0.05)',
          }}
          animate={{
            y: [0, -20, 0],
            rotateX: mousePosition.y * 10,
            rotateY: mousePosition.x * 10,
          }}
          transition={{
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: layer.delay,
            },
            rotateX: {
              duration: 0.3,
              ease: 'easeOut',
            },
            rotateY: {
              duration: 0.3,
              ease: 'easeOut',
            },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          {/* Specular Highlight */}
          <div 
            className="absolute top-4 left-4 w-32 h-32 rounded-full bg-white/20 blur-2xl"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          />
          
          {/* Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span 
              className="text-white/80 tracking-wider text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: layer.delay + 0.5 }}
            >
              {layer.label}
            </motion.span>
          </div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))`,
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
      ))}

      {/* Center Core Light */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"
        style={{
          filter: 'blur(30px)',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.6)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
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
