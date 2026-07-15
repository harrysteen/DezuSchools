"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Sparkles, Check, X, ArrowRight, RotateCcw, Award, ArrowLeft } from "lucide-react";

// Design Thinking MCQ Tasks data
const TASKS_DATA = [
  {
    id: 1,
    phase: "Empathy",
    title: "Task 1: Empathy & User Research",
    scenario: "You want to design a better lunchbox for elementary school kids. What is the best first step to take?",
    options: [
      {
        key: "A",
        text: "Draw a 3D model of a cool lunchbox shape on your computer.",
        isCorrect: false,
        explanation: "Drawing a model first skips understanding the user! You might design a shape that doesn't fit in a kid's backpack or is too hard for them to carry.",
      },
      {
        key: "B",
        text: "Interview kids and parents to understand what problems they face with their current lunchboxes.",
        isCorrect: true,
        explanation: "Correct! Empathy is the foundation of Design Thinking. By talking to kids and parents, you discover real needs, such as leaks, heavy weight, or latches that are too hard for small fingers.",
      },
      {
        key: "C",
        text: "Buy the most expensive lunchbox in the store and copy all its features.",
        isCorrect: false,
        explanation: "Copying an existing product doesn't help you innovate or solve new, unique user needs. Design is about listening directly to your users.",
      },
      {
        key: "D",
        text: "Ask a plastics factory which material is the cheapest to manufacture.",
        isCorrect: false,
        explanation: "Starting with cost/factory constraints before knowing what you are building blocks your creativity and ignores user needs.",
      },
    ],
  },
  {
    id: 2,
    phase: "Define",
    title: "Task 2: Define the Problem",
    scenario: "During interviews, you discover that elementary school kids frequently lose their lunchbox spoons. What is the best way to frame this problem?",
    options: [
      {
        key: "A",
        text: "How can we force kids to pay better attention and be more responsible?",
        isCorrect: false,
        explanation: "Trying to force kids to change their behavior is rarely a successful design solution. Design should adapt to human nature, not fight it.",
      },
      {
        key: "B",
        text: "How can we redesign the lunchbox to securely hold or attach the spoon so it doesn't get lost?",
        isCorrect: true,
        explanation: "Correct! This defines the problem in a positive, actionable way (a 'How Might We' question) that directs your creativity toward a physical design solution.",
      },
      {
        key: "C",
        text: "How can we make plastic spoons cheaper so it doesn't matter if they are lost?",
        isCorrect: false,
        explanation: "Making spoons cheaper doesn't solve the core problem of a kid not having a spoon when it's time to eat their lunch!",
      },
      {
        key: "D",
        text: "How can we stop serving food that requires spoons altogether?",
        isCorrect: false,
        explanation: "Avoiding the problem by changing their diet is impractical and limits the variety of healthy food a child can eat.",
      },
    ],
  },
  {
    id: 3,
    phase: "Ideate & Prototype",
    title: "Task 3: Rapid Prototyping",
    scenario: "You have an idea for a lunchbox with built-in cooling pods. What is the best way to quickly test this idea?",
    options: [
      {
        key: "A",
        text: "Build a quick mockup using cardboard, tape, and plastic bags to show the layout and size.",
        isCorrect: true,
        explanation: "Correct! In Design Thinking, we prototype rapidly and cheaply. A simple cardboard mockup helps you test the size, weight, and layout with kids immediately, without spending much time or money.",
      },
      {
        key: "B",
        text: "Hire an engineering firm to manufacture a fully working plastic prototype.",
        isCorrect: false,
        explanation: "This is too slow and expensive for an early stage! If the design turns out to have flaws, you've wasted thousands of dollars and weeks of time.",
      },
      {
        key: "C",
        text: "Write a detailed 50-page document explaining the physics of cooling pods.",
        isCorrect: false,
        explanation: "While documentation has its place, a child cannot interact with a physics paper. You need something physical for them to test and hold.",
      },
      {
        key: "D",
        text: "Launch a social media marketing campaign to sell it before making it.",
        isCorrect: false,
        explanation: "Selling a product that hasn't been tested or prototyped risks delivering a broken or useless design to your customers.",
      },
    ],
  },
  {
    id: 4,
    phase: "Test",
    title: "Task 4: Testing & Feedback",
    scenario: "You show your cardboard lunchbox prototype to a kid, and they struggle to open the latch. What is your next move?",
    options: [
      {
        key: "A",
        text: "Tell the kid they are opening it wrong and show them the correct way.",
        isCorrect: false,
        explanation: "If a user struggles, it is the design's fault, not the user's! Explaining it away won't help other kids who will struggle when you aren't there.",
      },
      {
        key: "B",
        text: "Scrap the entire lunchbox project and start designing a school backpack instead.",
        isCorrect: false,
        explanation: "Giving up immediately is not the answer! Failures are stepping stones. Iterative refinement is the core of design thinking.",
      },
      {
        key: "C",
        text: "Observe how they struggle, ask why it is hard, and use that feedback to redesign the latch.",
        isCorrect: true,
        explanation: "Correct! Testing is all about learning. Watching the user struggle gives you valuable insights on how to iterate and make your design better.",
      },
      {
        key: "D",
        text: "Add a label with 10 steps of instructions explaining how to open the latch.",
        isCorrect: false,
        explanation: "If a child's lunchbox requires a 10-step user manual just to open, the design has failed. Good designs are intuitive.",
      },
    ],
  },
];

export default function ProgramsDemoPage() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrectSelection, setIsCorrectSelection] = useState<boolean | null>(null);
  const [answersCount, setAnswersCount] = useState(0); // tracks correct answers on first attempt
  const [firstAttempt, setFirstAttempt] = useState(true);
  const [showScoreCard, setShowScoreCard] = useState(false);

  // Authenticate and protect this route client-side
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setAuthLoading(false);
          } else {
            router.push("/login?redirect=/programs");
          }
        } else {
          router.push("/login?redirect=/programs");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        router.push("/login?redirect=/programs");
      }
    }
    checkAuth();
  }, [router]);

  const currentTask = TASKS_DATA[currentTaskIndex];

  if (authLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-dark/70">Checking authentication...</p>
        </div>
      </div>
    );
  }

  const handleOptionClick = (option: { key: string; isCorrect: boolean }) => {
    if (isAnswered) return; // Prevent clicking other options after selection

    setSelectedOptionKey(option.key);
    setIsAnswered(true);
    setIsCorrectSelection(option.isCorrect);

    if (option.isCorrect) {
      if (firstAttempt) {
        setAnswersCount((prev) => prev + 1);
      }
    } else {
      setFirstAttempt(false);
    }
  };

  const handleNext = () => {
    // Reset task states
    setSelectedOptionKey(null);
    setIsAnswered(false);
    setIsCorrectSelection(null);
    setFirstAttempt(true);

    if (currentTaskIndex < TASKS_DATA.length - 1) {
      setCurrentTaskIndex((prev) => prev + 1);
    } else {
      setShowScoreCard(true);
    }
  };

  const handleRestart = () => {
    setCurrentTaskIndex(0);
    setSelectedOptionKey(null);
    setIsAnswered(false);
    setIsCorrectSelection(null);
    setAnswersCount(0);
    setFirstAttempt(true);
    setShowScoreCard(false);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] bg-cream text-dark relative flex flex-col pt-36 pb-16 font-sans">
      <Navbar />

      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-36 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
        {!showScoreCard ? (
          <div className="space-y-8">
            {/* Header / Intro */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={12} /> Interactive Sandbox
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight leading-none text-dark">
                Design Thinking Demo
              </h1>
              <p className="text-dark/70 max-w-xl mx-auto mt-2 text-sm md:text-base">
                Try out these real-world design tasks to see how we teach kids to think like future creators.
              </p>
            </div>

            {/* Progress Bar & Indicators */}
            <div className="bg-white/55 border border-muted/70 rounded-2xl p-4 shadow-sm backdrop-blur-sm max-w-2xl mx-auto">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-dark/60 mb-2">
                <span>Progress</span>
                <span>Task {currentTaskIndex + 1} of {TASKS_DATA.length}</span>
              </div>
              
              {/* Progress track */}
              <div className="w-full bg-cream rounded-full h-2 overflow-hidden border border-muted/50">
                <div
                  className="bg-primary h-full transition-all duration-500 rounded-full"
                  style={{ width: `${((currentTaskIndex + 1) / TASKS_DATA.length) * 100}%` }}
                ></div>
              </div>

              {/* Progress Steps Dots */}
              <div className="flex justify-center gap-3 mt-4">
                {TASKS_DATA.map((t, idx) => (
                  <div
                    key={t.id}
                    className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                      idx === currentTaskIndex
                        ? "bg-secondary border-secondary scale-125"
                        : idx < currentTaskIndex
                        ? "bg-primary border-primary"
                        : "bg-white border-muted"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Task Main Card */}
            <div className="bg-white/80 border border-white/60 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md max-w-2xl mx-auto transition-all">
              
              {/* Task Title Banner */}
              <div className="flex items-center justify-between mb-4 border-b border-muted/50 pb-4">
                <h3 className="text-xl font-display font-bold text-primary">
                  {currentTask.title}
                </h3>
                <span className="text-xs font-semibold bg-secondary/15 text-secondary px-3 py-1 rounded-full border border-secondary/10">
                  {currentTask.phase} Phase
                </span>
              </div>

              {/* Scenario Description */}
              <p className="text-dark/95 text-base md:text-lg font-medium leading-relaxed mb-6">
                {currentTask.scenario}
              </p>

              {/* Multiple Choice Options */}
              <div className="space-y-4">
                {currentTask.options.map((opt) => {
                  const isSelected = selectedOptionKey === opt.key;
                  let cardStyles = "border-muted/70 bg-cream/25 hover:border-primary/50 hover:bg-cream/45";
                  let keyBadgeStyles = "bg-cream text-dark/70 group-hover:bg-primary/10 group-hover:text-primary";

                  if (isAnswered) {
                    if (opt.isCorrect) {
                      // Correct option style
                      cardStyles = "border-green-500 bg-green-50/50";
                      keyBadgeStyles = "bg-green-500 text-white";
                    } else if (isSelected && !opt.isCorrect) {
                      // Clicked incorrect option style
                      cardStyles = "border-red-500 bg-red-50/50";
                      keyBadgeStyles = "bg-red-500 text-white";
                    } else {
                      // Non-selected option style when answered
                      cardStyles = "border-muted/30 bg-white/30 opacity-60 pointer-events-none";
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleOptionClick(opt)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 border rounded-2xl transition-all duration-300 group flex items-start gap-4 select-none cursor-pointer ${cardStyles}`}
                    >
                      {/* Option Key Badge */}
                      <span className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center shrink-0 border border-muted/50 transition-all ${keyBadgeStyles}`}>
                        {isAnswered && opt.isCorrect ? <Check size={16} /> : isAnswered && isSelected ? <X size={16} /> : opt.key}
                      </span>
                      {/* Option Text */}
                      <span className="text-sm md:text-base font-semibold text-dark/95 pt-0.5">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanations Area */}
              {isAnswered && (
                <div className="mt-6 p-4 rounded-2xl animate-fade-in border border-muted/60 bg-cream/30">
                  <h4 className={`text-sm font-extrabold uppercase tracking-wide mb-1 flex items-center gap-1.5 ${
                    isCorrectSelection ? "text-green-600" : "text-red-600"
                  }`}>
                    {isCorrectSelection ? (
                      <>
                        <Check size={16} /> Excellent Choice!
                      </>
                    ) : (
                      <>
                        <X size={16} /> Let's Think Again
                      </>
                    )}
                  </h4>
                  <p className="text-xs md:text-sm text-dark/80 font-medium leading-relaxed">
                    {currentTask.options.find((o) => o.key === selectedOptionKey)?.explanation}
                  </p>
                </div>
              )}

              {/* Next/Action Footer */}
              {isAnswered && (
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-primary text-white py-3 px-6 rounded-full font-bold text-sm tracking-wide shadow-md hover:bg-opacity-95 transition flex items-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <span>
                      {currentTaskIndex < TASKS_DATA.length - 1 ? "Next Task" : "View Results"}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Victory Score Card */
          <div className="max-w-lg mx-auto bg-white/80 border border-white/60 rounded-3xl p-8 shadow-2xl backdrop-blur-md text-center space-y-6 animate-scale-up">
            
            {/* Celebration Icon */}
            <div className="w-20 h-20 bg-secondary/15 rounded-full flex items-center justify-center mx-auto text-secondary border border-secondary/20 shadow-md">
              <Award size={48} className="animate-pulse" />
            </div>

            {/* Score Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight leading-none text-dark">
                Demo Completed!
              </h2>
              <p className="text-sm text-dark/60 mt-2">
                You've successfully completed the Design Thinking challenge.
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="bg-cream/45 border border-muted/70 rounded-2xl p-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-dark/50 block mb-1">
                Your Thinking Score
              </span>
              <span className="text-5xl font-display font-black text-primary">
                {answersCount} / {TASKS_DATA.length}
              </span>
              <p className="text-xs md:text-sm font-semibold text-dark/80 mt-3 leading-relaxed max-w-sm mx-auto">
                {answersCount === TASKS_DATA.length
                  ? "Flawless! You have a natural designer mindset. You put user needs first and solve problems structurally!"
                  : "Great effort! Design Thinking is all about iteration, testing, and learning from mistakes. Keep building!"}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/contact"
                className="bg-secondary text-white py-3.5 px-6 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-secondary/20 hover:shadow-secondary/35 hover:bg-opacity-95 transition flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Book a Presentation for Your School</span>
                <ArrowRight size={16} />
              </Link>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleRestart}
                  className="bg-cream border border-muted hover:border-dark/30 text-dark/80 py-3 px-4 rounded-2xl font-bold text-xs tracking-wide transition flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Restart Demo</span>
                </button>
                <Link
                  href="/"
                  className="bg-cream border border-muted hover:border-dark/30 text-dark/80 py-3 px-4 rounded-2xl font-bold text-xs tracking-wide transition flex items-center justify-center gap-1 active:scale-95"
                >
                  <ArrowLeft size={14} />
                  <span>Go to Home</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
