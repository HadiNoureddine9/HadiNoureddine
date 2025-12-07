import { motion } from 'motion/react';
import { Cloud, Database, BarChart3, Clock, Video, GitBranch, Box, Activity } from 'lucide-react';

const techIcons = [
  { Icon: Cloud, label: 'AWS', x: '12%', y: '48%', delay: 0 },
  { Icon: BarChart3, label: 'Tableau', x: '18%', y: '56%', delay: 0.1 },
  { Icon: Cloud, label: 'AWS', x: '26%', y: '62%', delay: 0.2 },
  { Icon: Clock, label: 'Terraform', x: '38%', y: '66%', delay: 0.3 },
  { Icon: BarChart3, label: 'Analytics', x: '50%', y: '68%', delay: 0.4 },
  { Icon: Video, label: 'Docker', x: '62%', y: '66%', delay: 0.5 },
  { Icon: Database, label: 'Docker', x: '74%', y: '62%', delay: 0.6 },
  { Icon: Activity, label: 'Git', x: '82%', y: '56%', delay: 0.7 },
  { Icon: GitBranch, label: 'CI/CD', x: '88%', y: '48%', delay: 0.8 },
];

export function TechIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.3, y: 40 }}
          animate={{ 
            opacity: 0.9,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: item.delay + 0.5,
            ease: 'easeOut',
          }}
        >
          {/* Floating animation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + index * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            {/* Glow effect - gradient purple → blue */}
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(88, 28, 135, 0.4), rgba(23, 37, 84, 0.28), transparent 70%)',
                filter: 'blur(25px)',
                transform: 'scale(2.5)',
              }}
            />
            
            {/* Icon container - gradient background */}
            <div
              className="relative px-5 py-4 rounded-xl border backdrop-blur-md flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.14), rgba(23, 37, 84, 0.1))',
                borderColor: 'rgba(30, 58, 138, 0.5)',
                boxShadow: '0 0 30px rgba(30, 58, 138, 0.25), inset 0 0 30px rgba(255, 255, 255, 0.05)',
                minWidth: '80px',
              }}
            >
              <item.Icon 
                className="w-5 h-5"
                strokeWidth={1.5}
                style={{
                  color: '#1e3a8a',
                  filter: 'drop-shadow(0 0 8px rgba(30, 58, 138, 0.7))',
                }}
              />
              <div 
                className="text-xs tracking-wide"
                style={{ color: '#BEC1DD' }}
              >
                {item.label}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}