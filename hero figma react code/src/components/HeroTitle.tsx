import { motion } from 'motion/react';

interface HeroTitleProps {
  loaded: boolean;
}

export function HeroTitle({ loaded }: HeroTitleProps) {
  const firstName = "HADI";
  const lastName = "NOUREDDINE";

  return (
    <div className="relative z-30 flex flex-col items-center text-center space-y-8 py-20">
      {/* Name with staggered reveal */}
      <div className="space-y-4">
        {/* First Name */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl tracking-tight"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(255, 255, 255, 0.2)',
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: loaded ? 0 : 100, 
              opacity: loaded ? 1 : 0 
            }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {firstName.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 50 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Last Name with gradient */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl tracking-tight"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.5))',
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: loaded ? 0 : 100, 
              opacity: loaded ? 1 : 0 
            }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {lastName}
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="h-1 mt-4 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #6366F1 50%, transparent 100%)',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: loaded ? 1 : 0, opacity: loaded ? 1 : 0 }}
            transition={{
              duration: 1.5,
              delay: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>
      </div>

      {/* Tagline */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
        transition={{
          duration: 1,
          delay: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-white/70 leading-relaxed">
          <span className="text-white/90">Engineering </span>
          <span 
            className="font-medium"
            style={{
              background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            scalable cloud systems
          </span>
          <span className="text-white/90"> with </span>
          <span 
            className="font-medium"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            precision
          </span>
          <span className="text-white/90"> and </span>
          <span 
            className="font-medium"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            excellence
          </span>
        </p>
      </motion.div>

      {/* Role badge */}
      <motion.div
        className="px-6 py-3 rounded-full backdrop-blur-xl border border-white/10"
        style={{
          background: 'rgba(99, 102, 241, 0.1)',
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="text-sm tracking-widest text-purple-300 uppercase">
          Full-Stack Cloud Architect
        </span>
      </motion.div>
    </div>
  );
}
