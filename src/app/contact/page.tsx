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
  Phone,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
  Building
} from "lucide-react";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolName: "",
    role: "",
    city: "",
    email: "",
    program: "",
    message: ""
  });

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      schoolName: "",
      role: "",
      city: "",
      email: "",
      program: "",
      message: ""
    });
  };

  const cities = [
    {
      name: "Hyderabad",
      schools: 4,
      workshops: 12,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Bangalore",
      schools: 3,
      workshops: 8,
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Visakhapatnam",
      schools: 2,
      workshops: 5,
      image: "https://images.unsplash.com/photo-1618361730071-b0db6a4b12e3?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const faqs = [
    {
      q: "How much does a workshop cost?",
      a: "Our pricing varies based on the cohort size, duration (e.g., our standard 3-day format), and customization requirements. Please get in touch using the form above for a detailed proposal customized for your school."
    },
    {
      q: "How much disruption does it cause to the timetable?",
      a: "Minimal. We design our workshops to fit into existing school schedules, or we conduct them over weekends and term breaks so academic progress is unaffected."
    },
    {
      q: "Which curriculum do you support?",
      a: "Our programs are curriculum-agnostic. Whether your school follows CBSE, ICSE, IB, Cambridge, or State boards, Dezu's design-thinking principles enrich students' standard subjects with practical applications."
    },
    {
      q: "Do students need prior design experience?",
      a: "Not at all. Our workshops are designed to meet students where they are. We guide them step-by-step from core fundamentals to full prototypes."
    },
    {
      q: "Can workshops be customized for our school?",
      a: "Yes! We work closely with school administrators to align the design challenges of the workshop with specific topics or community challenges relevant to your students."
    },
    {
      q: "Do you offer teacher training?",
      a: "Yes, we offer professional development programs and toolkits for teachers so they can continue fostering design-thinking methodologies in their classrooms."
    },
    {
      q: "Can rural schools participate?",
      a: "Absolutely. We believe design thinking should be accessible to all students. We partner with non-profits and public organizations to bring Dezu programs to under-resourced schools."
    }
  ];

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
          <Link href="/stories" className="hover:text-secondary transition">stories</Link>
          <Link href="/contact" className="hover:text-secondary transition relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary after:scale-x-100">contact</Link>
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
            <Link href="/stories" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display">stories</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-secondary transition font-display text-secondary">contact</Link>
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
      <section className="pt-36 pb-20 w-full relative overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black text-dark tracking-tight leading-none mb-6">
            Your{" "}
            <span 
              style={{ 
                fontFamily: "var(--font-instrument), serif", 
                fontStyle: "italic", 
                fontWeight: 400 
              }} 
              className="text-primary italic font-normal"
            >
              students
            </span>{" "}
            are ready, are you?
          </h1>
          <p className="text-lg md:text-xl text-dark/80 font-medium max-w-2xl mx-auto leading-relaxed mt-4 mb-8">
            Design the future of learning with immersive workshops that help students think critically, collaborate creatively, and solve real-world problems.
          </p>
          <a 
            href="#contact-form"
            className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg inline-flex items-center gap-2 hover:translate-y-0.5 duration-200 active:scale-95"
          >
            Book a Presentation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT FORM & INFO CARDS SECTION */}
      <section id="contact-form" className="py-12 max-w-7xl mx-auto px-6 mb-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: FORM */}
          <div className="lg:col-span-7 bg-white border border-dark/5 p-8 rounded-[32px] shadow-sm">
            <h2 className="text-3xl font-display font-black text-dark mb-2">Book a Presentation</h2>
            <p className="text-sm text-dark/70 font-semibold mb-8">We will coordinate with your school team to schedule a custom preview.</p>

            {formSubmitted ? (
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-2xl font-display font-black text-dark">Thank You!</h3>
                <p className="text-dark/75 font-medium leading-relaxed max-w-sm">
                  Your request has been sent to our founders. We'll be in touch within 24 hours to schedule the presentation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">First Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Jane"
                      className="w-full px-5 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">Last Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full px-5 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">School Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    placeholder="Grandview High School"
                    className="w-full px-5 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">Your Role</label>
                    <select 
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-5 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="Principal">Principal</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Trustee">Trustee / Owner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">City</label>
                    <select 
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-5 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your city</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Vijayawada">Vijayawada</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="principal@school.edu"
                      className="w-full px-5 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">Program of Interest</label>
                    <select 
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-5 py-3 rounded-full border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select program</option>
                      <option value="3-Day Workshop">3-Day Workshop</option>
                      <option value="Design Thinking Elective">Design Thinking Elective</option>
                      <option value="Cross-Curricular">Cross-Curricular</option>
                      <option value="DEZU Studio">DEZU Studio</option>
                      <option value="Custom Program">Custom Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-dark/65 mb-2 font-display">Tell us about your school</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Help us understand your cohort size, scheduling preferences, or goals..."
                    className="w-full px-5 py-4 rounded-[20px] border border-dark/10 focus:outline-none focus:border-primary text-dark font-semibold bg-cream/10 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] duration-150 font-display"
                >
                  Book My Presentation <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Calendar/Schedule Card */}
            <div className="bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex gap-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="text-lg font-display font-black text-dark mb-1">Schedule a Session</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed mb-3">
                  Set up a direct presentation with our founding team to understand how Dezu fits into your school's vision.
                </p>
                <a 
                  href="mailto:partners@dezuschools.in?subject=Schedule Founding Team Presentation"
                  className="text-xs font-extrabold uppercase text-secondary tracking-wider hover:underline flex items-center gap-1"
                >
                  Book founding team <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex gap-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-display font-black text-dark mb-1">Write to Us</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed mb-3">
                  For partnership queries, curriculum requests, or general information, write to our teams.
                </p>
                <div className="space-y-1 text-xs font-bold text-primary">
                  <a href="mailto:partners@dezuschools.in" className="block hover:underline">partners@dezuschools.in</a>
                  <a href="mailto:careers@dezuschools.in" className="block hover:underline">careers@dezuschools.in</a>
                </div>
              </div>
            </div>

            {/* Call Card */}
            <div className="bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex gap-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-display font-black text-dark mb-1">Give Us a Call</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed mb-1">
                  Speak to a school coordinator to clear doubts or coordinate dates for a program.
                </p>
                <span className="text-sm font-bold text-dark/85 block mb-1">+91 80 4710 0000</span>
                <span className="text-[10px] text-dark/40 font-semibold uppercase tracking-wider block">MON-FRI, 9AM - 6PM</span>
              </div>
            </div>

            {/* Follow Us Card */}
            <div className="bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex gap-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-lg font-display font-black text-dark mb-1">Join the Conversation</h3>
                <p className="text-sm text-dark/75 font-medium leading-relaxed mb-4">
                  Follow our daily classroom logs, workshop snippets, and student prototypes.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-cream hover:bg-secondary hover:text-white transition flex items-center justify-center text-dark/75 shadow-sm"
                  >
                    <Instagram size={16} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-cream hover:bg-secondary hover:text-white transition flex items-center justify-center text-dark/75 shadow-sm"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CITIES ROW SECTION */}
      <section className="py-20 bg-cream/35 border-y border-dark/5 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-display font-black text-dark mb-12">
            Cities We've Conducted{" "}
            <span 
              style={{ 
                fontFamily: "var(--font-instrument), serif", 
                fontStyle: "italic", 
                fontWeight: 400 
              }} 
              className="text-primary italic font-normal"
            >
              workshops
            </span>{" "}
            In
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div 
                key={city.name}
                className="bg-white rounded-[32px] overflow-hidden border border-dark/5 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={city.image} 
                    alt={city.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/45 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-display font-black text-white">{city.name}</h3>
                </div>
                
                <div className="p-6 grid grid-cols-2 gap-4 text-center">
                  <div className="border-r border-dark/5 py-1">
                    <span className="text-2xl font-display font-black text-primary block leading-none mb-1">{city.schools}</span>
                    <span className="text-[10px] font-bold text-dark/50 uppercase tracking-widest block">Partnered Schools</span>
                  </div>
                  <div className="py-1">
                    <span className="text-2xl font-display font-black text-secondary block leading-none mb-1">{city.workshops}</span>
                    <span className="text-[10px] font-bold text-dark/50 uppercase tracking-widest block">Workshops Run</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-display font-black text-dark mb-4">
          Answers to What School Boards{" "}
          <span 
            style={{ 
              fontFamily: "var(--font-instrument), serif", 
              fontStyle: "italic", 
              fontWeight: 400 
            }} 
            className="text-primary italic font-normal"
          >
            ask us
          </span>
        </h2>
        <p className="text-center text-sm md:text-base text-dark/70 font-medium max-w-md mx-auto mb-12">
          Find clarifications on logistics, integration, curriculum alignment, and pricing options.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border border-dark/5 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none text-dark hover:text-primary transition-colors"
              >
                <span className="font-display font-black text-lg md:text-xl leading-snug">{faq.q}</span>
                <span className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-dark/70 flex-shrink-0 ml-4">
                  {activeFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeFaq === idx ? "max-h-[300px] border-t border-dark/5" : "max-h-0"
                }`}
              >
                <div className="p-6 text-sm md:text-base text-dark/75 font-medium leading-relaxed bg-cream/5">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
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
                <li><a href="mailto:partners@dezuschools.in" className="hover:text-secondary transition block">partners@dezuschools.in</a></li>
                <li><a href="mailto:careers@dezuschools.in" className="hover:text-secondary transition block">careers@dezuschools.in</a></li>
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
