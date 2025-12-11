import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useMemo, useCallback } from 'react';

export function NetworkSphere() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const animationFrameRef = useRef<number>();
    const rotationRef = useRef(0);

    // Debounce resize handler
    const debounce = useCallback((func: () => void, wait: number) => {
        let timeout: NodeJS.Timeout;
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }, []);

    // Generate nodes once - reduced from 80 to 50 for better performance
    const nodes = useMemo(() => {
        const nodeArray: Array<{ x: number; y: number; z: number }> = [];
        const isClient = typeof window !== "undefined";
        // Use a safe fallback during SSR to avoid window access
        const radius = isClient
            ? Math.min(window.innerWidth || 1920, window.innerHeight || 1080) * 0.22
            : 300;
        const numNodes = 50; // Reduced from 80
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const angleIncrement = Math.PI * 2 * goldenRatio;

        for (let i = 0; i < numNodes; i++) {
            const t = i / numNodes;
            const inclination = Math.acos(1 - 2 * t);
            const azimuth = angleIncrement * i;

            const x = radius * Math.sin(inclination) * Math.cos(azimuth);
            const y = radius * Math.sin(inclination) * Math.sin(azimuth);
            const z = radius * Math.cos(inclination);

            nodeArray.push({ x, y, z });
        }

        return { nodeArray, radius };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas dimensions
        const updateSize = () => {
            if (canvas) {
                const dpr = window.devicePixelRatio || 1;
                const width = window.innerWidth;
                const height = window.innerHeight;
                
                // Set actual size in memory (scaled for DPR)
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                
                // Scale the canvas back down using CSS
                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';
                
                // Scale the drawing context so everything draws at the correct size
                ctx.scale(dpr, dpr);
            }
        };
        
        updateSize();
        const debouncedResize = debounce(updateSize, 250);
        window.addEventListener('resize', debouncedResize);

        if (prefersReducedMotion) {
            // Static rendering for reduced motion
            const drawStatic = () => {
                if (!ctx || !canvas) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const centerX = (canvas.width / (window.devicePixelRatio || 1)) / 2;
                const centerY = (canvas.height / (window.devicePixelRatio || 1)) / 2;
                
                // Draw static connections
                ctx.lineWidth = 0.8;
                const connectionDistance = nodes.radius * 0.7;
                
                for (let i = 0; i < nodes.nodeArray.length; i++) {
                    for (let j = i + 1; j < nodes.nodeArray.length; j++) {
                        const nodeA = nodes.nodeArray[i];
                        const nodeB = nodes.nodeArray[j];
                        
                        const dx = nodeA.x - nodeB.x;
                        const dy = nodeA.y - nodeB.y;
                        const dz = nodeA.z - nodeB.z;
                        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                        
                        if (dist < connectionDistance) {
                            const x1 = centerX + nodeA.x;
                            const y1 = centerY + nodeA.y;
                            const x2 = centerX + nodeB.x;
                            const y2 = centerY + nodeB.y;
                            
                            ctx.strokeStyle = `rgba(88, 28, 135, 0.2)`;
                            ctx.beginPath();
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                            ctx.stroke();
                        }
                    }
                }
                
                // Draw static nodes
                nodes.nodeArray.forEach(node => {
                    const x = centerX + node.x;
                    const y = centerY + node.y;
                    const depthFactor = (node.z + nodes.radius) / (nodes.radius * 2);
                    const size = 1.5 + depthFactor * 1.5;
                    const opacity = 0.3 + depthFactor * 0.7;
                    const color = `rgba(30, 58, 138, ${opacity})`;
                    
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                });
            };
            
            drawStatic();
            
            return () => {
                window.removeEventListener('resize', debouncedResize);
            };
        }

        let lastTime = 0;
        const targetFPS = 30; // Reduce from 60 to 30 FPS
        const frameInterval = 1000 / targetFPS;

        const drawSphere = (currentTime: number) => {
            if (!ctx || !canvas) return;
            
            // Throttle to target FPS
            if (currentTime - lastTime < frameInterval) {
                animationFrameRef.current = requestAnimationFrame(drawSphere);
                return;
            }
            lastTime = currentTime;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = (canvas.width / (window.devicePixelRatio || 1)) / 2;
            const centerY = (canvas.height / (window.devicePixelRatio || 1)) / 2;

            rotationRef.current += 0.002;

            // Rotate nodes
            const cosR = Math.cos(rotationRef.current);
            const sinR = Math.sin(rotationRef.current);
            const rotatedNodes = nodes.nodeArray.map(node => ({
                x: node.x * cosR - node.z * sinR,
                y: node.y,
                z: node.x * sinR + node.z * cosR,
            }));

            // Sort by z-depth for proper rendering
            const indexedNodes = rotatedNodes.map((node, index) => ({ ...node, index }));
            indexedNodes.sort((a, b) => a.z - b.z);

            // Optimize connection drawing - only draw connections for visible nodes
            ctx.lineWidth = 0.8;
            const connectionDistance = nodes.radius * 0.7;
            const connectionCache: Array<{ x1: number; y1: number; x2: number; y2: number; opacity: number; isBack: boolean }> = [];
            
            // Pre-calculate connections to reduce repeated calculations
            for (let i = 0; i < indexedNodes.length; i++) {
                for (let j = i + 1; j < indexedNodes.length; j++) {
                    const nodeA = indexedNodes[i];
                    const nodeB = indexedNodes[j];
                    
                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const dz = nodeA.z - nodeB.z;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    
                    if (dist < connectionDistance) {
                        const x1 = centerX + nodeA.x;
                        const y1 = centerY + nodeA.y;
                        const x2 = centerX + nodeB.x;
                        const y2 = centerY + nodeB.y;
                        const avgZ = (nodeA.z + nodeB.z) / 2;
                        const depthFactor = (avgZ + nodes.radius) / (nodes.radius * 2);
                        const opacity = depthFactor * 0.3 + 0.05;
                        
                        connectionCache.push({ x1, y1, x2, y2, opacity, isBack: avgZ < 0 });
                    }
                }
            }
            
            // Draw connections
            connectionCache.forEach(conn => {
                const gradient = ctx.createLinearGradient(conn.x1, conn.y1, conn.x2, conn.y2);
                if (conn.isBack) {
                    gradient.addColorStop(0, `rgba(88, 28, 135, ${conn.opacity * 0.5})`);
                    gradient.addColorStop(1, `rgba(88, 28, 135, ${conn.opacity * 0.5})`);
                } else {
                    gradient.addColorStop(0, `rgba(88, 28, 135, ${conn.opacity})`);
                    gradient.addColorStop(0.5, `rgba(30, 58, 138, ${conn.opacity})`);
                    gradient.addColorStop(1, `rgba(34, 211, 238, ${conn.opacity})`);
                }
                
                ctx.beginPath();
                ctx.moveTo(conn.x1, conn.y1);
                ctx.lineTo(conn.x2, conn.y2);
                ctx.strokeStyle = gradient;
                ctx.stroke();
            });

            // Draw nodes
            indexedNodes.forEach(node => {
                const x = centerX + node.x;
                const y = centerY + node.y;
                const depthFactor = (node.z + nodes.radius) / (nodes.radius * 2);
                const size = 1.5 + depthFactor * 1.5;
                const opacity = 0.3 + depthFactor * 0.7;
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

            // Highlight some nodes - reduced count
            const highlightIndices = [5, 15, 25, 35, 45];
            highlightIndices.forEach(index => {
                if (index >= rotatedNodes.length) return;
                const node = rotatedNodes[index];
                const depthFactor = (node.z + nodes.radius) / (nodes.radius * 2);

                if (depthFactor > 0.5) {
                    const x = centerX + node.x;
                    const y = centerY + node.y;
                    const glowSize = 8 + Math.sin(currentTime / 1000 + index) * 2;
                    const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
                    glowGradient.addColorStop(0, `rgba(30, 58, 138, ${depthFactor * 0.9})`);
                    glowGradient.addColorStop(0.5, `rgba(34, 211, 238, ${depthFactor * 0.4})`);
                    glowGradient.addColorStop(1, 'transparent');

                    ctx.fillStyle = glowGradient;
                    ctx.beginPath();
                    ctx.arc(x, y, glowSize, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = `rgba(34, 211, 238, ${depthFactor})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameRef.current = requestAnimationFrame(drawSphere);
        };

        animationFrameRef.current = requestAnimationFrame(drawSphere);

        return () => {
            window.removeEventListener('resize', debouncedResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [nodes, prefersReducedMotion, debounce]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ opacity: 0.85, willChange: 'contents' }}
            />

            {/* Central glow - purple → very dark blue → cyan gradient */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                    width: 'min(700px, 100vw)',
                    height: 'min(700px, 100vw)',
                    background: 'radial-gradient(circle, rgba(88, 28, 135, 0.18) 0%, rgba(23, 37, 84, 0.12) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                    willChange: 'transform, opacity',
                }}
                animate={prefersReducedMotion ? {} : {
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
