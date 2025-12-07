import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PrecisionButtonProps {
  children: ReactNode;
  href: string;
  primary?: boolean;
}

export function PrecisionButton({ children, href, primary }: PrecisionButtonProps) {
  return (
    <motion.a
      href={href}
      className="group relative inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative px-10 py-4 overflow-hidden"
        style={{
          background: primary
            ? 'linear-gradient(145deg, rgba(30, 35, 40, 1), rgba(20, 24, 28, 1))'
            : 'linear-gradient(145deg, rgba(20, 25, 30, 0.9), rgba(12, 15, 18, 0.9))',
          border: primary 
            ? '1px solid rgba(100, 110, 120, 0.35)'
            : '1px solid rgba(60, 70, 80, 0.3)',
          boxShadow: primary
            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'
            : 'inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 2px 8px rgba(0, 0, 0, 0.3)',
          clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
        }}
      >
        {/* Top bevel highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
          }}
        />

        {/* Bottom bevel shadow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5), transparent)',
          }}
        />

        {/* Brushed metal texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='1' viewBox='0 0 100 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='100' y2='0' stroke='white' stroke-width='1' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 2px',
            backgroundRepeat: 'repeat-y',
          }}
        />

        {/* Cyan accent border (appears on hover) */}
        <motion.div
          className="absolute inset-0"
          style={{
            border: '1px solid rgba(50, 85, 140, 0)',
            clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
          }}
          whileHover={{
            borderColor: 'rgba(50, 85, 140, 0.5)',
            boxShadow: '0 0 20px rgba(50, 85, 140, 0.2), inset 0 0 20px rgba(50, 85, 140, 0.08)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Text */}
        <span
          className="relative flex items-center gap-3 text-white"
          style={{
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '0.05em',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
          }}
        >
          {children}
          
          {/* Arrow icon */}
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="opacity-70"
            whileHover={{ x: 3, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <path
              d="M5 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </motion.svg>
        </span>

        {/* Corner notches */}
        <div
          className="absolute top-0 left-0 w-2 h-2"
          style={{
            borderTop: '1px solid rgba(50, 85, 140, 0.3)',
            borderLeft: '1px solid rgba(50, 85, 140, 0.3)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-2 h-2"
          style={{
            borderBottom: '1px solid rgba(50, 85, 140, 0.3)',
            borderRight: '1px solid rgba(50, 85, 140, 0.3)',
          }}
        />
      </div>
    </motion.a>
  );
}