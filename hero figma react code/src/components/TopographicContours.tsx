import { motion } from 'motion/react';

export function TopographicContours() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0" viewBox="0 0 1400 900">
        <defs>
          {/* Gradient for contour lines - dark blue moonlight */}
          <linearGradient id="contour-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(120, 150, 180, 0.4)" />
            <stop offset="50%" stopColor="rgba(100, 130, 160, 0.6)" />
            <stop offset="100%" stopColor="rgba(120, 150, 180, 0.4)" />
          </linearGradient>

          {/* Subtle glow for contours */}
          <filter id="contour-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Primary contour layers - center elevation */}
        <g opacity="1">
          {/* Innermost contour - highest elevation */}
          <motion.ellipse
            cx="700"
            cy="450"
            rx="150"
            ry="100"
            fill="none"
            stroke="url(#contour-gradient)"
            strokeWidth="2"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.8, 1, 0.8],
              rx: [150, 170, 150],
              ry: [100, 120, 100],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.5 },
              opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Second layer */}
          <motion.ellipse
            cx="700"
            cy="450"
            rx="250"
            ry="180"
            fill="none"
            stroke="url(#contour-gradient)"
            strokeWidth="1.8"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.7, 0.9, 0.7],
              rx: [250, 275, 250],
              ry: [180, 205, 180],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.6 },
              opacity: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Third layer */}
          <motion.ellipse
            cx="700"
            cy="450"
            rx="350"
            ry="260"
            fill="none"
            stroke="url(#contour-gradient)"
            strokeWidth="1.5"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.6, 0.8, 0.6],
              rx: [350, 380, 350],
              ry: [260, 290, 260],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.7 },
              opacity: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Fourth layer */}
          <motion.ellipse
            cx="700"
            cy="450"
            rx="460"
            ry="340"
            fill="none"
            stroke="url(#contour-gradient)"
            strokeWidth="1.2"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.5, 0.7, 0.5],
              rx: [460, 495, 460],
              ry: [340, 375, 340],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.8 },
              opacity: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Outermost layer */}
          <motion.ellipse
            cx="700"
            cy="450"
            rx="580"
            ry="420"
            fill="none"
            stroke="url(#contour-gradient)"
            strokeWidth="1"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.4, 0.6, 0.4],
              rx: [580, 620, 580],
              ry: [420, 460, 420],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.9 },
              opacity: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </g>

        {/* Secondary elevation - left side */}
        <g opacity="0.8">
          <motion.ellipse
            cx="250"
            cy="600"
            rx="120"
            ry="80"
            fill="none"
            stroke="rgba(100, 130, 160, 0.5)"
            strokeWidth="1.5"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.6, 0.8, 0.6],
              rx: [120, 140, 120],
              ry: [80, 100, 80],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 1 },
              opacity: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          <motion.ellipse
            cx="250"
            cy="600"
            rx="200"
            ry="140"
            fill="none"
            stroke="rgba(100, 130, 160, 0.4)"
            strokeWidth="1.2"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.5, 0.7, 0.5],
              rx: [200, 225, 200],
              ry: [140, 165, 140],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 1.1 },
              opacity: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 13, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 13, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </g>

        {/* Tertiary elevation - right side */}
        <g opacity="0.7">
          <motion.ellipse
            cx="1150"
            cy="300"
            rx="100"
            ry="70"
            fill="none"
            stroke="rgba(100, 130, 160, 0.45)"
            strokeWidth="1.4"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.55, 0.75, 0.55],
              rx: [100, 120, 100],
              ry: [70, 90, 70],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 1.2 },
              opacity: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          <motion.ellipse
            cx="1150"
            cy="300"
            rx="170"
            ry="120"
            fill="none"
            stroke="rgba(100, 130, 160, 0.35)"
            strokeWidth="1.1"
            filter="url(#contour-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.45, 0.65, 0.45],
              rx: [170, 195, 170],
              ry: [120, 145, 120],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 1.3 },
              opacity: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
              rx: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
              ry: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </g>

        {/* Elevation markers - technical annotations */}
        <g opacity="0.7">
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <line x1="700" y1="350" x2="700" y2="320" stroke="rgba(120, 150, 180, 0.6)" strokeWidth="1" />
            <text x="710" y="315" fill="rgba(140, 170, 200, 0.8)" fontSize="11" fontFamily="monospace" fontWeight="500">
              +500m
            </text>
          </motion.g>

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <line x1="250" y1="520" x2="250" y2="490" stroke="rgba(120, 150, 180, 0.6)" strokeWidth="1" />
            <text x="260" y="485" fill="rgba(140, 170, 200, 0.8)" fontSize="11" fontFamily="monospace" fontWeight="500">
              +200m
            </text>
          </motion.g>

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            <line x1="1150" y1="230" x2="1150" y2="200" stroke="rgba(120, 150, 180, 0.6)" strokeWidth="1" />
            <text x="1160" y="195" fill="rgba(140, 170, 200, 0.8)" fontSize="11" fontFamily="monospace" fontWeight="500">
              +150m
            </text>
          </motion.g>
        </g>

        {/* Subtle contour hatching for depth */}
        <g opacity="0.3">
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1={580 + i * 25}
              y1="350"
              x2={600 + i * 25}
              y2="385"
              stroke="rgba(100, 130, 160, 0.4)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 1.8 + i * 0.05 }}
            />
          ))}
        </g>
      </svg>

      {/* Ambient depth fog - very subtle */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 45%, rgba(80, 110, 145, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}