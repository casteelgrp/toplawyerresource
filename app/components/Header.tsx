"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const practiceAreas = [
  { href: "/personal-injury", label: "Personal Injury" },
  { href: "/car-accident", label: "Car Accidents" },
  { href: "/truck-accident", label: "Truck Accidents" },
  { href: "/workers-compensation", label: "Workers' Compensation" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const practiceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openPractice() {
    if (practiceTimer.current) clearTimeout(practiceTimer.current);
    setPracticeOpen(true);
  }
  function closePractice() {
    practiceTimer.current = setTimeout(() => setPracticeOpen(false), 180);
  }

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 py-2 md:py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-whitebg.webp"
              alt="Top Lawyer Resource"
              width={180}
              height={56}
              priority
              className="h-11 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Practice Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={openPractice}
              onMouseLeave={closePractice}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium text-sm transition-colors duration-150">
                Practice Areas
                <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {practiceOpen && (
                <div
                  className="absolute top-full left-0 z-50 pt-2"
                  onMouseEnter={openPractice}
                  onMouseLeave={closePractice}
                >
                  <div className="bg-white shadow-xl border border-gray-100 rounded-xl w-60 py-2">
                    {practiceAreas.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/guides"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium text-sm transition-colors duration-150"
            >
              Legal Guides
            </Link>

            <Link
              href="/tools/case-evaluator"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium text-sm transition-colors duration-150"
            >
              Case Evaluator
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium text-sm transition-colors duration-150"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18772719208"
              className="text-sm text-gray-500 hover:text-blue-700 transition-colors font-medium"
            >
              Call (877) 271-9208
            </a>
            <Link href="/tools/case-evaluator" className="btn btn-primary text-sm px-5 py-2.5">
              Free Case Evaluation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 pt-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 px-2 py-2">
              Practice Areas
            </p>
            {practiceAreas.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-2 py-2.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/guides"
              className="block px-2 py-2.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Legal Guides
            </Link>
            <div className="mt-4 px-2 space-y-3">
              <Link
                href="/tools/case-evaluator"
                className="btn btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Free Case Evaluation
              </Link>
              <a
                href="tel:+18772719208"
                className="block text-center text-sm text-gray-500 hover:text-blue-700 font-medium transition-colors"
              >
                Call (877) 271-9208
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
