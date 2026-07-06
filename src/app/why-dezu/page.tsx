"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Menu, 
  X, 
  Sparkles, 
  Instagram,
  Linkedin,
  Briefcase,
  BookOpen,
  Users
} from "lucide-react";

export default function WhyDezu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-primary text-white py-3 px-6 rounded-full flex items-center justify-between shadow-2xl z-50 transition-all duration-300 border border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-display font-black tracking-tight">dezu schools</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link href="/workshop" className="hover:text-secondary transition">3-day workshop</Link>
          <Link href="/#programs" className="hover:text-secondary transition">programs</Link>
          <Link href="/why-dezu" className="hover:text-secondary transition relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary after:scale-x-100">why dezu</Link>
          <Link href="/stories" className="hover:text-secondary transition">stories</Link>
          <Link href="/contact" className="hover:text-secondary transition">contact</Link>
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-opacity-95 transition shadow-md flex items-center gap-1 active:scale-95"
          >
            Book a Presentation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1 text-white hover:text-secondary transition focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* MOBILE NAV OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center gap-8 text-white">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-1 hover:text-secondary transition"
          >
            <X size={32} />
          </button>
          
          <nav className="flex flex-col items-center gap-6 text-2xl font-bold">
            <Link href="/workshop" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">3-day workshop</Link>
            <Link href="/#programs" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">programs</Link>
            <Link href="/why-dezu" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display text-secondary">why dezu</Link>
            <Link href="/stories" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">stories</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">contact</Link>
          </nav>

          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-95 transition shadow-lg mt-4 font-display"
          >
            Book a Presentation
          </Link>
        </div>
      )}

      {/* SECTION 1: HERO */}
      <section className="pt-36 pb-20 w-full relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Background decorative elements */}
        <div className="absolute top-16 left-[-40px] w-32 h-32 bg-[#C3B3F9] rounded-full opacity-80 -z-10"></div>
        <div className="absolute bottom-24 right-48 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -z-10"></div>

        {/* Purple abstract line loops (top-left) */}
        <div className="absolute top-[20%] left-[8%] -z-10 text-primary/30 w-44 h-44 hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M10,50 Q25,20 50,20 T90,50 T50,80 Z" />
            <path d="M15,48 Q28,25 50,25 T85,48 T50,75 Z" />
            <path d="M20,46 Q31,30 50,30 T80,46 T50,70 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-5xl md:text-7xl font-display font-black text-dark tracking-tight leading-none mb-6">
              <span className="bg-primary text-white px-5 py-1.5 rounded-full inline-block text-2xl md:text-4xl font-display transform -rotate-1 relative top-[-4px] uppercase tracking-normal mr-2">
                Taught
              </span>
              by{" "}
              <span className="text-primary relative font-normal font-serif italic tracking-wide">
                real-time experts
                {/* Custom Orange Paint Stroke */}
                <svg className="absolute bottom-[-8px] left-0 w-full h-[12px] text-secondary" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 15C50 15 150 5 295 12" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              from <span className="font-extrabold">Different</span>{" "}
              <span className="text-primary relative font-normal font-serif italic tracking-wide">
                industries.
                {/* Custom Orange Paint Stroke */}
                <svg className="absolute bottom-[-8px] left-0 w-full h-[12px] text-secondary" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 15C50 15 150 5 295 12" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-dark/80 font-medium max-w-xl mb-8 leading-relaxed mt-4">
              Dezu bridges the foundational academic years with the pulse of modern design, founding, planning, and design-thinking. We connect practicing designers, technology innovators, architects, and researchers directly with school environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200 w-full sm:w-auto text-center"
              >
                More On dezu <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Hero Right Content - Images and Purple Semi-circle */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end h-[450px] items-center overflow-visible">
            <div className="relative w-full max-w-[400px] h-full flex items-center justify-center">
              
              {/* Purple Semi-Circle in Background */}
              <div className="absolute w-[320px] h-[320px] bg-primary/20 rounded-full -z-10"></div>
              
              {/* Photo 1 (Man in black shirt - overlapping left) */}
              <div className="absolute left-4 top-[10%] w-[180px] h-[220px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-[-6deg] transition-all duration-300 hover:rotate-0 hover:scale-105 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                  alt="Mentor from creative industry" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 2 (Woman in white shirt - overlapping right) */}
              <div className="absolute right-4 bottom-[10%] w-[180px] h-[220px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-[6deg] transition-all duration-300 hover:rotate-0 hover:scale-105 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" 
                  alt="Mentor from technology industry" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* WAVY LINE DIVIDER */}
      <div className="w-full overflow-hidden leading-[0] my-4 text-secondary">
        <svg className="w-full h-[30px]" viewBox="0 0 1200 30" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M0,15 Q150,0 300,15 T600,15 T900,15 T1200,15" />
        </svg>
      </div>

      {/* SECTION 2: WHO ARE WE & DESIGN X EDUCATION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-12 text-left">
            <div>
              <h2 className="text-4xl font-display font-black text-dark leading-tight mb-4">
                Who are we?
              </h2>
              <p className="text-lg text-dark/85 font-medium leading-relaxed">
                Dezu is a design education platform that bridges the gap between classroom learning and industry practice. We bring working professionals into schools to teach, mentor, and inspire the next generation of creative thinkers.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-display font-black text-dark leading-tight mb-4">
                design X education
              </h2>
              <p className="text-lg text-dark/85 font-medium leading-relaxed">
                Through hands-on workshops, semester-long programs, and year-round partnerships, we help schools integrate real-world design thinking, innovation, and problem-solving into their curriculum.
              </p>
            </div>

            <div>
              <Link 
                href="/#programs" 
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg inline-flex items-center gap-2 hover:translate-x-1 duration-200"
              >
                Learn more <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Industry Studios */}
            <div className="bg-[#F2EFE9] rounded-3xl p-8 border border-dark/5 text-left flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-dark/50">20+</span>
                <div className="text-secondary p-2 bg-white rounded-full shadow-sm">
                  <Briefcase size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-black text-dark mb-2">Industry Studios</h3>
                <p className="text-xs text-dark/75 font-semibold leading-relaxed">
                  Practicing creative labs offering studio modules directly to partner classrooms.
                </p>
              </div>
            </div>

            {/* Card 2: Partner Schools */}
            <div className="bg-primary text-white rounded-3xl p-8 border border-white/5 text-left flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1 shadow-lg">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold opacity-60">50+</span>
                <div className="text-secondary p-2 bg-white/10 rounded-full">
                  <BookOpen size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-black mb-2">Partner Schools</h3>
                <p className="text-xs text-white/80 font-medium leading-relaxed">
                  Leading educational institutions running standard Dezu-powered classes weekly.
                </p>
              </div>
            </div>

            {/* Card 3: Students Educated */}
            <div className="bg-[#FED2B3] rounded-3xl p-8 border border-dark/5 text-left flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-dark/50">1000+</span>
                <div className="text-secondary p-2 bg-white rounded-full shadow-sm">
                  <Users size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-black text-dark mb-2">Students Educated</h3>
                <p className="text-xs text-dark/75 font-semibold leading-relaxed">
                  Active school kids acquiring design research, sketching, and prototype capabilities.
                </p>
              </div>
            </div>

            {/* Card 4: Projects Built */}
            <div className="bg-muted/60 rounded-3xl p-8 border border-dark/5 text-left flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-dark/50">200+</span>
                <div className="text-secondary p-2 bg-white rounded-full shadow-sm">
                  <Sparkles size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-black text-dark mb-2">Projects Built</h3>
                <p className="text-xs text-dark/75 font-semibold leading-relaxed">
                  Real functional ideas, models, physical architecture prototypes, user layouts.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: PARTNER LOGOS MARQUEE */}
      <section className="bg-primary text-white py-12 overflow-hidden border-y-2 border-dark/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-2">
            Associated with <span className="text-secondary italic font-serif font-normal">industry leaders</span>
          </h2>
          <p className="text-sm text-white/80 font-medium max-w-xl mx-auto">
            Our expert curriculum integrates the technical and process benchmarks of globally distinguished brands, giving students real-world context.
          </p>
        </div>

        <div className="animate-marquee-inline whitespace-nowrap flex items-center gap-16 text-2xl font-bold uppercase tracking-widest text-white/50 select-none">
          <span>Adobe</span> <span>✦</span>
          <span>Google</span> <span>✦</span>
          <span>Microsoft</span> <span>✦</span>
          <span>Figma</span> <span>✦</span>
          <span>Zoho</span> <span>✦</span>
          <span>TCS</span> <span>✦</span>
          
          <span>Adobe</span> <span>✦</span>
          <span>Google</span> <span>✦</span>
          <span>Microsoft</span> <span>✦</span>
          <span>Figma</span> <span>✦</span>
          <span>Zoho</span> <span>✦</span>
          <span>TCS</span> <span>✦</span>
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
              Our facilitators are working designers, technologists and researchers who bring studios into your school. Every mentor is trained and DEZU-certified.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-lavender rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Himajaa Indukuri - CEO dezu" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif italic text-2xl text-dark leading-tight">Himajaa Indukuri</h3>
                <p className="text-xs text-dark/70 font-extrabold uppercase mt-1 tracking-wider">CEO, dezu</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-lavender rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Himajaa Indukuri - CEO dezu" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif italic text-2xl text-dark leading-tight">Himajaa Indukuri</h3>
                <p className="text-xs text-dark/70 font-extrabold uppercase mt-1 tracking-wider">CEO, dezu</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-lavender rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Himajaa Indukuri - CEO dezu" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif italic text-2xl text-dark leading-tight">Himajaa Indukuri</h3>
                <p className="text-xs text-dark/70 font-extrabold uppercase mt-1 tracking-wider">CEO, dezu</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-lavender rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10 mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Himajaa Indukuri - CEO dezu" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif italic text-2xl text-dark leading-tight">Himajaa Indukuri</h3>
                <p className="text-xs text-dark/70 font-extrabold uppercase mt-1 tracking-wider">CEO, dezu</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: APPLY TO MENTOR CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-primary rounded-[36px] p-8 md:p-16 text-white relative overflow-hidden shadow-xl border border-white/10 flex flex-col lg:flex-row gap-12 items-center justify-between text-left">
          
          {/* Background Decorative Graphic (Left) */}
          <div className="absolute top-[-20%] left-[-10%] opacity-10 text-white w-96 h-96 -z-10">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="10" y="10" width="80" height="80" transform="rotate(45 50 50)" />
            </svg>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight">
              Are you a designer, architect, or creative practitioner?
            </h2>
            <p className="text-base text-white/80 font-medium leading-relaxed max-w-2xl">
              Dezu is always looking to expand its mentor cohort. If you believe that design education should be available to every student in India not just the ones in metros we'd love to hear from you. Mentors commit to 2-3 school visits per year. Everything else is flexible.
            </p>
            <div>
              <Link 
                href="/contact" 
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg inline-flex items-center gap-2 hover:translate-x-1 duration-200"
              >
                Apply to Mentor <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Graphical overlay elements on the right of card */}
          <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
            {/* Orange diagonal squares */}
            <div className="absolute w-28 h-28 bg-secondary rounded-3xl rotate-45 transform translate-x-4 translate-y-4 shadow-lg"></div>
            <div className="absolute w-24 h-24 bg-[#FED2B3]/90 rounded-2xl rotate-12 shadow-md"></div>
            {/* Scalloped badge styled circle */}
            <div className="absolute w-16 h-16 bg-white text-secondary rounded-full flex items-center justify-center shadow-lg font-black font-display text-xl border-4 border-secondary rotate-[-15deg]">
              DEZU
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white pt-20 pb-8 px-6 relative border-t border-white/10">
        
        {/* Floating Orange Badge/Flower sitting on top border */}
        <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-secondary z-10">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 text-left">
          
          {/* Programs Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">PROGRAMS</h4>
            <ul className="space-y-3 text-sm font-semibold opacity-80">
              <li><Link href="/workshop" className="hover:text-secondary transition">Workshop</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">Design Elective</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">Cross-Curricular</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">DEZU Studio</Link></li>
            </ul>
          </div>

          {/* About Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">ABOUT</h4>
            <ul className="space-y-3 text-sm font-semibold opacity-80">
              <li><Link href="/why-dezu" className="hover:text-secondary transition">Our Philosophy</Link></li>
              <li><Link href="/#mentors" className="hover:text-secondary transition">Faculty</Link></li>
              <li><Link href="/#programs" className="hover:text-secondary transition">Schools</Link></li>
              <li><Link href="/stories" className="hover:text-secondary transition">Journal</Link></li>
            </ul>
          </div>

          {/* Logo Brand Center-Right */}
          <div className="md:col-span-3 flex flex-col justify-center items-start md:items-center">
            <div className="text-left font-black leading-none font-display">
              <span className="text-4xl text-white/50 block">dezu</span>
              <span className="text-6xl text-white block">Schools</span>
            </div>
          </div>

          {/* Connect Column (Far Right) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">CONNECT</h4>
              <ul className="space-y-3 text-sm font-semibold opacity-80">
                <li><Link href="mailto:partners@dezuschools.in" className="hover:text-secondary transition block">partners@dezuschools.in</Link></li>
                <li><Link href="mailto:careers@dezuschools.in" className="hover:text-secondary transition block">careers@dezuschools.in</Link></li>
                <li className="text-white/70 block">+91 80 4710 0000</li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <Link href="https://instagram.com" className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary hover:text-white transition flex items-center justify-center text-white">
                <Instagram size={18} />
              </Link>
              <Link href="https://linkedin.com" className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary hover:text-white transition flex items-center justify-center text-white">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar with orange stair decoration */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-semibold opacity-60">
          
          {/* Orange stair decoration on bottom left */}
          <div className="flex items-end gap-0.5 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-secondary"></div>
            <div className="w-6 h-3 bg-secondary"></div>
            <div className="w-6 h-1.5 bg-secondary"></div>
          </div>

          <div>
            &copy; {new Date().getFullYear()} DEZU Schools. All rights reserved.
          </div>
        </div>

      </footer>
    </div>
  );
}
