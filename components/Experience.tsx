"use client";

import React from "react";
import { workExperience } from "@/data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <p className="text-center text-white-200 mt-4 mb-12 max-w-2xl mx-auto">
        Building enterprise solutions and driving innovation across backend, cloud, and full-stack development
      </p>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto mt-12">
        {workExperience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline Line */}
            {index !== workExperience.length - 1 && (
              <div className="absolute left-6 md:left-1/2 top-20 w-0.5 h-full bg-gradient-to-b from-purple to-transparent -translate-x-1/2" />
            )}

            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-purple border-4 border-black-100 -translate-x-1/2 z-10" />

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
              <div className="group p-6 rounded-2xl bg-black-200 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300 hover:shadow-xl hover:shadow-purple/[0.1]">
                {/* Period Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-purple/[0.2] border border-purple/[0.3] text-xs text-purple font-medium mb-4">
                  {exp.period}
                </div>

                {/* Company & Role */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-white-100 mt-1">{exp.company}</p>
                    <p className="text-sm text-white-200 mt-1">{exp.location}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white-200 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white-100 mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white-200">
                        <span className="text-purple mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.1] text-white-100 hover:border-purple/[0.5] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple/[0.1] to-blue-500/[0.1] border border-purple/[0.3]">
          <div className="text-3xl md:text-4xl font-bold text-purple mb-2">60%</div>
          <div className="text-sm text-white-200">Faster Deployments</div>
          <div className="text-xs text-white-200 mt-1">with CI/CD automation</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple/[0.1] to-blue-500/[0.1] border border-purple/[0.3]">
          <div className="text-3xl md:text-4xl font-bold text-purple mb-2">40%</div>
          <div className="text-sm text-white-200">Time Saved</div>
          <div className="text-xs text-white-200 mt-1">through workflow automation</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple/[0.1] to-blue-500/[0.1] border border-purple/[0.3]">
          <div className="text-3xl md:text-4xl font-bold text-purple mb-2">99.9%</div>
          <div className="text-sm text-white-200">Uptime</div>
          <div className="text-xs text-white-200 mt-1">with serverless architecture</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;