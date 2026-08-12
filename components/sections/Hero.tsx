"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      {/* Background Layer: orange_bg.png */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/orange_bg.png" 
          alt=""
          fill
          priority
          className="object-cover object-center scale-105"
        />
      </div>

      {/* The Massive Bottom-Anchored Emoticon */}
      {/* Increased scale vastly and translated upwards to reach higher into the viewport */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 flex h-full min-h-[720px] w-full max-w-[1400px] -translate-x-1/2 translate-y-[4%] scale-[1.4] items-end justify-center sm:translate-y-0 sm:scale-[1.22] lg:translate-y-[-5%] lg:scale-[1.15]">
        <motion.div 
          className="relative h-full w-full"
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
      <div className="relative z-30 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col">

        {/* Foreground Content Columns */}
        <div className="pointer-events-none relative z-40 flex w-full flex-col justify-between px-5 pt-24 sm:px-8 sm:pt-32 lg:flex-row lg:px-20 lg:pt-40">
          
          {/* Left Side: Huge Typography */}
          <div className="pointer-events-auto mt-8 flex w-full flex-col items-start sm:mt-10 lg:mt-12 lg:w-[44%]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mb-2 text-lg font-medium tracking-wide text-white/90 sm:text-xl lg:text-2xl">
                Hey, I&apos;m a
              </p>
              
              <h1 className="text-[clamp(3.3rem,17vw,5rem)] font-bold leading-[0.95] tracking-tight text-white drop-shadow-md sm:text-[5.5rem] lg:text-[clamp(5.5rem,7.5vw,7.5rem)]">
                Software<br />Engineer
              </h1>
            </motion.div>
          </div>

          {/* Right Side: Mission & Contact */}
          <div className="pointer-events-auto mt-10 flex w-full max-w-xl flex-col items-start text-left sm:mt-12 lg:mt-32 lg:w-[38%] lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="mb-4 text-2xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-md sm:mb-6 sm:text-3xl lg:text-[2.75rem]">
                Great engineering should feel invisible.
              </h2>
              
              <p className="mb-6 max-w-md text-base font-medium leading-relaxed text-white/90 drop-shadow-sm sm:mb-8 sm:text-lg lg:text-xl">
                I build scalable microservices, automate delivery pipelines, and optimize systems for high performance.
              </p>
              
              <a href="#contact" className="inline-flex min-h-12 items-center space-x-4 rounded-full bg-white py-1.5 pl-5 pr-1.5 font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-xl sm:py-2 sm:pl-6 sm:pr-2">
                <span className="text-base sm:text-lg">Get in Touch</span>
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
        <div className="pointer-events-auto relative z-40 mt-12 flex w-full flex-wrap items-end justify-between px-5 pb-7 text-white sm:px-8 sm:pb-10 lg:mt-auto lg:px-20 lg:pb-12">
          
          <div className="grid w-full max-w-[1400px] grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-8 lg:flex lg:justify-between">
            <div className="contents lg:flex lg:space-x-20">
              <div className="min-w-0">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#01</p>
                <p className="text-white font-medium tracking-wide">Backend Architecture</p>
              </div>
              
              <div className="min-w-0">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#02</p>
                <p className="text-white font-medium tracking-wide">DevOps & CI/CD</p>
              </div>
            </div>

            <div className="contents lg:flex lg:space-x-20">
              <div className="min-w-0 lg:max-w-[200px]">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#03</p>
                <p className="font-medium tracking-wide text-white sm:text-right">System Optimization</p>
              </div>
              
              <div className="min-w-0 lg:max-w-[200px]">
                <p className="text-white/60 font-mono text-sm mb-1 tracking-wider">#04</p>
                <p className="font-medium tracking-wide text-white sm:text-right">Cloud Infrastructure</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
