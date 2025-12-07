import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { StarfieldParticles } from './StarfieldParticles';
import { CoreSphere } from './CoreSphere';
import { HologramInitials } from './HologramInitials';
import { SkillConstellation } from './SkillConstellation';
import { TerminalText } from './TerminalText';
import { DataStreams } from './DataStreams';
import { GridBackground } from './GridBackground';
import { MouseTrail } from './MouseTrail';
import { CTAButtons } from './CTAButtons';
import { ScrollIndicator } from './ScrollIndicator';

export function CommandCenterHero() {
  const [bootComplete, setBootComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Boot sequence complete after 4 seconds
    const bootTimer = setTimeout(() => setBootComplete(true), 4000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(bootTimer);
    };
  }, [mouseX, mouseY]);

  // Parallax offsets for different layers
  const parallaxLayer1 = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const parallaxLayer2 = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const parallaxLayer3 = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background - Layer 2 */}
      <GridBackground mousePosition={mousePosition} />

      {/* Starfield - Layer 1 (Farthest) */}
      <StarfieldParticles mousePosition={mousePosition} />

      {/* Mouse Trail */}
      <MouseTrail mouseX={mouseX} mouseY={mouseY} />

      {/* Data Streams */}
      <DataStreams bootComplete={bootComplete} />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-16">
          
          {/* Core Sphere + Hologram Initials - Layer 3 */}
          <motion.div 
            className="relative"
            style={{ x: parallaxLayer3 }}
          >
            <CoreSphere mousePosition={mousePosition} />
            <HologramInitials />
          </motion.div>

          {/* Terminal Text - Fixed Layer */}
          <TerminalText bootComplete={bootComplete} />

          {/* Skill Constellation - Layer 4 */}
          <motion.div
            style={{ x: parallaxLayer2 }}
          >
            <SkillConstellation bootComplete={bootComplete} mousePosition={mousePosition} />
          </motion.div>

          {/* CTA Buttons */}
          {bootComplete && <CTAButtons />}
        </div>
      </div>

      {/* Scroll Indicator */}
      {bootComplete && <ScrollIndicator />}
    </div>
  );
}
