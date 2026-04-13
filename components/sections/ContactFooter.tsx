"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative pt-40 pb-12 w-full bg-[#07070A] overflow-hidden border-t border-white/5">
      
      {/* Massive radial ambient glow */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[#F97316]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Block: Massive engaging text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-12 h-[2px] bg-[#F97316]"></span>
              <span className="text-sm font-mono text-[#F97316] uppercase tracking-widest font-bold">04. What's Next?</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Let's build <br />
              <span className="text-[#F97316]">together.</span>
            </h2>
            
            <p className="text-xl text-white/50 mb-12 max-w-lg font-light leading-relaxed">
              I am currently seeking new full-time opportunities where I can contribute to building high-performance, enterprise-scale systems. Whether you have an open role, a question, or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a 
                href="mailto:pranaydumbhare1006@gmail.com" 
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all hover:scale-105 inline-flex items-center space-x-3 w-max"
              >
                <span>Say Hello</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>

              {/* Integrated Social Links & Now Contact Links */}
              <div className="flex flex-wrap space-x-4 mt-4 sm:mt-0">
                <a href="mailto:pranaydumbhare1006@gmail.com" title="Email" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all group hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a href="tel:+917744024976" title="Phone" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all group hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
                <a href="https://github.com/pranay10062000" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all group hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/pranay-dumbhare/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all group hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Image Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex w-full h-[500px] relative justify-center items-center"
          >
             {/* Floating and Morphing Container */}
             <motion.div 
               animate={{ 
                 y: [0, -15, 0],
                 borderRadius: [
                   '60% 40% 30% 70% / 60% 30% 70% 40%',
                   '30% 60% 70% 40% / 50% 60% 30% 60%',
                   '60% 40% 30% 70% / 60% 30% 70% 40%'
                 ] 
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] overflow-hidden border-2 border-[#F97316]/30 shadow-[0_0_50px_rgba(249,115,22,0.2)] bg-white/5 backdrop-blur-sm"
             >
                <Image 
                  src="/assets/me_and_cat_footer.png" 
                  alt="Me and my Cat" 
                  fill
                  quality={100}
                  unoptimized={true}
                  className="object-cover scale-[1.05]"
                />
             </motion.div>
          </motion.div>

        </div>
        
        {/* Footer Base Core */}
        <div className="mt-40 flex justify-center w-full pt-10 border-t border-white/10">
          <p className="text-white/30 text-xs font-mono text-center hover:text-white/60 transition-colors">
            Made with ❤️ by Pranay using Antigravity
          </p>
        </div>

      </div>
    </footer>
  );
}
