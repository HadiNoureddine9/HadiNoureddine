"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaAws, FaRocket, FaLightbulb, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const About = () => {
    const highlights = [
        {
            icon: <FaAws className="text-3xl" />,
            title: "AWS Certified Professional",
            description: "Solutions Architect & Developer Associate certified, specializing in serverless architecture and cloud-native solutions.",
            color: "from-orange-500 to-yellow-500",
        },
        {
            icon: <FaCode className="text-3xl" />,
            title: "Full-Stack Expertise",
            description: "Proficient across the entire stack - from React frontends to Node.js/Java backends, with a focus on scalable architecture.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: <FaRocket className="text-3xl" />,
            title: "Performance Optimizer",
            description: "Reduced deployment times by 60% and infrastructure costs by 70% through CI/CD automation and serverless architecture.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: <FaLightbulb className="text-3xl" />,
            title: "Problem Solver",
            description: "Passionate about turning complex challenges into elegant, efficient solutions that drive real business impact.",
            color: "from-green-500 to-emerald-500",
        },
    ];

    const journey = [
        {
            year: "2025",
            title: "Machine Learning Journey",
            description: "Completed intensive 20-week ZAKA AI program, building LLM-powered applications and autonomous AI agents.",
            icon: <FaGraduationCap />,
        },
        {
            year: "2024-2025",
            title: "AWS Mastery",
            description: "Earned AWS Solutions Architect and Developer Associate certifications, mastering cloud architecture.",
            icon: <FaTrophy />,
        },
        {
            year: "2023-Present",
            title: "Enterprise Development",
            description: "Leading backend development at Darbuka, architecting serverless solutions on AWS.",
            icon: <FaRocket />,
        },
        {
            year: "2022-2023",
            title: "Full-Stack Foundation",
            description: "Built full-stack applications with React, Java Spring Boot, Python Django, and AI integrations.",
            icon: <FaCode />,
        },
    ];

    const values = [
        { label: "Clean Code", value: "Always" },
        { label: "Best Practices", value: "Every Project" },
        { label: "Learning", value: "Continuous" },
        { label: "Innovation", value: "Driven" },
    ];

    return (
        <section id="about" className="py-20 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading mb-4">
                        About <span className="text-purple">Me</span>
                    </h2>
                    <p className="text-white-200 max-w-2xl mx-auto text-lg">
                        A passionate software engineer dedicated to building scalable, high-performance solutions
                        that solve real-world problems and drive business growth.
                    </p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-6 rounded-2xl bg-black-200 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-white-200 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Journey Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-12">
                        My <span className="text-purple">Journey</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {journey.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-6 rounded-xl bg-gradient-to-br from-black-200 to-black-100 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300"
                            >
                                {/* Year Badge */}
                                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-purple text-white text-sm font-bold">
                                    {item.year}
                                </div>

                                {/* Icon */}
                                <div className="text-3xl text-purple mb-4 mt-4">
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <h4 className="text-lg font-bold text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-white-200">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values & Principles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-purple/[0.1] to-blue-500/[0.1] border border-purple/[0.3]"
                >
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">
                        Core Values & Principles
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {values.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-purple mb-2">
                                    {item.value}
                                </div>
                                <div className="text-sm text-white-200">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Fun Fact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block p-6 rounded-xl bg-black-200 border border-white/[0.1]">
                        <p className="text-white-200 mb-2">
                            💡 <span className="text-white font-semibold">Fun Fact:</span>
                        </p>
                        <p className="text-white-100">
                            I automate everything I can - from recruitment workflows to deployment pipelines.
                            If it can be automated, I&apos;ll find a way! 🤖
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
