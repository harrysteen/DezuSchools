"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, 
  Sparkles, 
  Instagram,
  Linkedin,
  Mail,
  ChevronRight,
  GraduationCap,
  Users,
  Clock,
  Download
} from "lucide-react";
import footerBackgroundLine from "../../Assets/Footer background line.png";
import Image from "next/image";
import storiesHeroImg1 from "../../Assets/stories hero section img1.png";
import storiesHeroImg2 from "../../Assets/stories hero section img2.png";
import storiesHeroImg3 from "../../Assets/stories hero section img3.png";
import storiesHeroImg4 from "../../Assets/stories hero section img4.png";
import storiesHeroImg5 from "../../Assets/stories hero section img5.png";
import workGallery1 from "../../Assets/workgallary1.png";
import workGallery2 from "../../Assets/workgallary2.png";
import workGallery3 from "../../Assets/workgallary3.png";

export default function Stories() {
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

  const testimonials = [
    {
      school: "Vidya Niketan Public School",
      cohort: "Design Thinking Cohort - 2026",
      location: "Hyderabad, TS",
      quote: "The children's confidence changed the moment they realised their ideas could shape real solutions. Dezu didn't just teach a framework — they built a classroom culture where curiosity finally had a place to land.",
      author: "Dr. Anitha Ramanathan",
      role: "Principal - Vidya Niketan Public School",
      grades: "Grades 6 – 10",
      students: "320 Students",
      duration: "3 days"
    },
    {
      school: "Oakridge International School",
      cohort: "Creative Innovation - 2026",
      location: "Hyderabad, TS",
      quote: "Dezu's hands-on approach gave our students the tools to think differently. The project-based learning model was an eye-opener for our teaching staff as much as the kids.",
      author: "Dr. Rajesh K.",
      role: "Principal - Oakridge School",
      grades: "Grades 7 – 12",
      students: "280 Students",
      duration: "5 days"
    },
    {
      school: "The Heritage School",
      cohort: "Design Thinking Cohort - 2025",
      location: "Gurgaon, HR",
      quote: "Seeing students collaborate and prototype real-world systems in just 3 days was inspiring. This is design-led education at its absolute finest.",
      author: "Seema Bhandari",
      role: "Dean of Academics",
      grades: "Grades 5 – 9",
      students: "410 Students",
      duration: "3 days"
    },
    {
      school: "Chirec International School",
      cohort: "Future Shaper Program",
      location: "Hyderabad, TS",
      quote: "Our classrooms have transformed. The kids are more vocal, more curious, and aren't afraid of making mistakes. Dezu Schools succeeded in making learning fun.",
      author: "Venkata Ramana",
      role: "Vice Principal",
      grades: "Grades 8 – 10",
      students: "150 Students",
      duration: "4 days"
    }
  ];
  const teacherTestimonials = [
    {
      quote: "Dezu gave our teachers a shared vocabulary for creativity. Staff room conversations look different now.",
      author: "Mounika",
      role: "Head, Middle School - The Valley School, Bangalore"
    },
    {
      quote: "The professional development workshop was highly structured, yet allowed complete creative freedom. Our teachers felt deeply valued.",
      author: "Anand Prasad",
      role: "Senior Educator - Meridian School, Hyderabad"
    },
    {
      quote: "Integrating design thinking into our regular curriculum seemed daunting, but Dezu made it seamless and extremely rewarding.",
      author: "Shreya Sen",
      role: "Principal - Indus International School, Pune"
    },
    {
      quote: "I've never seen our teaching staff so energized. The toolkit provided by Dezu is something we use daily.",
      author: "K. Srinivasan",
      role: "Design Coordinator - Glendale Academy, Hyderabad"
    }
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] relative text-dark font-sans selection:bg-primary selection:text-white">
      
      {/* INLINE CSS MARQUEE ANIMATION */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-inline {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 35s linear infinite;
        }
      `}} />
      
      {/* FLOATING HEADER */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 w-full relative overflow-visible flex flex-col justify-center">

        {/* Overlapping orange squares in bottom-right */}
        <div className="absolute bottom-16 right-16 w-32 h-32 pointer-events-none hidden sm:block z-0">
          {/* Square 1 (bottom-right) */}
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F97316]"></div>
          {/* Square 2 (shifted) */}
          <div className="absolute bottom-8 right-8 w-16 h-16 bg-[#F97316]"></div>
        </div>

        <div className="w-full max-w-none flex flex-col items-center gap-16">
          
          {/* Top: 5 Images Scrolling Loop Marquee */}
          <div className="w-full relative overflow-hidden py-4 select-none">

            <div className="animate-marquee-inline flex gap-6 select-none">
              {/* Set 1 */}
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg5} 
                  alt="Classroom activity 1" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg4} 
                  alt="Classroom activity 2" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg3} 
                  alt="Classroom activity 3" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg2} 
                  alt="Classroom activity 4" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg1} 
                  alt="Classroom activity 5" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Set 2 (for seamless loop) */}
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg5} 
                  alt="Classroom activity 1 duplicate" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg4} 
                  alt="Classroom activity 2 duplicate" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg3} 
                  alt="Classroom activity 3 duplicate" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg2} 
                  alt="Classroom activity 4 duplicate" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[24px] shadow-md shrink-0 group">
                <Image 
                  src={storiesHeroImg1} 
                  alt="Classroom activity 5 duplicate" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bottom: Text Content */}
          <div className="w-full text-center max-w-4xl mx-auto space-y-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-black text-dark tracking-tight leading-tight">
              Real <span className="text-primary italic font-serif font-normal">stories</span> <br />
              from Classrooms
            </h1>
            <p className="text-base md:text-lg font-medium text-[#1E293BCC] max-w-2xl mx-auto leading-relaxed mt-4">
              Celebrating the journeys of schools, educators, and students who embraced creativity, curiosity, and future-ready thinking through Dezu Schools.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: METRICS ROW (Impact Created) */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-visible">

        {/* Heading */}
        <div className="text-left mb-10 pl-2">
          <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
            Impact <span className="text-primary italic font-serif font-normal">created</span>
          </h2>
        </div>

        {/* Card Wrapper */}
        <div className="relative w-full overflow-visible">
          
          {/* Orange Scalloped Badge on Bottom-Right */}
          <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 z-20 w-16 h-16 md:w-20 md:h-20 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="#FF6A1F" className="w-full h-full drop-shadow-lg">
              <path d="M50 2.5 L55.3 10.6 L64.4 6.3 L67.1 15.8 L76.7 13.8 L76.8 23.6 L86.4 24.1 L83.8 33.5 L92.5 37.3 L87.4 45.7 L95 52.1 L87.8 58.8 L93.4 67 L84.8 71.2 L88 80.5 L78.8 82.4 L79.6 92.2 L70.4 91.4 L68.4 101 L60 97.6 L55.3 105.8 L48.3 100 L41.3 105.8 L36.7 97.6 L28.3 101 L26.3 91.4 L17.1 92.2 L17.9 82.4 L8.7 80.5 L12 71.2 L3.4 67 L9 58.8 L1.8 52.1 L9.4 45.7 L4.3 37.3 L13 33.5 L10.4 24.1 L20 23.6 L20.1 13.8 L29.7 15.8 L32.4 6.3 L41.5 10.6 Z" />
            </svg>
          </div>

          <div className="bg-primary rounded-[36px] p-8 md:py-16 md:px-6 text-white relative overflow-hidden shadow-xl border border-white/10 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              
              {/* Col 1 */}
              <div className="flex flex-col items-center justify-center text-center px-4 lg:border-r border-white/20">
                <div className="text-secondary mb-4">
                  <svg className="w-8 h-8 text-[#FF6A1F]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                  10<span className="text-[#FF6A1F] font-sans font-bold">+</span>
                </div>
                <p className="text-sm text-white/70 font-semibold tracking-wide">Schools Partnered</p>
              </div>

              {/* Col 2 */}
              <div className="flex flex-col items-center justify-center text-center px-4 lg:border-r border-white/20">
                <div className="text-secondary mb-4">
                  <svg className="w-8 h-8 text-[#FF6A1F]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 20M3 11.625a3 3 0 116-0m-6 0a9 9 0 1118 0m-18 0v.003c0 1.113.285 2.16.786 3.07M3 11.625v.109a11.386 11.386 0 004.918 8.268M10.089 20c.441-.303.923-.553 1.432-.746C13.064 18.577 15 16.52 15 14.126V14" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                  35<span className="text-[#FF6A1F] font-sans font-bold">+</span>
                </div>
                <p className="text-sm text-white/70 font-semibold tracking-wide">Students Impacted</p>
              </div>

              {/* Col 3 */}
              <div className="flex flex-col items-center justify-center text-center px-4 lg:border-r border-white/20">
                <div className="text-secondary mb-4">
                  <svg className="w-8 h-8 text-[#FF6A1F]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25C4.5 6.358 7.858 3 12 3c4.142 0 7.5 3.358 7.5 7.5z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                  3
                </div>
                <p className="text-sm text-white/70 font-semibold tracking-wide">Cities Reached</p>
              </div>

              {/* Col 4 */}
              <div className="flex flex-col items-center justify-center text-center px-4">
                <div className="text-secondary mb-4">
                  <svg className="w-8 h-8 text-[#FF6A1F]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.913-6.162M12 2.25l-3.21 6.5L1.87 9.87l5.22 5.09L5.8 21.87l6.2-3.26 6.2 3.26-1.29-6.91 5.22-5.09-6.92-1.12L12 2.25z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                  94<span className="text-[#FF6A1F] font-sans font-bold">%</span>
                </div>
                <p className="text-sm text-white/70 font-semibold tracking-wide">Renewal Rate</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: FEATURED STORIES (Testimonial Card Marquees) */}
      <section className="w-full relative overflow-hidden py-16 mb-24 flex flex-col items-center">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
            Featured <span className="text-primary italic font-serif font-normal">stories</span>
          </h2>
        </div>

        {/* Scrolling Testimonial Marquees Container */}
        <div className="w-full flex flex-col gap-8 select-none">
          
          {/* Row 1: Scrolling Left */}
          <div className="w-full relative overflow-hidden py-2">
            <div className="animate-marquee-inline flex gap-6">
              
              {/* Set 1 */}
              {testimonials.map((t, idx) => (
                <div key={`row1-set1-${idx}`} className="w-[450px] sm:w-[480px] bg-white border border-dark/5 p-8 rounded-[32px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#D7C9FF]/30 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {t.cohort}
                      </span>
                      <span className="text-xs font-semibold text-dark/40">{t.location}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-black text-dark mb-4">
                      {t.school}
                    </h3>

                    <div className="text-secondary text-4xl font-serif mb-2 leading-none">““</div>

                    <p className="text-dark/80 text-sm md:text-base font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  <div>
                    <div className="mb-6">
                      <div className="font-bold text-dark text-sm md:text-base">{t.author}</div>
                      <div className="text-xs font-medium text-dark/50">{t.role}</div>
                    </div>

                    <div className="border-t border-dark/5 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><GraduationCap size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">GRADES</div>
                          <div className="text-xs font-bold text-dark">{t.grades}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Users size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">STUDENTS</div>
                          <div className="text-xs font-bold text-dark">{t.students}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Clock size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">DURATION</div>
                          <div className="text-xs font-bold text-dark">{t.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Set 2 (for seamless loop) */}
              {testimonials.map((t, idx) => (
                <div key={`row1-set2-${idx}`} aria-hidden="true" className="w-[450px] sm:w-[480px] bg-white border border-dark/5 p-8 rounded-[32px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#D7C9FF]/30 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {t.cohort}
                      </span>
                      <span className="text-xs font-semibold text-dark/40">{t.location}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-black text-dark mb-4">
                      {t.school}
                    </h3>

                    <div className="text-secondary text-4xl font-serif mb-2 leading-none">““</div>

                    <p className="text-dark/80 text-sm md:text-base font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  <div>
                    <div className="mb-6">
                      <div className="font-bold text-dark text-sm md:text-base">{t.author}</div>
                      <div className="text-xs font-medium text-dark/50">{t.role}</div>
                    </div>

                    <div className="border-t border-dark/5 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><GraduationCap size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">GRADES</div>
                          <div className="text-xs font-bold text-dark">{t.grades}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Users size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">STUDENTS</div>
                          <div className="text-xs font-bold text-dark">{t.students}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Clock size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">DURATION</div>
                          <div className="text-xs font-bold text-dark">{t.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="w-full relative overflow-hidden py-2">
            <div className="animate-marquee-reverse flex gap-6">
              
              {/* Set 1 */}
              {[...testimonials].reverse().map((t, idx) => (
                <div key={`row2-set1-${idx}`} className="w-[450px] sm:w-[480px] bg-white border border-dark/5 p-8 rounded-[32px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#D7C9FF]/30 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {t.cohort}
                      </span>
                      <span className="text-xs font-semibold text-dark/40">{t.location}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-black text-dark mb-4">
                      {t.school}
                    </h3>

                    <div className="text-secondary text-4xl font-serif mb-2 leading-none">““</div>

                    <p className="text-dark/80 text-sm md:text-base font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  <div>
                    <div className="mb-6">
                      <div className="font-bold text-dark text-sm md:text-base">{t.author}</div>
                      <div className="text-xs font-medium text-dark/50">{t.role}</div>
                    </div>

                    <div className="border-t border-dark/5 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><GraduationCap size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">GRADES</div>
                          <div className="text-xs font-bold text-dark">{t.grades}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Users size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">STUDENTS</div>
                          <div className="text-xs font-bold text-dark">{t.students}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Clock size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">DURATION</div>
                          <div className="text-xs font-bold text-dark">{t.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Set 2 (for seamless loop) */}
              {[...testimonials].reverse().map((t, idx) => (
                <div key={`row2-set2-${idx}`} aria-hidden="true" className="w-[450px] sm:w-[480px] bg-white border border-dark/5 p-8 rounded-[32px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#D7C9FF]/30 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {t.cohort}
                      </span>
                      <span className="text-xs font-semibold text-dark/40">{t.location}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-black text-dark mb-4">
                      {t.school}
                    </h3>

                    <div className="text-secondary text-4xl font-serif mb-2 leading-none">““</div>

                    <p className="text-dark/80 text-sm md:text-base font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  <div>
                    <div className="mb-6">
                      <div className="font-bold text-dark text-sm md:text-base">{t.author}</div>
                      <div className="text-xs font-medium text-dark/50">{t.role}</div>
                    </div>

                    <div className="border-t border-dark/5 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><GraduationCap size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">GRADES</div>
                          <div className="text-xs font-bold text-dark">{t.grades}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Users size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">STUDENTS</div>
                          <div className="text-xs font-bold text-dark">{t.students}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary"><Clock size={16} /></span>
                        <div>
                          <div className="text-[10px] font-bold text-dark/40 uppercase">DURATION</div>
                          <div className="text-xs font-bold text-dark">{t.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: STUDENTS AT DEZU SESSION (Marquee Row) */}
      <section className="w-full relative overflow-hidden py-16 mb-24 flex flex-col items-center">
        
        {/* Background decorative orange line in top-left */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none overflow-hidden -z-10">
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <path d="M-20,-20 L120,160" stroke="#FFE5D3" strokeWidth="16" strokeLinecap="round" />
          </svg>
        </div>

        {/* Background solid orange rectangle sticking in from top-right edge */}
        <div className="absolute top-0 right-0 w-24 h-6 bg-[#F97316] pointer-events-none -z-10"></div>

        {/* Left-aligned Heading */}
        <div className="max-w-7xl mx-auto px-6 mb-16 pl-2 w-full text-left relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
            Students at Dezu <span className="text-primary italic font-serif font-normal">session</span>
          </h2>
        </div>

        {/* Scrolling Session Items Container */}
        <div className="w-full relative overflow-hidden py-4 select-none">
          <div className="animate-marquee-inline flex gap-6 select-none">
            
            {/* Set 1 */}
            {/* Item 1: Col 1 Image */}
            <div className="relative w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-sm shrink-0 group">
              <Image 
                src={workGallery1} 
                alt="Students collaborating 1" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Item 2: Col 2 Quotes Stack */}
            <div className="w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] flex flex-col gap-4 shrink-0">
              {/* Card 1 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "I learnt how systems thinking works. Now I ask 'why' before I ask 'what next'."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Rahul S.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 8 - Hyderabad</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "For the first time, my idea felt like it mattered in class."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Meera K.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 9 - Hyderabad</div>
                </div>
              </div>
            </div>

            {/* Item 3: Col 3 Image */}
            <div className="relative w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-sm shrink-0 group">
              <Image 
                src={workGallery2} 
                alt="Students collaborating 2" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Item 4: Col 4 Quotes Stack */}
            <div className="w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] flex flex-col gap-4 shrink-0">
              {/* Card 1 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "I learnt how systems thinking works. Now I ask 'why' before I ask 'what next'."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Rahul S.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 8 - Hyderabad</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "For the first time, my idea felt like it mattered in class."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Meera K.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 9 - Hyderabad</div>
                </div>
              </div>
            </div>

            {/* Item 5: Col 5 Image */}
            <div className="relative w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-sm shrink-0 group">
              <Image 
                src={workGallery3} 
                alt="Students collaborating 3" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Set 2 (for seamless loop) */}
            {/* Item 1: Col 1 Image */}
            <div className="relative w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-sm shrink-0 group" aria-hidden="true">
              <Image 
                src={workGallery1} 
                alt="Students collaborating 1 duplicate" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Item 2: Col 2 Quotes Stack */}
            <div className="w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] flex flex-col gap-4 shrink-0" aria-hidden="true">
              {/* Card 1 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "I learnt how systems thinking works. Now I ask 'why' before I ask 'what next'."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Rahul S.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 8 - Hyderabad</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "For the first time, my idea felt like it mattered in class."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Meera K.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 9 - Hyderabad</div>
                </div>
              </div>
            </div>

            {/* Item 3: Col 3 Image */}
            <div className="relative w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-sm shrink-0 group" aria-hidden="true">
              <Image 
                src={workGallery2} 
                alt="Students collaborating 2 duplicate" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Item 4: Col 4 Quotes Stack */}
            <div className="w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] flex flex-col gap-4 shrink-0" aria-hidden="true">
              {/* Card 1 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "I learnt how systems thinking works. Now I ask 'why' before I ask 'what next'."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Rahul S.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 8 - Hyderabad</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-dark/5 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                  <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                    "For the first time, my idea felt like it mattered in class."
                  </p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-dark text-xs sm:text-sm">Meera K.</div>
                  <div className="text-[10px] font-medium text-dark/40">Class 9 - Hyderabad</div>
                </div>
              </div>
            </div>

            {/* Item 5: Col 5 Image */}
            <div className="relative w-[300px] sm:w-[320px] h-[380px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-sm shrink-0 group" aria-hidden="true">
              <Image 
                src={workGallery3} 
                alt="Students collaborating 3 duplicate" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT TEACHERS ARE SAYING (Marquees Row) */}
      <section className="w-full relative overflow-hidden py-16 mb-24 flex flex-col items-center">
        
        {/* Background decorative curved line */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path d="M-100,100 C400,200 800,450 1540,650" stroke="#FFE5D3" strokeWidth="12" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Left-aligned Heading */}
        <div className="max-w-7xl mx-auto px-6 mb-16 pl-2 w-full text-left relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-tight">
            What <span className="text-primary italic font-serif font-normal">teachers</span> are saying
          </h2>
        </div>

        {/* Dual Scrolling Teacher Marquees Container */}
        <div className="w-full flex flex-col gap-8 select-none">
          
          {/* Row 1: Scrolling Left */}
          <div className="w-full relative overflow-hidden py-2">
            <div className="animate-marquee-inline flex gap-6">
              
              {/* Set 1 */}
              {teacherTestimonials.map((t, idx) => (
                <div key={`teacher1-set1-${idx}`} className="w-[380px] sm:w-[420px] h-[220px] bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                    <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-dark text-xs sm:text-sm">{t.author}</div>
                    <div className="text-[10px] font-medium text-dark/40">{t.role}</div>
                  </div>
                </div>
              ))}

              {/* Set 2 (for seamless loop) */}
              {teacherTestimonials.map((t, idx) => (
                <div key={`teacher1-set2-${idx}`} aria-hidden="true" className="w-[380px] sm:w-[420px] h-[220px] bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                    <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-dark text-xs sm:text-sm">{t.author}</div>
                    <div className="text-[10px] font-medium text-dark/40">{t.role}</div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="w-full relative overflow-hidden py-2">
            <div className="animate-marquee-reverse flex gap-6">
              
              {/* Set 1 */}
              {[...teacherTestimonials].reverse().map((t, idx) => (
                <div key={`teacher2-set1-${idx}`} className="w-[380px] sm:w-[420px] h-[220px] bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                    <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-dark text-xs sm:text-sm">{t.author}</div>
                    <div className="text-[10px] font-medium text-dark/40">{t.role}</div>
                  </div>
                </div>
              ))}

              {/* Set 2 (for seamless loop) */}
              {[...teacherTestimonials].reverse().map((t, idx) => (
                <div key={`teacher2-set2-${idx}`} aria-hidden="true" className="w-[380px] sm:w-[420px] h-[220px] bg-white border border-dark/5 p-6 rounded-[28px] shadow-sm flex flex-col justify-between shrink-0 text-left">
                  <div>
                    <div className="text-secondary text-2xl font-serif mb-1 leading-none">““</div>
                    <p className="text-dark/80 text-xs sm:text-sm font-medium leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-dark text-xs sm:text-sm">{t.author}</div>
                    <div className="text-[10px] font-medium text-dark/40">{t.role}</div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>





      {/* FOOTER CALL TO ACTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center relative overflow-visible">
        
        {/* Background decorative diagonal line */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
            <path d="M850,-30 L1050,180" stroke="#FFE5D3" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </div>

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
            href="/contact"
            className="bg-[#FF6A1F] text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-95 transition shadow-lg flex items-center justify-center gap-2 hover:translate-x-1 duration-200 w-full sm:w-auto text-center font-display"
          >
            Book a presentation <ArrowRight size={18} />
          </Link>
          <a
            href="/dezu schools Browcher.pdf"
            download="dezu schools Browcher.pdf"
            className="border-2 border-[#FF6A1F] text-[#FF6A1F] hover:bg-[#FF6A1F] hover:text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 duration-200 w-full sm:w-auto text-center font-display"
          >
            Workshop brochure <Download size={18} />
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
