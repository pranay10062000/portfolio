"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-40 w-full bg-background z-10 flex justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          className="mb-20 flex flex-col justify-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-12 h-[2px] bg-[#F97316]"></span>
            <span className="text-sm font-mono text-[#F97316] uppercase tracking-widest font-bold">03. Impact</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
            Achievements &<br />Leadership.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pacesetter Award */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-all group flex flex-col justify-between"
            >
              <div>
                <h4 className="text-3xl font-black text-white mb-2">Pacesetter Award <br/><span className="text-[#F97316]">@ Oracle</span></h4>
                <p className="text-white/60 mb-8 leading-relaxed font-light">Awarded to the youngest recipient for significant contributions to team success and overall engineering velocity.</p>
              </div>
              <a href="https://drive.google.com/file/d/1RTOe0nG6mBOv6FfZHT_0aHN2MKVEH7EZ/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-white/50 group-hover:text-[#F97316] font-bold transition-colors w-max">
                <span>View Certificate</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </motion.div>

            {/* Vaneesha Rise */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-all group"
            >
              <h4 className="text-3xl font-black text-white mb-2">Co-Founder <br/><span className="text-[#F97316]">@ Vaneesha Rise</span></h4>
              <p className="text-white/60 mb-8 leading-relaxed font-light">Led massive tree plantation and cleanliness drives in Pune, aggressively promoting environmental sustainability.</p>
            </motion.div>

            {/* Avanti Fellows */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-all group lg:col-span-2"
            >
              <h4 className="text-3xl font-black text-white mb-2">Active Alumni Member <span className="text-[#F97316]">@ Avanti Fellows</span></h4>
              <p className="text-white/60 leading-relaxed font-light max-w-3xl">Mentored underprivileged children, providing actionable guidance and quality education resources to help bridge critical learning gaps in developing communities.</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
