import { motion } from 'motion/react';

export function ArchitecturalLattice() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central architectural blueprint structure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="1400" height="1400" viewBox="0 0 1400 1400" className="opacity-30">
          <defs>
            {/* Metallic gradient for structure */}
            <linearGradient id="titanium-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(140, 150, 160, 0.4)" />
              <stop offset="50%" stopColor="rgba(120, 130, 140, 0.5)" />
              <stop offset="100%" stopColor="rgba(140, 150, 160, 0.4)" />
            </linearGradient>

            {/* Cyan accent for electrical lines */}
            <linearGradient id="cyan-circuit" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(40, 70, 120, 0)" />
              <stop offset="50%" stopColor="rgba(50, 85, 140, 0.8)" />
              <stop offset="100%" stopColor="rgba(40, 70, 120, 0)" />
            </linearGradient>

            {/* Precision etching filter */}
            <filter id="precision-etch">
              <feGaussianBlur stdDeviation="0.3" />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 1" />
              </feComponentTransfer>
            </filter>

            {/* Ambient occlusion shadow */}
            <radialGradient id="ao-shadow">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0)" />
              <stop offset="70%" stopColor="rgba(0, 0, 0, 0.3)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.5)" />
            </radialGradient>
          </defs>

          {/* Ambient occlusion base */}
          <ellipse cx="700" cy="700" rx="600" ry="400" fill="url(#ao-shadow)" opacity="0.4" />

          {/* Central hexagonal core structure */}
          <g transform="translate(700, 700)">
            {/* Primary hexagon frame */}
            <motion.path
              d="M 0,-200 L 173,-100 L 173,100 L 0,200 L -173,100 L -173,-100 Z"
              fill="none"
              stroke="url(#titanium-gradient)"
              strokeWidth="3"
              filter="url(#precision-etch)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Secondary hexagon (inner) */}
            <motion.path
              d="M 0,-120 L 104,-60 L 104,60 L 0,120 L -104,60 L -104,-60 Z"
              fill="none"
              stroke="url(#titanium-gradient)"
              strokeWidth="1.5"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Tertiary hexagon (innermost) */}
            <motion.path
              d="M 0,-60 L 52,-30 L 52,30 L 0,60 L -52,30 L -52,-30 Z"
              fill="rgba(20, 25, 30, 0.8)"
              stroke="url(#cyan-circuit)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Radial support beams */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = Math.cos(rad) * 60;
              const y1 = Math.sin(rad) * 60;
              const x2 = Math.cos(rad) * 200;
              const y2 = Math.sin(rad) * 200;
              
              return (
                <motion.line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#titanium-gradient)"
                  strokeWidth="1"
                  opacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              );
            })}

            {/* Cross-bracing (diagonal supports) */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const nextRad = ((angle + 60) * Math.PI) / 180;
              
              const x1 = Math.cos(rad) * 120;
              const y1 = Math.sin(rad) * 120;
              const x2 = Math.cos(nextRad) * 120;
              const y2 = Math.sin(nextRad) * 120;
              
              return (
                <motion.line
                  key={`cross-${angle}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#titanium-gradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1.2, delay: 1.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              );
            })}

            {/* Corner junction nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * 173;
              const y = Math.sin(rad) * 100;
              
              return (
                <motion.g key={`node-${angle}`}>
                  {/* Node circle */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="rgba(20, 25, 30, 1)"
                    stroke="url(#cyan-circuit)"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 + i * 0.1 }}
                  />
                  
                  {/* Node glow */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="0.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ 
                      duration: 3,
                      delay: 2 + i * 0.15,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.g>
              );
            })}

            {/* Center hub detail */}
            <motion.circle
              cx="0"
              cy="0"
              r="12"
              fill="rgba(6, 182, 212, 0.15)"
              stroke="url(#cyan-circuit)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Micro ventilation details (tiny circles) */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const radius = 30 + (i % 2) * 10;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.circle
                  key={`vent-${i}`}
                  cx={x}
                  cy={y}
                  r="1"
                  fill="rgba(6, 182, 212, 0.4)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ 
                    duration: 2,
                    delay: 2 + i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}

            {/* Electrical circuit traces */}
            <motion.path
              d="M -52,-30 L -80,-30 L -80,0 L -120,0"
              fill="none"
              stroke="url(#cyan-circuit)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.path
              d="M 52,30 L 80,30 L 80,0 L 120,0"
              fill="none"
              stroke="url(#cyan-circuit)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </g>

          {/* Outer technical annotations (blueprint style) */}
          {[
            { x: 200, y: 400, label: 'NODE-A' },
            { x: 1200, y: 400, label: 'NODE-B' },
            { x: 200, y: 1000, label: 'NODE-C' },
            { x: 1200, y: 1000, label: 'NODE-D' },
          ].map((node, i) => (
            <motion.g
              key={node.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 2.5 + i * 0.15 }}
            >
              <line x1={node.x} y1={node.y} x2={node.x + 40} y2={node.y} stroke="rgba(180, 190, 200, 0.3)" strokeWidth="0.5" />
              <text 
                x={node.x + 45} 
                y={node.y + 4} 
                fill="rgba(180, 190, 200, 0.5)" 
                fontSize="10" 
                fontFamily="monospace"
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}