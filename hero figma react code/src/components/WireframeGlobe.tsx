import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export function WireframeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    
    let rotation = 0;
    
    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;
      
      rotation += 0.003;
      
      // Draw latitude lines
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath();
        const latRad = (lat * Math.PI) / 180;
        const latRadius = radius * Math.cos(latRad);
        const yOffset = radius * Math.sin(latRad);
        
        for (let lon = 0; lon <= 360; lon += 5) {
          const lonRad = ((lon + rotation * 50) * Math.PI) / 180;
          const x = centerX + latRadius * Math.cos(lonRad);
          const y = centerY + yOffset;
          const z = latRadius * Math.sin(lonRad);
          
          // Depth-based opacity
          const depth = (z + radius) / (radius * 2);
          const alpha = depth * 0.6 + 0.2;
          
          if (lon === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        const depth = 0.5;
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 + depth * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw longitude lines
      for (let lon = 0; lon < 360; lon += 20) {
        ctx.beginPath();
        
        for (let lat = -90; lat <= 90; lat += 5) {
          const latRad = (lat * Math.PI) / 180;
          const lonRad = ((lon + rotation * 50) * Math.PI) / 180;
          
          const y = centerY + radius * Math.sin(latRad);
          const latRadius = radius * Math.cos(latRad);
          const x = centerX + latRadius * Math.cos(lonRad);
          const z = latRadius * Math.sin(lonRad);
          
          if (lat === -90) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw connection points/nodes
      const nodePositions = [
        { lat: 40, lon: -74 },
        { lat: 51, lon: 0 },
        { lat: 35, lon: 139 },
        { lat: -33, lon: 151 },
        { lat: 1, lon: 103 },
        { lat: 37, lon: -122 },
      ];
      
      nodePositions.forEach(pos => {
        const latRad = (pos.lat * Math.PI) / 180;
        const lonRad = ((pos.lon + rotation * 50) * Math.PI) / 180;
        
        const latRadius = radius * Math.cos(latRad);
        const x = centerX + latRadius * Math.cos(lonRad);
        const y = centerY + radius * Math.sin(latRad);
        const z = latRadius * Math.sin(lonRad);
        
        const depth = (z + radius) / (radius * 2);
        
        if (depth > 0.4) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
          gradient.addColorStop(0, `rgba(6, 182, 212, ${depth})`);
          gradient.addColorStop(0.5, `rgba(6, 182, 212, ${depth * 0.5})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = `rgba(6, 182, 212, ${depth})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      requestAnimationFrame(drawGlobe);
    };
    
    drawGlobe();
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  
  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Central glow behind globe */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
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
