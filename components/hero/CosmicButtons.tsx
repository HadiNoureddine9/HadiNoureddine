import { motion } from 'framer-motion';
import { LuArrowRight, LuCalendar } from 'react-icons/lu';

export function CosmicButtons() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap gap-6 justify-center z-20"
        >
            {/* Primary CTA - Purple → Very Dark Blue gradient */}
            <motion.button
                className="group relative px-8 py-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                {/* Gradient background: purple → very dark blue */}
                <div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-900 via-blue-900 to-blue-950"
                />

                {/* Animated shine */}
                <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    }}
                    animate={{
                        x: ['-200%', '200%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Hover glow - purple */}
                <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.5), transparent)',
                        filter: 'blur(20px)',
                    }}
                />

                {/* Button content */}
                <div className="relative flex items-center gap-3">
                    <span className="text-white tracking-wide text-sm">
                        View Case Studies
                    </span>
                    <LuArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
            </motion.button>

            {/* Secondary CTA - Gradient border */}
            <motion.button
                className="group relative px-8 py-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                {/* Gradient border wrapper */}
                <div
                    className="absolute inset-0 rounded-lg p-[2px]"
                    style={{
                        background: 'linear-gradient(135deg, #581c87, #172554, #22d3ee)',
                    }}
                >
                    <div className="w-full h-full rounded-lg bg-[#000319]" />
                </div>

                {/* Hover fill */}
                <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                        background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.15), rgba(23, 37, 84, 0.15))',
                    }}
                />

                {/* Button content */}
                <div className="relative flex items-center gap-3">
                    <LuCalendar className="w-4 h-4 text-blue-900" />
                    <span className="tracking-wide text-sm text-[#BEC1DD]">
                        Schedule Consultation
                    </span>
                </div>
            </motion.button>
        </motion.div>
    );
}
