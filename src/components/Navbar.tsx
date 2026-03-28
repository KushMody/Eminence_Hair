"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const videoDropdown = [
  { name: "Hair Transformation", path: "/hair-transformation" },
  { name: "Problem Solution", path: "/problem-solution" },
  { name: "Customer Feedback", path: "/customer-solution" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [videosOpen, setVideosOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileVideosOpen, setMobileVideosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVideosOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        const button = document.querySelector('[aria-label="Toggle mobile menu"]');
        if (!button?.contains(e.target as Node)) {
          setMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 1. Updated link class logic with Tailwind "after:" pseudo-elements for the animated line
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    // The base handles the setup for the pseudo-element (the underline)
    const baseClass = "relative py-1 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300 font-medium";

    // Active State: Text is accent, underline is permanently at 100% width
    if (isActive) {
      return `${baseClass} text-accent after:scale-x-100 after:bg-accent`;
    }

    // Inactive & Hover State: Text changes on hover, underline scales from 0 to 100%
    return `${baseClass} ${isScrolled ? "text-charcoal" : "text-charcoal/80"
      } hover:text-accent after:scale-x-0 hover:after:scale-x-100 hover:after:bg-accent`;
  };

  const isVideoPageActive = videoDropdown.some((item) => item.path === pathname);

  // Reusing the same logic for the Dropdown button so it matches perfectly
  const getDropdownButtonClass = () => {
    const baseClass = "relative py-1 flex items-center gap-1.5 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300 font-medium";

    if (isVideoPageActive) {
      return `${baseClass} text-accent after:scale-x-100 after:bg-accent`;
    }

    return `${baseClass} ${isScrolled ? "text-charcoal" : "text-charcoal/80"
      } hover:text-accent after:scale-x-0 hover:after:scale-x-100 hover:after:bg-accent`;
  };

  return (
    <nav
      className={`fixed top-12 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
          ? "bg-background/90 backdrop-blur-xl py-3 shadow-2xl border-b border-accent/10"
          : "bg-transparent py-8"
        }`}
    >
      {!isScrolled && <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20" />}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="relative flex items-center h-12 sm:h-16 md:h-[70px] w-32 sm:w-40 md:w-[200px]">
          <Image
            src="/images/cropped-EMINENCE-LOGO-BLACK-300x100.png"
            alt="Eminence Hair Logo"
            fill
            className="object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center justify-center space-x-8 xl:space-x-10 text-sm xl:text-[15px] uppercase tracking-[0.12em]`}>

          <Link href="/" className={`${getLinkClass("/")} flex items-center justify-center`}>Home</Link>

          {/* Videos Dropdown */}
          <div ref={dropdownRef} className="relative flex items-center justify-center">
            <button
              onClick={() => setVideosOpen((v) => !v)}
              className={`${getDropdownButtonClass()} flex items-center justify-center`}
            >
              VIDEOS
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${videosOpen ? "rotate-180 text-accent" : ""}`}
              />
            </button>

            {videosOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-background border border-accent/10 shadow-2xl rounded-sm overflow-hidden z-50">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40" />
                {videoDropdown.map((item) => {
                  const isSubActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setVideosOpen(false)}
                      // 2. Added a slide-right (translate-x) effect for sub-menu items
                      className={`block px-6 py-4 text-[12px] uppercase tracking-wider border-b border-accent/5 last:border-0 transition-all duration-300 ${isSubActive
                          ? "bg-accent/5 text-accent font-bold pl-8"
                          : "text-charcoal font-medium hover:bg-accent/5 hover:text-accent hover:pl-8"
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/about-us" className={`${getLinkClass("/about-us")} flex items-center justify-center`}>About Us</Link>
          <Link href="/contact-us" className={`${getLinkClass("/contact-us")} flex items-center justify-center`}>Contact Us</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/book-appointment"
            className={`hidden sm:flex h-10 px-6 text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-300 items-center justify-center shadow-md ${isScrolled
                ? "bg-accent text-white hover:bg-charcoal"
                : "bg-charcoal text-white hover:bg-accent"
              }`}
          >
            Book Now
          </Link>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button 
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`text-charcoal p-2 transition-colors duration-300 ${isScrolled ? "text-charcoal" : "text-charcoal"}`}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-full left-0 right-0 bg-background border-b border-accent/10 shadow-2xl lg:hidden z-40"
          >
            <div className="flex flex-col">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4 text-[13px] font-bold uppercase tracking-[0.2em] border-b border-accent/5 transition-colors ${pathname === "/" ? "bg-accent/5 text-accent" : "text-charcoal hover:bg-accent/5 hover:text-accent"}`}
              >
                Home
              </Link>

              {/* Mobile Videos Dropdown */}
              <div className="border-b border-accent/5">
                <button
                  onClick={() => setMobileVideosOpen(!mobileVideosOpen)}
                  className={`w-full px-6 py-4 text-[13px] font-bold uppercase tracking-[0.2em] flex items-center justify-between transition-colors ${videoDropdown.some((item) => item.path === pathname) ? "bg-accent/5 text-accent" : "text-charcoal hover:bg-accent/5 hover:text-accent"}`}
                >
                  VIDEOS
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${mobileVideosOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileVideosOpen && (
                  <div className="bg-accent/2.5">
                    {videoDropdown.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileVideosOpen(false);
                        }}
                        className={`block px-8 py-3 text-[12px] font-medium uppercase tracking-wider border-b border-accent/5 last:border-0 transition-colors ${pathname === item.path ? "bg-accent/5 text-accent" : "text-charcoal hover:bg-accent/5 hover:text-accent"}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/about-us" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4 text-[13px] font-bold uppercase tracking-[0.2em] border-b border-accent/5 transition-colors ${pathname === "/about-us" ? "bg-accent/5 text-accent" : "text-charcoal hover:bg-accent/5 hover:text-accent"}`}
              >
                About Us
              </Link>

              <Link 
                href="/contact-us" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4 text-[13px] font-bold uppercase tracking-[0.2em] border-b border-accent/5 transition-colors ${pathname === "/contact-us" ? "bg-accent/5 text-accent" : "text-charcoal hover:bg-accent/5 hover:text-accent"}`}
              >
                Contact Us
              </Link>

              <Link
                href="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 bg-charcoal text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}