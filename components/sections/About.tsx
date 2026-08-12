"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative flex w-full items-center justify-center overflow-hidden bg-background py-24 sm:py-32 lg:min-h-screen lg:py-40">
      
      {/* Massive Glowing Core behind About section */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(1000px,100vw)] w-[min(1000px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/10 blur-[120px] sm:blur-[200px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-5 sm:gap-14 sm:px-8 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="mb-12 flex items-center space-x-4 sm:mb-16 lg:mb-20">
            <span className="w-12 h-[2px] bg-[#F97316]"></span>
            <span className="text-sm font-mono text-[#F97316] uppercase tracking-widest font-bold">01. Experience</span>
          </div>
          
          {/* Universal Timeline */}
          <div className="relative ml-2 flex w-full flex-col gap-20 border-l border-white/10 pl-7 sm:gap-24 sm:pl-10 md:gap-32 md:pl-16">
            <div className="absolute left-[-2px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#F97316] via-[#F97316]/20 to-transparent rounded-full" />
            
            {/* Experience 1: Software Developer */}
            <div className="relative w-full">
               <div className="absolute left-[-37px] top-2 h-5 w-5 rounded-full border-2 border-[#F97316] bg-background shadow-[0_0_15px_rgba(249,115,22,0.6)] sm:left-[-49px] md:left-[-73px]" />
               <h3 className="mb-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                 Software Developer <br />
                 <a href="http://oracle.com/in/" target="_blank" rel="noopener noreferrer" className="mt-2 block w-max cursor-pointer text-xl font-bold tracking-normal text-[#F97316] opacity-90 transition-all hover:translate-x-1 hover:opacity-100 sm:text-2xl md:text-3xl">@ Oracle FSGBU</a>
               </h3>
               <p className="text-white/40 font-mono text-sm tracking-widest mb-6 border-b border-white/5 pb-4 inline-block">07/2023 — Present</p>
               <p className="mb-8 max-w-4xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:mb-12 md:text-xl">
                 Designed and deployed high-performance, microservices applications for Banking Origination. Directed massive DevOps initiatives resulting in fully automated CI/CD pipelines, and diagnosed severe legacy bottlenecks using distributed tracing analysis.
               </p>

               {/* Stats Grid specific to Software Developer */}
               <div className="grid max-w-4xl grid-cols-1 gap-4 min-[520px]:grid-cols-3 sm:gap-6">
                 <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:border-[#F97316]/50 hover:bg-[#F97316]/5 sm:p-6">
                   <h4 className="mb-2 text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-[#F97316] sm:text-4xl">75%</h4>
                   <p className="text-white/60 font-medium text-sm leading-snug">Reduction in Delivery Lifecycle</p>
                 </div>

                 <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:border-[#F97316]/50 hover:bg-[#F97316]/5 sm:p-6">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   <h4 className="relative z-10 mb-2 text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-[#F97316] sm:text-4xl">60%</h4>
                   <p className="text-white/60 font-medium text-sm leading-snug relative z-10">Faster API Response Times</p>
                 </div>

                 <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:border-[#F97316]/50 hover:bg-[#F97316]/5 sm:p-6">
                   <h4 className="mb-2 text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-[#F97316] sm:text-4xl">80%</h4>
                   <p className="text-white/60 font-medium text-sm leading-snug">Test Coverage via Automated Frameworks</p>
                 </div>
               </div>
            </div>

            {/* Experience 2: Application Developer Intern */}
            <div className="relative w-full">
               <div className="absolute left-[-37px] top-2 h-5 w-5 rounded-full border-2 border-white/20 bg-[#111] sm:left-[-49px] md:left-[-73px]" />
               <h3 className="mb-3 text-2xl font-black tracking-tight text-white/80 sm:text-3xl md:text-4xl">
                 Application Developer Intern <br />
                 <a href="http://oracle.com/in/" target="_blank" rel="noopener noreferrer" className="mt-2 block w-max cursor-pointer text-xl font-bold tracking-normal text-white/50 transition-all hover:translate-x-1 hover:text-white sm:text-2xl">@ Oracle</a>
               </h3>
               <p className="text-white/40 font-mono text-sm tracking-widest mb-6 border-b border-white/5 pb-4 inline-block">05/2022 — 07/2022</p>
               <p className="mb-8 max-w-4xl text-base font-light leading-relaxed text-white/50 sm:text-lg md:mb-12 md:text-xl">
                 Developed complex Proof of Concepts targeting database indexing optimizations leveraging Apache Lucene and GraphQL to fundamentally speed up query mechanisms.
               </p>

               {/* Stats Grid specific to Application Developer Intern */}
               <div className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
                 <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition-colors hover:border-[#F97316]/50 hover:bg-[#F97316]/5 sm:p-8">
                   <h4 className="mb-2 text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-[#F97316] sm:text-4xl">30%</h4>
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
