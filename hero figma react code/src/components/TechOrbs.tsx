import { motion } from 'motion/react';
import { useState } from 'react';

interface TechOrbsProps {
  loaded: boolean;
}

export function TechOrbs({ loaded }: TechOrbsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const techs = [
    { name: 'React', color: '#61DAFB', gradient: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', color: '#3178C6', gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Node.js', color: '#339933', gradient: 'from-green-500 to-emerald-600' },
    { name: 'AWS', color: '#FF9900', gradient: 'from-orange-400 to-amber-500' },
    { name: 'Docker', color: '#2496ED', gradient: 'from-blue-400 to-sky-500' },
    { name: 'Python', color: '#3776AB', gradient: 'from-blue-600 to-indigo-700' },
  ];

  return (
    <div className="relative z-30 flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto mt-12">
      {techs.map((tech, index) => {
        const isHovered = hoveredIndex === index;
        
        return (
          <motion.div
            key={tech.name}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0, y: 30 }}
            animate={{ 
              opacity: loaded ? 1 : 0, 
              scale: loaded ? 1 : 0,
              y: loaded ? 0 : 30,
            }}
            transition={{
              duration: 0.6,
              delay: 1.8 + index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.1, y: -4 }}
          >
            {/* Orb container */}
            <div 
              className={`px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300`}
              style={{
                borderColor: isHovered ? tech.color : 'rgba(255, 255, 255, 0.1)',
                background: isHovered 
                  ? `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)` 
                  : 'rgba(255, 255, 255, 0.03)',
                boxShadow: isHovered 
                  ? `0 8px 32px ${tech.color}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)` 
                  : '0 4px 16px rgba(0, 0, 0, 0.2)',
              }}
            >
              <span 
                className="text-sm tracking-wide transition-colors duration-300"
                style={{
                  color: isHovered ? tech.color : 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {tech.name}
              </span>
            </div>

            {/* Glow effect */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: `radial-gradient(circle, ${tech.color}40 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.4 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Ripple effect */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: tech.color,
                }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
