import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';

export function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.4 }}
      className="flex flex-wrap gap-6 justify-center"
    >
      {/* Primary CTA */}
      <motion.button
        className="group relative px-8 py-4 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg border border-cyan-400/40" />
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Button background */}
        <div className="absolute inset-0 bg-cyan-400/5 backdrop-blur-sm rounded-lg" />
        
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15), transparent)',
            filter: 'blur(20px)',
          }}
        />
        
        {/* Button content */}
        <div className="relative flex items-center gap-3">
          <span className="text-white tracking-wider uppercase text-sm">
            Explore Projects
          </span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.button>
      
      {/* Secondary CTA */}
      <motion.button
        className="group relative px-8 py-4 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Border */}
        <div className="absolute inset-0 rounded-lg border border-white/20" />
        
        {/* Button background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg" />
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(251, 146, 60, 0.1))',
          }}
        />
        
        {/* Button content */}
        <div className="relative flex items-center gap-3">
          <FileText className="w-4 h-4 text-gray-300" />
          <span className="text-gray-200 tracking-wider uppercase text-sm">
            Insights & Architecture
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}
