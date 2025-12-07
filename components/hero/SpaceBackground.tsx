import { motion } from 'framer-motion';

export function SpaceBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Base gradient - portfolio colors */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(90deg, #161a31 0%, #06091f 100%)',
                }}
            />

            {/* Grid pattern overlay - subtle */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* White spotlight - top center */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Purple spotlight - left */}
            <motion.div
                className="absolute top-0 left-0 w-[900px] h-[900px]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.3) 0%, rgba(59, 7, 100, 0.18) 30%, transparent 70%)',
                    filter: 'blur(120px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [-50, 0, -50],
                    y: [-50, 0, -50],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Very Dark Blue spotlight - right */}
            <motion.div
                className="absolute top-0 right-0 w-[1000px] h-[1000px]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(23, 37, 84, 0.3) 0%, rgba(15, 23, 42, 0.15) 30%, transparent 70%)',
                    filter: 'blur(130px)',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.7, 0.5],
                    x: [50, 0, 50],
                    y: [-30, 30, -30],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Purple-Dark Blue mixed spotlight - bottom */}
            <motion.div
                className="absolute bottom-0 left-1/3 w-[800px] h-[800px]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.22) 0%, rgba(23, 37, 84, 0.15) 40%, transparent 70%)',
                    filter: 'blur(110px)',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Stars - small particles */}
            {[...Array(100)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: Math.random() < 0.7 ? '1px' : '2px',
                        height: Math.random() < 0.7 ? '1px' : '2px',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.7 + 0.3,
                    }}
                    animate={{
                        opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.8 + 0.4, Math.random() * 0.5 + 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Larger stars with colored glows (white, purple, very dark blue) */}
            {[...Array(20)].map((_, i) => {
                const colors = [
                    { glow: 'rgba(255, 255, 255, 0.8)', accent: 'rgba(255, 255, 255, 0.4)' },
                    { glow: 'rgba(88, 28, 135, 0.9)', accent: 'rgba(59, 7, 100, 0.6)' },
                    { glow: 'rgba(23, 37, 84, 0.9)', accent: 'rgba(15, 23, 42, 0.5)' },
                ];
                const color = colors[i % 3];

                return (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: Math.random() * 3,
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full bg-white"
                            style={{
                                boxShadow: `0 0 8px ${color.glow}, 0 0 15px ${color.accent}`,
                            }}
                        />
                    </motion.div>
                );
            })}

            {/* Large decorative star - bottom right */}
            <motion.div
                className="hidden md:block absolute bottom-12 right-12"
                animate={{
                    rotate: 360,
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
            >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path
                        d="M30 0 L32 28 L60 30 L32 32 L30 60 L28 32 L0 30 L28 28 Z"
                        fill="white"
                        opacity="0.6"
                        style={{
                            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                        }}
                    />
                </svg>
            </motion.div>
        </div>
    );
}
