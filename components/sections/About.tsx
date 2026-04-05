"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-40 w-full min-h-screen flex items-center justify-center bg-background">
      
      {/* Massive Glowing Core behind About section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#F97316]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col items-start gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="flex items-center space-x-4 mb-20">
            <span className="w-12 h-[2px] bg-[#F97316]"></span>
            <span className="text-sm font-mono text-[#F97316] uppercase tracking-widest font-bold">01. Experience</span>
          </div>
          
          {/* Universal Timeline */}
          <div className="border-l border-white/10 ml-2 pl-10 md:pl-16 flex flex-col gap-32 relative w-full">
            <div className="absolute left-[-2px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#F97316] via-[#F97316]/20 to-transparent rounded-full" />
            
            {/* Experience 1: Software Developer */}
            <div className="relative w-full">
               <div className="absolute left-[-49px] md:left-[-73px] top-2 w-5 h-5 rounded-full bg-background border-2 border-[#F97316] shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
               <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                 Software Developer <br />
                 <a href="http://oracle.com/in/" target="_blank" rel="noopener noreferrer" className="text-[#F97316] text-2xl md:text-3xl font-bold tracking-normal opacity-90 block mt-2 hover:opacity-100 hover:translate-x-1 transition-all w-max cursor-pointer">@ Oracle FSGBU</a>
               </h3>
               <p className="text-white/40 font-mono text-sm tracking-widest mb-6 border-b border-white/5 pb-4 inline-block">07/2023 — Present</p>
               <p className="text-xl text-white/70 font-light leading-relaxed max-w-4xl mb-12">
                 Designed and deployed high-performance, microservices applications for Banking Origination. Directed massive DevOps initiatives resulting in fully automated CI/CD pipelines, and diagnosed severe legacy bottlenecks using distributed tracing analysis.
               </p>

               {/* Stats Grid specific to Software Developer */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
                 <div className="p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-colors">
                   <h4 className="text-4xl font-black text-white group-hover:text-[#F97316] transition-colors mb-2 tracking-tighter">75%</h4>
                   <p className="text-white/60 font-medium text-sm leading-snug">Reduction in Delivery Lifecycle</p>
                 </div>

                 <div className="p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-colors">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   <h4 className="text-4xl font-black text-white group-hover:text-[#F97316] transition-colors mb-2 tracking-tighter relative z-10">60%</h4>
                   <p className="text-white/60 font-medium text-sm leading-snug relative z-10">Faster API Response Times</p>
                 </div>

                 <div className="p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-colors">
                   <h4 className="text-4xl font-black text-white group-hover:text-[#F97316] transition-colors mb-2 tracking-tighter">80%</h4>
                   <p className="text-white/60 font-medium text-sm leading-snug">Test Coverage via Automated Frameworks</p>
                 </div>
               </div>
            </div>

            {/* Experience 2: Application Developer Intern */}
            <div className="relative w-full">
               <div className="absolute left-[-49px] md:left-[-73px] top-2 w-5 h-5 rounded-full bg-[#111] border-2 border-white/20" />
               <h3 className="text-3xl md:text-4xl font-black text-white/80 mb-3 tracking-tight">
                 Application Developer Intern <br />
                 <a href="http://oracle.com/in/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-2xl font-bold tracking-normal block mt-2 hover:translate-x-1 transition-all w-max cursor-pointer">@ Oracle</a>
               </h3>
               <p className="text-white/40 font-mono text-sm tracking-widest mb-6 border-b border-white/5 pb-4 inline-block">05/2022 — 07/2022</p>
               <p className="text-xl text-white/50 font-light leading-relaxed max-w-4xl mb-12">
                 Developed complex Proof of Concepts targeting database indexing optimizations leveraging Apache Lucene and GraphQL to fundamentally speed up query mechanisms.
               </p>

               {/* Stats Grid specific to Application Developer Intern */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
                 <div className="p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-colors">
                   <h4 className="text-4xl font-black text-white group-hover:text-[#F97316] transition-colors mb-2 tracking-tighter">30%</h4>
                   <p className="text-white/60 font-medium text-sm leading-snug">Reduction in Query Time via Lucene POCs</p>
                 </div>
               </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
