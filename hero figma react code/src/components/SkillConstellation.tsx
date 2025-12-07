import { motion } from 'motion/react';
import { useState } from 'react';

interface SkillConstellationProps {
  bootComplete: boolean;
  mousePosition: { x: number; y: number };
}

interface Skill {
  name: string;
  icon: string;
  angle: number;
  radius: number;
  color: string;
  description: string;
}

export function SkillConstellation({ bootComplete, mousePosition }: SkillConstellationProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: 'REACT', icon: '⚛️', angle: 0, radius: 280, color: '#61DAFB', description: 'Frontend Framework' },
    { name: 'TYPESCRIPT', icon: 'TS', angle: 45, radius: 320, color: '#3178C6', description: 'Type Safety' },
    { name: 'NODE.JS', icon: 'N', angle: 90, radius: 300, color: '#339933', description: 'Backend Runtime' },
    { name: 'AWS', icon: '☁️', angle: 135, radius: 340, color: '#FF9900', description: 'Cloud Infrastructure' },
    { name: 'DOCKER', icon: '🐳', angle: 180, radius: 290, color: '#2496ED', description: 'Containerization' },
    { name: 'K8S', icon: '☸️', angle: 225, radius: 310, color: '#326CE5', description: 'Orchestration' },
    { name: 'PYTHON', icon: '🐍', angle: 270, radius: 330, color: '#3776AB', description: 'Automation' },
    { name: 'TERRAFORM', icon: 'TF', angle: 315, radius: 300, color: '#7B42BC', description: 'IaC' },
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {skills.map((skill, index) => {
        const isHovered = hoveredSkill === skill.name;
        const radian = (skill.angle * Math.PI) / 180;
        const x = Math.cos(radian) * skill.radius;
        const y = Math.sin(radian) * skill.radius;

        return (
          <motion.div
            key={skill.name}
            className="absolute"
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: bootComplete ? x : 0,
              y: bootComplete ? y : 0,
              scale: bootComplete ? (isHovered ? 1.15 : 1) : 0,
              opacity: bootComplete ? 1 : 0,
              rotate: bootComplete ? 360 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 3.2 + index * 0.1,
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                delay: 3.2 + index * 0.1,
              },
              scale: {
                duration: 0.3,
              },
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              filter: isHovered ? `drop-shadow(0 0 20px ${skill.color})` : 'none',
            }}
          >
            {/* Skill Node */}
            <div 
              className="relative w-14 h-14 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300"
              style={{
                background: `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.15)`,
                boxShadow: isHovered ? `0 0 30px ${skill.color}60` : `0 4px 16px rgba(0,0,0,0.3)`,
              }}
            >
              <span className="text-lg">{skill.icon}</span>

              {/* Connection line to center when hovered */}
              {isHovered && (
                <motion.div
                  className="absolute w-px h-full origin-center"
                  style={{
                    background: `linear-gradient(to bottom, ${skill.color}, transparent)`,
                    transform: `rotate(${-skill.angle + 90}deg)`,
                    top: '50%',
                    left: '50%',
                    transformOrigin: 'top center',
                    height: `${skill.radius}px`,
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>

            {/* Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span 
                className="text-xs tracking-wider"
                style={{ 
                  color: skill.color,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {skill.name}
              </span>
            </div>

            {/* Tooltip on hover */}
            {isHovered && (
              <motion.div
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg backdrop-blur-xl border border-white/20 whitespace-nowrap"
                style={{
                  background: 'rgba(10, 14, 26, 0.9)',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs text-[#9CA3AF]">{skill.description}</span>
              </motion.div>
            )}

            {/* Orbit glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px solid ${skill.color}40`,
              }}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.5, 0, 0.5] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        );
      })}

      {/* Central connecting point */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
        initial={{ scale: 0 }}
        animate={{ scale: bootComplete ? 1 : 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        style={{
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
        }}
      />
    </div>
  );
}
