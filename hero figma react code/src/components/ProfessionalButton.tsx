import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ProfessionalButtonProps {
  children: ReactNode;
  href: string;
  primary?: boolean;
}

export function ProfessionalButton({ children, href, primary }: ProfessionalButtonProps) {
  if (primary) {
    return (
      <motion.a
        href={href}
        className="group relative px-9 py-4 rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
          fontWeight: 600,
          fontSize: '15px',
          color: '#FFFFFF',
          display: 'inline-block',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {/* Top highlight */}
        <div 
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
          }}
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <span className="relative flex items-center gap-2">
          {children}
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.3 }}
          >
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      className="group relative px-9 py-4 rounded-lg overflow-hidden"
      style={{
        border: '1px solid rgba(139, 92, 246, 0.2)',
        background: 'rgba(139, 92, 246, 0.03)',
        fontWeight: 600,
        fontSize: '15px',
        color: '#FFFFFF',
        display: 'inline-block',
      }}
      whileHover={{
        scale: 1.02,
        borderColor: 'rgba(139, 92, 246, 0.4)',
        background: 'rgba(139, 92, 246, 0.08)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 0 1px rgba(139, 92, 246, 0)',
        }}
        whileHover={{
          boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      />

      <span className="relative flex items-center gap-2">
        {children}
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M6 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </span>
    </motion.a>
  );
}
