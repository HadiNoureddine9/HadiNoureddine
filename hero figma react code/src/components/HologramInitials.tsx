import { motion } from 'motion/react';

export function HologramInitials() {
  const segments = [
    { id: 1, delay: 0.8, yOffset: -30 },
    { id: 2, delay: 0.85, yOffset: -20 },
    { id: 3, delay: 0.9, yOffset: 10 },
    { id: 4, delay: 0.95, yOffset: -15 },
    { id: 5, delay: 1.0, yOffset: 25 },
    { id: 6, delay: 1.05, yOffset: -25 },
    { id: 7, delay: 1.1, yOffset: 15 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        {/* HN Text with segmented reveal */}
        <div className="relative text-9xl tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {segments.map((segment) => (
            <motion.div
              key={segment.id}
              className="absolute inset-0 overflow-hidden"
              style={{
                height: `${100 / segments.length}%`,
                top: `${((segment.id - 1) / segments.length) * 100}%`,
              }}
              initial={{ y: segment.yOffset, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: segment.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF 0%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 60px rgba(0, 217, 255, 0.8)',
                }}
              >
                HN
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            filter: 'blur(2px)',
            opacity: 0.6,
          }}
        />

        {/* Hologram flicker */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [1, 0.95, 1, 0.97, 1],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <span
            className="text-9xl tracking-wider"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(135deg, #00D9FF 0%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 60px rgba(0, 217, 255, 0.8))',
            }}
          >
            HN
          </span>
        </motion.div>
      </div>
    </div>
  );
}
