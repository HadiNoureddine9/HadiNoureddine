import { motion } from 'motion/react';
import { useState } from 'react';

interface PremiumCTAProps {
  loaded: boolean;
}

export function PremiumCTA({ loaded }: PremiumCTAProps) {
  const [hoveredPrimary, setHoveredPrimary] = useState(false);
  const [hoveredSecondary, setHoveredSecondary] = useState(false);

  return (
    <motion.div
      className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
      transition={{
        duration: 1,
        delay: 2.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Primary CTA */}
      <motion.button
        className="relative group px-10 py-5 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
        }}
        onMouseEnter={() => setHoveredPrimary(true)}
        onMouseLeave={() => setHoveredPrimary(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
          animate={hoveredPrimary ? { x: ['0%', '200%'] } : {}}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Enhanced glow */}
        <motion.div
          className="absolute inset-0 rounded-full -z-10"
          style={{
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            filter: 'blur(30px)',
          }}
          animate={{
            opacity: hoveredPrimary ? 0.8 : 0,
            scale: hoveredPrimary ? 1.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        <span className="relative z-10 text-white tracking-wide text-lg">
          View Portfolio
        </span>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Secondary CTA - Glass */}
      <motion.button
        className="relative group px-10 py-5 rounded-full backdrop-blur-xl border border-white/20 overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
        }}
        onMouseEnter={() => setHoveredSecondary(true)}
        onMouseLeave={() => setHoveredSecondary(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient fill on hover */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
          }}
          animate={{
            opacity: hoveredSecondary ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid rgba(139, 92, 246, 0.5)',
          }}
          animate={{
            opacity: hoveredSecondary ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <span className="relative z-10 text-white/90 tracking-wide text-lg">
          Download Resume
        </span>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-purple-400/60 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-purple-400/60 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>
    </motion.div>
  );
}
