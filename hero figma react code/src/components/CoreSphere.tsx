import { motion } from 'motion/react';
import { useState } from 'react';

interface CoreSphereProps {
  mousePosition: { x: number; y: number };
}

export function CoreSphere({ mousePosition }: CoreSphereProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <motion.div
      className="relative w-80 h-80 flex items-center justify-center cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: isClicked ? 1.1 : 1,
        rotateX: mousePosition.y * 5,
        rotateY: mousePosition.x * 5,
      }}
      transition={{
        opacity: { duration: 1, delay: 0.6 },
        scale: { duration: 0.3 },
        rotateX: { type: 'spring', stiffness: 100, damping: 30 },
        rotateY: { type: 'spring', stiffness: 100, damping: 30 },
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Wireframe Sphere SVG */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        style={{
          filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.6))',
        }}
      >
        <defs>
          <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00D9FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Wireframe circles */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#sphereGradient)"
          strokeWidth="0.5"
          opacity="0.6"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="url(#sphereGradient)"
          strokeWidth="0.5"
          opacity="0.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="url(#sphereGradient)"
          strokeWidth="0.5"
          opacity="0.4"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Meridian lines */}
        <motion.ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="30"
          fill="none"
          stroke="url(#sphereGradient)"
          strokeWidth="0.5"
          opacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.ellipse
          cx="100"
          cy="100"
          rx="30"
          ry="80"
          fill="none"
          stroke="url(#sphereGradient)"
          strokeWidth="0.5"
          opacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />

        {/* Grid pattern overlay */}
        <motion.path
          d="M 100 20 Q 120 60 100 100 T 100 180"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="0.3"
          opacity="0.2"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          strokeDasharray="5 5"
        />
      </svg>

      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 rounded-full opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          clipPath: 'circle(40% at 50% 50%)',
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Click burst effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}
    </motion.div>
  );
}
