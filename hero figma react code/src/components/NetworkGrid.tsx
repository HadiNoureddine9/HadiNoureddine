import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export function NetworkGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    
    // Network nodes
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
    }> = [];
    
    // Create nodes in 3D space
    const nodeCount = 60;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random() * 1000 + 200,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.5,
      });
    }
    
    let animationFrame: number;
    let time = 0;
    
    const animate = () => {
      time += 0.005;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center point for perspective
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;
        
        // Wrap around
        if (node.z > 1200) node.z = 200;
        if (node.z < 200) node.z = 1200;
        
        // 3D to 2D projection
        const scale = 800 / (800 + node.z);
        const x2d = centerX + node.x * scale;
        const y2d = centerY + node.y * scale;
        
        // Draw node
        const size = 2 * scale;
        const alpha = Math.max(0.2, 1 - node.z / 1200);
        
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.6})`;
        ctx.fill();
        
        // Draw glow
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 4);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i >= j) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dz = node.z - otherNode.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < 300) {
            const otherScale = 800 / (800 + otherNode.z);
            const x2d2 = centerX + otherNode.x * otherScale;
            const y2d2 = centerY + otherNode.y * otherScale;
            
            const lineAlpha = (1 - dist / 300) * Math.min(alpha, 1 - otherNode.z / 1200) * 0.4;
            
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(x2d2, y2d2);
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Central orange/amber focal point */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, rgba(251, 146, 60, 0.1) 50%, transparent 100%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}
