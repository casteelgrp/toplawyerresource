"use client";
import Link from "next/link";
import { useState } from "react";

const practiceAreas = [
  { href: "/personal-injury", label: "Personal Injury" },
  { href: "/car-accident", label: "Car Accidents" },
  { href: "/truck-accident", label: "Truck Accidents" },
  { href: "/workers-compensation", label: "Workers' Compensation" },
];

const guides = [
  {
    href: "/guides/jacksonville-dangerous-intersections",
    label: "Jacksonville Dangerous Intersections",
  },
  {
    href: "/guides/right-to-sue-letter",
    label: "What Is a Right to Sue Letter?",
  },
  {
    href: "/guides/average-car-accident-settlement-florida",
    label: "Average FL Car Accident Settlement",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#1a365d" }} className="shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-white font-bold text-xl leading-tight">
              Top Lawyer<br />
              <span style={{ color: "#d69e2e" }}>Resource</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Practice Areas Dropdown */}
            <div className="relative" onMouseEnter={() => setPracticeOpen(true)} onMouseLeave={() => setPracticeOpen(false)}>
              <button className="text-white hover:text-yellow-300 font-medium flex items-center gap-1 py-5">
                Practice Areas
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {practiceOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg w-56 py-2 z-50">
                  {practiceAreas.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div className="relative" onMouseEnter={() => setGuidesOpen(true)} onMouseLeave={() => setGuidesOpen(false)}>
              <button className="text-white hover:text-yellow-300 font-medium flex items-center gap-1 py-5">
                Legal Guides
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {guidesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg w-72 py-2 z-50">
                  {guides.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/guides"
                      className="block px-4 py-2 text-blue-700 font-medium text-sm hover:text-blue-900"
                    >
                      View All Guides →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/tools/case-evaluator" className="text-white hover:text-yellow-300 font-medium">
              Case Evaluator
            </Link>

            <Link href="/about" className="text-white hover:text-yellow-300 font-medium">
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/tools/case-evaluator"
              style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
              className="font-bold px-5 py-2 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              Free Case Evaluation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
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
        {mobileOpen && (
          <div className="md:hidden bg-blue-900 pb-4">
            <div className="pt-2 pb-1 border-b border-blue-700">
              <p className="text-blue-300 text-xs uppercase tracking-wide px-4 py-2">Practice Areas</p>
              {practiceAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-yellow-300 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 pb-1 border-b border-blue-700">
              <p className="text-blue-300 text-xs uppercase tracking-wide px-4 py-2">Legal Guides</p>
              {guides.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-yellow-300 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 px-4">
              <Link
                href="/tools/case-evaluator"
                style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
                className="block text-center font-bold px-5 py-3 rounded-md text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Free Case Evaluation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
