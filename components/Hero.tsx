"use client";

import React, { useState, useEffect } from 'react';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import { personalInfo } from '@/data';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Backend Architect",
    "Frontend Engineer",
    "Cloud Solutions Expert",
    "DevOps Specialist",
    "Software Engineer"
  ];

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    { name: "Node.js", color: "from-green-400 to-emerald-500", icon: "⚡" },
    { name: "React", color: "from-blue-400 to-cyan-500", icon: "⚛️" },
    { name: "AWS", color: "from-orange-400 to-yellow-500", icon: "☁️" },
    { name: "TypeScript", color: "from-blue-500 to-indigo-600", icon: "📘" },
    { name: "Python", color: "from-yellow-400 to-orange-500", icon: "🐍" },
    { name: "Java", color: "from-red-500 to-orange-600", icon: "☕" },
    { name: "Docker", color: "from-blue-600 to-cyan-600", icon: "🐳" },
    { name: "MongoDB", color: "from-green-500 to-teal-600", icon: "🍃" },
  ];

  return (
    <div className="pb-20 pt-36 relative min-h-screen flex items-center">
      {/* Enhanced Spotlight Effects */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Animated Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple/30 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs with Mouse Parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* Hero Content */}
      <div className="flex justify-center relative z-10 w-full">
        <div className="max-w-[89vw] md:max-w-5xl lg:max-w-[75vw] flex flex-col items-center justify-center">

          {/* Animated Avatar with Tech Orbit */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 relative group"
          >
            {/* Orbiting Tech Icons */}
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple to-blue-500 flex items-center justify-center text-2xl"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 2.5,
                }}
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: `${Math.cos(index * Math.PI / 2) * 100}px ${Math.sin(index * Math.PI / 2) * 100}px`,
                }}
              >
                {["⚡", "🚀", "💻", "🎯"][index]}
              </motion.div>
            ))}

            {/* Pulsing Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 rounded-full border-2 border-purple/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: ring * 0.5,
                }}
                style={{
                  width: `${140 + ring * 20}px`,
                  height: `${140 + ring * 20}px`,
                  margin: 'auto',
                }}
              />
            ))}

            {/* Main Avatar */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple via-blue-500 to-cyan-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-black-100 flex items-center justify-center text-5xl md:text-7xl font-bold text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple/30 to-blue-500/30"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">HN</span>
              </div>
            </div>

            {/* Badges */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-3 -right-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-3 shadow-2xl border-4 border-black-100"
            >
              <motion.svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* Animated Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 h-12 flex items-center"
          >
            <motion.div
              key={currentRole}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple/20 to-blue-500/20 border border-purple/30 backdrop-blur-sm"
            >
              <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple via-blue-400 to-cyan-400">
                {roles[currentRole]}
              </span>
            </motion.div>
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 relative"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-center mb-4 relative">
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-purple via-blue-400 to-cyan-400 blur-sm">
                Hadi Noureddine
              </span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-purple to-blue-500">
                Hadi Noureddine
              </span>
            </h1>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 max-w-4xl"
          >
            <p className="text-center text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
              <span className="text-white">Crafting </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">Scalable Solutions</span>
              <span className="text-white"> from </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Frontend</span>
              <span className="text-white"> to </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-pink-500">Backend</span>
              <span className="text-white"> to </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">Cloud</span>
            </p>
          </motion.div>

          {/* Floating Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className={`group relative px-5 py-3 rounded-full bg-gradient-to-r ${tech.color} cursor-default shadow-lg hover:shadow-2xl transition-shadow`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-white font-bold text-sm md:text-base">{tech.name}</span>
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity`} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col md:flex-row gap-4 items-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MagicButton
                title="View My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </motion.a>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-slate-900 transition-colors">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaDownload />
                </motion.div>
                Download Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white-200"
            >
              <span className="text-xs uppercase tracking-wider">Explore More</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;