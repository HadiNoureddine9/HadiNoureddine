import { motion } from 'motion/react';

export function ProfileIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
    >
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          width: '120px',
          height: '120px',
          background: 'conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.6), transparent)',
          filter: 'blur(8px)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          width: '120px',
          height: '120px',
          background: 'conic-gradient(from 180deg, transparent, rgba(251, 146, 60, 0.4), transparent)',
          filter: 'blur(6px)',
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Profile circle */}
      <div className="relative w-[100px] h-[100px] rounded-full border-2 border-cyan-400/30 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(251, 146, 60, 0.1))',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 40px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-4xl text-white"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
            }}
          >
            HN
          </span>
        </div>
        
        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(6, 182, 212, 0.2) 50%, transparent 60%)',
          }}
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      
      {/* Pulsing glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
