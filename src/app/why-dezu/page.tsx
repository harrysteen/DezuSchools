"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Instagram,
  Linkedin,
  Briefcase,
  BookOpen,
  Users
} from "lucide-react";
import footerBackgroundLine from "../../Assets/Footer background line.png";
import himajaaImg from "../../Assets/Himajaa Indukuri.png";
import balamuraliImg from "../../Assets/Balamurali Bhaskaran.png";
import bhavanaImg from "../../Assets/Bhavana Ghanta.png";
import prathikImg from "../../Assets/Prathik Gadde.png";
import whyDezuHeroImage from "../../Assets/whydezu hero section image.png";
import heroStar from "../../Assets/Home-herosection-start.png";
import whyDezuHeroLine from "../../Assets/why dezu hero line.png";
import creatorsUnderline from "../../Assets/home-hero-create-underline.png";

export default function WhyDezu() {

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] relative text-dark font-sans selection:bg-primary selection:text-white">
      
      {/* INLINE CSS MARQUEE ANIMATION */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-inline {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}} />

      {/* FLOATING HEADER */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="pt-36 pb-0 w-full relative overflow-visible flex flex-col justify-center">
        {/* Background decorative elements */}
        <div className="absolute top-16 left-[-40px] w-32 h-32 bg-[#C3B3F9] rounded-full opacity-80 -z-10"></div>
        <div className="absolute bottom-24 right-48 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -z-10"></div>


        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-6xl font-display font-black text-dark tracking-tight leading-[1.25] mb-6">
              <span className="bg-primary text-white px-5 py-1.5 rounded-full inline-block text-xl md:text-3xl font-display transform -rotate-1 relative top-[-4px] uppercase tracking-normal mr-2">
                Taught
              </span>
              <span className="font-sans font-medium text-dark text-3xl md:text-5xl mx-2 align-baseline">
                by
              </span>
              <span className="text-primary relative font-normal font-serif italic tracking-wide whitespace-nowrap">
                real-time experts
                {/* Custom Orange Paint Stroke */}
                <img
                  src={creatorsUnderline.src}
                  alt="underline"
                  className="absolute bottom-[-15px] left-0 w-full object-contain"
                />
              </span>
              <br />
              from <span className="font-extrabold">Different</span>{" "}
              <span className="text-primary relative font-normal font-serif italic tracking-wide">
                industries.
                {/* Custom Orange Paint Stroke */}
                <img
                  src={creatorsUnderline.src}
                  alt="underline"
                  className="absolute bottom-[-15px] left-0 w-full object-contain"
                />
              </span>
            </h1>

            <p className="text-base md:text-lg font-medium max-w-xl mb-8 leading-relaxed mt-4 text-[#1E293BCC]">
              Dezu bridges the foundational academic years with the pulse of modern design, founding, planning, and design-thinking. We connect practicing designers, technology innovators, architects, and researchers directly with school environments.
            </p>

            <Link 
              href="https://studiodezu.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg inline-flex items-center gap-2 hover:translate-x-1 duration-200 mt-2"
            >
              More On dezu <ArrowRight size={18} />
            </Link>
          </div>

          {/* Hero Right Content - Cutout with Background Circle & Star */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end h-[340px] md:h-[400px] lg:h-[450px] items-end overflow-visible">
            <div className="relative w-full max-w-[340px] md:max-w-[400px] lg:max-w-[440px] h-[340px] md:h-[400px] lg:h-[450px] flex items-end justify-center">
              
              {/* Purple Circle in Background */}
              <div className="absolute top-[10%] md:top-[8%] lg:top-[6%] w-[240px] md:w-[280px] lg:w-[340px] h-[240px] md:h-[280px] lg:h-[340px] bg-[#C3B3F9] rounded-full -z-10 shadow-inner"></div>
              
              {/* Orange Star Decal */}
              <div className="absolute top-[6%] md:top-[4%] lg:top-[2%] -right-8 md:-right-12 lg:-right-16 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 z-0">
                <Image
                  src={heroStar}
                  alt="Orange star decor"
                  className="w-full h-full object-contain animate-[pulse_3s_infinite]"
                />
              </div>

              {/* Three Experts Cutout */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] md:w-[560px] lg:w-[660px] h-[480px] md:h-[560px] lg:h-[660px] flex items-end justify-center z-10 overflow-visible">
                <Image 
                  src={whyDezuHeroImage} 
                  alt="Taught by real-time experts from different industries" 
                  className="w-full h-full object-contain object-bottom select-none"
                  priority
                />
              </div>

            </div>
          </div>

        </div>

        {/* WAVY LINE DIVIDER INSIDE HERO */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <Image
            src={whyDezuHeroLine}  
            alt="Background Line Divider"
            className="w-full h-auto object-cover"
          />
        </div> */}
      </section>

      {/* SECTION 2: WHO ARE WE & DESIGN X EDUCATION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight mb-4">
                Who are <span className="font-serif italic font-normal text-primary">we</span>?
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed text-[#1E293BCC]">
                Dezu is a design education platform that bridges the gap between classroom learning and industry practice. We bring working professionals into schools to teach, mentor, and inspire the next generation of creative thinkers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-serif italic font-normal text-primary leading-tight mb-4">
                design X education
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed text-[#1E293BCC]">
                Through hands-on workshops, semester-long programs, and year-round partnerships, we help schools integrate real-world design thinking, innovation, and problem-solving into their curriculum.
              </p>
            </div>

            <div className="pt-2">
              <Link 
                href="https://studiodezu.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg inline-flex items-center gap-2 hover:translate-x-1 duration-200"
              >
                Learn more <ArrowRight size={18} /> 
              </Link>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-6 relative pb-8 pr-4">
            {/* Orange overlapping squares in bottom right */}
            <div className="absolute -bottom-2 -right-2 w-32 h-32 pointer-events-none hidden sm:block z-0">
              {/* Square 1 (bottom-right) */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F97316]"></div>
              {/* Square 2 (shifted) */}
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-[#F97316]"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              
              {/* Card 1: Industry Studios */}
              <div className="bg-[#F2EFE9] rounded-3xl p-8 border border-dark/5 text-left flex flex-col justify-between min-h-[240px] transition-transform hover:-translate-y-1">
                <div className="text-secondary">
                  <Briefcase size={28} className="stroke-[2.5]" />
                </div>
                <div className="mt-6">
                  <span className="text-3xl md:text-4xl font-display font-black text-dark block mb-1">20+</span>
                  <h3 className="text-base font-display font-black text-dark mb-2">Industry Studios</h3>
                  <p className="text-xs text-dark/75 font-semibold leading-relaxed">
                    Practicing creative labs offering studio modules directly to partner classrooms.
                  </p>
                </div>
              </div>

              {/* Card 2: Partner Schools */}
              <div className="bg-primary text-white rounded-3xl p-8 border border-white/5 text-left flex flex-col justify-between min-h-[240px] transition-transform hover:-translate-y-1 shadow-lg">
                <div className="text-secondary">
                  <BookOpen size={28} className="stroke-[2.5]" />
                </div>
                <div className="mt-6">
                  <span className="text-3xl md:text-4xl font-display font-black text-white block mb-1">50+</span>
                  <h3 className="text-base font-display font-black text-white mb-2">Partner Schools</h3>
                  <p className="text-xs text-white/80 font-medium leading-relaxed">
                    Leading educational institutions running standard Dezu-powered classes weekly.
                  </p>
                </div>
              </div>

              {/* Card 3: Students Educated */}
              <div className="bg-[#FFE5D3] rounded-3xl p-8 border border-dark/5 text-left flex flex-col justify-between min-h-[240px] transition-transform hover:-translate-y-1">
                <div className="text-secondary">
                  <Users size={28} className="stroke-[2.5]" />
                </div>
                <div className="mt-6">
                  <span className="text-3xl md:text-4xl font-display font-black text-dark block mb-1">1000+</span>
                  <h3 className="text-base font-display font-black text-dark mb-2">Students Educated</h3>
                  <p className="text-xs text-dark/75 font-semibold leading-relaxed">
                    Active school kids acquiring design research, sketching, and prototype capabilities.
                  </p>
                </div>
              </div>

              {/* Card 4: Projects Built */}
              <div className="bg-[#F2EFE9] rounded-3xl p-8 border border-dark/5 text-left flex flex-col justify-between min-h-[240px] transition-transform hover:-translate-y-1">
                <div className="text-secondary">
                  <Sparkles size={28} className="stroke-[2.5]" />
                </div>
                <div className="mt-6">
                  <span className="text-3xl md:text-4xl font-display font-black text-dark block mb-1">200+</span>
                  <h3 className="text-base font-display font-black text-dark mb-2">Projects Built</h3>
                  <p className="text-xs text-dark/75 font-semibold leading-relaxed">
                    Real functional ideas, models, physical architecture prototypes, and user layouts.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: PARTNER LOGOS MARQUEE */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark tracking-tight mb-4">
            Associated with <span className="text-primary italic font-serif font-normal">industry leaders</span>
          </h2>
          <p className="text-sm md:text-base text-[#1E293BCC] font-medium max-w-xl mx-auto leading-relaxed">
            Our expert curriculum integrates the technical and process benchmarks of globally distinguished brands, giving students real-world context.
          </p>
        </div>

        <div className="animate-marquee-inline whitespace-nowrap flex items-center gap-24 text-3xl md:text-4xl font-black text-[#94A3B8] select-none">
          <span>Adobe</span>
          <span>Google</span>
          <span>Microsoft</span>
          <span>Figma</span>
          <span>Zoho</span>
          <span>TCS</span>
          
          <span>Adobe</span>
          <span>Google</span>
          <span>Microsoft</span>
          <span>Figma</span>
          <span>Zoho</span>
          <span>TCS</span>

          <span>Adobe</span>
          <span>Google</span>
          <span>Microsoft</span>
          <span>Figma</span>
          <span>Zoho</span>
          <span>TCS</span>
        </div>
      </section>

      {/* SECTION 4: TAUGHT BY PRACTICING PROFESSIONALS */}
      <section className="py-20 bg-cream/50 border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                Taught By Practicing <br />
                <span className="text-primary italic font-serif font-normal">Professionals</span>
              </h2>
            </div>
            <div className="text-dark/75 font-medium max-w-md text-left">
              Our facilitators are working designers, technologists and researchers who bring real-world studios into your school. Every mentor is vetted, trained and DEZU-certified.
            </div>
          </div>

          <div className="relative pl-4 pb-8">
            {/* Orange overlapping squares in bottom left */}
            <div className="absolute -bottom-2 -left-2 w-32 h-32 pointer-events-none hidden sm:block z-0">
              {/* Square 1 (bottom-left) */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#F97316]"></div>
              {/* Square 2 (shifted) */}
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-[#F97316]"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              
              {/* Card 1 */}
              <div className="bg-[#D5C7FF] rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                  <img 
                    src={himajaaImg.src} 
                    alt="Himajaa Indukuri - CEO, Studio Dezu" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-left px-1">
                  <h3 className="font-sans text-left mb-1.5" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Himajaa Indukuri</h3>
                  <p className="font-sans text-left mt-1" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "100%", color: "#0D0C0C" }}>CEO, Studio Dezu</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#D5C7FF] rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                  <img 
                    src={balamuraliImg.src} 
                    alt="Balamurali Bhaskaran - Design Thinking Mentor" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-left px-1">
                  <h3 className="font-sans text-left mb-1.5" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Balamurali Bhaskaran</h3>
                  <p className="font-sans text-left mt-1" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "100%", color: "#0D0C0C" }}>Design Thinking Mentor (IBM certified)</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#D5C7FF] rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                  <img 
                    src={prathikImg.src} 
                    alt="Prathik Gadde - CEO, PhotonX" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-left px-1">
                  <h3 className="font-sans text-left mb-1.5" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Prathik Gadde</h3>
                  <p className="font-sans text-left mt-1" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "100%", color: "#0D0C0C" }}>CEO, PhotonX</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#D5C7FF] rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                  <img 
                    src={bhavanaImg.src} 
                    alt="Bhavana Ghanta - Senior Designer, Schlemberger" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-left px-1">
                  <h3 className="font-sans text-left mb-1.5" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Bhavana Ghanta</h3>
                  <p className="font-sans text-left mt-1" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "100%", color: "#0D0C0C" }}>Senior Designer, Schlemberger</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: APPLY TO MENTOR CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        
        {/* Card Wrapper */}
        <div className="relative w-full overflow-visible pb-8 pr-4">
          
          {/* Orange Scalloped Badge on Top-Left */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20 w-16 h-16 md:w-20 md:h-20 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="#FF6A1F" className="w-full h-full drop-shadow-lg">
              <path d="M50 2.5 L55.3 10.6 L64.4 6.3 L67.1 15.8 L76.7 13.8 L76.8 23.6 L86.4 24.1 L83.8 33.5 L92.5 37.3 L87.4 45.7 L95 52.1 L87.8 58.8 L93.4 67 L84.8 71.2 L88 80.5 L78.8 82.4 L79.6 92.2 L70.4 91.4 L68.4 101 L60 97.6 L55.3 105.8 L48.3 100 L41.3 105.8 L36.7 97.6 L28.3 101 L26.3 91.4 L17.1 92.2 L17.9 82.4 L8.7 80.5 L12 71.2 L3.4 67 L9 58.8 L1.8 52.1 L9.4 45.7 L4.3 37.3 L13 33.5 L10.4 24.1 L20 23.6 L20.1 13.8 L29.7 15.8 L32.4 6.3 L41.5 10.6 Z" />
            </svg>
          </div>

          {/* Orange overlapping squares in bottom right */}
          <div className="absolute -bottom-2 -right-2 w-32 h-32 pointer-events-none hidden sm:block z-0">
            {/* Square 1 (bottom-right) */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F97316]"></div>
            {/* Square 2 (shifted) */}
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-[#F97316]"></div>
          </div>

          <div className="bg-primary rounded-[36px] p-8 md:p-16 text-white relative overflow-hidden shadow-xl border border-white/10 flex flex-col items-start justify-center text-left min-h-[360px] z-10">
            
            {/* Background Decorative Waves */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
              <path d="M-100,300 C200,280 400,100 1100,220" stroke="white" strokeWidth="4" strokeOpacity="0.12" />
              <path d="M-100,260 C200,240 400,60 1100,180" stroke="white" strokeWidth="4" strokeOpacity="0.08" />
            </svg>

            <div className="max-w-3xl space-y-6 relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-black leading-tight">
                Are you a designer, architect, or creative practitioner?
              </h2>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Dezu is always looking to expand its mentor cohort. If you believe that design education should be available to every student in India not just the ones in metros we'd love to hear from you. Mentors commit to 2-3 school visits per year. Everything else is flexible.
              </p>
              <div className="pt-2">
                <Link 
                  href="mailto:info@dezu.in" 
                  className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg inline-flex items-center gap-2 hover:translate-x-1 duration-200"
                >
                  Apply to Mentor <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white pt-24 pb-8 px-6 relative border-t border-white/10 overflow-hidden">
        {/* Footer Background Line Image */}
        <img
          src={footerBackgroundLine.src}
          alt="Footer Background Line"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />

        {/* Floating Orange starburst sitting on top border */}
        <div className="absolute top-[-32px] left-1/2 -translate-x-1/2 text-secondary z-20">
          <svg viewBox="0 0 100 100" fill="#FF7122" className="w-16 h-16" style={{ animation: "spin 25s linear infinite" }}>
            <path d="M50 0 L56 12 L68 6 L70 19 L82 17 L80 30 L91 32 L85 44 L95 50 L85 56 L91 68 L80 70 L82 83 L70 81 L68 94 L56 88 L50 100 L44 88 L32 94 L30 81 L18 83 L20 70 L9 68 L15 56 L5 50 L15 44 L9 32 L20 30 L18 17 L30 19 L32 6 L44 12 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 text-left relative z-10">

          {/* Programs Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">PROGRAMS</h4>
            <ul className="space-y-3 text-sm font-semibold opacity-80">
              <li><Link href="/workshop" className="hover:text-secondary transition">Workshop</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">Design Elective</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">Cross-Curricular</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">DEZU Studio</Link></li>
            </ul>
          </div>

          {/* About Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">ABOUT</h4>
            <ul className="space-y-3 text-sm font-semibold opacity-80">
              <li><Link href="/why-dezu" className="hover:text-secondary transition">Our Philosophy</Link></li>
              <li><Link href="/#mentors" className="hover:text-secondary transition">Faculty</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">Schools</Link></li>
              <li><Link href="/stories" className="hover:text-secondary transition">Journal</Link></li>
            </ul>
          </div>

          {/* Logo Brand Center-Right */}
          <div className="md:col-span-4 flex flex-col justify-center items-start md:items-center">
            <div className="text-left font-black leading-none font-display">
              <span className="text-[52px] md:text-[84px] text-white block">dezu</span>
              <span className="text-[52px] md:text-[84px] text-white block">Schools</span>
            </div>
          </div>

          {/* Connect Column (Far Right) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">CONNECT</h4>
              <ul className="space-y-3 text-sm font-semibold opacity-80">
                <li><Link href="mailto:partners@dezuschools.in" className="hover:text-secondary transition block">partners@dezuschools.in</Link></li>
                <li><Link href="mailto:careers@dezuschools.in" className="hover:text-secondary transition block">careers@dezuschools.in</Link></li>
                <li className="text-white/70 block">+91 80 4710 0000</li>
              </ul>
            </div>

            {/* Social Icons Row + CTA Button */}
            <div className="flex items-center gap-4 flex-wrap mt-8">
              <div className="flex gap-2">
                <Link href="https://instagram.com" className="w-8 h-8 rounded-full border border-white/20 hover:bg-secondary hover:border-secondary transition flex items-center justify-center text-white">
                  <Instagram size={14} />
                </Link>
                <Link href="https://linkedin.com" className="w-8 h-8 rounded-full border border-white/20 hover:bg-secondary hover:border-secondary transition flex items-center justify-center text-white">
                  <Linkedin size={14} />
                </Link>
              </div>
              <Link
                href="/contact"
                className="bg-[#FF7122] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-1 active:scale-95 whitespace-nowrap ml-auto"
              >
                Book a presentation &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-semibold opacity-60 relative z-10">
          <div>
            &copy; {new Date().getFullYear()} DEZU Schools. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-secondary transition">Privacy</Link>
            <Link href="/terms" className="hover:text-secondary transition">Terms</Link>
            <Link href="/press" className="hover:text-secondary transition">Press kit</Link>
          </div>
        </div>

      </footer>
    </div>
  );
}
