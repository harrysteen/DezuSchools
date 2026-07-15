"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      // Successful login
      router.push("/");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(28,27,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,31,0.04)_1px,transparent_1px)] bg-[size:120px_120px] bg-cream text-dark relative flex flex-col justify-center items-center p-6 select-none overflow-hidden font-sans">
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Floating Star Decors */}
      <div className="absolute top-12 right-12 text-primary/30 animate-pulse pointer-events-none">
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-12 left-12 text-secondary/30 animate-pulse pointer-events-none">
        <Sparkles size={24} />
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-dark/60 hover:text-primary transition group active:scale-95"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>

      {/* Log In Card */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-2xl transition-all duration-300 hover:shadow-primary/5">
        
        {/* Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-3">
            <span className="text-2xl font-display font-normal text-primary tracking-tight">dezu schools</span>
          </Link>
          <h2 className="text-3xl font-display font-black tracking-tight leading-tight text-dark">
            Welcome Back!
          </h2>
          <p className="text-sm text-dark/60 mt-1">
            Build future creators. Log in to continue.
          </p>
        </div>

        {/* Error Callout */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-xs text-red-700 font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email input */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-extrabold uppercase tracking-wider text-dark/70">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/30">
                <Mail size={18} />
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3 bg-cream/40 border border-muted hover:border-primary/50 focus:border-primary focus:bg-white rounded-2xl text-sm transition outline-none"
              />
            </div>
          </div>

          {/* Password input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-xs font-extrabold uppercase tracking-wider text-dark/70">
                Password
              </label>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/30">
                <Lock size={18} />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 bg-cream/40 border border-muted hover:border-primary/50 focus:border-primary focus:bg-white rounded-2xl text-sm transition outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-dark/30 hover:text-primary transition focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3.5 px-6 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-opacity-95 transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none active:scale-98 cursor-pointer mt-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        {/* Signup redirection */}
        <div className="text-center mt-8 pt-6 border-t border-muted/50 text-sm text-dark/60">
          New to Studio DEZU?{" "}
          <Link href="/signup" className="text-primary hover:text-secondary font-bold transition">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
