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
  Eye,
  Hammer,
  Presentation,
  Download,
  GraduationCap,
  FileText,
  Lightbulb,
  Users,
  MessageSquare,
  Zap,
  Wrench,
  Award,
  ChevronRight
} from "lucide-react";

// Import Assets
import heroStar from "../../Assets/Home-herosection-start.png";
import creatorsUnderline from "../../Assets/home-hero-create-underline.png";
import workshopHeroImage from "../../Assets/3daysworkshop-herossection image.png";
import workshopBackgroundLine from "../../Assets/3daysworkshop backgroundline.png";
import footerBackgroundLine from "../../Assets/Footer background line.png";
import scrollStar from "../../Assets/herosection-scrollanimation-star.png";
import workshopSection3Image from "../../Assets/3daysworkshop section3 image.png";
import workgallary1 from "../../Assets/workgallary1.png";
import workgallary2 from "../../Assets/workgallary2.png";
import workgallary3 from "../../Assets/workgallary3.png";
import workgallary4 from "../../Assets/workgallary4.png";
import workgallary5 from "../../Assets/workgallary5.png";

export default function WorkshopPage() {

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] relative text-dark font-sans selection:bg-primary selection:text-white">

      {/* FLOATING HEADER */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-0 w-full relative overflow-hidden flex flex-col justify-center">
        {/* Background decorative elements */}
        <div className="absolute top-16 left-[-40px] w-32 h-32 bg-[#C3B3F9] rounded-full opacity-80 -z-10 blur-xl"></div>
        <div className="absolute bottom-24 right-48 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="font-display text-dark tracking-tight leading-tight mb-6">
              <span className="text-3xl md:text-[48px] font-black block mb-3">
                The Dezu{" "}
                <span
                  style={{
                    fontFamily: "var(--font-instrument), serif",
                    fontWeight: 400,
                    fontStyle: "italic",

                  }}
                  className="font-normal text-dark relative inline-block tracking-wide"
                >
                  3-day design
                  {/* Custom Orange Paint Stroke */}
                  <Image
                    src={creatorsUnderline}
                    alt="Accent Underline"
                    className="absolute bottom-[-12px] left-0 w-full object-contain"
                  />
                </span>
              </span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
                <span className="bg-primary text-white px-6 py-2 rounded-full inline-flex items-center justify-center text-2xl md:text-[48px] font-display shadow-md transform -rotate-1 uppercase tracking-normal">
                  Immersion
                </span>
                <span className="font-display font-black text-dark tracking-tight leading-none text-3xl md:text-[48px]">
                  Program
                </span>
              </span>
            </h1>

            <p className="text-base md:text-lg font-medium max-w-xl mb-8 leading-relaxed mt-4" style={{ color: "#232323BF" }}>
              Give your students an authentic introduction to 21st-century learning. Over three intensive days, students learn to think critically, solve real-world problems, and present ideas with confidence through hands-on challenges, field research, prototyping, and storytelling.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-8">
              <div className="bg-white border border-secondary/25 p-4 rounded-2xl flex flex-col text-left shadow-sm">
                <span className="text-3xl font-display font-black text-dark">3</span>
                <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">DAYS</span>
              </div>
              <div className="bg-white border border-secondary/25 p-4 rounded-2xl flex flex-col text-left shadow-sm">
                <span className="text-3xl font-display font-black text-dark">
                  200<span className="text-secondary font-black">+</span>
                </span>
                <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">STUDENTS</span>
              </div>
              <div className="bg-white border border-secondary/25 p-4 rounded-2xl flex flex-col text-left shadow-sm">
                <span className="text-3xl font-display font-black text-dark">
                  10<span className="text-secondary font-black">+</span>
                </span>
                <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">SCHOOLS</span>
              </div>
              <div className="bg-white border border-secondary/25 p-4 rounded-2xl flex flex-col text-left shadow-sm">
                <span className="text-3xl font-display font-black text-secondary">100%</span>
                <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">HANDS-ON</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200 w-full sm:w-auto text-center"
              >
                Book a presentation <ArrowRight size={18} />
              </Link>
              <a
                href="/dezu schools Browcher.pdf"
                download="dezu schools Browcher.pdf"
                className="border-2 border-secondary text-secondary font-bold px-8 py-4 rounded-full hover:bg-secondary/5 transition flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                Download brochure <Download size={18} />
              </a>
            </div>
          </div>

          {/* Right Content - Visual Image with Star */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center overflow-visible mt-8 lg:mt-0">
            <div className="relative w-full max-w-[480px] aspect-[4/3]">

              {/* Decorative Star */}
              <div className="absolute -top-18 -right-10 w-24 h-24 z-0 pointer-events-none">
                <Image src={heroStar} alt="Decorative Star" className="w-full h-full object-contain" />
              </div>

              {/* Main Student Image */}
              <div className="w-full h-full rounded-3xl overflow-hidden z-10 relative">
                <Image
                  src={workshopHeroImage}
                  alt="Smiling student sketching designs"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* BACKGROUND LINE DIVIDER */}
      <div className="w-full relative -mt-16 md:-mt-32 lg:-mt-44 z-20 pointer-events-none">
        <Image
          src={workshopBackgroundLine}
          alt="3-day Workshop Background Line"
          className="w-full h-auto"
        />
      </div>

      {/* SECTION: THE WORKSHOP DESIGN */}
      <section className="pt-0 pb-20 px-6 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
              The <span className="text-primary font-serif italic font-normal">workshop</span> Design
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl font-semibold text-dark/75 leading-relaxed">
              Three carefully designed days. Each one building on the last, moving students from understanding people and defining solutions, to confidently presenting them.
            </p>
          </div>
        </div>

        {/* Day Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* DAY 01 */}
          <div className="bg-primary text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-white/10 hover:translate-y-[-4px] transition-transform duration-300 min-h-[420px]">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-extrabold uppercase tracking-widest text-secondary font-display">DAY 01</span>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary border border-white/10">
                  <Eye size={24} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black leading-tight mb-4 uppercase">
                Understand Humans
              </h3>
              <p className="text-white/80 font-medium leading-relaxed mb-8">
                Step into the shoes of real users. Build empathy, observe behaviour and frame the problems worth solving.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Empathy", "Observation", "Problem Discovery", "Research"].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/95 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* DAY 02 */}
          <div className="bg-primary text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-white/10 hover:translate-y-[-4px] transition-transform duration-300 min-h-[420px]">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-extrabold uppercase tracking-widest text-secondary font-display">DAY 02</span>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary border border-white/10">
                  <Hammer size={24} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black leading-tight mb-4 uppercase">
                Make &amp; Iterate
              </h3>
              <p className="text-white/80 font-medium leading-relaxed mb-8">
                Move from ideas to artefacts. Sketch, build, break and refine — learning by making, not by memorising.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Ideation", "Sketching", "Wireframing", "Prototyping"].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/95 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* DAY 03 */}
          <div className="bg-primary text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-white/10 hover:translate-y-[-4px] transition-transform duration-300 min-h-[420px]">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-extrabold uppercase tracking-widest text-secondary font-display">DAY 03</span>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary border border-white/10">
                  <Presentation size={24} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black leading-tight mb-4 uppercase">
                Present &amp; Reflect
              </h3>
              <p className="text-white/80 font-medium leading-relaxed mb-8">
                Tell the story of the work. Defend design decisions, hear honest feedback and reflect.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Storytelling", "Presentation", "Feedback", "Reflection"].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/95 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: DESIGNED FOR SCHOOLS OF TOMORROW */}
      <section className="py-20 bg-primary/5 border-t border-b border-dark/5 text-left overflow-visible">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                Designed For <br />
                <span className="text-primary font-serif italic font-normal">Schools of</span> Tomorrow
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-4">
              <p className="text-lg font-semibold text-dark/75 leading-relaxed">
                The Immersion Program is purpose-built for schools that see learning as more than syllabus and want students who can think, make and lead.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* List of 6 Pillars (Left) */}
            <div className="lg:col-span-5 flex flex-col items-start relative overflow-visible">

              {/* Starburst badge behind the pills */}
              <div className="absolute top-[20%] -left-12 w-28 h-28 pointer-events-none -z-10 opacity-100">
                <Image src={scrollStar} alt="Starburst Badge" className="w-full h-full object-contain" />
              </div>

              <span className="text-xs font-extrabold tracking-widest text-dark/60 uppercase block mb-4 font-sans">BEST SUITED FOR SCHOOLS THAT</span>

              <div className="flex flex-col gap-3 w-full max-w-sm">
                {[
                  { title: "Future-ready Learning", icon: GraduationCap },
                  { title: "NEP 2020 Aligned", icon: FileText },
                  { title: "Design Thinking Culture", icon: Lightbulb },
                  { title: "Student-led Collaboration", icon: Users },
                  { title: "Creative Confidence", icon: MessageSquare },
                  { title: "Innovation & Problem Solving", icon: Zap }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#E5E4DE] px-5 py-3.5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-secondary flex-shrink-0">
                      <item.icon size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="font-sans font-bold text-dark text-sm tracking-wide">{item.title}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center gap-2 hover:translate-x-1 duration-200 mt-8"
              >
                Book a presentation <ArrowRight size={18} />
              </Link>
            </div>

            {/* Single Large Photo (Right) */}
            <div className="lg:col-span-7 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-dark/5">
              <Image
                src={workshopSection3Image}
                alt="Students collaborating on designs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: WHAT SCHOOLS TAKE AWAY */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
              What <span className="text-primary font-serif italic font-normal">Schools</span> take away
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl font-semibold text-dark/75 leading-relaxed">
              Every workshop leaves behind more than memories. Schools receive a complete bundle of outcomes built to keep design thinking alive long after we leave.
            </p>
          </div>
        </div>

        {/* Deliverables Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Card 1 */}
          <div className="bg-[#E5E4DE] border border-dark/5 p-6 rounded-3xl flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-dark/10 flex items-center justify-center text-dark/80 mb-6">
                <FileText size={20} />
              </div>
              <h3 className="font-display font-black text-xl text-dark mb-3">Impact Report</h3>
              <p className="text-sm font-semibold text-dark/70 leading-relaxed">
                Detailed audit summary, student feedback analysis, core skill evaluation, and key observations on class dynamics.
              </p>
            </div>
            <span className="text-xs font-black uppercase text-dark/55 tracking-wider mt-4">Deliverable 01</span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFDDC7] border border-dark/5 p-6 rounded-3xl flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary mb-6">
                <Wrench size={20} />
              </div>
              <h3 className="font-display font-black text-xl text-dark mb-3">Faculty Toolkit</h3>
              <p className="text-sm font-semibold text-dark/70 leading-relaxed">
                Step-by-step instructions, templates, slide decks, and micro-exercises for teachers to execute in standard periods.
              </p>
            </div>
            <span className="text-xs font-black uppercase text-dark/55 tracking-wider mt-4 text-secondary">Deliverable 02</span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D2C4FB] border border-dark/5 p-6 rounded-3xl flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display font-black text-xl text-dark mb-3">Roadmaps</h3>
              <p className="text-sm font-semibold text-dark/70 leading-relaxed">
                Custom suggestions on integrating UX/UI design, software planning, and physical prototyping spaces into current curriculums.
              </p>
            </div>
            <span className="text-xs font-black uppercase text-dark/55 tracking-wider mt-4 text-primary">Deliverable 03</span>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F2EFE9] border border-dark/5 p-6 rounded-3xl flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-dark/10 flex items-center justify-center text-dark/80 mb-6">
                <Award size={20} />
              </div>
              <h3 className="font-display font-black text-xl text-dark mb-3">Certificates</h3>
              <p className="text-sm font-semibold text-dark/70 leading-relaxed">
                Verifiable certificates of merit for top projects, participation credentials for all, and school validation plaques.
              </p>
            </div>
            <span className="text-xs font-black uppercase text-dark/55 tracking-wider mt-4 text-dark/65">Deliverable 04</span>
          </div>

        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center gap-2 hover:translate-x-1 duration-200"
          >
            Book a presentation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SECTION: WORKSHOP GALLERY */}
      <section className="py-24 bg-[#F2EFE9] border-t border-b border-dark/5 text-left overflow-visible">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 relative flex items-center justify-between">
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark">
              Workshop <span className="text-primary font-serif italic font-normal">gallery</span>
            </h2>
            <div className="w-16 h-16 bg-secondary flex-shrink-0 relative top-[-10px] hidden md:block"></div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 pb-12 md:pb-16 overflow-visible">
            {[
              { src: workgallary1, alt: "Introduction to Design Thinking presentation" },
              { src: workgallary2, alt: "Student pointing at Learnify whiteboard" },
              { src: workgallary3, alt: "Student discussing designs at table" },
              { src: workgallary4, alt: "Students collaborating around laptop" },
              { src: workgallary5, alt: "Student presenting school experience mockup" }
            ].map((img, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden shadow-lg border border-dark/5 bg-primary/5 transition-transform duration-500 hover:scale-[1.03] aspect-[3/4] ${
                  index % 2 === 0 ? "translate-y-8 md:translate-y-12" : "translate-y-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-6 text-center bg-[linear-gradient(to_bottom,rgba(106,56,194,0.05),transparent)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black text-dark mb-6 leading-tight">
            Let's build <br className="sm:hidden" />
            <span className="bg-secondary text-white px-5 py-1.5 rounded-full inline-block text-xl md:text-3xl font-display transform rotate-[-2deg] uppercase tracking-normal mr-2 relative top-[-6px]">
              Future
            </span>
            <span className="text-primary font-serif italic font-normal">creators</span> together
          </h2>

          <p className="text-lg md:text-xl text-dark/75 font-semibold max-w-2xl mx-auto mb-10 leading-relaxed">
            Bring creativity, communication, innovation, design thinking and future-ready learning into your school through a partner that institutional boards can trust and students will remember.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200 w-full sm:w-auto"
            >
              Book a presentation <ArrowRight size={18} />
            </Link>
            <a
              href="#download"
              className="border-2 border-secondary text-secondary font-bold px-8 py-4 rounded-full hover:bg-secondary/5 transition flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Download brochure <Download size={18} />
            </a>
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
