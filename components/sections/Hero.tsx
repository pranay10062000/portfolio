"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden bg-background">
      {/* Background Layer: orange_bg.png */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/orange_bg.png" 
          alt="Orange Gradient Background" 
          fill
          priority
          className="object-cover object-center scale-105"
        />
      </div>

      {/* The Massive Bottom-Anchored Emoticon */}
      {/* Increased scale vastly and translated upwards to reach higher into the viewport */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[1400px] h-[100vh] flex items-end justify-center z-10 pointer-events-none">
        <motion.div 
          className="relative w-full h-full scale-[1.15] translate-y-[-5%]"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image 
            src="/assets/emoticon.png"
            alt="Pranay Dumbhare 3D Character"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      {/* The Heavy Blackish Gradient overlay specifically requested by user */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />

      {/* Hero Container for Typography */}
      <div className="relative z-30 w-full min-h-[100vh] max-w-[1600px] mx-auto overflow-hidden">

        {/* Foreground Content Columns */}
        <div className="absolute top-0 w-full flex flex-col md:flex-row justify-between pt-32 px-6 md:px-12 lg:px-20 pointer-events-none">
          
          {/* Left Side: Huge Typography */}
          <div className="w-full md:w-[40%] flex flex-col items-start mt-12 md:mt-24 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl font-medium tracking-wide mb-2 text-white/90">
                Hey, I&apos;m a
              </p>
              
              <h1 className="text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-bold leading-[0.95] tracking-tight text-white drop-shadow-md">
                Software<br />Engineer
              </h1>
            </motion.div>
          </div>

          {/* Right Side: Mission & Contact */}
          <div className="w-full md:w-[35%] flex flex-col items-start md:items-start md:text-left mt-16 md:mt-48 pointer-events-auto lg:pl-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-white mb-6 drop-shadow-md">
                Great engineering should feel invisible.
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-8 max-w-sm drop-shadow-sm text-justify">
                I build scalable microservices, automate delivery pipelines, and optimize systems for high performance.
              </p>
              
              <a href="#contact" className="inline-flex items-center space-x-4 bg-white text-black font-semibold rounded-full pl-6 pr-2 py-2 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
                <span className="text-lg">Get in Touch</span>
                <span className="flex items-center justify-center bg-[#F97316] text-white w-10 h-10 rounded-full">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Stats / Tags matching the reference */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 lg:px-20 flex flex-wrap justify-between items-end text-white pointer-events-auto">
          
          <div className="flex w-full justify-between max-w-[1400px]">
            <div className="flex md:space-x-20 space-x-8">
              <div className="mb-4 hidden sm:block">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#01</p>
                <p className="text-white font-medium tracking-wide">Backend Architecture</p>
              </div>
              
              <div className="mb-4">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#02</p>
                <p className="text-white font-medium tracking-wide">DevOps & CI/CD</p>
              </div>
            </div>

            <div className="flex md:space-x-20 space-x-8">
              <div className="mb-4 max-w-[200px]">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#03</p>
                <p className="text-white font-medium tracking-wide text-right">System Optimization</p>
              </div>
              
              <div className="mb-4 max-w-[200px] hidden sm:block">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#04</p>
                <p className="text-white font-medium tracking-wide text-right">Cloud Infrastructure</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
