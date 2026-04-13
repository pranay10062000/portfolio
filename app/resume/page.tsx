"use client";

import React from 'react';
import Navbar from '../../components/ui/Navbar';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden font-sans pb-32 relative">
      <Navbar />
      
      {/* Massive Ambient Orange Glow to blend perfectly with the main site */}
      <div className="fixed top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-[#F97316]/15 blur-[250px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 right-[-10%] w-[800px] h-[800px] bg-[#F97316]/10 blur-[250px] rounded-full pointer-events-none z-0" />
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 w-full">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 drop-shadow-md">Pranay Dumbhare</h1>
          <p className="text-xl text-[#F97316] mb-6 font-mono uppercase tracking-widest font-bold">Software Engineer</p>
          
          <div className="flex flex-wrap gap-4 text-sm font-medium items-center">
            <a href="tel:+917744024976" title="+91 7744024976" className="flex items-center justify-center w-12 h-12 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full hover:bg-white/10 hover:border-[#F97316]/50 transition-all">
              <span className="text-[#F97316] text-lg">📞</span>
            </a>
            <a href="mailto:pranaydumbhare1006@gmail.com" title="pranaydumbhare1006@gmail.com" className="flex items-center justify-center w-12 h-12 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full hover:bg-white/10 hover:border-[#F97316]/50 transition-all">
              <span className="text-[#F97316] text-lg">✉️</span>
            </a>
            <a href="https://www.linkedin.com/in/pranay-dumbhare/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full hover:bg-white/10 hover:border-[#F97316]/50 transition-all text-[#F97316]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/pranay10062000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full hover:bg-white/10 hover:border-[#F97316]/50 transition-all text-[#F97316]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <div className="ml-4">
              <a 
                href="/assets/Pranay_Resume_SDE.pdf" 
                download="Pranay_Dumbhare_Resume.pdf" 
                className="inline-flex items-center space-x-3 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full font-semibold shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Experience & Education */}
          <div className="space-y-8">
            <div className="relative border border-dashed border-[#F97316]/30 rounded-3xl p-8 bg-black/40 backdrop-blur-md hover:border-[#F97316]/80 transition-colors shadow-2xl">
              {/* Sticker */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B9E] text-white px-6 py-1 font-bold rounded-md rotate-[-2deg] shadow-lg text-lg">
                Experience
              </div>
              
              <div className="space-y-10 mt-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Software Developer</h3>
                  <p className="text-white/40 text-sm mb-3">07/2023 - Present | Oracle FSGBU, Pune</p>
                  <ul className="list-disc list-outside ml-4 text-white/70 space-y-2 text-sm leading-relaxed">
                    <li>Designed and developed high-performance, microservices applications for Banking Origination.</li>
                    <li>Led DevOps initiatives implementing CI/CD pipelines, achieving a 75% reduction in delivery lifecycle.</li>
                    <li>Diagnosed bottlenecks executing 60% reduction in API response times through tracing analysis.</li>
                    <li>Achieved 80% test coverage implementing automated testing frameworks.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Application Developer Intern</h3>
                  <p className="text-white/40 text-sm mb-3">05/2022 - 07/2022 | Oracle, Pune</p>
                  <ul className="list-disc list-outside ml-4 text-white/70 space-y-2 text-sm leading-relaxed">
                    <li>Developed POCs optimizing indexing strategies using Apache Lucene and GraphQL (30% response time reduction).</li>
                    <li>Documented key architecture processes ensuring seamless team onboarding.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative border border-dashed border-[#F97316]/30 rounded-3xl p-8 bg-black/40 backdrop-blur-md hover:border-[#F97316]/80 transition-colors shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A3E635] text-black px-6 py-1 font-bold rounded-md rotate-[1deg] shadow-lg text-lg">
                Education
              </div>
              <div className="mt-6">
                <p className="text-white/40 text-xs mb-1">07/2019 - 06/2023 | Nagpur</p>
                <h3 className="text-lg font-bold text-white mb-1 leading-tight">Visvesvaraya National Institute of Technology (VNIT)</h3>
                <p className="text-white/70 text-sm">B.Tech in Electronics & Communication Eng.</p>
                <p className="text-[#A3E635] font-mono text-sm mt-2">CGPA: 8.61/10.0</p>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Publications & Certifications */}
          <div className="space-y-8">
            <div className="relative border border-dashed border-[#F97316]/30 rounded-3xl p-8 bg-black/40 backdrop-blur-md hover:border-[#F97316]/80 transition-colors shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white px-6 py-1 font-bold rounded-md rotate-[-1deg] shadow-lg text-lg whitespace-nowrap">
                Publications & Awards
              </div>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-md font-bold text-white mb-1 leading-tight">Hybrid HoVer-Net (CVIP-22)</h3>
                  <p className="text-white/40 text-xs mb-2">11/2022 | Publication</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">Novel hybrid deep learning approach for CoNIC challenge, achieving 91% accuracy.</p>
                  <a href="https://link.springer.com/chapter/10.1007/978-3-031-31417-9_52#citeas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-xs text-[#8B5CF6] font-bold hover:text-white transition-colors"><span>View Research Paper</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <div>
                  <h3 className="text-md font-bold text-white mb-1 leading-tight">Pacesetter Award</h3>
                  <p className="text-white/40 text-xs mb-2">Oracle Award</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">Recognized as the youngest recipient for significant contributions to team success.</p>
                  <a href="https://drive.google.com/file/d/1RTOe0nG6mBOv6FfZHT_0aHN2MKVEH7EZ/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-xs text-[#F97316] font-bold hover:text-white transition-colors"><span>View Certificate</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <div>
                  <h3 className="text-md font-bold text-white mb-1 leading-tight">Co-founder, VANEESHA RISE</h3>
                  <p className="text-white/70 text-sm leading-relaxed">Led massive tree plantation and cleanliness drives in Pune.</p>
                </div>
              </div>
            </div>

            <div className="relative border border-dashed border-[#F97316]/30 rounded-3xl p-8 bg-black/40 backdrop-blur-md hover:border-[#F97316]/80 transition-colors shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3B82F6] text-white px-6 py-1 font-bold rounded-md rotate-[1deg] shadow-lg text-lg">
                Certifications
              </div>
              <div className="mt-6 flex flex-col gap-3">
                 <a href="/assets/oracle_gen_ai_professional.jpg" target="_blank" className="border border-white/10 p-3 rounded-xl hover:bg-[#F97316]/10 hover:border-[#F97316]/50 transition-colors group block">
                    <p className="text-[#F97316] text-[10px] font-mono tracking-widest uppercase mb-1 drop-shadow-md">Oracle • Nov 2025</p>
                    <p className="text-white font-bold text-sm group-hover:text-[#F97316] transition-colors leading-tight">OCI Certified Generative AI Professional</p>
                 </a>
                 <a href="/assets/oracle_ai_foundations.jpg" target="_blank" className="border border-white/10 p-3 rounded-xl hover:bg-[#A3E635]/10 hover:border-[#A3E635]/50 transition-colors group block">
                    <p className="text-[#A3E635] text-[10px] font-mono tracking-widest uppercase mb-1 drop-shadow-md">Oracle • Apr 2025</p>
                    <p className="text-white font-bold text-sm group-hover:text-[#A3E635] transition-colors leading-tight">OCI Certified AI Foundations Associate</p>
                 </a>
                 <a href="https://www.coursera.org/account/accomplishments/verify/C0IHXH6TVCOU" target="_blank" className="border border-white/10 p-3 rounded-xl hover:bg-white/5 hover:border-white/50 transition-colors group block">
                    <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase mb-1">Amazon Web Services</p>
                    <p className="text-white font-bold text-sm group-hover:text-white/80 transition-colors leading-tight">Migrating to the AWS Cloud</p>
                 </a>
                 <a href="https://www.coursera.org/account/accomplishments/verify/W9FJWY1T6JEQ" target="_blank" className="border border-white/10 p-3 rounded-xl hover:bg-white/5 hover:border-white/50 transition-colors group block">
                    <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase mb-1">Amazon Web Services</p>
                    <p className="text-white font-bold text-sm group-hover:text-white/80 transition-colors leading-tight">AWS Cloud Technical Essentials</p>
                 </a>
                 <a href="https://www.coursera.org/account/accomplishments/certificate/49M7AFJSN3SX" target="_blank" className="border border-white/10 p-3 rounded-xl hover:bg-white/5 hover:border-white/50 transition-colors group block">
                    <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase mb-1">DeepLearning.ai</p>
                    <p className="text-white font-bold text-sm group-hover:text-white/80 transition-colors leading-tight">Convolutional Neural Networks</p>
                 </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Skills, Tools & About */}
          <div className="space-y-8">
            <div className="relative border border-dashed border-[#F97316]/30 rounded-3xl p-8 bg-black/40 backdrop-blur-md hover:border-[#F97316]/80 transition-colors shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD166] text-black px-6 py-1 font-bold rounded-md rotate-[2deg] shadow-lg text-lg">
                Skills
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "Java & Python", "C / C++", "JavaScript / TS", "Spring Boot", 
                  "Generative AI", "SQL", "Jenkins CI/CD", "AWS & OCI"
                ].map((skill, i) => (
                  <div key={i} className="flex items-center space-x-2 border-b border-white/5 pb-2">
                    <span className="text-[#A3E635]">✓</span>
                    <span className="text-sm font-medium text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative border border-dashed border-[#F97316]/30 rounded-3xl p-8 bg-black/40 backdrop-blur-md hover:border-[#F97316]/80 transition-colors shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B9E] text-white px-6 py-1 font-bold rounded-md rotate-[-2deg] shadow-lg text-lg">
                Tools
              </div>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                 {/* Backend Tool Badges */}
                 {["Linux", "JMeter", "Docker", "Grafana", "Supabase", "Git"].map((tool, i) => (
                   <div key={i} className="px-4 py-2 bg-gradient-to-br from-[#F97316]/20 to-[#F97316]/5 rounded-xl border border-[#F97316]/30 font-bold text-[#F97316] hover:bg-[#F97316] hover:text-white transition-colors cursor-default">
                     {tool}
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative border border-dashed border-[#F97316]/30 rounded-3xl p-8 bg-black/40 backdrop-blur-md hover:border-[#F97316]/80 transition-colors shadow-2xl flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[140px]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A3E635] text-black px-6 py-1 font-bold rounded-md rotate-[1deg] shadow-lg text-lg z-20 whitespace-nowrap">
                About me!
              </div>

              {/* Image Container */}
              <div className="relative w-32 h-32 flex-shrink-0 group mt-4 sm:mt-0">
                <Image 
                  src="/assets/me_and_cat.png" 
                  alt="Me and my Cat" 
                  fill 
                  quality={100}
                  unoptimized={true}
                  className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Text Core */}
              <div className="text-center sm:text-left">
                <p className="italic font-bold text-white text-lg md:text-xl leading-snug">
                  &quot;If you hire me,<br /> <span className="text-[#A3E635]">you save two lives!</span>&quot;
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
