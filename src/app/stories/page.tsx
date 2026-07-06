"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles, 
  Instagram,
  Linkedin,
  Mail,
  ChevronRight
} from "lucide-react";

export default function Stories() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", "Curriculum", "Student Work", "Opinion", "Technology"];

  const storiesData = [
    {
      id: 1,
      category: "Curriculum",
      title: "How we teach how to think, not what to think",
      excerpt: "A deep dive into our interdisciplinary curriculum and why we don't have separate subjects.",
      date: "June 28, 2026",
      author: "Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-primary/10 text-primary"
    },
    {
      id: 2,
      category: "Student Work",
      title: "Redesigning the local market: A design sprint",
      excerpt: "Our students spent a week interviewing market vendors and prototyping solutions to improve vendor layouts.",
      date: "June 15, 2026",
      author: "David K.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-secondary/15 text-secondary"
    },
    {
      id: 3,
      category: "Curriculum",
      title: "The power of physical prototyping in a digital age",
      excerpt: "Why we still start with cardboard, tape, and hot glue before writing a single line of code.",
      date: "June 02, 2026",
      author: "Marcus Chen",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-primary/10 text-primary"
    },
    {
      id: 4,
      category: "Student Work",
      title: "Collaborating with local artisans in Nairobi",
      excerpt: "How our students worked with local metalworkers to bring their furniture designs to life.",
      date: "May 18, 2026",
      author: "Elena Rostova",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-secondary/15 text-secondary"
    },
    {
      id: 5,
      category: "Opinion",
      title: "Why high school is the best time to learn systems thinking",
      excerpt: "Teenagers are natural system-thinkers. We just need to give them the tools to navigate complexity.",
      date: "May 05, 2026",
      author: "Dr. Anitha Ramanathan",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 6,
      category: "Technology",
      title: "AI inside the classroom: Tools, not cheats",
      excerpt: "How we integrate large language models into our daily workflows to accelerate research and prototyping.",
      date: "April 24, 2026",
      author: "Liam O'Connor",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-emerald-100 text-emerald-800"
    }
  ];

  const filteredStories = activeCategory === "All"
    ? storiesData
    : storiesData.filter(story => story.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] relative text-dark font-sans selection:bg-primary selection:text-white">
      
      {/* FLOATING HEADER */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-primary text-white py-3 px-6 rounded-full flex items-center justify-between shadow-2xl z-50 transition-all duration-300 border border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-display font-black tracking-tight">dezu schools</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link href="/workshop" className="hover:text-secondary transition">3-day workshop</Link>
          <Link href="/#programs" className="hover:text-secondary transition">programs</Link>
          <Link href="/why-dezu" className="hover:text-secondary transition">why dezu</Link>
          <Link href="/stories" className="hover:text-secondary transition relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary after:scale-x-100">stories</Link>
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
            <Link href="/why-dezu" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">why dezu</Link>
            <Link href="/stories" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display text-secondary">stories</Link>
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
      <section className="pt-36 pb-16 w-full relative overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-display font-black text-dark tracking-tight leading-none mb-6">
            <span className="bg-primary text-white px-5 py-1.5 rounded-full inline-block text-2xl md:text-4xl font-display transform -rotate-1 relative top-[-4px] uppercase tracking-normal mr-2">
              Real
            </span>{" "}
            stories{" "}
            <span 
              style={{ 
                fontFamily: "var(--font-instrument), serif", 
                fontStyle: "italic", 
                fontWeight: 400 
              }} 
              className="text-primary italic font-normal"
            >
              from classrooms
            </span>
          </h1>
          <p className="text-lg md:text-xl text-dark/80 font-medium max-w-2xl leading-relaxed mt-4">
            Celebrating the journeys of schools, educators, and students who embraced creativity, curiosity, and future-ready thinking through Dezu Schools.
          </p>
        </div>
      </section>

      {/* THREE HERO IMAGES SIDE-BY-SIDE */}
      <section className="pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="relative h-96 overflow-hidden rounded-[32px] shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop" 
              alt="Classroom activity 1" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-[32px] shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop" 
              alt="Classroom activity 2" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Decorative solid red/orange circle accent overlaid */}
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
              <Sparkles size={20} />
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-[32px] shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop" 
              alt="Classroom activity 3" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* METRICS ROW */}
      <section className="py-12 bg-cream/35 border-y border-dark/5 px-6 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-display font-black text-dark">48+</span>
            </div>
            <p className="text-sm text-dark/75 font-semibold">Schools Partnered</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 20M3 11.625a3 3 0 116-0m-6 0a9 9 0 1118 0m-18 0v.003c0 1.113.285 2.16.786 3.07M3 11.625v.109a11.386 11.386 0 004.918 8.268M10.089 20c.441-.303.923-.553 1.432-.746C13.064 18.577 15 16.52 15 14.126V14" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-display font-black text-dark">1,500+</span>
            </div>
            <p className="text-sm text-dark/75 font-semibold">Students Impacted</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25gC4.5 6.358 7.858 3 12 3c4.142 0 7.5 3.358 7.5 7.5z" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-display font-black text-dark">12</span>
            </div>
            <p className="text-sm text-dark/75 font-semibold">Cities Reached</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.913-6.162M12 2.25l-3.21 6.5L1.87 9.87l5.22 5.09L5.8 21.87l6.2-3.26 6.2 3.26-1.29-6.91 5.22-5.09-6.92-1.12L12 2.25z" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-display font-black text-dark">94%</span>
            </div>
            <p className="text-sm text-dark/75 font-semibold">Renewal Rate</p>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-xs font-black tracking-widest text-secondary uppercase mb-8 font-display">
          Featured story
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-dark/5 p-8 rounded-[32px] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
          {/* Nairobi Cohort Image */}
          <div className="lg:col-span-7 h-80 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
              alt="DEZU launch Nairobi cohort" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              COMMUNITY
            </div>
          </div>
          {/* Story Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-2">
            <div>
              <span className="text-xs font-bold text-dark/60 block mb-2">JULY 02, 2026</span>
              <h3 className="text-3xl md:text-4xl font-display font-black text-dark mb-4 leading-tight group-hover:text-primary transition">
                DEZU launch: Reimagining what high school can be
              </h3>
              <p className="text-dark/75 text-sm md:text-base font-medium leading-relaxed mb-6">
                Our inaugural cohort in Nairobi is underway. Here's a look inside our first few weeks of learning, mapping local systems, and building creative confidence.
              </p>
            </div>
            <div>
              <Link 
                href="/stories"
                className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-95 transition shadow-md inline-flex items-center gap-2 active:scale-95"
              >
                Read Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER AND STORIES GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        
        {/* Category Filters */}
        <div className="flex items-center justify-between border-b border-dark/5 pb-6 mb-12 flex-wrap gap-4">
          <h2 className="text-3xl font-display font-black text-dark">
            All <span style={{ fontFamily: "var(--font-instrument), serif", fontStyle: "italic", fontWeight: 400 }} className="text-primary italic font-normal">Stories</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-dark/75 border-dark/10 hover:bg-dark/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-[32px] p-6 text-dark flex flex-col justify-between border border-dark/5 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="h-48 w-full overflow-hidden rounded-2xl mb-6 relative">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Category & Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${story.badgeColor}`}>
                    {story.category}
                  </span>
                  <span className="text-xs font-semibold text-dark/50">{story.date}</span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-display font-black mb-3 text-dark group-hover:text-primary transition leading-snug">
                  {story.title}
                </h3>
                {/* Excerpt */}
                <p className="text-sm text-dark/75 font-medium leading-relaxed mb-6">
                  {story.excerpt}
                </p>
              </div>
              
              {/* Author & Read Action */}
              <div className="border-t border-dark/5 pt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-dark/70">By {story.author}</span>
                <Link 
                  href="/stories" 
                  className="w-8 h-8 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition flex items-center justify-center text-primary"
                >
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[32px] border border-dark/5">
            <p className="text-dark/50 font-bold">No stories found in this category.</p>
          </div>
        )}

      </section>

      {/* STAY UPDATED / NEWSLETTER SECTION */}
      <section className="py-20 bg-lavender/40 border-y border-dark/5 px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark mb-4">
            Stay{" "}
            <span 
              style={{ 
                fontFamily: "var(--font-instrument), serif", 
                fontStyle: "italic", 
                fontWeight: 400 
              }} 
              className="text-primary italic font-normal"
            >
              updated
            </span>
          </h2>
          <p className="text-dark/75 font-medium mb-8 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Subscribe to our newsletter for monthly updates on our curriculum, student stories, and upcoming cohorts.
          </p>

          {subscribed ? (
            <div className="max-w-md mx-auto bg-white border border-primary/20 px-6 py-4 rounded-full inline-flex items-center gap-2 text-primary font-bold shadow-sm">
              <Sparkles size={18} /> Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-6 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-medium bg-white shadow-sm"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-95 transition shadow-md active:scale-95 flex items-center justify-center gap-1"
              >
                Subscribe
              </button>
            </form>
          )}
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
