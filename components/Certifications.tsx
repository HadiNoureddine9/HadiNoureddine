"use client";

import React from 'react';
import { certifications } from '@/data';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Certifications = () => {
    return (
        <div className="py-20 w-full" id="certifications">
            <h1 className="heading">
                Certifications & <span className="text-purple">Achievements</span>
            </h1>

            <p className="text-center text-white-200 mt-4 mb-12 max-w-2xl mx-auto">
                Continuously investing in professional development and staying current with industry best practices
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {certifications.map((cert, index) => (
                    <motion.a
                        key={cert.id}
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-black-200 to-black-100 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple/[0.05] to-blue-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Badge Icon */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-blue-500 flex items-center justify-center">
                                    <FaAward className="text-white text-xl" />
                                </div>
                                <FaExternalLinkAlt className="text-white-200 group-hover:text-purple transition-colors" />
                            </div>

                            {/* Certification Name */}
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple transition-colors">
                                {cert.name}
                            </h3>

                            {/* Issuer */}
                            <p className="text-sm text-white-200 mb-3">
                                {cert.issuer}
                            </p>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-xs text-white-100">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple" />
                                <span>Issued {cert.date}</span>
                            </div>

                            {/* Verify Badge */}
                            <div className="mt-4 pt-4 border-t border-white/[0.1]">
                                <span className="text-xs text-purple font-medium group-hover:underline">
                                    View Credential →
                                </span>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple/[0.1] rounded-full blur-2xl group-hover:bg-purple/[0.2] transition-all duration-300" />
                    </motion.a>
                ))}
            </div>

            {/* Additional Achievement Highlight */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple/[0.1] to-blue-500/[0.1] border border-purple/[0.3]"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Machine Learning Specialization
                        </h3>
                        <p className="text-white-200">
                            Completed intensive 20-week ZAKA AI program covering end-to-end ML systems,
                            LLM engineering, autonomous AI agents, and production-grade MLOps practices.
                        </p>
                    </div>
                    <a
                        href="https://certificates.zaka.ai/8b8deff8-75aa-4e35-b4b8-283d96b39ede#acc.LFUPq1tA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-purple hover:bg-purple/80 text-white font-medium transition-colors whitespace-nowrap"
                    >
                        View Certificate
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Certifications;
