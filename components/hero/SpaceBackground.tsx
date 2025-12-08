import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

// Deterministic random number generator based on seed
// This ensures server and client render exactly the same output
const random = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

export function SpaceBackground() {
    const prefersReducedMotion = useReducedMotion();
    
    const colors = useMemo(() => [
        { glow: 'rgba(255, 255, 255, 0.8)', accent: 'rgba(255, 255, 255, 0.4)' },
        { glow: 'rgba(88, 28, 135, 0.9)', accent: 'rgba(59, 7, 100, 0.6)' },
        { glow: 'rgba(23, 37, 84, 0.9)', accent: 'rgba(15, 23, 42, 0.5)' },
    ], []);

    // Reduce stars count for better performance (from 100 to 40)
    const smallStars = useMemo(() => {
        return Array.from({ length: 40 }, (_, i) => {
            const width = random(i * 13) < 0.7 ? '1px' : '2px';
            const height = random(i * 17) < 0.7 ? '1px' : '2px';
            const left = `${random(i * 23) * 100}%`;
            const top = `${random(i * 29) * 100}%`;
            const opacity = random(i * 31) * 0.7 + 0.3;
            const duration = random(i * 37) * 3 + 2;
            const delay = random(i * 41) * 2;
            return { width, height, left, top, opacity, duration, delay, i };
        });
    }, []);

    // Reduce larger stars (from 20 to 10)
    const largeStars = useMemo(() => {
        return Array.from({ length: 10 }, (_, i) => {
            const colorIndex = i % 3;
            const color = colors[colorIndex];
            const left = `${random(i * 53) * 100}%`;
            const top = `${random(i * 59) * 100}%`;
            const duration = random(i * 61) * 4 + 3;
            const delay = random(i * 67) * 3;
            return { color, left, top, duration, delay, i };
        });
    }, [colors]);

    return (
        <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'transform' }}>
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
                    willChange: 'transform, opacity',
                }}
                animate={prefersReducedMotion ? {} : {
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
                    willChange: 'transform, opacity',
                }}
                animate={prefersReducedMotion ? {} : {
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
                    willChange: 'transform, opacity',
                }}
                animate={prefersReducedMotion ? {} : {
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
                    willChange: 'transform, opacity',
                }}
                animate={prefersReducedMotion ? {} : {
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

            {/* Stars - small particles - reduced count and optimized */}
            {smallStars.map((star) => (
                <motion.div
                    key={star.i}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: star.width,
                        height: star.height,
                        left: star.left,
                        top: star.top,
                        opacity: star.opacity,
                        willChange: 'opacity',
                    }}
                    animate={prefersReducedMotion ? {} : {
                        opacity: [star.opacity, random(star.i * 43) * 0.8 + 0.4, star.opacity],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: star.delay,
                    }}
                />
            ))}

            {/* Larger stars with colored glows - reduced count */}
            {largeStars.map((star) => (
                <motion.div
                    key={`star-${star.i}`}
                    className="absolute"
                    style={{
                        left: star.left,
                        top: star.top,
                        willChange: 'transform, opacity',
                    }}
                    animate={prefersReducedMotion ? {} : {
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: star.delay,
                    }}
                >
                    <div
                        className="w-2 h-2 rounded-full bg-white"
                        style={{
                            boxShadow: `0 0 8px ${star.color.glow}, 0 0 15px ${star.color.accent}`,
                        }}
                    />
                </motion.div>
            ))}

            {/* Large decorative star - bottom right */}
            <motion.div
                className="hidden md:block absolute bottom-12 right-12"
                style={{ willChange: 'transform, opacity' }}
                animate={prefersReducedMotion ? {} : {
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
