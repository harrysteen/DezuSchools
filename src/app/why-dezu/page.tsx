"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <span className="text-xl md:text-2xl font-display font-normal tracking-tight">dezu schools</span>
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
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end h-[450px] items-end overflow-visible">
            <div className="relative w-full max-w-[400px] h-[450px] flex items-end justify-center">
              
              {/* Purple Circle in Background */}
              <div className="absolute top-[12%] w-[320px] h-[320px] bg-[#C3B3F9] rounded-full -z-10 shadow-inner"></div>
              
              {/* Orange Star Decal */}
              <div className="absolute top-[8%] -right-8 w-24 h-24 z-0">
                <Image
                  src={heroStar}
                  alt="Orange star decor"
                  className="w-full h-full object-contain animate-[pulse_3s_infinite]"
                />
              </div>

              {/* Three Experts Cutout */}
              <div className="relative w-[550px] h-[550px] flex items-end justify-center z-10 overflow-visible translate-y-6 md:translate-y-10">
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
      </section>

      {/* WAVY LINE DIVIDER */}
      <div className="w-full overflow-hidden leading-[0] relative -mt-16 md:-mt-24 lg:-mt-32 -mb-8 md:-mb-12 lg:-mb-16 z-20 pointer-events-none">
        <Image
          src={whyDezuHeroLine}  
          alt="Background Line Divider"
          className="w-full h-auto object-cover"
        />
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
            <div className="bg-lavender rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
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
            <div className="bg-lavender rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
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

            {/* Card 4 */}
            <div className="bg-lavender rounded-3xl p-4 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[360px] group transition-all duration-300 hover:shadow-xl relative overflow-hidden">
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
                href="mailto:info@dezu.in" 
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
