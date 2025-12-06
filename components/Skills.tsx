"use client";

import React from 'react';
import { skills } from '@/data';
import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        { title: "Backend Development", items: skills.backend, color: "from-green-500 to-emerald-600" },
        { title: "Frontend Development", items: skills.frontend, color: "from-blue-500 to-cyan-600" },
        { title: "Cloud & DevOps", items: skills.cloud, color: "from-orange-500 to-yellow-600" },
        { title: "Databases", items: skills.databases, color: "from-purple-500 to-pink-600" },
        { title: "Tools & Others", items: skills.tools, color: "from-indigo-500 to-violet-600" },
    ];

    return (
        <div className="py-20 w-full" id="skills">
            <h1 className="heading">
                My <span className="text-purple">Tech Stack</span>
            </h1>

            <p className="text-center text-white-200 mt-4 mb-12 max-w-2xl mx-auto">
                A comprehensive toolkit built through years of hands-on experience in enterprise development
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="relative p-6 rounded-2xl bg-black-200 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                            <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-4">
                            {category.items.map((skill, index) => (
                                <div key={skill.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            {/* Skill Icon Placeholder */}
                                            <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                                                <span className="text-xs font-bold text-white-100">
                                                    {skill.name.substring(0, 2).toUpperCase()}
                                                </span>
                                            </div>
                                            <span className="text-white-100 font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-xs text-white-200">{skill.proficiency}%</span>
                                    </div>

                                    {/* Proficiency Bar */}
                                    <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.proficiency}%` }}
                                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                                            viewport={{ once: true }}
                                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">15+</div>
                    <div className="text-sm text-white-200">Technologies</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">5+</div>
                    <div className="text-sm text-white-200">Certifications</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">3+</div>
                    <div className="text-sm text-white-200">Years Experience</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">10+</div>
                    <div className="text-sm text-white-200">Projects Delivered</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
