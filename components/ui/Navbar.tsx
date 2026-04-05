"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll Spy Logic
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      if (isScrolling.current) return;

      const sections = ['home', 'about', 'projects', 'contact'];
      let currentSection = 'home'; // default

      // Find the lowest section that has crossed the 150px top threshold
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger instantly on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Smooth Scroll Override for Next.js App Router click jumping
  const scrollToBlock = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        // Lock the scroll spy listener to allow pure smooth-scrolling transit
        isScrolling.current = true;
        setActiveSection(id);
        
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${id}`);
        
        // Unlock after the transit is assumed complete
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            isScrolling.current = false;
        }, 800);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pointer-events-none pt-6 px-4">
      
      {/* Permanent Floating Dynamic Container */}
      <div className="pointer-events-auto flex items-center bg-[#111115]/80 backdrop-blur-2xl border border-white/15 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] gap-6">
        
        {/* Logo area */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center justify-center cursor-pointer transition-all duration-500 w-8 h-8 opacity-80 hover:opacity-100 hover:scale-105">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white w-full h-full">
                <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20H26C26 16.6863 23.3137 14 20 14C16.6863 14 14 16.6863 14 20C14 23.3137 16.6863 26 20 26V30C14.4772 30 10 25.5228 10 20Z" fill="currentColor"/>
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Center Links */}
        <div className="flex items-center space-x-6">
          <Link 
            href="/#home" 
            onClick={(e) => scrollToBlock(e, 'home')}
            className={`text-sm sm:text-[15px] transition-colors relative group ${pathname === '/' && activeSection === 'home' ? 'font-bold text-[#F97316]' : 'font-medium text-white/80 hover:text-white'}`}
          >
            Home
            {pathname === '/' && activeSection === 'home' && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F97316]" />}
          </Link>
          
          <Link 
            href="/resume" 
            className={`text-sm sm:text-[15px] transition-colors relative group ${pathname === '/resume' ? 'font-bold text-[#F97316]' : 'font-medium text-white/80 hover:text-white'}`}
          >
            Resume
            {pathname === '/resume' && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F97316]" />}
          </Link>
          
          <Link 
             href="/#about" 
             onClick={(e) => scrollToBlock(e, 'about')}
             className={`text-sm sm:text-[15px] transition-colors relative group ${pathname === '/' && activeSection === 'about' ? 'font-bold text-[#F97316]' : 'font-medium text-white/80 hover:text-white'}`}
          >
             About
             {pathname === '/' && activeSection === 'about' && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F97316]" />}
          </Link>
          
          <Link 
             href="/#projects" 
             onClick={(e) => scrollToBlock(e, 'projects')}
             className={`text-sm sm:text-[15px] transition-colors relative group ${pathname === '/' && activeSection === 'projects' ? 'font-bold text-[#F97316]' : 'font-medium text-white/80 hover:text-white'}`}
          >
             Projects
             {pathname === '/' && activeSection === 'projects' && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F97316]" />}
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <Link 
             href="/#contact" 
             onClick={(e) => scrollToBlock(e, 'contact')}
             className="flex items-center space-x-2 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg px-4 py-2 text-sm"
          >
            <span>Contact</span>
            <span className="bg-[#F97316] rounded-full text-white p-1 ml-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
