import { motion } from 'motion/react';

const technologies = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'Container' },
  { name: 'Terraform', category: 'IaC' },
];

export function TechStack() {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <motion.div 
        className="flex items-center justify-center gap-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
        <span 
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: 'rgba(255, 255, 255, 0.3)', fontWeight: 500 }}
        >
          Technology Stack
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-4 max-w-[800px] mx-auto">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.3 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="relative px-5 py-2.5 rounded-lg border cursor-default overflow-hidden"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
              whileHover={{
                borderColor: 'rgba(139, 92, 246, 0.3)',
                background: 'rgba(139, 92, 246, 0.05)',
              }}
            >
              {/* Slide-in background on hover */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.05))',
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />

              <span 
                className="relative text-sm"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 500,
                }}
              >
                {tech.name}
              </span>

              {/* Category tooltip */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none"
                style={{
                  background: 'rgba(10, 10, 15, 0.95)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: 'rgba(139, 92, 246, 0.9)',
                }}
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {tech.category}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
