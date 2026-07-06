"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import tenageboy from "../Assets/image 25.png"
import heroStar from "../Assets/Home-herosection-start.png"
import creatorsUnderline from "../Assets/home-hero-create-underline.png"
import scrollStar from "../Assets/herosection-scrollanimation-star.png"
import secondSectionLine from "../Assets/home seconsection background line.png"
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Check,
  Menu,
  X,
  Sparkles,
  Instagram,
  Linkedin
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards = [
    { id: 1, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop", link: "/mrecw", tilt: "" },
    { id: 2, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop", tilt: "" },
    { id: 3, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop", tilt: "" },
    { id: 4, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", tilt: "" },
  ];

  const setWidth = 1296; // (300px width + 24px gap) * 4 cards

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = setWidth;
    }
  }, []);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      if (scrollLeft < 300) {
        sliderRef.current.scrollLeft = scrollLeft + setWidth;
      } else if (scrollLeft > 2300) {
        sliderRef.current.scrollLeft = scrollLeft - setWidth;
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -324 : 324;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] relative text-dark font-sans selection:bg-primary selection:text-white">

      {/* INLINE CSS MARQUEE ANIMATION */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
          <Link href="#programs" className="hover:text-secondary transition">programs</Link>
          <Link href="/why-dezu" className="hover:text-secondary transition">why dezu</Link>
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
            <Link href="#programs" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">programs</Link>
            <Link href="/why-dezu" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">why dezu</Link>
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
      <section className="pt-36 pb-0 w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-end">
        {/* Background decorative elements */}
        <div className="absolute top-16 left-[-40px] w-32 h-32 bg-[#C3B3F9] rounded-full opacity-80 -z-10"></div>
        <div className="absolute bottom-24 right-48 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pb-16">

            <h1 className="text-6xl md:text-8xl font-display font-black text-dark tracking-tight leading-none mb-6">
              Build{" "}
              <span className="bg-primary text-white px-8 py-2.5 rounded-full inline-flex items-center justify-center text-4xl md:text-6xl font-display shadow-lg transform -rotate-1 relative top-[-4px] uppercase tracking-normal">
                Future
              </span>
              <br />
              <span
                style={{
                  fontFamily: "var(--font-instrument), serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  letterSpacing: "-1.52px",
                  verticalAlign: "middle",
                }}
                className="text-5xl md:text-[100px] text-dark relative mt-4 inline-block tracking-wide"
              >
                creators.
                {/* Custom Orange Paint Stroke */}
                <img
                  src={creatorsUnderline.src}
                  alt="creators underline"
                  className="absolute bottom-[-15px] left-0 w-full object-contain"
                />
              </span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-bai-jamjuree), sans-serif",
                fontWeight: 400,
                letterSpacing: "normal",
                verticalAlign: "middle",
              }}
              className="text-base md:text-[19.86px] md:leading-[28.79px] text-dark/80 max-w-xl mb-8 mt-4"
            >
              DEZU isn't a school — it's a studio for the kids who will<br />
              design what comes next.
              We turn curious minds into <strong className="font-extrabold text-primary">researchers, makers, storytellers</strong> and confident creative thinkers, from <strong className="font-extrabold text-secondary">age 8</strong> onwards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200 w-full sm:w-auto text-center"
              >
                Book a presentation →
              </Link>
              <Link
                href="#brochure"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 w-full sm:w-auto text-center"
              >
                Download brochure ↓
              </Link>
            </div>
          </div>

          {/* Hero Right Content - Student Cutout & Stickers */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end h-[500px] items-end overflow-visible">

            <div className="relative w-full max-w-[420px] h-[520px] flex items-end isolate">
              {/* Orange Star sits behind boy's head */}
              <div className="absolute top-[-10%] left-[72%] -translate-x-1/2   h-44  ">
                <img
                  src={heroStar.src}
                  alt="Hero Star"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Purple outline concentric loops */}
              <div className="absolute top-[12%] right-[-8%] -z-10 text-primary/30 w-44 h-44">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M10,50 Q25,20 50,20 T90,50 T50,80 Z" />
                  <path d="M15,48 Q28,25 50,25 T85,48 T50,75 Z" />
                  <path d="M20,46 Q31,30 50,30 T80,46 T50,70 Z" />
                </svg>
              </div>

              {/* Light orange blob at bottom right */}
              <div className="absolute bottom-4 right-[-5%] w-36 h-36 bg-[#FED2B3]/50 rounded-full blur-xl -z-10"></div>

              {/* Teenager Boy Image Cutout */}
              <img
                src={tenageboy.src}
                alt="Student future creator"
                className="w-full h-full object-contain object-bottom mix-blend-multiply grayscale-[10%]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TICKER TAPE BANNER */}
      <section className="bg-primary text-white py-4 overflow-hidden border-y-2 border-dark/10 shadow-md">
        <div
          className="animate-marquee-inline whitespace-nowrap flex items-center gap-8 text-2xl md:text-[32px] uppercase"
          style={{
            fontFamily: "var(--font-bai-jamjuree), sans-serif",
            fontWeight: 500,
            lineHeight: "48px",
            letterSpacing: "-1.2px",
            verticalAlign: "middle",
          }}
        >
          <span>DESIGN THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>UI / UX</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>RESEARCH</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>STORYBOARDING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />

          <span>DESIGN THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>UI / UX</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>RESEARCH</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>STORYBOARDING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />

          <span>DESIGN THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>UI / UX</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>RESEARCH</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>STORYBOARDING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
        </div>
      </section>

      {/* SECTION 2: TRUSTED BY SCHOOLS */}
      <section id="programs" className="py-20 w-full relative overflow-visible">
        {/* Diagonal Orange Band Image */}
        <img
          src={secondSectionLine.src}
          alt="Second Section Background Line"
          className="absolute inset-0 w-full h-full -z-10 object-cover pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 w-full relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-dark leading-tight">
                Trusted by <br />
                <span
                  style={{
                    fontFamily: "var(--font-instrument), serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: "67.73px",
                    letterSpacing: "-0.68px",
                    verticalAlign: "middle"
                  }}
                  className="text-primary inline-block"
                >
                  forward thinking
                </span> <br />
                Schools Across India
              </h2>
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-md hover:bg-opacity-90 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-md hover:bg-opacity-90 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide w-full justify-start"
          >
            {[...cards, ...cards, ...cards].map((card, idx) => {
              const cardContent = (
                <div className="relative w-[300px] h-[375px] rounded-[22px] overflow-hidden shadow-lg border border-dark/5 bg-white flex flex-col justify-end">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>

                  <div className="relative p-6 text-white text-left">
                    <h3 
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "24px",
                        verticalAlign: "middle",
                        textTransform: "uppercase"
                      }}
                      className="mb-1"
                    >
                      {card.title}
                    </h3>
                    <p 
                      style={{
                        fontFamily: "var(--font-sans), sans-serif",
                        fontWeight: 400,
                        fontSize: "13px",
                        lineHeight: "20.15px",
                        verticalAlign: "middle"
                      }}
                      className="text-white/80"
                    >
                      {card.location}
                    </p>
                  </div>
                </div>
              );

              const wrapperClass = `group flex-shrink-0 ${card.tilt} hover:rotate-0 hover:scale-[1.02] transition-all duration-300`;

              return card.link ? (
                <Link key={idx} href={card.link} className={wrapperClass}>
                  {cardContent}
                </Link>
              ) : (
                <div key={idx} className={wrapperClass}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE CAPABILITIES */}
      <section className="py-20 bg-cream/50 border-y border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                Schools Of Tomorrow <br />
                Teach{" "}
                <span
                  style={{
                    fontFamily: "var(--font-instrument), serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: "85.26px",
                    letterSpacing: "-0.85px",
                    verticalAlign: "middle",
                    fontSize: "58px"
                  }}
                  className="text-primary inline-block"
                >
                  how to think
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 text-dark/75 font-medium leading-relaxed">
              The world our students will inherit is changing too quickly for a content-first model to be enough.
              Our studio practice builds capabilities that remain <strong className="text-primary font-bold">relevant for life</strong> across any subject, any future career role.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

            {/* Card 01 - Design Thinking (Orange) */}
            <div className="bg-secondary rounded-[32px] p-8 text-white flex flex-col justify-between min-h-[300px] shadow-lg hover:shadow-xl transition-all relative overflow-hidden group lg:col-span-5 md:col-span-1">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold opacity-75">01</span>
                <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase px-3 py-1 rounded-full">CORE</span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Design Thinking</h3>
                <p className="text-sm text-white/85 font-medium leading-relaxed mb-6">
                  Reframe problems before solving them. Map systems. Find the human inside the data.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold border-t border-white/20 pt-4">
                <div className="bg-white/20 p-1 rounded-full"><Check size={12} /></div>
                <span>5 PROJECTS · 12 WEEKS</span>
              </div>
            </div>

            {/* Card 05 - Field Research (Beige) */}
            <div className="bg-muted/40 rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg border border-dark/5 transition-all relative group lg:col-span-4 md:col-span-1">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">05</span>
                <span className="bg-dark/5 text-dark border border-dark/10 text-xs font-bold uppercase px-3 py-1 rounded-full">FIELD</span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Field Research</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed">
                  Bus stops, markets, hospitals. Real interviews. Real observation. Real empathy.
                </p>
              </div>
              {/* Custom Orange Flower Sticker at bottom right */}
              <div className="absolute bottom-6 right-6 text-secondary transform group-hover:rotate-12 transition-transform duration-300">
                <Sparkles size={40} fill="currentColor" />
              </div>
            </div>

            {/* Card 03 - Storytelling & Voice (Peach) */}
            <div className="bg-[#FED2B3] rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg border border-dark/5 transition-all group lg:col-span-3 md:col-span-1">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">03</span>
                <span className="bg-dark/5 text-dark border border-dark/10 text-xs font-bold uppercase px-3 py-1 rounded-full">CORE</span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Storytelling & Voice</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed mb-6">
                  Build narratives that move people. Speak, write, pitch, perform. Own the room.
                </p>
              </div>
              <div className="text-[10px] font-extrabold tracking-widest text-secondary uppercase border-t border-dark/10 pt-4">
                PUBLIC PITCH NIGHT EVERY TERM
              </div>
            </div>

            {/* Card 06 - Systems Thinking (Lavender) */}
            <div className="bg-[#E4DDFF] rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg border border-dark/5 transition-all group relative overflow-hidden lg:col-span-5 md:col-span-1">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">06</span>
                <span className="bg-dark/5 text-dark border border-dark/10 text-xs font-bold uppercase px-3 py-1 rounded-full">CORE</span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Systems Thinking</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed">
                  Zoom out. See feedback loops, incentives, second-order effects.
                </p>
              </div>

              {/* Intersecting Orange Squares in bottom-right */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-secondary rounded-tl-3xl opacity-90 group-hover:scale-105 transition-transform"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-secondary/80 rounded-tl-xl"></div>
            </div>

            {/* Card 07 - Creative Confidence (Beige) */}
            <div className="bg-muted/40 rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg border border-dark/5 transition-all group lg:col-span-3 md:col-span-1">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">07</span>
                <span className="bg-dark/5 text-dark border border-dark/10 text-xs font-bold uppercase px-3 py-1 rounded-full">SOFT</span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Creative Confidence</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed">
                  The quiet skill nobody teaches. Showing up. Sharing the messy draft. Iterating in public.
                </p>
              </div>
            </div>

            {/* Card 04 - AI as a Co-Creator (Purple) */}
            <div className="bg-primary rounded-[32px] p-8 text-white flex flex-col justify-between min-h-[300px] shadow-lg hover:shadow-xl transition-all group lg:col-span-4 md:col-span-1">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold opacity-75">04</span>
                <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase px-3 py-1 rounded-full">LAB</span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">AI as a Co-Creator</h3>
                <p className="text-sm text-white/85 font-medium leading-relaxed">
                  Not "prompt engineering". Critical thinking with machines as collaborators, not crutches.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: THOUGHT LEADERSHIP (SIR KEN ROBINSON QUOTE) */}
      <section className="bg-lavender py-20 px-6 relative overflow-hidden">
        {/* Background wavy circle elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] border border-primary/10 rounded-full -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] border border-primary/10 rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Quote Header / Side */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-4">— 04 / THOUGHT LEADERSHIP</span>
            <span className="text-7xl font-display text-primary leading-none mb-6">“</span>
            <p className="text-sm text-primary/80 font-bold leading-relaxed max-w-xs">
              A reminder from the field — quoted often, lived rarely.
            </p>
          </div>

          {/* Quote Body */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <blockquote className="text-3xl md:text-5xl font-display font-black tracking-tight text-dark leading-tight mb-8">
              Creativity is now <span className="italic text-primary">as important</span> in education as literacy and we should treat it with{" "}
              <span className="bg-secondary text-white px-6 py-2 rounded-full inline-block mt-2 shadow-md transform rotate-1">
                the same status.
              </span>
            </blockquote>

            {/* Author Block */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                SKR
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-lg text-dark leading-none mb-1">Sir Ken Robinson</h4>
                <p className="text-xs text-dark/70 font-semibold">Educator · TED's most-watched speaker · cited 89M+ times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY ADAPT DEZU */}
      <section id="why-dezu" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
              Why Adapt <span className="text-primary">dezu?</span>
            </h2>
          </div>
          <div className="text-dark/75 font-medium max-w-md">
            Six learner capabilities that show up in grade sheets, portfolios, college essays, board interviews, and eventually, the world of work.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Critical Thinking */}
          <div className="bg-primary text-white rounded-3xl p-8 shadow-lg flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
            <div>
              <span className="text-xs font-bold tracking-wider text-white/60 uppercase block mb-3">01 · COGNITION</span>
              <h3 className="text-2xl font-display font-black tracking-tight mb-3">CRITICAL THINKING</h3>
            </div>
            <p className="text-sm text-white/80 font-medium">
              Students learn to challenge assumptions, weigh evidence, and arrive at conclusions they can defend.
            </p>
          </div>

          {/* Card 2: Creative Confidence */}
          <div className="bg-lavender text-dark rounded-3xl p-8 shadow-sm border border-dark/5 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
            <div>
              <span className="text-xs font-bold tracking-wider text-dark/65 uppercase block mb-3">02 · CONFIDENCE</span>
              <h3 className="text-2xl font-display font-black tracking-tight mb-3">CREATIVE CONFIDENCE</h3>
            </div>
            <p className="text-sm text-dark/75 font-medium">
              From "I'm not creative" to "watch this." A measurable shift in self-belief by week six.
            </p>
          </div>

          {/* Card 3: Innovative Mindset */}
          <div className="bg-muted/40 text-dark rounded-3xl p-8 shadow-sm border border-dark/5 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
            <div>
              <span className="text-xs font-bold tracking-wider text-dark/65 uppercase block mb-3">03 · MINDSET</span>
              <h3 className="text-2xl font-display font-black tracking-tight mb-3">INNOVATIVE MINDSET</h3>
            </div>
            <p className="text-sm text-dark/75 font-medium">
              Bias toward making instead of waiting. Toward iterating instead of seeking perfection.
            </p>
          </div>

          {/* Card 4: Human-Centered Problem Solving */}
          <div className="bg-muted/40 text-dark rounded-3xl p-8 shadow-sm border border-dark/5 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
            <div>
              <span className="text-xs font-bold tracking-wider text-dark/65 uppercase block mb-3">04 · EMPATHY</span>
              <h3 className="text-2xl font-display font-black tracking-tight mb-3">HUMAN-CENTERED</h3>
            </div>
            <p className="text-sm text-dark/75 font-medium">
              Students design with — not for — the people they want to serve. Field interviews. Real users. Real feedback loops.
            </p>
          </div>

          {/* Card 5: AI Readiness */}
          <div className="bg-[#FED2B3] text-dark rounded-3xl p-8 shadow-sm border border-dark/5 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
            <div>
              <span className="text-xs font-bold tracking-wider text-dark/65 uppercase block mb-3">05 · FLUENCY</span>
              <h3 className="text-2xl font-display font-black tracking-tight mb-3">AI READINESS</h3>
            </div>
            <p className="text-sm text-dark/75 font-medium">
              Prompting, critique, ethics and creative collaboration with intelligent tools — built into every studio cycle.
            </p>
          </div>

          {/* Card 6: Communication Skills */}
          <div className="bg-secondary text-white rounded-3xl p-8 shadow-lg flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1">
            <div>
              <span className="text-xs font-bold tracking-wider text-white/60 uppercase block mb-3">06 · VOICE</span>
              <h3 className="text-2xl font-display font-black tracking-tight mb-3">COMMUNICATION</h3>
            </div>
            <p className="text-sm text-white/80 font-medium">
              Storytelling, presenting, sketching, and pitching. The skills every future leader is expected to have.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6: FORMATS / ENTRY POINTS */}
      <section className="py-20 bg-cream/50 border-y border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                <span className="text-primary italic">one vision</span> <br />
                Many entry points
              </h2>
            </div>
            <div className="lg:col-span-6 text-dark/75 font-medium leading-relaxed">
              Whether you're piloting with one grade or integrating across the curriculum, there's a DEZU format for your school's calendar, budget and ambition.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* Format 01: Workshop */}
            <div className="bg-primary rounded-3xl p-6 text-white flex flex-col justify-between min-h-[380px] shadow-lg border border-white/5 relative">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold opacity-60">FORMAT 01</span>
                  <span className="bg-secondary text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full font-display">Flagship</span>
                </div>
                <h3 className="text-3xl font-display font-black mb-4">WORKSHOP</h3>
                <p className="text-xs text-white/80 leading-relaxed font-medium mb-6">
                  A high-intensity introduction to the DEZU studio model. Ideal for school leadership exploring fit before committing.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between"><span className="opacity-60">DURATION</span><span className="font-bold">3 days</span></div>
                <div className="flex justify-between"><span className="opacity-60">FORMAT</span><span className="font-bold">On-site studio</span></div>
                <div className="flex justify-between"><span className="opacity-60">AGES</span><span className="font-bold">Grades 5 – 10</span></div>
                <div className="flex justify-between"><span className="opacity-60">COHORT</span><span className="font-bold">30 – 120 students</span></div>
                <div className="flex justify-between"><span className="opacity-60">IMPLEMENT</span><span className="font-bold">Plug-in week</span></div>
              </div>
            </div>

            {/* Format 02: Design Elective */}
            <div className="bg-white rounded-3xl p-6 text-dark flex flex-col justify-between min-h-[380px] shadow-sm border border-dark/5">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-dark/50">FORMAT 02</span>
                  <span className="bg-dark/5 text-dark text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full font-display">SEMESTER</span>
                </div>
                <h3 className="text-3xl font-display font-black mb-4">DESIGN ELECTIVE</h3>
                <p className="text-xs text-dark/70 leading-relaxed font-medium mb-6">
                  A semester-long elective taught by DEZU mentors with your in-house teachers as co-facilitators.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-dark/5 text-xs">
                <div className="flex justify-between"><span className="opacity-50">DURATION</span><span className="font-bold text-dark/95">16 weeks</span></div>
                <div className="flex justify-between"><span className="opacity-50">FORMAT</span><span className="font-bold text-dark/95">2 sessions / week</span></div>
                <div className="flex justify-between"><span className="opacity-50">AGES</span><span className="font-bold text-dark/95">Grades 6 – 12</span></div>
                <div className="flex justify-between"><span className="opacity-50">COHORT</span><span className="font-bold text-dark/95">20 – 40 students</span></div>
                <div className="flex justify-between"><span className="opacity-50">IMPLEMENT</span><span className="font-bold text-dark/95">Add to elective</span></div>
              </div>
            </div>

            {/* Format 03: Cross Curriculum */}
            <div className="bg-white rounded-3xl p-6 text-dark flex flex-col justify-between min-h-[380px] shadow-sm border border-dark/5">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-dark/50">FORMAT 03</span>
                  <span className="bg-dark/5 text-dark text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full font-display">INTEGRATED</span>
                </div>
                <h3 className="text-3xl font-display font-black mb-4">CROSS CURRICULUM</h3>
                <p className="text-xs text-dark/70 leading-relaxed font-medium mb-6">
                  DEZU methods woven into existing subjects — science, English, social studies — so every teacher becomes a studio teacher.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-dark/5 text-xs">
                <div className="flex justify-between"><span className="opacity-50">DURATION</span><span className="font-bold text-dark/95">Full academic year</span></div>
                <div className="flex justify-between"><span className="opacity-50">FORMAT</span><span className="font-bold text-dark/95">Teacher PD + co-design</span></div>
                <div className="flex justify-between"><span className="opacity-50">AGES</span><span className="font-bold text-dark/95">All grades</span></div>
                <div className="flex justify-between"><span className="opacity-50">COHORT</span><span className="font-bold text-dark/95">Whole grade level</span></div>
                <div className="flex justify-between"><span className="opacity-50">IMPLEMENT</span><span className="font-bold text-dark/95">Embedded model</span></div>
              </div>
            </div>

            {/* Format 04: DEZU Studio */}
            <div className="bg-white rounded-3xl p-6 text-dark flex flex-col justify-between min-h-[380px] shadow-sm border border-dark/5">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-dark/50">FORMAT 04</span>
                  <span className="bg-dark/5 text-dark text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full font-display">YEAR-ROUND</span>
                </div>
                <h3 className="text-3xl font-display font-black mb-4">DEZU STUDIO</h3>
                <p className="text-xs text-dark/70 leading-relaxed font-medium mb-6">
                  A dedicated, year-round studio inside your school. The deepest version of DEZU — for schools that want to lead.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-dark/5 text-xs">
                <div className="flex justify-between"><span className="opacity-50">DURATION</span><span className="font-bold text-dark/95">Full school year</span></div>
                <div className="flex justify-between"><span className="opacity-50">FORMAT</span><span className="font-bold text-dark/95">Dedicated space</span></div>
                <div className="flex justify-between"><span className="opacity-50">AGES</span><span className="font-bold text-dark/95">Whole school</span></div>
                <div className="flex justify-between"><span className="opacity-50">COHORT</span><span className="font-bold text-dark/95">Whole school</span></div>
                <div className="flex justify-between"><span className="opacity-50">IMPLEMENT</span><span className="font-bold text-dark/95">Full transform</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: FLAGSHIP PROGRAM (WORKSHOP DAYS & TAKEAWAYS) */}
      <section id="workshop" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Days Timeline (Left Column) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-12">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-3">— FLAGSHIP FORMAT</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-none mb-3">Our Flagship Program</h2>
              <span className="text-primary text-4xl font-display">3 day workshop</span>
            </div>

            {/* Vertical Cards Loop */}
            <div className="space-y-8 relative">
              {/* Backing connecting line */}
              <div className="absolute left-10 top-8 bottom-8 w-1.5 bg-secondary/15 -z-10 hidden md:block"></div>

              {/* Day 1 */}
              <div className="bg-[#E4DDFF] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm border border-dark/5 relative">
                <div className="bg-primary text-white py-3 px-4 rounded-2xl flex flex-col items-center justify-center min-w-[70px]">
                  <span className="text-3xl font-display font-black leading-none">01</span>
                  <span className="text-[9px] font-extrabold uppercase mt-1">Day one</span>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-display font-black text-dark mb-4 leading-tight">UNDERSTAND HUMANS BEFORE SOLVING PROBLEMS</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/80 text-primary border border-primary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Empathy</span>
                    <span className="bg-white/80 text-primary border border-primary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Observation</span>
                    <span className="bg-white/80 text-primary border border-primary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Curiosity</span>
                    <span className="bg-white/80 text-primary border border-primary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Field interviews</span>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-[#FED2B3] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm border border-dark/5 relative">
                <div className="bg-secondary text-white py-3 px-4 rounded-2xl flex flex-col items-center justify-center min-w-[70px]">
                  <span className="text-3xl font-display font-black leading-none">02</span>
                  <span className="text-[9px] font-extrabold uppercase mt-1">Day two</span>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-display font-black text-dark mb-4 leading-tight">THINK BEYOND OBVIOUS ANSWERS</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/80 text-secondary border border-secondary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Research</span>
                    <span className="bg-white/80 text-secondary border border-secondary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Problem framing</span>
                    <span className="bg-white/80 text-secondary border border-secondary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Idea generation</span>
                    <span className="bg-white/80 text-secondary border border-secondary/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Systems thinking</span>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-muted/40 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm border border-dark/5 relative">
                <div className="bg-dark/70 text-white py-3 px-4 rounded-2xl flex flex-col items-center justify-center min-w-[70px]">
                  <span className="text-3xl font-display font-black leading-none">03</span>
                  <span className="text-[9px] font-extrabold uppercase mt-1">Day three</span>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-display font-black text-dark mb-4 leading-tight">COMMUNICATE IDEAS LIKE INNOVATORS DO</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/80 text-dark/75 border border-dark/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Storytelling</span>
                    <span className="bg-white/80 text-dark/75 border border-dark/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Prototyping</span>
                    <span className="bg-white/80 text-dark/75 border border-dark/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Presentation</span>
                    <span className="bg-white/80 text-dark/75 border border-dark/10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full font-display">Innovation showcase</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Takeaways & CTA (Right Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-primary text-white rounded-[36px] p-8 shadow-xl flex-1 flex flex-col justify-between border border-white/10 min-h-[500px]">
              <div>
                <h3 className="text-2xl font-display font-black uppercase tracking-wider mb-6 text-left border-b border-white/10 pb-4">
                  WHAT SCHOOLS TAKE AWAY
                </h3>

                <ul className="space-y-6 text-left">
                  <li className="flex items-start gap-4">
                    <span className="bg-secondary text-white text-[10px] font-extrabold py-1 px-2.5 rounded-full mt-0.5">01</span>
                    <div>
                      <h4 className="font-extrabold text-md leading-none mb-1 text-white">Future-ready learners</h4>
                      <p className="text-xs text-white/70 leading-normal">Documented evidence of student growth across core capabilities.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="bg-secondary text-white text-[10px] font-extrabold py-1 px-2.5 rounded-full mt-0.5">02</span>
                    <div>
                      <h4 className="font-extrabold text-md leading-none mb-1 text-white">Tangible student outcomes</h4>
                      <p className="text-xs text-white/70 leading-normal">Every student leaves with a finished prototype, presentation and reflection.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="bg-secondary text-white text-[10px] font-extrabold py-1 px-2.5 rounded-full mt-0.5">03</span>
                    <div>
                      <h4 className="font-extrabold text-md leading-none mb-1 text-white">Teacher insight</h4>
                      <p className="text-xs text-white/70 leading-normal">Educator playbooks, prompts and rituals — ready to use on Monday.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="bg-secondary text-white text-[10px] font-extrabold py-1 px-2.5 rounded-full mt-0.5">04</span>
                    <div>
                      <h4 className="font-extrabold text-md leading-none mb-1 text-white">Implementation roadmap</h4>
                      <p className="text-xs text-white/70 leading-normal">A clear path to scale studio practice across grades and subjects.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <Link
                  href="/contact"
                  className="bg-secondary text-white w-full py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200"
                >
                  Request workshop dates <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: MENTORS / PROFESSIONALS */}
      <section id="mentors" className="py-20 bg-cream/50 border-y border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                Taught By Practicing <br />
                <span className="text-primary italic">Professionals</span>
              </h2>
            </div>
            <div className="text-dark/75 font-medium max-w-md">
              Our facilitators are working designers, technologists and researchers who bring real-world studio experience into your school. Every mentor is vetted, trained and DEZU-certified.
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

      {/* SECTION 9: MEASURABLE RESULTS / METRICS */}
      <section className="bg-lavender py-20 px-6 relative overflow-hidden">
        {/* Background wavy pink stroke line */}
        <div className="absolute top-[35%] left-0 w-full h-[60px] opacity-25 pointer-events-none -z-10">
          <svg width="100%" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 30 Q360 0, 720 30 T1440 30" stroke="#FF6A00" strokeWidth="8" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Metric 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-5xl md:text-7xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex">
                91<span className="text-2xl md:text-4xl font-extrabold text-secondary">%</span>
              </span>
              <h4 className="text-xs font-extrabold tracking-wider text-primary uppercase mb-2">HIGHER CONFIDENCE</h4>
              <p className="text-sm text-dark/75 leading-relaxed font-semibold max-w-[240px]">
                Students self-report higher creative confidence after a single DEZU cohort.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-5xl md:text-7xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex">
                78<span className="text-2xl md:text-4xl font-extrabold text-secondary">%</span>
              </span>
              <h4 className="text-xs font-extrabold tracking-wider text-primary uppercase mb-2">BETTER COLLABORATION</h4>
              <p className="text-sm text-dark/75 leading-relaxed font-semibold max-w-[240px]">
                Teachers observe stronger team dynamics in cross-subject project work.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-5xl md:text-7xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex">
                3<span className="text-2xl md:text-4xl font-extrabold text-secondary">x</span>
              </span>
              <h4 className="text-xs font-extrabold tracking-wider text-primary uppercase mb-2">MORE PARTICIPATION</h4>
              <p className="text-sm text-dark/75 leading-relaxed font-semibold max-w-[240px]">
                Quiet students contribute three times more often in studio-format classes.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-5xl md:text-7xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex">
                100<span className="text-2xl md:text-4xl font-extrabold text-secondary">%</span>
              </span>
              <h4 className="text-xs font-extrabold tracking-wider text-primary uppercase mb-2">PROJECT COMPLETION</h4>
              <p className="text-sm text-dark/75 leading-relaxed font-semibold max-w-[240px]">
                Every student finishes the program with a presented, peer-reviewed prototype.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: PARTNER TIERS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
              Three Ways to <br />
              <span className="text-primary italic">Partner with</span> dezu
            </h2>
          </div>
          <div className="text-dark/75 font-medium max-w-md">
            Each tier is calibrated for a different stage of transformation. All include mentor-led delivery, teacher training and post-program reports for the board.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Tier 01 */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-dark/50">TIER 01</span>
              </div>
              <h3 className="text-3xl font-display font-black mb-2">WORKSHOP MODEL</h3>
              <p className="text-sm text-dark/70 font-medium leading-relaxed mb-6">
                A focused, plug-in cohort to introduce DEZU into your school calendar.
              </p>

              <div className="py-6 border-y border-dark/5 mb-6 text-3xl font-black">
                3 Days <span className="text-xs font-bold text-dark/50 tracking-wider">/ PILOT</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> 3-day Future Creator workshop</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Up to 120 students per cohort</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> 2 DEZU mentors on site</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Teacher observer playbook</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Innovation showcase on Day 3</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Post-program impact report</li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white py-3 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 mt-8 w-full text-center"
            >
              Start a pilot →
            </Link>
          </div>

          {/* Tier 02 (MOST CHOSEN) */}
          <div className="bg-primary text-white rounded-3xl p-8 shadow-xl text-left flex flex-col justify-between min-h-[500px] relative border border-white/10">
            <div className="absolute top-[-16px] right-6 bg-secondary text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider">
              MOST CHOSEN
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold opacity-60">TIER 02</span>
              </div>
              <h3 className="text-3xl font-display font-black mb-2">SEMESTER PROGRAM</h3>
              <p className="text-sm text-white/80 font-medium leading-relaxed mb-6">
                A full semester elective taught with your faculty as co-facilitators.
              </p>

              <div className="py-6 border-y border-white/10 mb-6 text-3xl font-black">
                16 Weeks <span className="text-xs font-bold opacity-60 tracking-wider">/ COHORT</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-secondary" /> Twice-weekly studio sessions</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-secondary" /> 3 DEZU mentors rotating in</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-secondary" /> Teacher certification track</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-secondary" /> Student portfolio output</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-secondary" /> Mid-term + final showcase</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-secondary" /> Parent & board briefing decks</li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="bg-secondary text-white hover:bg-opacity-95 py-3 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 mt-8 shadow-lg w-full text-center"
            >
              Plan a semester →
            </Link>
          </div>

          {/* Tier 03 */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-dark/50">TIER 03</span>
              </div>
              <h3 className="text-3xl font-display font-black mb-2">YEAR-ROUND PROGRAM</h3>
              <p className="text-sm text-dark/70 font-medium leading-relaxed mb-6">
                A dedicated DEZU Studio inside your school for the deepest integration.
              </p>

              <div className="py-6 border-y border-dark/5 mb-6 text-3xl font-black">
                12 Months <span className="text-xs font-bold text-dark/50 tracking-wider">/ YEAR</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Dedicated DEZU studio space</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Full grade integration model</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Whole-faculty professional dev</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Annual DEZU Creator Week event</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> External research partner report</li>
                <li className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className="text-primary" /> Founding school designation</li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white py-3 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 mt-8 w-full text-center"
            >
              Transform the school →
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 11: ONBOARDING PROCESS TIMELINE */}
      <section className="py-20 bg-cream/50 border-y border-dark/5 relative">
        {/* Background thick orange wavy line */}
        <div className="absolute top-[40%] left-0 w-full h-[60px] opacity-15 pointer-events-none -z-10">
          <svg width="100%" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 30 Q360 60, 720 30 T1440 30" stroke="#FF6A00" strokeWidth="12" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                From first call <br />
                to first <span className="text-primary italic">studio</span> <br />
                in 4 weeks.
              </h2>
            </div>
            <div className="lg:col-span-6 text-dark/75 font-medium leading-relaxed">
              A calm, board-friendly onboarding. No hidden costs, no last-minute scrambling. Each week has named owners on both sides.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* Week 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-extrabold tracking-wider text-dark/50 uppercase block mb-3 font-display">WEEK 01</span>
                <h3 className="text-2xl font-display font-black mb-2">Discovery Call</h3>
                <p className="text-xs text-dark/75 leading-relaxed font-semibold">
                  30-minute call with your academic team. We listen to your vision and constraints.
                </p>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider text-primary mt-6">→ 30 MIN</span>
            </div>

            {/* Week 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-extrabold tracking-wider text-dark/50 uppercase block mb-3 font-display">WEEK 02</span>
                <h3 className="text-2xl font-display font-black mb-2">Program Planning</h3>
                <p className="text-xs text-dark/75 leading-relaxed font-semibold">
                  We propose a tailored program brief, mentor mix and reporting model for board sign-off.
                </p>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider text-primary mt-6">→ SHARED DOC</span>
            </div>

            {/* Week 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-dark/5 text-left flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-extrabold tracking-wider text-dark/50 uppercase block mb-3 font-display">WEEK 03</span>
                <h3 className="text-2xl font-display font-black mb-2">School Coordination</h3>
                <p className="text-xs text-dark/75 leading-relaxed font-semibold">
                  Calendar lock-in, parent communication kit, room readiness, kit-of-parts shipped.
                </p>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider text-primary mt-6">→ JOINT WORKBACK</span>
            </div>

            {/* Week 4 */}
            <div className="bg-primary text-white rounded-3xl p-6 shadow-lg text-left flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-extrabold tracking-wider text-white/60 uppercase block mb-3 font-display">WEEK 04</span>
                <h3 className="text-2xl font-display font-black mb-2">Workshop Delivery</h3>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Studio goes live on your campus. Final debrief with academic head.
                </p>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider text-white mt-6">→ ON-CAMPUS</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 12: TESTIMONIALS */}
      <section id="stories" className="py-20 bg-lavender px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark">Stories from the Studio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Testimonial 1 */}
            <div className="bg-white rounded-[32px] p-8 shadow-lg flex flex-col justify-between min-h-[300px] text-left border border-dark/5">
              <p className="text-lg text-dark/80 font-medium leading-relaxed italic mb-8">
                "It changed how I teach. The studio model gives me permission to be a coach instead of a <span className="italic text-primary">lecturer</span> — and the students respond instantly."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Mr. Aniket Rao" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-extrabold text-dark leading-none mb-1">Mr. Aniket Rao</h4>
                  <p className="text-xs text-dark/60 font-semibold">Head of Design · Pathways Pune</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-[32px] p-8 shadow-lg flex flex-col justify-between min-h-[300px] text-left border border-dark/5">
              <p className="text-lg text-dark/80 font-medium leading-relaxed italic mb-8">
                "I didn't know I was a <span className="italic text-primary">creator</span>. I have a portfolio, three prototypes, and I presented to actual designers from Bengaluru."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                  <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=150&auto=format&fit=crop" alt="Aarav Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-extrabold text-dark leading-none mb-1">Aarav</h4>
                  <p className="text-xs text-dark/60 font-semibold">Student, Grade 8 · Ekya School</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-[32px] p-8 shadow-lg flex flex-col justify-between min-h-[300px] text-left border border-dark/5">
              <p className="text-lg text-dark/80 font-medium leading-relaxed italic mb-8">
                "I didn't know I was a <span className="italic text-primary">creator</span>. I have a portfolio, three prototypes, and I presented to actual designers from Bengaluru."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                  <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=150&auto=format&fit=crop" alt="Aarav Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-extrabold text-dark leading-none mb-1">Aarav</h4>
                  <p className="text-xs text-dark/60 font-semibold">Student, Grade 8 · Ekya School</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 13: FOOTER CALL TO ACTION */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-display font-black text-dark leading-tight mb-6">
          Let's build{" "}
          <span className="bg-secondary text-white px-6 py-1.5 rounded-3xl inline-block shadow-lg transform -rotate-1 text-4xl md:text-6xl">
            FUTURE
          </span>{" "}
          <span className="italic text-primary">creators</span> together.
        </h2>
        <p className="text-lg md:text-xl text-dark/75 font-semibold max-w-3xl mx-auto leading-relaxed mb-12">
          Bring creativity, communication, innovation, design thinking and future-ready learning into your school through a partner that institutional boards can trust and students will remember.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="mailto:partners@dezuschools.in"
            className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200 w-full sm:w-auto text-center font-display"
          >
            Book a presentation <ArrowRight size={18} />
          </Link>
          <Link
            href="#brochure"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 w-full sm:w-auto text-center font-display"
          >
            Download brochure <ArrowDown size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white pt-20 pb-8 px-6 relative border-t border-white/10">

        {/* Floating Orange Badge/Flower sitting on top border */}
        <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-secondary z-10">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 text-left">

          {/* Programs Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">PROGRAMS</h4>
            <ul className="space-y-3 text-sm font-semibold opacity-80">
              <li><Link href="/workshop" className="hover:text-secondary transition">Workshop</Link></li>
              <li><Link href="#programs" className="hover:text-secondary transition">Design Elective</Link></li>
              <li><Link href="#programs" className="hover:text-secondary transition">Cross-Curricular</Link></li>
              <li><Link href="#programs" className="hover:text-secondary transition">DEZU Studio</Link></li>
            </ul>
          </div>

          {/* About Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-secondary uppercase mb-6 font-display">ABOUT</h4>
            <ul className="space-y-3 text-sm font-semibold opacity-80">
              <li><Link href="/why-dezu" className="hover:text-secondary transition">Our Philosophy</Link></li>
              <li><Link href="#mentors" className="hover:text-secondary transition">Faculty</Link></li>
              <li><Link href="#programs" className="hover:text-secondary transition">Schools</Link></li>
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
