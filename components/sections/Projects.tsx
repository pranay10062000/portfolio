"use client";

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Serve.Eco",
    category: "Multipurpose Web Application",
    tools: ["HTML/CSS", "TypeScript", "Supabase", "Github"],
    description: "A platform for environmental awareness and engagement enabling users to create eco-communities. Features a built-in marketplace for eco-friendly products and a blogging system for sustainability events.",
    year: "2025"
  },
  {
    id: 2,
    title: "Hybrid HoVer-Net",
    category: "Deep Learning Architecture",
    tools: ["Python", "Deep Learning", "Image Processing", "CVIP-22"],
    description: "A novel hybrid deep learning and image processing approach for the CoNIC challenge. Achieved a highly competitive 91% accuracy (a 3% increase over baseline) in colon nuclei segmentation.",
    year: "2022",
    linkText: "View Publication",
    linkUrl: "https://link.springer.com/chapter/10.1007/978-3-031-31417-9_52#citeas"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 flex w-full justify-center overflow-hidden bg-background py-24 sm:py-32 lg:py-40">
      
      {/* Massive Glowing Core */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(800px,100vw)] w-[min(800px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/5 blur-[120px] sm:blur-[200px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-12">
        
        <motion.div 
          className="mb-12 flex flex-col justify-start gap-8 sm:mb-16 lg:mb-24 lg:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-[2px] bg-[#F97316]"></span>
              <span className="text-sm font-mono text-[#F97316] uppercase tracking-widest font-bold">02. Selected Works</span>
            </div>
            <h3 className="text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl md:text-7xl">
              Featured<br />Projects.
            </h3>
          </div>
        </motion.div>

        {/* Text-Based Interactive Project Rows */}
        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id} 
              className="group relative block w-full overflow-hidden border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.02] sm:py-12 md:py-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              {/* Hover Animated Background Injection */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 via-[#F97316]/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out z-0" />

              <div className="relative z-10 flex flex-col items-start justify-between gap-8 px-2 sm:px-4 lg:flex-row lg:px-8">
                
                {/* Number & Title */}
                <div className="flex w-full flex-col lg:w-1/3">
                  <span className="text-[#F97316] font-mono tracking-widest mb-4">0{project.id} / {project.year}</span>
                  <h4 className="text-3xl font-black tracking-tight text-white transition-colors duration-500 group-hover:text-[#F97316] sm:text-4xl md:text-5xl">
                    {project.title}
                  </h4>
                  <p className="text-lg text-white/50 mt-4 font-light">{project.category}</p>
                </div>

                {/* Description & Tools */}
                <div className="flex w-full flex-col border-t border-white/10 pt-8 lg:w-2/3 lg:border-l lg:border-t-0 lg:border-white/10 lg:pl-12 lg:pt-0">
                  <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/60 group-hover:border-white/30 transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {project.linkText && (
                    <a href={project.linkUrl} className="inline-flex items-center space-x-2 text-[#F97316] font-bold hover:text-white transition-colors w-max">
                      <span>{project.linkText}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
