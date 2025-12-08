"use client";

import React, { useRef } from 'react';
import { skills } from '@/data';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from './ui/AnimatedCounter';

const Skills = () => {
    const categories = [
        { title: "Backend Development", items: skills.backend, gradient: 'linear-gradient(to right, rgb(34, 197, 94), rgb(5, 150, 105))' },
        { title: "Frontend Development", items: skills.frontend, gradient: 'linear-gradient(to right, rgb(59, 130, 246), rgb(8, 145, 178))' },
        { title: "Cloud & DevOps", items: skills.cloud, gradient: 'linear-gradient(to right, rgb(249, 115, 22), rgb(202, 138, 4))' },
        { title: "Databases", items: skills.databases, gradient: 'linear-gradient(to right, rgb(168, 85, 247), rgb(219, 39, 119))' },
        { title: "Tools & Others", items: skills.tools, gradient: 'linear-gradient(to right, rgb(99, 102, 241), rgb(124, 58, 237))' },
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
                    <SkillCategory key={category.title} category={category} categoryIndex={categoryIndex} />
                ))}
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">
                        <AnimatedCounter value={15} suffix="+" />
                    </div>
                    <div className="text-sm text-white-200">Technologies</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">
                        <AnimatedCounter value={5} suffix="+" />
                    </div>
                    <div className="text-sm text-white-200">Certifications</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">
                        <AnimatedCounter value={3} suffix="+" />
                    </div>
                    <div className="text-sm text-white-200">Years Experience</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                    <div className="text-3xl md:text-4xl font-bold text-purple mb-2">
                        <AnimatedCounter value={10} suffix="+" />
                    </div>
                    <div className="text-sm text-white-200">Projects Delivered</div>
                </div>
            </div>
        </div>
    );
};

const SkillCategory = React.memo(({ category, categoryIndex }: { category: any; categoryIndex: number }) => {
    const ref = useRef(null);
    const hasAnimatedRef = useRef(false);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const shouldAnimate = isInView && !hasAnimatedRef.current;
    if (shouldAnimate) {
        hasAnimatedRef.current = true;
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="relative p-6 rounded-2xl bg-black-200 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
        >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
                <div
                    className="w-1 h-8 rounded-full"
                    style={{ background: category.gradient.replace('to right', 'to bottom') }}
                />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
                {category.items.map((skill: any, index: number) => (
                    <SkillItem
                        key={skill.name}
                        skill={skill}
                        gradient={category.gradient}
                        delay={categoryIndex * 0.1 + index * 0.05}
                        isParentInView={isInView}
                    />
                ))}
            </div>
        </motion.div>
    );
});

SkillCategory.displayName = 'SkillCategory';

const SkillItem = React.memo(({ skill, gradient, delay, isParentInView }: { skill: any; gradient: string; delay: number; isParentInView: boolean }) => {
    const barRef = useRef(null);
    const hasAnimatedRef = useRef(false);
    const barInView = useInView(barRef, { once: true, amount: 0.1 });

    // Only animate if parent is in view and bar is in view, and hasn't animated yet
    const shouldAnimate = barInView && isParentInView && !hasAnimatedRef.current;
    if (shouldAnimate) {
        hasAnimatedRef.current = true;
    }

    return (
        <div className="group">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                        <span className="text-xs font-bold text-white-100">
                            {skill.name.substring(0, 2).toUpperCase()}
                        </span>
                    </div>
                    <span className="text-white-100 font-medium">{skill.name}</span>
                </div>
                <span className="text-xs text-white-200">
                    <AnimatedCounter value={skill.proficiency} suffix="%" />
                </span>
            </div>

            {/* Proficiency Bar */}
            <div ref={barRef} className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={shouldAnimate ? { width: `${skill.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1, delay }}
                    className="h-full rounded-full"
                    style={{ background: gradient }}
                />
            </div>
        </div>
    );
});

SkillItem.displayName = 'SkillItem';

export default Skills;
