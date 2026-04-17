import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadCaptureBanner from "./components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "Free Legal Resources & Attorney Connections | Top Lawyer Resource",
  description:
    "Free legal guides and attorney connections for injury victims. Get a free case evaluation for personal injury, car accidents, and more.",
  openGraph: {
    title: "Free Legal Resources & Top-Rated Lawyer Connections",
    description:
      "Get answers to your legal questions and connect with experienced attorneys in your area — at no cost to you.",
    url: "https://toplawyerresource.com",
  },
};

const featuredArticles = [
  {
    slug: "jacksonville-dangerous-intersections",
    title: "Jacksonville's Most Dangerous Intersections: 2025 Data & What To Do After a Crash",
    description:
      "New crash data reveals the top 10 most dangerous intersections in Jacksonville. Find out where accidents happen most — and what steps to take if you're involved in a crash.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/15481199/pexels-photo-15481199.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    description:
      "If you've been discriminated against at work, you may need a Right to Sue letter before you can take your employer to court. Here's everything you need to know.",
    lastUpdated: "2026-04-15",
    category: "Workers' Rights",
    categorySlug: "workers-compensation",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8112115/pexels-photo-8112115.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida: What to Realistically Expect",
    description:
      "Florida car accident settlements vary widely based on injury severity, liability, and insurance limits. We break down real settlement data and what affects your payout.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/6520213/pexels-photo-6520213.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const practiceAreas = [
  {
    href: "/personal-injury",
    title: "Personal Injury",
    description: "Slip and falls, dog bites, defective products, and more.",
    image: "https://images.pexels.com/photos/6519905/pexels-photo-6519905.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Personal injury attorney consultation",
  },
  {
    href: "/car-accident",
    title: "Car Accidents",
    description: "Rear-end collisions, DUI accidents, hit-and-run, and more.",
    image: "https://images.pexels.com/photos/15481199/pexels-photo-15481199.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Car accident scene in Florida",
  },
  {
    href: "/truck-accident",
    title: "Truck Accidents",
    description: "18-wheeler crashes, commercial vehicle negligence, and more.",
    image: "https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Commercial truck on Florida highway",
  },
  {
    href: "/workers-compensation",
    title: "Workers' Comp",
    description: "On-the-job injuries, occupational illness, denied claims.",
    image: "https://images.pexels.com/photos/4506206/pexels-photo-4506206.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Injured worker receiving workers compensation assistance",
  },
];

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Top Lawyer Resource",
  url: "https://toplawyerresource.com",
  description: "Free legal resources and attorney connections for injury victims in Florida",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://toplawyerresource.com/guides?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Top Lawyer Resource",
  url: "https://toplawyerresource.com",
  logo: "https://toplawyerresource.com/logo-whitebg.webp",
  description:
    "Free legal resources and attorney connections for injury victims. We help Floridians understand their rights and connect with experienced attorneys.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "FL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://toplawyerresource.com/contact",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-[#0a1628]">

        {/* Background image — right side */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6077588/pexels-photo-6077588.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Attorney consultation"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          {/* Left fade so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/20" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
          <div className="max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-xs text-white/50 tracking-widest uppercase">Free consultations — no upfront fees</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              Injured?<br />
              <span className="bg-gradient-to-r from-blue-300 via-white to-blue-200 bg-clip-text text-transparent">
                Get the right attorney<br />on your side.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-md font-light">
              Top Lawyer Resource connects injury victims with experienced local attorneys — fast, free, and with no obligation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="/tools/case-evaluator"
                className="px-7 py-3.5 rounded-lg bg-blue-500 text-white font-medium text-base transition-all duration-200 hover:bg-blue-400 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(55,138,221,0.4)] active:scale-[0.98]"
              >
                Evaluate My Case — Free
              </a>
              <a
                href="/guides"
                className="px-7 py-3.5 rounded-lg border border-white/15 text-white/75 font-medium text-base transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                Browse Legal Guides
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-xs text-white/30 mt-0.5">Cases evaluated</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">$0</div>
                <div className="text-xs text-white/30 mt-0.5">Upfront cost</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">5 min</div>
                <div className="text-xs text-white/30 mt-0.5">Free evaluation</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How We Help You ───────────────────────────────── */}
      <section className="bg-[#f8f9fc] py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-blue-500 mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] tracking-tight mb-3">
              Three Steps to the Legal Help You Deserve
            </h2>
            <p className="text-base text-gray-500 font-light">
              Free, confidential, and no obligation at any step.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1 */}
            <a href="/guides" className="relative bg-[#0a1628] rounded-xl p-8 overflow-hidden block transition-all duration-200 hover:bg-[#0d2035] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] no-underline">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="text-6xl font-extrabold text-blue-500/20 leading-none tracking-tighter mb-5">01</div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Know Your Rights</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-6 font-light">
                Our free legal guides break down complex topics in plain English — deadlines, compensation, and what to do next.
              </p>
              <span className="text-sm text-blue-400 font-medium">
                Browse Guides →
              </span>
            </a>

            {/* Card 2 */}
            <a href="/tools/case-evaluator" className="relative bg-[#0a1628] rounded-xl p-8 overflow-hidden block transition-all duration-200 hover:bg-[#0d2035] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] no-underline">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="text-6xl font-extrabold text-blue-500/20 leading-none tracking-tighter mb-5">02</div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Check Your Case</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-6 font-light">
                Answer a few quick questions and get a preliminary assessment of whether you have a viable claim — before speaking with an attorney.
              </p>
              <span className="text-sm text-blue-400 font-medium">
                Start Evaluation →
              </span>
            </a>

            {/* Card 3 */}
            <a href="/contact" className="relative bg-[#0a1628] rounded-xl p-8 overflow-hidden block transition-all duration-200 hover:bg-[#0d2035] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] no-underline">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="text-6xl font-extrabold text-blue-500/20 leading-none tracking-tighter mb-5">03</div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Find a Lawyer</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-6 font-light">
                Get connected with a qualified attorney in your area. Our network works on contingency — no fees unless you win.
              </p>
              <span className="text-sm text-blue-400 font-medium">
                Get Connected →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ── Practice Areas ────────────────────────────────── */}
      <section className="py-20 px-4 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Practice Areas We Cover</h2>
            <p className="text-gray-500 text-lg">
              Connect with attorneys experienced in a wide range of injury and civil claims.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area) => (
              <Link key={area.href} href={area.href} className="card group overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-transparent" />
                  <h3
                    className="absolute bottom-3 left-4 text-white font-bold text-lg"
                    style={{ textShadow: "0 2px 6px rgba(0,0,0,0.9)" }}
                  >
                    {area.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
                  <p className="text-blue-600 font-semibold text-sm mt-3 group-hover:text-blue-800 transition-colors">
                    Learn More &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Articles ─────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Legal Guides</h2>
              <p className="text-gray-500 text-lg">
                Practical information written for injury victims, not lawyers.
              </p>
            </div>
            <Link
              href="/guides"
              className="hidden md:inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/guides/${article.slug}`} className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge badge-blue">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-tight mb-3 group-hover:text-blue-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">
                      Last Updated:{" "}
                      {new Date(article.lastUpdated).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-blue-600 text-sm font-semibold group-hover:text-blue-800 transition-colors">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/guides" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              View All Legal Guides &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Trust Us ─────────────────────────────────── */}
      <section className="py-20 px-4 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-auto lg:min-h-[420px]">
              <Image
                src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Attorney consulting with injury victim client"
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
            </div>

            {/* Right: stats + testimonials */}
            <div>
              <p className="text-sky-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Why Injury Victims Trust Us
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                The Legal Help You Deserve — At Zero Cost
              </h2>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { stat: "10,000+", label: "People helped" },
                  { stat: "$0", label: "Out-of-pocket cost" },
                  { stat: "48 hrs", label: "Avg. attorney response" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl font-extrabold text-blue-700 mb-1">{item.stat}</div>
                    <div className="text-gray-500 text-xs font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-5">
                {[
                  {
                    quote:
                      "After my car accident, I didn't know where to turn. Top Lawyer Resource helped me understand my rights and connected me with an attorney who got me a fair settlement.",
                    name: "Maria T.",
                    location: "Jacksonville, FL",
                  },
                  {
                    quote:
                      "I was injured at work and my employer was giving me the runaround. The guides here helped me realize I had a strong claim. The attorney I found got me everything I was owed.",
                    name: "James R.",
                    location: "Miami, FL",
                  },
                ].map((t, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic leading-relaxed mb-3">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="font-semibold text-sm text-gray-900">
                      {t.name} &mdash; <span className="text-gray-400 font-normal">{t.location}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LeadCaptureBanner
            title="Ready to Find Out If You Have a Case?"
            subtitle="Answer 5 quick questions and get a free preliminary assessment. No obligation."
          />
        </div>
      </section>
    </>
  );
}
