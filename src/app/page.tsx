"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import tenageboy from "../Assets/image 25.png"
import heroStar from "../Assets/Home-herosection-start.png"
import creatorsUnderline from "../Assets/home-hero-create-underline.png"
import homeHeroCurvs from "../Assets/Home herosection curvs.png"
import heroBlob from "../Assets/Home herosection blob.png"
import scrollStar from "../Assets/herosection-scrollanimation-star.png"
import secondSectionLine from "../Assets/home seconsection background line.png"
import footerBackgroundLine from "../Assets/Footer background line.png"
import homeSecondSecImg1 from "../Assets/home second section img1.png"
import homeSecondSecImg2 from "../Assets/home second section img2.png"
import homeSecondSecImg3 from "../Assets/home second section img3.png"
import homeSecondSecImg4 from "../Assets/home second section img4.png"
import himajaaImg from "../Assets/Himajaa Indukuri.png"
import balamuraliImg from "../Assets/Balamurali Bhaskaran.png"
import bhavanaImg from "../Assets/Bhavana Ghanta.png"
import prathikImg from "../Assets/Prathik Gadde.png"
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Check,
  Sparkles,
  Instagram,
  Linkedin,
  Download
} from "lucide-react";

export default function Home() {
  const [hoveredFormat, setHoveredFormat] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards = [
    { id: 1, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: homeSecondSecImg1.src, link: "/mrecw", tilt: "" },
    { id: 2, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: homeSecondSecImg2.src, tilt: "" },
    { id: 3, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: homeSecondSecImg3.src, tilt: "" },
    { id: 4, title: "GREENFIELD INTERNATIONAL", location: "Hyderabad · Telangana", image: homeSecondSecImg4.src, tilt: "" },
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
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="pt-36 pb-0 w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-end">
        {/* Background decorative elements */}
        <img
          src={homeHeroCurvs.src}
          alt="Hero Curves"
          className="absolute top-8 left-[-40px] w-56 h-56 object-contain -z-10"
        />
        <div className="absolute bottom-24 right-48 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pb-16">

            <h1 className="text-dark tracking-tight leading-tight mb-6 text-3xl md:text-5xl lg:text-[52px] font-black">
              <span className="font-display font-normal block mb-3">
                Building 21st-century skills
              </span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
                <span className="font-display font-normal">for an</span>
                <span className="bg-primary text-white px-7 py-2 rounded-full inline-flex items-center justify-center font-display font-normal shadow-md transform -rotate-1 normal-case tracking-normal text-2xl md:text-4xl lg:text-[42px] mx-2">
                  AI driven
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-instrument), serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                  className="text-3xl md:text-[60px] lg:text-[72px] text-dark relative inline-block tracking-wide leading-none font-normal"
                >
                  future.
                  {/* Custom Orange Paint Stroke */}
                  <img
                    src={creatorsUnderline.src}
                    alt="future underline"
                    className="absolute bottom-[-15px] left-0 w-full object-contain"
                  />
                </span>
              </span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontWeight: 400,
                letterSpacing: "normal",
                verticalAlign: "middle",
              }}
              className="text-base md:text-[19.86px] md:leading-[28.79px] text-dark/80 max-w-2xl mb-8 mt-4"
            >
              <strong className="font-bold text-dark">We partner with schools</strong> to develop important growth skills to develop creativity, critical thinking, communication, collaboration, and innovation for <strong className="font-bold text-dark">students from grades 6 -10</strong>.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Stat 1 */}
              <div className="bg-white border border-[#FED2B3]/60 px-6 py-3.5 rounded-2xl flex flex-col text-left shadow-sm min-w-[130px]">
                <span className="text-2xl md:text-3xl font-black text-dark leading-none">
                  10<span className="text-secondary font-bold ml-0.5">+</span>
                </span>
                <span className="text-[11px] font-semibold text-dark/40 mt-1.5 leading-none">
                  Schools Partnered
                </span>
              </div>
              {/* Stat 2 */}
              <div className="bg-white border border-[#FED2B3]/60 px-6 py-3.5 rounded-2xl flex flex-col text-left shadow-sm min-w-[130px]">
                <span className="text-2xl md:text-3xl font-black text-dark leading-none">
                  300<span className="text-secondary font-bold ml-0.5">+</span>
                </span>
                <span className="text-[11px] font-semibold text-dark/40 mt-1.5 leading-none">
                  Students Impacted
                </span>
              </div>
              {/* Stat 3 */}
              <div className="bg-white border border-[#FED2B3]/60 px-6 py-3.5 rounded-2xl flex flex-col text-left shadow-sm min-w-[130px]">
                <span className="text-2xl md:text-3xl font-black text-dark leading-none">
                  100<span className="text-secondary font-bold ml-0.5">%</span>
                </span>
                <span className="text-[11px] font-semibold text-dark/40 mt-1.5 leading-none">
                  Hands On
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/workshop"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200 w-full sm:w-auto text-center"
              >
                Know More <ArrowRight size={18} />
              </Link>
              <a
                href="/dezu schools Browcher.pdf"
                download="dezu schools Browcher.pdf"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 w-full sm:w-auto text-center"
              >
                Workshop Brochure <Download size={18} />
              </a>
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



              {/* Purple background blob */}
              <img
                src={heroBlob.src}
                alt="Hero Background Blob"
                className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[90%] h-auto object-contain z-0"
              />

              {/* Teenager Boy Image Cutout */}
              <img
                src={tenageboy.src}
                alt="Student future creator"
                className="w-full h-full object-contain object-bottom grayscale-[10%] relative z-10"
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
          <span>CREATIVITY</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CRITICAL THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>PROBLEM SOLVING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>INNOVATION</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CONFIDENCE</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>COMMUNICATION</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />

          <span>DESIGN THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CREATIVITY</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CRITICAL THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>PROBLEM SOLVING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>INNOVATION</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CONFIDENCE</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>COMMUNICATION</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />

          <span>DESIGN THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CREATIVITY</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CRITICAL THINKING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>PROBLEM SOLVING</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>INNOVATION</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>CONFIDENCE</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
          <span>COMMUNICATION</span> <img src={scrollStar.src} alt="✦" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] inline-block object-contain" />
        </div>
      </section>

      {/* SECTION 3: MULTIPLE MODES OF DELIVERY (Moved up from Section 6) */}
      <section className="py-20 bg-cream/50 border-y border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                Multiple modes of <br />
                <span
                  style={{
                    fontFamily: "var(--font-instrument), serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                  className="text-primary italic font-normal text-3xl md:text-[58px]"
                >
                  delivery
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 text-dark/75 font-medium leading-relaxed text-left">
              Our specially-designed delivery formats are customisable and easy to integrate with the school timetables and curricula. We help you choose the right format and curation for your school
            </div>
          </div>

          {(() => {
            const isCard1Active = hoveredFormat === null || hoveredFormat === 1;
            const isCard2Active = hoveredFormat === 2;
            const isCard3Active = hoveredFormat === 3;
            const isCard4Active = hoveredFormat === 4;

            return (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* Format 01: Workshop */}
                <div
                  onMouseEnter={() => setHoveredFormat(1)}
                  onMouseLeave={() => setHoveredFormat(null)}
                  className={`rounded-[32px] p-8 flex flex-col justify-between min-h-[550px] border transition-all duration-300 cursor-pointer ${isCard1Active
                    ? "bg-primary text-white shadow-xl -translate-y-2 border-primary"
                    : "bg-white text-dark shadow-sm border-dark/10 hover:border-dark/20"
                    }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xs font-mono tracking-wider ${isCard1Active ? "text-white/60" : "text-dark/40"}`}>FORMAT 01</span>
                      <span className="bg-secondary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full font-display">Flagship</span>
                    </div>
                    <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tight">WORKSHOP</h3>
                    <p className={`text-xs md:text-sm leading-relaxed mb-6 font-medium ${isCard1Active ? "text-white/80" : "text-dark/60"}`}>
                      A high-intensity introduction to the DEZU studio model. Ideal for school leadership exploring fit before committing.
                    </p>
                  </div>

                  <div className="space-y-0 pt-2 text-xs md:text-sm">
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard1Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard1Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>DURATION</span>
                      <span className="font-semibold">3 days</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard1Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard1Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>FORMAT</span>
                      <span className="font-semibold">On-site studio</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard1Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard1Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>AGES</span>
                      <span className="font-semibold">Grades 5 – 10</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard1Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard1Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>COHORT</span>
                      <span className="font-semibold">30 – 120 students</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard1Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard1Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>IMPLEMENTATION</span>
                      <span className="font-semibold">Plug-in week</span>
                    </div>
                  </div>
                </div>

                {/* Format 02: Design Elective */}
                <div
                  onMouseEnter={() => setHoveredFormat(2)}
                  onMouseLeave={() => setHoveredFormat(null)}
                  className={`rounded-[32px] p-8 flex flex-col justify-between min-h-[550px] border transition-all duration-300 cursor-pointer ${isCard2Active
                    ? "bg-primary text-white shadow-xl -translate-y-2 border-primary"
                    : "bg-white text-dark shadow-sm border-dark/10 hover:border-dark/20"
                    }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xs font-mono tracking-wider ${isCard2Active ? "text-white/60" : "text-dark/40"}`}>FORMAT 02</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isCard2Active ? "text-white/60" : "text-dark/40"}`}>SEMESTER</span>
                    </div>
                    <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tight">DESIGN ELECTIVE</h3>
                    <p className={`text-xs md:text-sm leading-relaxed mb-6 font-medium ${isCard2Active ? "text-white/80" : "text-dark/60"}`}>
                      A semester-long elective taught by DEZU mentors with your in-house teachers as co-facilitators.
                    </p>
                  </div>

                  <div className="space-y-0 pt-2 text-xs md:text-sm">
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard2Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard2Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>DURATION</span>
                      <span className="font-semibold">16 weeks</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard2Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard2Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>FORMAT</span>
                      <span className="font-semibold">2 sessions / week</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard2Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard2Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>AGES</span>
                      <span className="font-semibold">Grades 6 – 12</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard2Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard2Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>COHORT</span>
                      <span className="font-semibold">20 – 40 students</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard2Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard2Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>IMPLEMENTATION</span>
                      <span className="font-semibold">Add to elective bank</span>
                    </div>
                  </div>
                </div>

                {/* Format 03: Cross Curriculum */}
                <div
                  onMouseEnter={() => setHoveredFormat(3)}
                  onMouseLeave={() => setHoveredFormat(null)}
                  className={`rounded-[32px] p-8 flex flex-col justify-between min-h-[550px] border transition-all duration-300 cursor-pointer ${isCard3Active
                    ? "bg-primary text-white shadow-xl -translate-y-2 border-primary"
                    : "bg-white text-dark shadow-sm border-dark/10 hover:border-dark/20"
                    }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xs font-mono tracking-wider ${isCard3Active ? "text-white/60" : "text-dark/40"}`}>FORMAT 03</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isCard3Active ? "text-white/60" : "text-dark/40"}`}>INTEGRATED</span>
                    </div>
                    <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tight">CROSS CURRICULUM</h3>
                    <p className={`text-xs md:text-sm leading-relaxed mb-6 font-medium ${isCard3Active ? "text-white/80" : "text-dark/60"}`}>
                      DEZU methods woven into existing subjects – science, English, social studies – so every teacher becomes a studio teacher.
                    </p>
                  </div>

                  <div className="space-y-0 pt-2 text-xs md:text-sm">
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard3Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard3Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>DURATION</span>
                      <span className="font-semibold">Full academic year</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard3Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard3Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>FORMAT</span>
                      <span className="font-semibold">Teacher PD + co-design</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard3Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard3Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>AGES</span>
                      <span className="font-semibold">All grades</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard3Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard3Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>COHORT</span>
                      <span className="font-semibold">Whole grade level</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard3Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard3Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>IMPLEMENTATION</span>
                      <span className="font-semibold">Embedded model</span>
                    </div>
                  </div>
                </div>

                {/* Format 04: DEZU Studio */}
                <div
                  onMouseEnter={() => setHoveredFormat(4)}
                  onMouseLeave={() => setHoveredFormat(null)}
                  className={`rounded-[32px] p-8 flex flex-col justify-between min-h-[550px] border transition-all duration-300 cursor-pointer ${isCard4Active
                    ? "bg-primary text-white shadow-xl -translate-y-2 border-primary"
                    : "bg-white text-dark shadow-sm border-dark/10 hover:border-dark/20"
                    }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xs font-mono tracking-wider ${isCard4Active ? "text-white/60" : "text-dark/40"}`}>FORMAT 04</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isCard4Active ? "text-white/60" : "text-dark/40"}`}>YEAR-ROUND</span>
                    </div>
                    <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tight">DEZU STUDIO</h3>
                    <p className={`text-xs md:text-sm leading-relaxed mb-6 font-medium ${isCard4Active ? "text-white/80" : "text-dark/60"}`}>
                      A dedicated, year-round studio space inside your school. The deepest version of DEZU – for schools ready to lead.
                    </p>
                  </div>

                  <div className="space-y-0 pt-2 text-xs md:text-sm">
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard4Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard4Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>DURATION</span>
                      <span className="font-semibold">Year-round</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard4Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard4Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>FORMAT</span>
                      <span className="font-semibold">Dedicated studio space</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard4Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard4Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>AGES</span>
                      <span className="font-semibold">Whole school</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard4Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard4Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>COHORT</span>
                      <span className="font-semibold">Unlimited</span>
                    </div>
                    <div className={`flex justify-between py-3 border-t border-dashed ${isCard4Active ? "border-white/10" : "border-dark/10"}`}>
                      <span className={`${isCard4Active ? "text-white/60" : "text-dark/40"} font-bold text-[10px] md:text-xs tracking-wider`}>IMPLEMENTATION</span>
                      <span className="font-semibold">Full transformation</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}
        </div>
      </section>

      {/* SECTION 4: CORE CAPABILITIES */}
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
              In a world increasingly shaped by technology, the ability to think visually, communicate clearly,
              and solve problems creatively is no longer a "nice to have." It is the <strong className="text-primary font-extrabold">competitive edge</strong> your students deserve.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

            {/* Card 01 - Design Thinking (Orange) */}
            <div className="bg-secondary rounded-[32px] p-8 text-white flex flex-col justify-between min-h-[300px] shadow-lg hover:shadow-xl transition-all relative overflow-hidden group lg:col-span-5 md:col-span-1" style={{ border: "1.06px solid #15140F" }}>
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold opacity-75">01</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5" style={{ border: "1.06px solid #15140F" }}>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  CORE
                </span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Design Thinking</h3>
                <p className="text-sm text-white/85 font-medium leading-relaxed mb-6">
                  Students develop empathy, creativity, rapid prototyping, and real-world problem-solving through hands-on projects.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold border-t border-white/20 pt-4">
                <div className="bg-white/20 p-1 rounded-full"><Check size={12} /></div>
                <span>HUMAN CENTRED INNOVATION SKILLS</span>
              </div>
            </div>

            {/* Card 05 - Entrepreneurship (Beige) */}
            <div className="bg-muted/40 rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg transition-all relative group lg:col-span-4 md:col-span-1" style={{ border: "1.06px solid #15140F" }}>
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">05</span>
                <span className="bg-dark/5 text-dark text-xs font-bold uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5" style={{ border: "1.06px solid #15140F" }}>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  LAB
                </span>
              </div>
              <div className="mt-12 mb-6">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Entrepreneurship</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed">
                  Develop students who identify opportunities, take initiative, and create meaningful value for their communities.
                </p>
              </div>
              <div className="text-[10px] font-extrabold tracking-widest text-secondary uppercase border-t border-dark/10 pt-4 z-10">
                FROM IDEAS TO IMPACT
              </div>

            </div>

            {/* Card 03 - Storytelling & Communication (Peach) */}
            <div className="bg-[#FED2B3] rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg transition-all group lg:col-span-3 md:col-span-1" style={{ border: "1.06px solid #15140F" }}>
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">03</span>
                <span className="bg-dark/5 text-dark text-xs font-bold uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5" style={{ border: "1.06px solid #15140F" }}>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  CORE
                </span>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Storytelling & Communication</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed mb-6">
                  Build confident communicators who can express ideas clearly, influence others, and lead with conviction.
                </p>
              </div>
              <div className="text-[10px] font-extrabold tracking-widest text-secondary uppercase border-t border-dark/10 pt-4">
                CONFIDENCE BEYOND THE CLASSROOM
              </div>
            </div>

            {/* Card 06 - Systems Thinking (Lavender) */}
            <div className="bg-[#E4DDFF] rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg transition-all group relative overflow-hidden lg:col-span-5 md:col-span-1" style={{ border: "1.06px solid #15140F" }}>
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">06</span>
                <span className="bg-dark/5 text-dark text-xs font-bold uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5" style={{ border: "1.06px solid #15140F" }}>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  CORE
                </span>
              </div>
              <div className="mt-12 mb-6">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Systems Thinking</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed">
                  Equip students to understand complexity, identify patterns, and make better decisions in an interconnected world.
                </p>
              </div>
              <div className="text-[10px] font-extrabold tracking-widest text-secondary uppercase border-t border-dark/10 pt-4 z-10">
                COMPLEX PROBLEMS. BETTER THINKERS.
              </div>


            </div>

            {/* Card 07 - Leadership & Collaboration (Beige) */}
            <div className="bg-muted/40 rounded-[32px] p-8 text-dark flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-lg transition-all group lg:col-span-3 md:col-span-1" style={{ border: "1.06px solid #15140F" }}>
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-dark/65">07</span>
                <span className="bg-dark/5 text-dark text-xs font-bold uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5" style={{ border: "1.06px solid #15140F" }}>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  CORE
                </span>
              </div>
              <div className="mt-12 mb-6">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">Leadership & Collaboration</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed">
                  Nurture empathetic leaders who collaborate effectively, embrace diverse perspectives, and inspire positive change.
                </p>
              </div>
              <div className="text-[10px] font-extrabold tracking-widest text-secondary uppercase border-t border-dark/10 pt-4">
                LEAD WITH EMPATHY
              </div>
            </div>

            {/* Card 04 - AI as a Co-Creator (Purple) */}
            <div className="bg-primary rounded-[32px] p-8 text-white flex flex-col justify-between min-h-[300px] shadow-lg hover:shadow-xl transition-all group lg:col-span-4 md:col-span-1" style={{ border: "1.06px solid #15140F" }}>
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold opacity-75">04</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5" style={{ border: "1.06px solid #15140F" }}>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  LAB
                </span>
              </div>
              <div className="mt-12 mb-6">
                <h3 className="text-3xl font-display font-black tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform">AI as a Co-Creator</h3>
                <p className="text-sm text-white/85 font-medium leading-relaxed">
                  Prepare students to collaborate with AI responsibly while strengthening critical thinking and human judgment.
                </p>
              </div>
              <div className="text-[10px] font-extrabold tracking-widest text-secondary uppercase border-t border-white/20 pt-4">
                AI-READY. HUMAN-FIRST.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FLAGSHIP PROGRAM (WORKSHOP DAYS & TAKEAWAYS) (Moved up from Section 7) */}
      <section id="workshop" className="py-20 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start text-left">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-dark tracking-tight mb-2">
              Our Flagship Program
            </h2>
            <div
              style={{
                fontFamily: "var(--font-instrument), serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
              className="text-primary text-4xl md:text-5xl lg:text-6xl"
            >
              3 day workshop
            </div>
          </div>
          <div className="lg:col-span-5 text-sm md:text-base text-dark/75 font-medium leading-relaxed pt-2">
            A focused three-day arc that takes students from empathy to artifact. Built for school leaders who want to see DEZU's method in action.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Days Timeline (Left Column) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Day 1 */}
            <div className="bg-[#E4DDFF] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm relative" style={{ border: "1.17px solid #1A15171A" }}>
              <div className="flex flex-col items-center justify-center min-w-[70px] text-center">
                <span className="text-4xl md:text-5xl font-display font-black text-dark leading-none">01</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-dark/60 mt-1">Day one</span>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl md:text-2xl font-display font-black text-dark mb-4 leading-tight uppercase">UNDERSTAND HUMANS BEFORE SOLVING PROBLEMS</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/85 text-primary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Empathy</span>
                  <span className="bg-white/85 text-primary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Observation</span>
                  <span className="bg-white/85 text-primary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Curiosity</span>
                  <span className="bg-white/85 text-primary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Field interviews</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-[#FED2B3] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm relative" style={{ border: "1.17px solid #1A15171A" }}>
              <div className="flex flex-col items-center justify-center min-w-[70px] text-center">
                <span className="text-4xl md:text-5xl font-display font-black text-dark leading-none">02</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-dark/60 mt-1">Day two</span>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl md:text-2xl font-display font-black text-dark mb-4 leading-tight uppercase">THINK BEYOND OBVIOUS ANSWERS</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/85 text-secondary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Research</span>
                  <span className="bg-white/85 text-secondary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Problem framing</span>
                  <span className="bg-white/85 text-secondary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Idea generation</span>
                  <span className="bg-white/85 text-secondary text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Systems thinking</span>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-muted/40 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm relative" style={{ border: "1.17px solid #1A15171A" }}>
              <div className="flex flex-col items-center justify-center min-w-[70px] text-center">
                <span className="text-4xl md:text-5xl font-display font-black text-dark leading-none">03</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-dark/60 mt-1">Day three</span>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl md:text-2xl font-display font-black text-dark mb-4 leading-tight uppercase">COMMUNICATE IDEAS LIKE INNOVATORS DO</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/85 text-dark/75 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Storytelling</span>
                  <span className="bg-white/85 text-dark/75 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Prototyping</span>
                  <span className="bg-white/85 text-dark/75 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Presentation</span>
                  <span className="bg-white/85 text-dark/75 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full font-display" style={{ border: "1.17px solid #0000001A" }}>Innovation showcase</span>
                </div>
              </div>
            </div>

          </div>

          {/* Takeaways & CTA (Right Column) */}
          <div className="lg:col-span-5 relative flex flex-col">

            {/* Orange Starburst Badge */}
            <div className="absolute -top-7 -right-7 w-20 h-20 text-secondary -z-10 transform rotate-12">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                <path d="M50 5 L55 21 L70 11 L69 28 L84 22 L77 38 L91 38 L80 50 L91 62 L77 62 L84 78 L69 72 L70 89 L55 79 L50 95 L45 79 L30 89 L31 72 L16 78 L23 62 L9 62 L20 50 L9 38 L23 38 L16 22 L31 28 L30 11 L45 21 Z" />
              </svg>
            </div>

            <div className="bg-primary text-white rounded-[32px] p-8 shadow-xl flex flex-col justify-between relative z-10 flex-1">
              <div>
                <h3 className="text-2xl font-display font-black uppercase tracking-wider mb-6 text-left border-b border-white/10 pb-4">
                  WHAT SCHOOLS TAKE AWAY
                </h3>

                <ul className="space-y-6 text-left">
                  <li className="flex items-start gap-4">
                    <span className="bg-secondary text-white text-[10px] font-extrabold py-1 px-2.5 rounded-full mt-0.5">01</span>
                    <div>
                      <h4 className="font-extrabold text-md leading-none mb-1 text-white">Future-ready learners</h4>
                      <p className="text-xs text-white/70 leading-normal">Documented evidence of student growth across five core capabilities.</p>
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

      {/* SECTION 6: THOUGHT LEADERSHIP (SIR KEN ROBINSON QUOTE) (Moved up from Section 4) */}
      <section className="bg-lavender py-20 px-6 relative overflow-hidden">
        {/* Background wavy circle elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] border border-primary/10 rounded-full -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] border border-primary/10 rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Quote Header / Side */}
          <div className="lg:col-span-4 flex flex-col items-center text-center justify-center">
            <span className="text-8xl font-display text-primary leading-none mb-2">“</span>
            <p className="text-sm text-primary/80 font-bold leading-relaxed max-w-xs">
              A reminder from the field — quoted often, lived rarely.
            </p>
          </div>

          {/* Quote Body */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <blockquote className="text-3xl md:text-5xl font-display font-black tracking-tight text-dark leading-tight mb-8">
              Creativity is now{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument), serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  verticalAlign: "middle",
                }}
                className="text-primary italic font-normal"
              >
                as important
              </span>{" "}
              in education as literacy and we should treat it with{" "}
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

      {/* SECTION 7: MEASURABLE RESULTS / METRICS (Moved up from Section 9) */}
      <section className="bg-lavender py-24 px-6 relative overflow-hidden">
        {/* Background wavy pink stroke line with orange starburst */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
          <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path
              d="M -50 380 C 200 260, 350 130, 520 150 C 690 170, 780 250, 920 220 C 1100 180, 1250 80, 1380 48"
              stroke="#FED2B3"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          {/* Starburst absolute positioned to align with the path end */}
          <div className="absolute top-[10%] right-[3%] md:right-[4%] lg:right-[5%] transform translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 100 100" fill="#FF7122" className="w-16 h-16 md:w-20 md:h-20" style={{ animation: "spin 25s linear infinite" }}>
              <path d="M50 0 L56 12 L68 6 L70 19 L82 17 L80 30 L91 32 L85 44 L95 50 L85 56 L91 68 L80 70 L82 83 L70 81 L68 94 L56 88 L50 100 L44 88 L32 94 L30 81 L18 83 L20 70 L9 68 L15 56 L5 50 L15 44 L9 32 L20 30 L18 17 L30 19 L32 6 L44 12 Z" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Left-aligned Header */}
          <h2 className="text-4xl md:text-5xl font-display font-black text-dark tracking-tight mb-16 text-left">
            Design Education Delivers <br />
            <span
              style={{
                fontFamily: "var(--font-instrument), serif",
                fontWeight: 400,
              }}
              className="text-primary italic font-normal text-4xl md:text-[52px] lg:text-[56px] block mt-1"
            >
              measurable results
            </span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

            {/* Metric 1 */}
            <div className="flex flex-col items-start text-left">
              <span className="text-6xl md:text-8xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex items-baseline">
                91<span className="text-3xl md:text-5xl font-black text-dark ml-0.5">%</span>
              </span>
              <h4 className="text-[10px] font-black tracking-wider text-dark/80 uppercase mb-2">HIGHER CONFIDENCE</h4>
              <p className="text-xs md:text-sm text-dark/70 leading-relaxed font-semibold max-w-[240px]">
                Students self-report higher creative confidence after a single DEZU cohort.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-start text-left">
              <span className="text-6xl md:text-8xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex items-baseline">
                78<span className="text-3xl md:text-5xl font-black text-dark ml-0.5">%</span>
              </span>
              <h4 className="text-[10px] font-black tracking-wider text-dark/80 uppercase mb-2">BETTER COLLABORATION</h4>
              <p className="text-xs md:text-sm text-dark/70 leading-relaxed font-semibold max-w-[240px]">
                Teachers observe stronger team dynamics in cross-subject project work.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-start text-left">
              <span className="text-6xl md:text-8xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex items-baseline">
                3<span className="text-3xl md:text-5xl font-black text-dark ml-0.5">x</span>
              </span>
              <h4 className="text-[10px] font-black tracking-wider text-dark/80 uppercase mb-2">MORE PARTICIPATION</h4>
              <p className="text-xs md:text-sm text-dark/70 leading-relaxed font-semibold max-w-[240px]">
                Quiet students contribute three times more often in studio-format classes.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-start text-left">
              <span className="text-6xl md:text-8xl font-display font-black text-dark tracking-tight leading-none mb-4 inline-flex items-baseline">
                100<span className="text-3xl md:text-5xl font-black text-dark ml-0.5">%</span>
              </span>
              <h4 className="text-[10px] font-black tracking-wider text-dark/80 uppercase mb-2">PROJECT COMPLETION</h4>
              <p className="text-xs md:text-sm text-dark/70 leading-relaxed font-semibold max-w-[240px]">
                Every student finishes the program with a presented, peer-reviewed prototype.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: MENTORS / PROFESSIONALS (Moved up from Section 8) */}
      <section id="mentors" className="py-20 bg-cream/50 border-y border-dark/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Decorative Orange Grid Boxes */}
          <div className="absolute bottom-[-80px] left-[-56px] w-20 h-20 bg-[#FF7122] -z-10"></div>
          <div className="absolute bottom-0 left-[24px] w-20 h-20 bg-[#FF7122] -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                Taught By Practicing <br />
                <span
                  style={{
                    fontFamily: "var(--font-instrument), serif",
                    fontWeight: 400,
                  }}
                  className="text-primary italic font-normal text-5xl md:text-6xl"
                >
                  Professionals
                </span>
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
                  src={himajaaImg.src}
                  alt="Himajaa Indukuri - CEO, Studio Dezu"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-left px-1">
                <div className="flex justify-between items-center w-full mb-1.5">
                  <h3 className="font-sans text-left" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Himajaa Indukuri</h3>
                  <a href="https://www.linkedin.com/in/himajaa/" target="_blank" rel="noopener noreferrer" className="text-dark hover:opacity-80 transition-opacity flex-shrink-0 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                      <rect x="2" y="2" width="20" height="20" fill="white" />
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" fill="#0D0C0C" />
                    </svg>
                  </a>
                </div>
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
                <div className="flex justify-between items-center w-full mb-1.5">
                  <h3 className="font-sans text-left" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Balamurali Bhaskaran</h3>
                  <a href="https://www.linkedin.com/in/bhaskaranbalamurali5/" target="_blank" rel="noopener noreferrer" className="text-dark hover:opacity-80 transition-opacity flex-shrink-0 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                      <rect x="2" y="2" width="20" height="20" fill="white" />
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" fill="#0D0C0C" />
                    </svg>
                  </a>
                </div>
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
                <div className="flex justify-between items-center w-full mb-1.5">
                  <h3 className="font-sans text-left" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Bhavana Ghanta</h3>
                  <a href="https://www.linkedin.com/in/bhavana-ghanta-a8880b215/" target="_blank" rel="noopener noreferrer" className="text-dark hover:opacity-80 transition-opacity flex-shrink-0 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                      <rect x="2" y="2" width="20" height="20" fill="white" />
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" fill="#0D0C0C" />
                    </svg>
                  </a>
                </div>
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
                <div className="flex justify-between items-center w-full mb-1.5">
                  <h3 className="font-sans text-left" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", color: "#0D0C0C" }}>Prathik Gadde</h3>
                  <a href="https://www.linkedin.com/in/prathikgadde/" target="_blank" rel="noopener noreferrer" className="text-dark hover:opacity-80 transition-opacity flex-shrink-0 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                      <rect x="2" y="2" width="20" height="20" fill="white" />
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" fill="#0D0C0C" />
                    </svg>
                  </a>
                </div>
                <p className="font-sans text-left mt-1" style={{ fontFamily: "var(--font-bai-jamjuree), sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "100%", color: "#0D0C0C" }}>CEO, PhotonX</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: TRUSTED BY SCHOOLS (Moved down from Section 2) */}
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

      {/* SECTION 10: TESTIMONIALS (Moved up from Section 12) */}
      <section id="stories" className="py-24 bg-lavender px-6 overflow-hidden">
        {/* Testimonials List */}
        {(() => {
          const testimonialsList = [
            {
              quote: (
                <>
                  "It changed how I teach. The studio model gives me permission to be a coach instead of a <span className="italic text-primary font-bold">lecturer</span> — and the students respond instantly."
                </>
              ),
              name: "Mr. Aniket Rao",
              role: "Head of Design · Pathways Pune",
              avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
            },
            {
              quote: (
                <>
                  "I didn't know I was a <span className="italic text-primary font-bold">creator</span>. I have a portfolio, three prototypes, and I presented to actual designers from Bengaluru."
                </>
              ),
              name: "Aarav, Grade 8",
              role: "Student · Ekya School",
              avatar: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=150&auto=format&fit=crop"
            },
            {
              quote: (
                <>
                  "DEZU gave our students something the textbook simply <span className="italic text-primary font-bold">cannot</span>. Within five days, I saw the quiet ones leading critiques and the noisy ones listening."
                </>
              ),
              name: "Mrs. Lakshmi Pillai",
              role: "Principal · DPS Noida",
              avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
            }
          ];

          return (
            <>
              {/* Header block */}
              <div className="max-w-7xl mx-auto mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                  <div className="lg:col-span-7">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight text-left">
                      What the people <br />
                      in the room{" "}
                      <span
                        style={{
                          fontFamily: "var(--font-instrument), serif",
                          fontWeight: 400,
                        }}
                        className="text-primary italic font-normal text-[1.15em] inline-block leading-none"
                      >
                        say.
                      </span>
                    </h2>
                  </div>
                  <div className="lg:col-span-5 text-dark/75 font-semibold leading-relaxed text-left lg:max-w-md lg:ml-auto">
                    Unedited reflections from principals, teachers and students after their first DEZU studio.
                  </div>
                </div>
              </div>

              {/* Infinite Scrolling Loop Wrapper (Full Width) */}
              <div className="w-full overflow-hidden py-4">
                <div className="animate-marquee-inline flex gap-6 hover:[animation-play-state:paused] w-max">
                  {[...testimonialsList, ...testimonialsList, ...testimonialsList, ...testimonialsList].map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-[32px] p-8 shadow-lg flex flex-col justify-between min-h-[280px] w-[320px] md:w-[380px] text-left border border-dark/5 flex-shrink-0 relative"
                    >
                      {/* Big Quote Symbol */}
                      <span className="absolute top-6 right-6 text-primary text-4xl font-display font-black leading-none opacity-80">”</span>

                      <p className="text-base md:text-lg text-dark/80 font-medium leading-relaxed italic mb-8 relative pr-6">
                        {t.quote}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-dark leading-none mb-1">{t.name}</h4>
                          <p className="text-xs text-dark/60 font-semibold">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          );
        })()}
      </section>

      {/* SECTION 11: ONBOARDING PROCESS TIMELINE (Moved up from Section 11) */}
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
                From first call to first <br />
                <span
                  style={{
                    fontFamily: "var(--font-instrument), serif",
                    fontWeight: 400,
                  }}
                  className="text-primary italic font-normal text-[1.15em] inline-block leading-none"
                >
                  studio
                </span>{" "}
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



      {/* SECTION 12: FOOTER CALL TO ACTION */}
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
          <a
            href="/dezu schools Browcher.pdf"
            download="dezu schools Browcher.pdf"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 w-full sm:w-auto text-center font-display"
          >
            Download brochure <ArrowDown size={18} />
          </a>
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
