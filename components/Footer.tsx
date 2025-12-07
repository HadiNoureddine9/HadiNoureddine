"use client";

import { FaLocationArrow, FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { socialMedia, personalInfo } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* Main Contact Section */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="heading lg:max-w-[45vw] mb-6">
            Let&apos;s Build Something <span className="text-purple">Amazing</span> Together
          </h1>
          <p className="text-white-200 md:mt-6 my-5 text-center max-w-2xl text-lg leading-relaxed">
            Whether you&apos;re looking to build a scalable cloud solution, optimize your infrastructure,
            or bring an innovative idea to life - I&apos;m here to help turn your vision into reality.
          </p>
        </motion.div>

        {/* Enhanced CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md justify-center"
        >
          <a href={`mailto:${personalInfo.email}`} className="flex-1">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex-1 relative inline-flex h-12 w-full md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
              Download Resume
            </span>
          </a>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-black-200 border border-white/[0.1] hover:border-purple/[0.5] transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-purple/[0.2] flex items-center justify-center group-hover:bg-purple/[0.3] transition-colors">
              <FaEnvelope className="text-purple text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white-200 mb-1">Email</p>
              <p className="text-sm text-white-100 group-hover:text-purple transition-colors truncate">
                {personalInfo.email}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-black-200 border border-white/[0.1]">
            <div className="w-12 h-12 rounded-lg bg-blue-500/[0.2] flex items-center justify-center">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
            </div>
            <div>
              <p className="text-xs text-white-200 mb-1">Location</p>
              <p className="text-sm text-white-100">{personalInfo.location}</p>
            </div>
          </div>

          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-black-200 border border-white/[0.1] hover:border-purple/[0.5] transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-green-500/[0.2] flex items-center justify-center group-hover:bg-green-500/[0.3] transition-colors">
              <FaPhone className="text-green-400 text-xl" />
            </div>
            <div>
              <p className="text-xs text-white-200 mb-1">Phone</p>
              <p className="text-sm text-white-100 group-hover:text-purple transition-colors">
                {personalInfo.phone}
              </p>
            </div>
          </a>
        </motion.div>

        {/* Availability Status */}
        <motion.a
          href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 px-6 py-4 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm hover:bg-green-500/20 transition-all cursor-pointer inline-block"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-400 font-medium flex items-center gap-2">
              Let&apos;s Connect to Build Exceptional Engineering
              <span className="w-1 h-1 rounded-full bg-green-500/50 mx-1" />
              <FaWhatsapp className="text-lg" />
            </span>
          </div>
        </motion.a>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6 border-t border-white/[0.1] pt-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="md:text-base text-sm md:font-normal font-light text-white-200">
            © 2025 Hadi Noureddine. All rights reserved.
          </p>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white-200" />
          <p className="text-sm text-white-200">
            Crafted with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <p className="text-sm text-white-200 hidden md:block">Connect:</p>
          <div className="flex items-center gap-3">
            {socialMedia.map((info) => (
              <Link key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/[0.5] transition-all"
                >
                  <Image src={info.img} alt={info.name} width={24} height={24} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Quick Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black-100/95 border-t border-white/[0.1] backdrop-blur-lg z-50">
        <div className="flex justify-around items-center py-3 px-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex flex-col items-center gap-1 text-white-200 hover:text-purple transition-colors"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-xs">Email</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white-200 hover:text-purple transition-colors"
          >
            <Image src="/link.svg" alt="LinkedIn" width={20} height={20} />
            <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white-200 hover:text-purple transition-colors"
          >
            <Image src="/git.svg" alt="GitHub" width={20} height={20} />
            <span className="text-xs">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;