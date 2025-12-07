import { motion, useMotionValue, useTransform, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CinematicBackground } from './CinematicBackground';
import { OrbitalAvatar } from './OrbitalAvatar';
import { TechBadgeGrid } from './TechBadgeGrid';
import { CTAButton } from './CTAButton';
import { FloatingParticles } from './FloatingParticles';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasLoaded, setHasLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger load animation
    setTimeout(() => setHasLoaded(true), 100);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-20">
      {/* Cinematic Background Layers */}
      <CinematicBackground mousePosition={mousePosition} reducedMotion={!!prefersReducedMotion} />
      
      {/* Floating Particles */}
      {!prefersReducedMotion && <FloatingParticles />}

      {/* Cursor Glow Effect */}
      {!prefersReducedMotion && (
        <motion.div
          className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-10"
          style={{
            left: mouseX,
            top: mouseY,
            x: '-50%',
            y: '-50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      )}

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-4xl mx-auto">
        
        {/* Centered Layout */}
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Orbital Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={hasLoaded ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
            transition={{ 
              duration: 1.4, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 
            }}
          >
            <OrbitalAvatar mousePosition={mousePosition} reducedMotion={!!prefersReducedMotion} />
          </motion.div>

          {/* Name - Dramatic Typography */}
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight relative"
              initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
              animate={hasLoaded ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(20px)' }}
              transition={{ 
                duration: 1.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5 
              }}
            >
              <span className="text-white">Hadi </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 25%, #6366F1 50%, #3B82F6 75%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Noureddine
              </span>
            </motion.h1>

            {/* Tagline with Colored Keywords */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8 
              }}
            >
              <span className="text-white/80">Crafting </span>
              <span className="text-[#10B981] font-medium">Scalable Solutions</span>
              <span className="text-white/80"> from </span>
              <span className="text-[#3B82F6] font-medium">Frontend</span>
              <span className="text-white/80"> to </span>
              <span className="text-[#8B5CF6] font-medium">Backend</span>
              <span className="text-white/80"> to </span>
              <span className="text-[#F59E0B] font-medium">Cloud</span>
            </motion.p>
          </div>

          {/* Tech Badge Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.1 
            }}
          >
            <TechBadgeGrid reducedMotion={!!prefersReducedMotion} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.4 
            }}
          >
            <CTAButton variant="primary">
              View My Work
            </CTAButton>
            <CTAButton variant="secondary">
              Download Resume
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}