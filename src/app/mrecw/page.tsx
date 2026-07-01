"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MrecwPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] flex flex-col relative text-dark font-sans selection:bg-primary selection:text-white overflow-hidden">
      
      {/* HEADER / BACK NAV */}
      <header className="py-6 px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm border-b border-dark/5 z-20">
        <Link href="/" className="group flex items-center gap-2">
          <ArrowLeft size={18} className="text-secondary group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold text-dark/70 group-hover:text-dark">Back to Home</span>
        </Link>
        <Link href="/" className="text-2xl font-display font-black text-secondary tracking-tight">
          dezu.
        </Link>
      </header>

      {/* BODY CONTENT (SPLIT LAYOUT) */}
      <main className="flex-1 flex flex-col md:flex-row relative pb-24 md:pb-24">
        
        {/* Left Side: Information Panel */}
        <div className="w-full md:w-[40%] bg-[#F2EFE9] p-8 md:p-16 flex flex-col justify-center border-r border-dark/10 relative z-10 text-left">
          
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-4">
            — COLLABORATIVE SPACE
          </span>
          
          <h1 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight mb-6">
            Design Innovation <br />
            Lab At MRECW
          </h1>
          
          <p className="text-lg text-dark/75 leading-relaxed font-semibold max-w-md">
            Lorem ipsum dolor sit amet consectetur. Risus quis arcu sagittis aliquet. 
            Designing learning spaces that foster creativity, experimentation, and critical thought.
          </p>

          <div className="mt-8 flex gap-4 text-xs font-bold text-dark/60">
            <div>
              <span className="block text-primary font-black uppercase tracking-wider font-display">LOCATION</span>
              <span className="text-sm text-dark font-extrabold">Malla Reddy College, Hyderabad</span>
            </div>
            <div className="border-l border-dark/15 pl-4">
              <span className="block text-secondary font-black uppercase tracking-wider font-display">CAPACITY</span>
              <span className="text-sm text-dark font-extrabold">60 Students / Session</span>
            </div>
          </div>
        </div>

        {/* Right Side: Photo Panel */}
        <div className="w-full md:w-[60%] relative min-h-[350px] md:min-h-0 bg-primary/5">
          <img 
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop" 
            alt="Collaborative student work at Design Innovation Lab" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2EFE9]/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom Purple Banner spanning the full width */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-6 px-12 flex flex-col md:flex-row items-center gap-6 z-20 border-t border-white/10 text-left shadow-lg">
          <div className="flex gap-4">
            
            {/* Circle Logo 1: Malla Reddy emblem placeholder */}
            <div className="w-14 h-14 rounded-full border-2 border-secondary bg-white flex items-center justify-center p-1.5 shadow-md">
              <svg viewBox="0 0 24 24" className="w-full h-full text-primary" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            {/* Circle Logo 2: Duplicate as in Figma */}
            <div className="w-14 h-14 rounded-full border-2 border-primary bg-white flex items-center justify-center p-1.5 shadow-md">
              <svg viewBox="0 0 24 24" className="w-full h-full text-secondary" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-display font-black tracking-tight leading-none">MREW</span>
            <span className="text-xs font-bold text-white/70 tracking-wider mt-1 uppercase">MALLA REDDY ENGINEERING COLLEGE FOR WOMEN</span>
          </div>
        </div>

      </main>
    </div>
  );
}
