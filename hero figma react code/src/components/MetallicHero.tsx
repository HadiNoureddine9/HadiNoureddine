import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { BlueprintGrid } from './BlueprintGrid';
import { TopographicContours } from './TopographicContours';
import { ArchitecturalLattice } from './ArchitecturalLattice';
import { PrecisionButton } from './PrecisionButton';

export function MetallicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Minimal parallax (controlled, not chaotic)
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: '#0A0A0F',
        opacity,
      }}
    >
      {/* Ultra-detailed blueprint grid */}
      <BlueprintGrid />

      {/* Topographic contour animation */}
      <TopographicContours />

      {/* Central architectural lattice */}
      <ArchitecturalLattice />

      {/* Content layer */}
      <motion.div
        className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16 text-center"
        style={{ y }}
      >
        {/* Role indicator - minimal, sharp */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-1 h-1"
              style={{
                background: 'rgba(50, 85, 140, 0.7)',
                boxShadow: '0 0 8px rgba(50, 85, 140, 0.5)',
              }}
            />
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(180, 190, 200, 0.7)',
                fontWeight: 500,
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Full-Stack Cloud Architect
            </span>
            <div
              className="w-1 h-1"
              style={{
                background: 'rgba(50, 85, 140, 0.7)',
                boxShadow: '0 0 8px rgba(50, 85, 140, 0.5)',
              }}
            />
          </div>
        </motion.div>

        {/* Name - Brushed titanium typography */}
        <motion.div className="mb-10">
          <motion.h1
            style={{
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              color: '#FFFFFF',
              textShadow: `
                0 1px 0 rgba(255, 255, 255, 0.1),
                0 -1px 0 rgba(0, 0, 0, 0.5),
                0 4px 8px rgba(0, 0, 0, 0.6)
              `,
              background: 'linear-gradient(165deg, rgba(250, 250, 250, 1) 0%, rgba(200, 210, 220, 0.95) 50%, rgba(180, 190, 200, 0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Hadi Noureddine
          </motion.h1>

          {/* Precision underline with technical detail */}
          <motion.div
            className="relative mx-auto mt-8"
            style={{ width: '280px', height: '3px' }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main bar */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(6, 182, 212, 0) 0%, rgba(6, 182, 212, 0.5) 50%, rgba(6, 182, 212, 0) 100%)',
                boxShadow: '0 0 12px rgba(6, 182, 212, 0.3)',
              }}
            />
            {/* Technical notches */}
            {[0, 25, 50, 75, 100].map((pos) => (
              <div
                key={pos}
                className="absolute top-0 h-full w-px"
                style={{
                  left: `${pos}%`,
                  background: 'rgba(120, 130, 140, 0.3)',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Value proposition - razor sharp white */}
        <motion.div
          className="mb-20 max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: 400,
              letterSpacing: '0.01em',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Engineering scalable cloud infrastructure and distributed systems
            {' '}
            <span
              style={{
                color: 'rgba(60, 100, 160, 0.9)',
                fontWeight: 600,
              }}
            >
              with architectural precision
            </span>
          </p>
        </motion.div>

        {/* Tech stack - clean labels */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-[900px] mx-auto">
            {['AWS', 'Kubernetes', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Terraform'].map(
              (tech, i) => (
                <motion.div
                  key={tech}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.6 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className="px-6 py-2.5 relative"
                    style={{
                      background: 'linear-gradient(145deg, rgba(25, 30, 35, 0.6), rgba(18, 22, 26, 0.6))',
                      border: '1px solid rgba(100, 110, 120, 0.2)',
                      backdropFilter: 'blur(10px)',
                      clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'rgba(200, 210, 220, 0.9)',
                        letterSpacing: '0.03em',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                      }}
                    >
                      {tech}
                    </span>

                    {/* Hover accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{
                        background: 'rgba(50, 85, 140, 0)',
                      }}
                      whileHover={{
                        background: 'rgba(50, 85, 140, 0.6)',
                        boxShadow: '0 0 8px rgba(50, 85, 140, 0.4)',
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* CTAs - Heavy metal buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <PrecisionButton href="#work" primary>
            View Case Studies
          </PrecisionButton>

          <PrecisionButton href="#contact">
            Schedule Consultation
          </PrecisionButton>
        </motion.div>
      </motion.div>

      {/* Bottom status bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 18, 22, 0.9), rgba(10, 12, 15, 0.95))',
          borderTop: '1px solid rgba(100, 110, 120, 0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 -4px 12px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(20px)',
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-wrap items-center justify-center gap-16">
          {[
            { value: '10+', label: 'Years', unit: 'Experience' },
            { value: '50+', label: 'Projects', unit: 'Delivered' },
            { value: '99.9%', label: 'Uptime', unit: 'SLA' },
          ].map((stat, i) => (
            <motion.div
              key={stat.unit}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 + i * 0.15 }}
            >
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'rgba(60, 100, 160, 0.85)',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 12px rgba(50, 85, 140, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8)',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(140, 150, 160, 0.7)',
                }}
              >
                {stat.label} {stat.unit}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}