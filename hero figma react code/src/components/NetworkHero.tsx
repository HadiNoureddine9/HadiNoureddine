import { motion } from 'motion/react';
import { NetworkGrid } from './NetworkGrid';
import { FloatingIcons } from './FloatingIcons';
import { ProfileIcon } from './ProfileIcon';
import { CTAButtons } from './CTAButtons';
import { VolumetricLighting } from './VolumetricLighting';

export function NetworkHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Deep ambient background with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a1a2e]" />
      
      {/* Volumetric lighting beams */}
      <VolumetricLighting />
      
      {/* 3D Network Grid */}
      <NetworkGrid />
      
      {/* Floating holographic icons */}
      <FloatingIcons />
      
      {/* Depth of field blur overlay on edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 backdrop-blur-[2px] opacity-40"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 100%)',
          }}
        />
      </div>
      
      {/* Hero Content - Sharp foreground */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="text-cyan-400 text-xs tracking-[0.3em] uppercase opacity-70">
            Full-Stack Cloud Architect
          </div>
        </motion.div>
        
        {/* Profile Icon */}
        <ProfileIcon />
        
        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-8 mb-6"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontFamily: 'Montserrat, system-ui, sans-serif',
            letterSpacing: '-0.02em',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(6, 182, 212, 0.2)',
          }}
        >
          <span className="bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Hadi Noureddin
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-4xl text-center mb-16"
        >
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Engineering scalable cloud infrastructure and distributed systems{' '}
            <span className="text-cyan-400">with architectural precision</span>
          </p>
        </motion.div>
        
        {/* CTA Buttons */}
        <CTAButtons />
        
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center gap-16"
        >
          <div className="text-center">
            <div className="text-3xl mb-1" style={{ color: '#06b6d4' }}>10+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1" style={{ color: '#06b6d4' }}>50+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1" style={{ color: '#06b6d4' }}>99.9%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Uptime SLA</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
