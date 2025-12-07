import { motion } from 'motion/react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {/* Timeline ribbon */}
      <motion.div
        className="w-px h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
        animate={{
          scaleY: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Scroll text */}
      <span className="text-xs text-[#9CA3AF] tracking-widest uppercase">
        Scroll
      </span>

      {/* Chevron */}
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-purple-400"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
