"use client";

import React, { useState, useRef, memo, useMemo, useEffect } from "react";
import { projects } from "@/data";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Module-level Set to persist animation state across component remounts
const animatedProjects = new Set<string>();

const RecentProjects = () => {
  const [filter, setFilter] = useState("all");

  const categories = useMemo(() => ["all", "Backend Development", "Full Stack + AI", "Automation", "Frontend"], []);
  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);
  }, [filter]);

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:RecentProjects:mount',message:'Parent mount',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'parent-mount',hypothesisId:'P'})}).catch(()=>{});
    return () => {
      fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:RecentProjects:unmount',message:'Parent unmount',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'parent-mount',hypothesisId:'P'})}).catch(()=>{});
    };
  }, []);
  // #endregion

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Featured <span className="text-purple">Projects</span>
      </h1>

      <p className="text-center text-white-200 mt-4 mb-8 max-w-2xl mx-auto">
        Real-world solutions delivering measurable impact through innovative technology
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === cat
              ? "bg-purple text-white shadow-lg shadow-purple/[0.3]"
              : "bg-black-200 text-white-200 border border-white/[0.1] hover:border-purple/[0.5]"
              }`}
          >
            {cat === "all" ? "All Projects" : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

const ProjectCard = memo(({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const projectId = project.id;
  const hasAnimatedRef = useRef(animatedProjects.has(projectId));
  const [, forceRender] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:ProjectCard:mount',message:'Card mount',data:{index,projectId},timestamp:Date.now(),sessionId:'debug-session',runId:'parent-mount',hypothesisId:'P'})}).catch(()=>{});
    return () => {
      fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:ProjectCard:unmount',message:'Card unmount',data:{index,projectId},timestamp:Date.now(),sessionId:'debug-session',runId:'parent-mount',hypothesisId:'P'})}).catch(()=>{});
    };
  }, [projectId, index]);
  // #endregion

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:ProjectCard:render',message:'Component render',data:{index,projectId,isInView,hasAnimated:hasAnimatedRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v4',hypothesisId:'B'})}).catch(()=>{});
  });
  // #endregion

  // Prevent re-animation if already animated
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:ProjectCard:effect',message:'Effect triggered',data:{index,projectId,isInView,hasAnimated:hasAnimatedRef.current,shouldSet:isInView && !hasAnimatedRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v4',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    // Only animate if not already animated (check both ref and Set)
    if (isInView && !hasAnimatedRef.current) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:ProjectCard:setState',message:'Marking animated',data:{index,projectId,isInView},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v4',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      hasAnimatedRef.current = true;
      animatedProjects.add(projectId);
      forceRender((v) => v + 1);
    }
  }, [isInView, projectId]);

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:ProjectCard:isInView',message:'isInView changed',data:{index,projectId,isInView,hasAnimated:hasAnimatedRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v4',hypothesisId:'A'})}).catch(()=>{});
  }, [isInView, projectId]);
  // #endregion

  const animateValue = useMemo(() => ({ opacity: 1, y: 0 }), []);
  const initialValue = false;
  
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/20b43cd0-9445-4981-9d73-fd9eb34684f3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RecentProjects.tsx:ProjectCard:animate',message:'Animate value calculated',data:{index,projectId,hasAnimated:hasAnimatedRef.current,shouldAnimate,animateValue:JSON.stringify(animateValue),initialValue:JSON.stringify(initialValue)},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v4',hypothesisId:'C'})}).catch(()=>{});
  }, [index, projectId, shouldAnimate, animateValue, initialValue]);
  // #endregion

  return (
    <motion.div
      ref={ref}
      initial={initialValue}
      animate={animateValue}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-black-200 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300 overflow-hidden"
    >
      {/* Project Image Placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-purple/[0.2] to-blue-500/[0.2] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/[0.1]">
            {project.title.substring(0, 2).toUpperCase()}
          </div>
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black-100/80 backdrop-blur-sm border border-white/[0.2] text-xs text-white-100">
          {project.category}
        </div>
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple/80 backdrop-blur-sm text-xs text-white font-medium">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Role */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-purple">{project.role}</p>
        </div>

        {/* Description */}
        <p className="text-white-200 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Problem → Solution → Impact */}
        <div className="space-y-3 mb-4">
          <div className="p-3 rounded-lg bg-white/[0.02] border-l-2 border-red-500">
            <p className="text-xs text-white-100 font-semibold mb-1">Problem</p>
            <p className="text-sm text-white-200">{project.problem}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border-l-2 border-blue-500">
            <p className="text-xs text-white-100 font-semibold mb-1">Solution</p>
            <p className="text-sm text-white-200">{project.solution}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border-l-2 border-green-500">
            <p className="text-xs text-white-100 font-semibold mb-1">Impact</p>
            <p className="text-sm text-white-200">{project.impact}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-xs text-white-100 font-semibold mb-2">Technologies Used:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-white/[0.05] border border-white/[0.1] text-white-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/[0.1]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:border-purple/[0.5] text-white-100 hover:text-purple transition-all"
            >
              <FaGithub />
              <span className="text-sm">View Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple hover:bg-purple/80 text-white transition-all"
            >
              <FaExternalLinkAlt />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
          {!project.github && !project.demo && (
            <div className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-white-200 text-sm">
              Private Project
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const CallToAction = memo(() => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 text-center"
    >
      <p className="text-white-200 mb-4">
        Interested in seeing more of my work?
      </p>
      <a
        href="https://github.com/HadiNoureddine9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple hover:bg-purple/80 text-white font-medium transition-colors"
      >
        <FaGithub />
        Visit My GitHub
      </a>
    </motion.div>
  );
});

CallToAction.displayName = 'CallToAction';

export default RecentProjects;
