import { motion } from 'motion/react';
import { SpaceBackground } from './SpaceBackground';
import { NetworkSphere } from './NetworkSphere';
import { TechIcons } from './TechIcons';
import { CosmicButtons } from './CosmicButtons';

export function CosmicHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#000319]">
      {/* Cosmic space background with nebulas */}
      <SpaceBackground />
      
      {/* 3D Network Mesh Sphere */}
      <NetworkSphere />
      
      {/* Floating tech icon badges */}
      <TechIcons />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <div className="text-[#BEC1DD]/60 text-xs tracking-[0.3em] uppercase">
            Full-Stack Cloud Architect
          </div>
        </motion.div>
        
        {/* Main Name - Massive gradient with 3D effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mb-12 text-center"
          style={{
            fontSize: 'clamp(3rem, 12vw, 9rem)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          <span 
            className="block bg-gradient-to-b from-white via-purple-900 to-blue-950 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(88, 28, 135, 0.5)) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))',
            }}
          >
            Hadi Noureddine
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-3xl text-center mb-36"
        >
          <p className="text-[#C1C2D3] text-base md:text-lg">
            Engineering scalable cloud infrastructure and distributed systems{' '}
            <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-400 bg-clip-text text-transparent">
              with architectural precision
            </span>
          </p>
        </motion.div>
        
        {/* CTA Buttons - Moved lower with more margin */}
        <div className="mt-20">
          <CosmicButtons />
        </div>
        
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center gap-24"
        >
          <div className="text-center">
            <div className="text-4xl mb-2 tracking-tight bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-400 bg-clip-text text-transparent">10+</div>
            <div className="text-[10px] text-[#BEC1DD]/50 uppercase tracking-[0.2em]">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 tracking-tight bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-400 bg-clip-text text-transparent">50+</div>
            <div className="text-[10px] text-[#BEC1DD]/50 uppercase tracking-[0.2em]">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 tracking-tight bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-400 bg-clip-text text-transparent">99.9%</div>
            <div className="text-[10px] text-[#BEC1DD]/50 uppercase tracking-[0.2em]">Uptime SLA</div>
          </div>
        </motion.div>
      </div>
      
      {/* Large decorative star - bottom right */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        animate={{
          rotate: 360,
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M40 0 L42 38 L80 40 L42 42 L40 80 L38 42 L0 40 L38 38 Z"
            fill="white"
            opacity="0.7"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))',
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}