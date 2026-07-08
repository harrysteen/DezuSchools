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

export default function WorkshopPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] relative text-dark font-sans selection:bg-primary selection:text-white">

      {/* FLOATING HEADER */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-primary text-white py-3 px-6 rounded-full flex items-center justify-between shadow-2xl z-50 transition-all duration-300 border border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-display font-black tracking-tight">dezu schools</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link href="/workshop" className="hover:text-secondary transition relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary after:scale-x-100">3-day workshop</Link>
          <Link href="/#programs" className="hover:text-secondary transition">programs</Link>
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
            <Link href="/workshop" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display text-secondary">3-day workshop</Link>
            <Link href="/#programs" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">programs</Link>
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

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center">
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

            <p className="text-lg md:text-xl text-dark/80 font-medium max-w-xl mb-8 leading-relaxed mt-4">
              A hands-on, studio-style design experience built for forward-thinking Indian schools. Students don't just learn design — they live it, across three intensive days of empathy, making and storytelling.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-8">
              <div className="bg-white border border-secondary/25 p-4 rounded-2xl flex flex-col text-left shadow-sm">
                <span className="text-3xl font-display font-black text-dark">3</span>
                <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">DAYS</span>
              </div>
              <div className="bg-white border border-secondary/25 p-4 rounded-2xl flex flex-col text-left shadow-sm">
                <span className="text-3xl font-display font-black text-dark">
                  1000<span className="text-secondary font-black">+</span>
                </span>
                <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">STUDENTS</span>
              </div>
              <div className="bg-white border border-secondary/25 p-4 rounded-2xl flex flex-col text-left shadow-sm">
                <span className="text-3xl font-display font-black text-dark">
                  20<span className="text-secondary font-black">+</span>
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

          {/* Right Content - Visual Image with Star/Loops */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end h-[480px] items-center overflow-visible mt-8 lg:mt-0">
            <div className="relative w-full max-w-[420px] h-full flex items-center justify-center">

              {/* Purple Circle Background */}
              <div className="absolute w-[340px] h-[340px] bg-primary/20 rounded-full -z-10"></div>

              {/* Decorative Star */}
              <div className="absolute top-[8%] right-[10%] w-16 h-16 animate-pulse z-20">
                <Image src={heroStar} alt="Decorative Star" className="w-full h-full object-contain" />
              </div>

              {/* Main Student Image */}
              <div className="w-[300px] h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-[-4deg] transition-all duration-300 hover:rotate-0 hover:scale-105 z-10 relative">
                <Image
                  src={workshopHeroImage}
                  alt="Smiling student sketching designs"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Purple Wireframe Loop Accents */}
              <div className="absolute bottom-[5%] left-[5%] -z-10 text-primary/30 w-32 h-32 hidden sm:block">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M10,50 Q25,20 50,20 T90,50 T50,80 Z" />
                  <path d="M15,48 Q28,25 50,25 T85,48 T50,75 Z" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND LINE DIVIDER */}
      <div className="w-full relative my-2">
        <Image
          src={workshopBackgroundLine}
          alt="Workshop Background Line"
          className="w-full h-[40px] md:h-[60px] pointer-events-none"
        />
      </div>

      {/* SECTION: THE WORKSHOP DESIGN */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-left">
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
      <section className="py-20 bg-primary/5 border-t border-b border-dark/5 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold tracking-widest text-secondary uppercase block mb-3">BEST SUITED FOR SCHOOLS THAT</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
                Designed For <br />
                <span className="text-primary font-serif italic font-normal">Schools of</span> Tomorrow
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl font-semibold text-dark/75 leading-relaxed">
                The Immersion Program is purpose-built for schools that see learning as more than syllabus and want to nurture students who can think, make and lead.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* List of 6 Pillars (Left) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Future-ready Learning", desc: "Equipping students with standard design methodology, thinking patterns and real-time execution capabilities.", icon: GraduationCap },
                { title: "NEP 2020 Aligned", desc: "Meeting the mandate of active, project-based experiential and interdisciplinary study modules.", icon: FileText },
                { title: "Design Thinking Culture", desc: "Infusing human-centered mindsets into daily classrooms and general school problems.", icon: Lightbulb },
                { title: "Student-led Collaboration", desc: "Fostering strong cross-collaborative work between diverse groups and cohorts.", icon: Users },
                { title: "Creative Confidence", desc: "Empowering kids to trust their artistic voice and speak with design authority.", icon: MessageSquare },
                { title: "Innovation & Problem Solving", desc: "Training students to approach complex engineering, social and local problems systematically.", icon: Zap }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-[#E5E4DE] p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 flex flex-col items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-lg text-dark mb-2">{item.title}</h4>
                    <p className="text-sm font-semibold text-dark/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Images Grid (Right) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/15 rounded-full blur-3xl -z-10"></div>

              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-[3deg] transition-all hover:rotate-0 duration-300 h-64 relative">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                  alt="Students in creative design lab"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-[-3deg] transition-all hover:rotate-0 duration-300 h-64 relative ml-8">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
                  alt="Student workshop presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center gap-2 hover:translate-x-1 duration-200"
            >
              Book a presentation <ArrowRight size={18} />
            </Link>
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
      <section className="py-20 bg-[#F2EFE9] border-t border-b border-dark/5 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-3">— CAPTURED MOMENTS</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark">
              Workshop <span className="text-primary font-serif italic font-normal">gallery</span>
            </h2>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", desc: "Collaborating on wireframes" },
              { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", desc: "Ideation & affinity mapping" },
              { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop", desc: "Testing mockups with users" },
              { src: "https://images.unsplash.com/photo-1542744173-8e0ee26cf15a?q=80&w=800&auto=format&fit=crop", desc: "Presenting to faculty & classmates" }
            ].map((img, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg h-72 border border-dark/5 bg-primary/5 hover:translate-y-[-4px] transition-transform duration-300">
                <img
                  src={img.src}
                  alt={img.desc}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-bold">{img.desc}</span>
                </div>
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
