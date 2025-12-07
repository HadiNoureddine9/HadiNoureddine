import { motion } from 'motion/react';

export function BlueprintGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          {/* Ultra-fine precision grid */}
          <pattern
            id="micro-grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(80, 90, 100, 0.08)"
              strokeWidth="0.25"
            />
          </pattern>

          {/* Major grid lines (every 100px) */}
          <pattern
            id="major-grid"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(100, 110, 120, 0.12)"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Etched texture overlay */}
          <filter id="etch-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0 0 1" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>

        {/* Base matte background (charcoal/basalt) */}
        <rect width="100%" height="100%" fill="#0A0A0F" />

        {/* Micro grid layer */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#micro-grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Major grid layer */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#major-grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Carbon fiber texture overlay */}
        <motion.rect
          width="100%"
          height="100%"
          fill="rgba(15, 20, 25, 0.4)"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />

        {/* Vignette (edge darkening) */}
        <defs>
          <radialGradient id="vignette">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0)" />
            <stop offset="70%" stopColor="rgba(0, 0, 0, 0)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.7)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#vignette)" />

        {/* Precision measurement lines (top edge) */}
        {[...Array(20)].map((_, i) => (
          <motion.g
            key={`measure-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.6, delay: 1.5 + i * 0.02 }}
          >
            <line
              x1={i * (100 / 20) + '%'}
              y1="10"
              x2={i * (100 / 20) + '%'}
              y2={i % 5 === 0 ? '20' : '15'}
              stroke="rgba(100, 110, 120, 0.3)"
              strokeWidth="0.5"
            />
          </motion.g>
        ))}

        {/* Corner registration marks (blueprint style) */}
        {[
          { x: 30, y: 30, rotate: 0 },
          { x: 'calc(100% - 30px)', y: 30, rotate: 90 },
          { x: 30, y: 'calc(100% - 30px)', rotate: -90 },
          { x: 'calc(100% - 30px)', y: 'calc(100% - 30px)', rotate: 180 },
        ].map((corner, i) => (
          <motion.g
            key={`corner-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 + i * 0.1 }}
          >
            <line
              x1={corner.x}
              y1={corner.y}
              x2={typeof corner.x === 'string' ? corner.x : corner.x + 15}
              y2={corner.y}
              stroke="rgba(50, 85, 140, 0.5)"
              strokeWidth="1"
            />
            <line
              x1={corner.x}
              y1={corner.y}
              x2={corner.x}
              y2={typeof corner.y === 'string' ? corner.y : corner.y + 15}
              stroke="rgba(50, 85, 140, 0.5)"
              strokeWidth="1"
            />
            <circle
              cx={corner.x}
              cy={corner.y}
              r="3"
              fill="none"
              stroke="rgba(50, 85, 140, 0.5)"
              strokeWidth="0.5"
            />
          </motion.g>
        ))}
      </svg>

      {/* Subtle brushed metal sheen */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(100, 110, 120, 0.02) 0%, rgba(80, 90, 100, 0.01) 50%, rgba(100, 110, 120, 0.02) 100%)',
          mixBlendMode: 'overlay',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  );
}