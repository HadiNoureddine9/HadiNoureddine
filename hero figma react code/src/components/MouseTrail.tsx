import { motion, useSpring } from 'motion/react';

interface MouseTrailProps {
  mouseX: any;
  mouseY: any;
}

export function MouseTrail({ mouseX, mouseY }: MouseTrailProps) {
  const springConfig = { stiffness: 100, damping: 30 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  return (
    <motion.div
      className="fixed w-[200px] h-[200px] rounded-full pointer-events-none z-50"
      style={{
        left: trailX,
        top: trailY,
        x: '-50%',
        y: '-50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        filter: 'blur(30px)',
      }}
    />
  );
}
