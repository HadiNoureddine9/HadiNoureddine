import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function NetworkSphere() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Check if we can get 2d context
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions
        const updateSize = () => {
            if (canvas) {
                // Use parent container dimensions if possible, or window
                // But for a background effect, window might be intended if it's fixed/absolute
                // The original code used window.innerWidth/Height
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);

        // Create nodes on a sphere surface
        const nodes: Array<{ x: number; y: number; z: number }> = [];
        const radius = Math.min(canvas.width, canvas.height) * 0.22;

        // Generate nodes using fibonacci sphere algorithm for even distribution
        const numNodes = 80;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const angleIncrement = Math.PI * 2 * goldenRatio;

        for (let i = 0; i < numNodes; i++) {
            const t = i / numNodes;
            const inclination = Math.acos(1 - 2 * t);
            const azimuth = angleIncrement * i;

            const x = radius * Math.sin(inclination) * Math.cos(azimuth);
            const y = radius * Math.sin(inclination) * Math.sin(azimuth);
            const z = radius * Math.cos(inclination);

            nodes.push({ x, y, z });
        }

        let rotation = 0;
        let animationFrameId: number;

        const drawSphere = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            rotation += 0.002;

            // Rotate nodes
            const rotatedNodes = nodes.map(node => {
                const cosR = Math.cos(rotation);
                const sinR = Math.sin(rotation);

                // Rotate around Y axis
                const x = node.x * cosR - node.z * sinR;
                const z = node.x * sinR + node.z * cosR;
                const y = node.y;

                return { x, y, z };
            });

            // Sort by z-depth for proper rendering
            const indexedNodes = rotatedNodes.map((node, index) => ({ ...node, index }));
            indexedNodes.sort((a, b) => a.z - b.z);

            // Draw connections first (behind nodes)
            ctx.lineWidth = 0.8;
            indexedNodes.forEach((nodeA, i) => {
                indexedNodes.forEach((nodeB, j) => {
                    if (i >= j) return;

                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const dz = nodeA.z - nodeB.z;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    // Connect nearby nodes
                    if (dist < radius * 0.7) {
                        const x1 = centerX + nodeA.x;
                        const y1 = centerY + nodeA.y;
                        const x2 = centerX + nodeB.x;
                        const y2 = centerY + nodeB.y;

                        // Calculate depth-based opacity
                        const avgZ = (nodeA.z + nodeB.z) / 2;
                        const depthFactor = (avgZ + radius) / (radius * 2);
                        const opacity = depthFactor * 0.3 + 0.05;

                        // Use gradient: purple → very dark blue → cyan
                        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                        const isBack = avgZ < 0;

                        if (isBack) {
                            gradient.addColorStop(0, `rgba(88, 28, 135, ${opacity * 0.5})`);
                            gradient.addColorStop(1, `rgba(88, 28, 135, ${opacity * 0.5})`);
                        } else {
                            gradient.addColorStop(0, `rgba(88, 28, 135, ${opacity})`);
                            gradient.addColorStop(0.5, `rgba(30, 58, 138, ${opacity})`);
                            gradient.addColorStop(1, `rgba(34, 211, 238, ${opacity})`);
                        }

                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.strokeStyle = gradient;
                        ctx.stroke();
                    }
                });
            });

            // Draw nodes
            indexedNodes.forEach(node => {
                const x = centerX + node.x;
                const y = centerY + node.y;
                const depthFactor = (node.z + radius) / (radius * 2);

                // Node size based on depth
                const size = 1.5 + depthFactor * 1.5;
                const opacity = 0.3 + depthFactor * 0.7;

                // Gradient color based on depth
                const isBack = node.z < 0;
                const color = isBack
                    ? `rgba(88, 28, 135, ${opacity * 0.6})`
                    : `rgba(30, 58, 138, ${opacity})`;

                // Draw glow
                const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
                glowGradient.addColorStop(0, color);
                glowGradient.addColorStop(1, 'transparent');
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(x, y, size * 4, 0, Math.PI * 2);
                ctx.fill();

                // Draw node
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Highlight some nodes as "connection points"
            const highlightIndices = [5, 15, 25, 35, 45, 55, 65, 75];
            highlightIndices.forEach(index => {
                if (index >= rotatedNodes.length) return;
                const node = rotatedNodes[index];
                const depthFactor = (node.z + radius) / (radius * 2);

                if (depthFactor > 0.5) {
                    const x = centerX + node.x;
                    const y = centerY + node.y;

                    // Animated glow - dark blue → cyan
                    const glowSize = 8 + Math.sin(Date.now() / 1000 + index) * 2;
                    const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
                    glowGradient.addColorStop(0, `rgba(30, 58, 138, ${depthFactor * 0.9})`);
                    glowGradient.addColorStop(0.5, `rgba(34, 211, 238, ${depthFactor * 0.4})`);
                    glowGradient.addColorStop(1, 'transparent');

                    ctx.fillStyle = glowGradient;
                    ctx.beginPath();
                    ctx.arc(x, y, glowSize, 0, Math.PI * 2);
                    ctx.fill();

                    // Bright center
                    ctx.fillStyle = `rgba(34, 211, 238, ${depthFactor})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(drawSphere);
        };

        drawSphere();

        return () => {
            window.removeEventListener('resize', updateSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ opacity: 0.85 }}
            />

            {/* Central glow - purple → very dark blue → cyan gradient */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                    width: 'min(700px, 100vw)',
                    height: 'min(700px, 100vw)',
                    background: 'radial-gradient(circle, rgba(88, 28, 135, 0.18) 0%, rgba(23, 37, 84, 0.12) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </>
    );
}
