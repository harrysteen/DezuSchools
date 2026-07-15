"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Fetch the authenticated user on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setUser(data.user);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [pathname]); // Check auth when navigation occurs to update navbar state if login changes

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        setUser(null);
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Helper to determine if path is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const linkClass = (path: string) => {
    const baseClass = "hover:text-secondary transition relative py-1";
    if (isActive(path)) {
      return `${baseClass} text-secondary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary after:scale-x-100`;
    }
    return baseClass;
  };

  const mobileLinkClass = (path: string) => {
    return isActive(path)
      ? "text-secondary hover:text-secondary transition font-display"
      : "hover:text-secondary transition font-display";
  };

  return (
    <>
      {/* FLOATING HEADER */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-primary text-white py-3 px-6 rounded-full flex items-center justify-between shadow-2xl z-50 transition-all duration-300 border border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-display font-normal tracking-tight">dezu schools</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link href="/workshop" className={linkClass("/workshop")}>
            3-day workshop
          </Link>
          <Link href="/programs" className={linkClass("/programs")}>
            programs
          </Link>
          <Link href="/why-dezu" className={linkClass("/why-dezu")}>
            why dezu
          </Link>
          <Link href="/stories" className={linkClass("/stories")}>
            stories
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            contact
          </Link>
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Auth Section */}
          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full font-medium border border-white/5 max-w-[120px] truncate">
                    Hi, {user.name.split(" ")[0]}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-white/80 hover:text-secondary transition text-sm font-semibold flex items-center gap-1 active:scale-95 cursor-pointer"
                  >
                    <LogOut size={15} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <Link href="/login" className="hover:text-secondary transition">
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-white/15 text-white border border-white/20 px-4 py-1.5 rounded-full hover:bg-white hover:text-primary transition shadow-sm active:scale-95"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </>
          )}

          {/* Book Presentation Button */}
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
        <div className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center gap-6 text-white animate-fade-in">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-1 hover:text-secondary transition"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-6 text-2xl font-bold">
            <Link
              href="/workshop"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass("/workshop")}
            >
              3-day workshop
            </Link>
            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass("/programs")}
            >
              programs
            </Link>
            <Link
              href="/why-dezu"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass("/why-dezu")}
            >
              why dezu
            </Link>
            <Link
              href="/stories"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass("/stories")}
            >
              stories
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass("/contact")}
            >
              contact
            </Link>
          </nav>

          {/* Mobile Auth and Presentation Button */}
          <div className="flex flex-col items-center gap-4 mt-6 border-t border-white/10 pt-6 w-[80%] max-w-[300px]">
            {!loading && (
              <>
                {user ? (
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <span className="text-white/70 text-sm">Logged in as {user.name}</span>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleLogout();
                      }}
                      className="text-secondary hover:text-white transition text-lg font-bold font-display flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-6 mb-2">
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-secondary text-lg font-bold font-display transition"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="bg-white/10 text-white border border-white/20 px-6 py-2 rounded-full text-base font-bold font-display hover:bg-white hover:text-primary transition"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-secondary text-white w-full text-center px-8 py-3 rounded-full text-base font-bold hover:bg-opacity-95 transition shadow-lg font-display"
            >
              Book a Presentation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
