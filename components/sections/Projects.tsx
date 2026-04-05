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
    <section id="projects" className="relative py-40 w-full bg-background z-10 flex justify-center">
      
      {/* Massive Glowing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F97316]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        
        <motion.div 
          className="mb-24 flex flex-col md:flex-row justify-start gap-8"
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
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
              Featured<br />Projects.
            </h3>
          </div>
        </motion.div>

        {/* Text-Based Interactive Project Rows */}
        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id} 
              className="group relative block w-full border-b border-white/10 py-12 md:py-16 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              {/* Hover Animated Background Injection */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 via-[#F97316]/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out z-0" />

              <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8 px-4 md:px-8">
                
                {/* Number & Title */}
                <div className="w-full md:w-1/3 flex flex-col">
                  <span className="text-[#F97316] font-mono tracking-widest mb-4">0{project.id} / {project.year}</span>
                  <h4 className="text-4xl md:text-5xl font-black text-white group-hover:text-[#F97316] transition-colors duration-500 tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-lg text-white/50 mt-4 font-light">{project.category}</p>
                </div>

                {/* Description & Tools */}
                <div className="w-full md:w-2/3 flex flex-col md:pl-12 border-t border-white/10 md:border-t-0 md:border-l md:border-white/10 pt-8 md:pt-0">
                  <p className="text-xl text-white/70 leading-relaxed font-light mb-8 max-w-2xl">
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
