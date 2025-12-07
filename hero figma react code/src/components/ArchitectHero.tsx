import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { FloatingParticles } from './FloatingParticles';
import { LightRays } from './LightRays';
import { GeometricShapes } from './GeometricShapes';
import { DataStreams } from './DataStreams';
import { DepthGrid } from './DepthGrid';
import { TechStack } from './TechStack';
import { ProfessionalButton } from './ProfessionalButton';

export function ArchitectHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Cinematic scroll effects
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F]"
      style={{ opacity }}
    >
      {/* Multi-layer animated background */}
      <AnimatedBackground />
      <GeometricShapes />
      <LightRays />
      <FloatingParticles />
      
      {/* Sophisticated depth grid */}
      <DepthGrid scrollProgress={scrollYProgress} />

      {/* Data stream visualization */}
      <DataStreams />

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-12 text-center"
        style={{ scale, y }}
      >
        
        {/* Role indicator */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            <span 
              className="text-sm tracking-[0.2em] uppercase"
              style={{
                color: 'rgba(139, 92, 246, 0.8)',
                fontWeight: 500,
              }}
            >
              Full-Stack Cloud Architect
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
          </div>
        </motion.div>

        {/* Name - Clean reveal */}
        <motion.div className="mb-8">
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-white"
            style={{
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 0.95,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Hadi Noureddine
          </motion.h1>
          
          {/* Gradient underline */}
          <motion.div 
            className="h-1 mx-auto mt-6 rounded-full"
            style={{
              width: '200px',
              background: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Value proposition */}
        <motion.div
          className="mb-16 max-w-[750px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p 
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontWeight: 400,
            }}
          >
            Architecting scalable cloud infrastructure
            <br className="hidden sm:block" />
            and distributed systems that drive
            {' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              enterprise innovation
            </span>
          </p>
        </motion.div>

        {/* Tech stack */}
        <TechStack />

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProfessionalButton href="#work" primary>
            View Case Studies
          </ProfessionalButton>

          <ProfessionalButton href="#contact">
            Schedule Consultation
          </ProfessionalButton>
        </motion.div>
      </motion.div>

      {/* Bottom metrics bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 border-t border-white/5"
        style={{
          background: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-12">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Delivered' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 + i * 0.1 }}
            >
              <span 
                className="text-2xl"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                {stat.value}
              </span>
              <span 
                className="text-xs tracking-wider uppercase"
                style={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: 500 }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}