"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { workExperience } from "@/data";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full py-20" id="experience" ref={containerRef}>
      <h1 className="heading mb-12 md:hidden">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-12 relative">
        {/* Sticky Sidebar (Desktop only) */}
        <div className="hidden md:flex flex-col w-1/3 sticky top-32 h-fit">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Work <span className="text-purple">Experience</span>
          </h2>
          <p className="text-white-200 mb-12 text-lg">
            My professional journey building scalable solutions and leading engineering teams.
          </p>

          <div className="relative border-l border-white/[0.1] pl-8 space-y-8">
            {workExperience.map((bg, index) => (
              <ExperienceLink key={bg.id} index={index} item={bg} />
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-12 lg:gap-20">
          {workExperience.map((card, index) => (
            <ExperienceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Component for the left sidebar links (with scroll spy logic)
const ExperienceLink = ({ item, index }: { item: any; index: number }) => {
  const cardId = `experience-card-${index}`;
  return (
    <a
      href={`#${cardId}`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(cardId);
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      className="group block"
    >
      <span className="block text-sm text-white-200 mb-1 group-hover:text-purple transition-colors">
        {item.period}
      </span>
      <span className="block text-lg font-bold group-hover:text-white transition-colors">
        {item.company}
      </span>
    </a>
  );
};

const ExperienceCard = React.memo(({ card, index }: { card: any; index: number }) => {
  const cardId = `experience-card-${index}`;

  return (
    <motion.div
      id={cardId}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative p-8 rounded-3xl border border-white/[0.1] bg-black-100/50 backdrop-blur-sm
        transition-colors duration-500 hover:border-white/[0.2]
      `}
    >
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl md:text-3xl font-bold">{card.role}</h3>
            <img
              src={card.thumbnail}
              alt={card.company}
              width={64}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-white-200 mb-4">
            <span className="text-purple font-semibold">{card.company}</span>
            <span>•</span>
            <span className="text-sm">{card.period}</span>
            <span>•</span>
            <span className="text-sm">{card.location}</span>
          </div>

          <p className="text-white-100 leading-relaxed mb-6 font-light">
            {card.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-purple uppercase tracking-wider mb-4">
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {card.achievements.map((achievement: string, i: number) => (
              <li key={i} className="flex gap-3 text-sm text-white-200">
                <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-purple" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mt-4">
            {card.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.1] text-white-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default Experience;