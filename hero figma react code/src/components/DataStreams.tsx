import { motion } from 'motion/react';

export function DataStreams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          {/* Gradient for data flow */}
          <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="stream-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Flowing data paths */}
        {[
          { d: 'M -100 30 Q 200 50, 400 30 T 900 30', delay: 0 },
          { d: 'M -100 50 Q 250 30, 500 50 T 1000 50', delay: 1 },
          { d: 'M -100 70 Q 150 80, 350 70 T 850 70', delay: 2 },
        ].map((path, i) => (
          <g key={i}>
            {/* Path line */}
            <motion.path
              d={path.d}
              fill="none"
              stroke="url(#stream-gradient)"
              strokeWidth="1"
              filter="url(#stream-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 2,
                delay: 0.8 + path.delay * 0.3,
                ease: 'easeInOut',
              }}
            />

            {/* Flowing data packets */}
            {[0, 1, 2].map((packet) => (
              <motion.circle
                key={packet}
                r="2"
                fill="#8B5CF6"
                filter="url(#stream-glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  delay: path.delay + packet * 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${path.delay + packet * 1.5}s`}
                  path={path.d}
                />
              </motion.circle>
            ))}
          </g>
        ))}

        {/* Network nodes */}
        {[
          { cx: '15%', cy: '25%' },
          { cx: '85%', cy: '30%' },
          { cx: '50%', cy: '45%' },
          { cx: '30%', cy: '65%' },
          { cx: '70%', cy: '70%' },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill="#8B5CF6"
              filter="url(#stream-glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                scale: { duration: 0.6, delay: 1.5 + i * 0.15 },
                opacity: { 
                  duration: 3, 
                  delay: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="8"
              fill="none"
              stroke="rgba(139, 92, 246, 0.4)"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.8, delay: 1.6 + i * 0.15 }}
            />
          </motion.g>
        ))}

        {/* Connection lines */}
        {[
          { x1: '15%', y1: '25%', x2: '50%', y2: '45%' },
          { x1: '50%', y1: '45%', x2: '85%', y2: '30%' },
          { x1: '50%', y1: '45%', x2: '30%', y2: '65%' },
          { x1: '50%', y1: '45%', x2: '70%', y2: '70%' },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 2 + i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
}
