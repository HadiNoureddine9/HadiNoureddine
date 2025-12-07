"use client";

import React from 'react';
import { certifications } from '@/data';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    // Function to get badge image URL based on certification name
    const getBadgeImageUrl = (certName: string) => {
        // For ZAKA AI certification - use local image
        if (certName.includes('Machine Learning') || certName.includes('ZAKA')) {
            return '/mlzaka.png';
        }

        // For AWS certifications - use official AWS badge images
        if (certName.includes('Solutions Architect')) {
            return 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png';
        }

        if (certName.includes('Developer')) {
            return 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png';
        }

        if (certName.includes('Cloud Practitioner')) {
            return 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png';
        }

        if (certName.includes('AWS Academy') || certName.includes('Academy')) {
            // Use AWS logo for Academy
            return 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg';
        }

        // Default fallback
        return null;
    };

    return (
        <div className="py-20 w-full" id="certifications">
            <h1 className="heading">
                Certifications & <span className="text-purple">Achievements</span>
            </h1>

            <p className="text-center text-white-200 mt-4 mb-12 max-w-2xl mx-auto">
                Continuously investing in professional development and staying current with industry best practices
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {certifications.map((cert, index) => {
                    const badgeUrl = getBadgeImageUrl(cert.name);

                    return (
                        <motion.a
                            key={cert.id}
                            href={cert.credlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative p-6 rounded-2xl bg-gradient-to-br from-black-200 to-black-100 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col opacity-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple/[0.05] to-blue-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-20 h-20 rounded-xl flex items-center justify-center p-2 shadow-lg bg-transparent">
                                        {badgeUrl ? (
                                            <img
                                                src={badgeUrl}
                                                alt={cert.name}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <div className="text-4xl">🏆</div>
                                        )}
                                    </div>
                                    <FaExternalLinkAlt className="text-white-200 group-hover:text-purple transition-colors" />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple transition-colors min-h-[3.5rem] line-clamp-2">
                                    {cert.name}
                                </h3>

                                <div className="flex-1" />

                                <div className="flex items-center justify-between text-sm text-white-200 mb-4">
                                    <span className="truncate mr-2">{cert.issuer}</span>
                                    <span className="text-xs whitespace-nowrap">{cert.date}</span>
                                </div>

                                <div className="pt-4 border-t border-white/[0.1]">
                                    <span className="text-xs text-purple font-medium group-hover:underline">
                                        View Credential →
                                    </span>
                                </div>
                            </div>

                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple/[0.1] rounded-full blur-2xl group-hover:bg-purple/[0.2] transition-all duration-300" />
                        </motion.a>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
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
