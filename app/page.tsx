import type { Metadata } from "next";
import Link from "next/link";
import LeadCaptureBanner from "./components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "Free Legal Resources & Top-Rated Lawyer Connections | Top Lawyer Resource",
  description:
    "Get answers to your legal questions and connect with experienced attorneys in your area — at no cost to you. Free case evaluations for personal injury, car accidents, and more.",
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
    date: "2025-01-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
  },
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    description:
      "If you've been discriminated against at work, you may need a Right to Sue letter before you can take your employer to court. Here's everything you need to know.",
    date: "2025-01-20",
    category: "Workers' Rights",
    categorySlug: "workers-compensation",
    readTime: "6 min read",
  },
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida: What to Realistically Expect",
    description:
      "Florida car accident settlements vary widely based on injury severity, liability, and insurance limits. We break down real settlement data and what affects your payout.",
    date: "2025-02-01",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "10 min read",
  },
];

const practiceAreas = [
  {
    href: "/personal-injury",
    title: "Personal Injury",
    icon: "⚖️",
    description: "Slip and falls, dog bites, defective products, and more.",
  },
  {
    href: "/car-accident",
    title: "Car Accidents",
    icon: "🚗",
    description: "Rear-end collisions, DUI accidents, hit-and-run, and more.",
  },
  {
    href: "/truck-accident",
    title: "Truck Accidents",
    icon: "🚛",
    description: "18-wheeler crashes, commercial vehicle negligence, and more.",
  },
  {
    href: "/workers-compensation",
    title: "Workers' Comp",
    icon: "🦺",
    description: "On-the-job injuries, occupational illness, denied claims.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Top Lawyer Resource",
  url: "https://toplawyerresource.com",
  description: "Free legal resources and attorney connections for injury victims",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://toplawyerresource.com/guides?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ backgroundColor: "#1a365d" }} className="text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-300 text-sm uppercase tracking-wider font-medium mb-4">
            Free &bull; Confidential &bull; No Upfront Cost
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Free Legal Resources &amp;<br className="hidden md:block" />{" "}
            Top-Rated Lawyer Connections
          </h1>
          <p className="text-blue-200 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Get answers to your legal questions and connect with experienced attorneys in your
            area &mdash; at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/case-evaluator"
              style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
              className="font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Evaluate My Case &mdash; Free
            </Link>
            <Link
              href="/guides"
              className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Browse Legal Guides
            </Link>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            No fees unless you win &bull; Available 24/7 &bull; 100% confidential
          </p>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-3" style={{ color: "#1a365d" }}>
            How We Help You
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Three steps to getting the legal help you deserve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/guides"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-2xl"
                style={{ backgroundColor: "#ebf4ff" }}
              >
                📚
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700" style={{ color: "#1a365d" }}>
                Know Your Rights
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our free legal guides break down complex topics in plain English. Understand
                statute of limitations, what damages you can claim, and what to expect from the
                legal process.
              </p>
              <p className="mt-4 font-semibold text-sm" style={{ color: "#d69e2e" }}>
                Browse Guides &rarr;
              </p>
            </Link>

            <Link
              href="/tools/case-evaluator"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-2xl"
                style={{ backgroundColor: "#ebf4ff" }}
              >
                ✅
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700" style={{ color: "#1a365d" }}>
                Check Your Case
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Answer a few quick questions and get a preliminary assessment of whether you
                have a viable legal claim. Our interactive case evaluator helps you understand
                your situation before you speak with an attorney.
              </p>
              <p className="mt-4 font-semibold text-sm" style={{ color: "#d69e2e" }}>
                Start Evaluation &rarr;
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-2xl"
                style={{ backgroundColor: "#ebf4ff" }}
              >
                👨‍⚖️
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700" style={{ color: "#1a365d" }}>
                Find a Lawyer
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get connected with a qualified attorney in your area who specializes in your
                type of case. Our network includes experienced personal injury lawyers who work
                on contingency &mdash; no fees unless you win.
              </p>
              <p className="mt-4 font-semibold text-sm" style={{ color: "#d69e2e" }}>
                Get Connected &rarr;
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ color: "#1a365d" }}>
            Practice Areas We Cover
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Connect with attorneys experienced in a wide range of injury and civil claims.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {practiceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="border border-gray-200 rounded-lg p-5 hover:border-blue-500 hover:shadow-md transition-all group text-center"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3
                  className="font-bold text-sm mb-2 group-hover:text-blue-700"
                  style={{ color: "#1a365d" }}
                >
                  {area.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#1a365d" }}>
                Featured Legal Guides
              </h2>
              <p className="text-gray-600 mt-1">
                Practical information written for injury victims, not lawyers.
              </p>
            </div>
            <Link
              href="/guides"
              className="hidden md:block font-semibold text-sm hover:underline"
              style={{ color: "#1a365d" }}
            >
              View All Guides &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Link
                      href={`/${article.categorySlug}`}
                      className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded"
                      style={{ backgroundColor: "#ebf4ff", color: "#1a365d" }}
                    >
                      {article.category}
                    </Link>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base leading-tight mb-3" style={{ color: "#1a365d" }}>
                    <Link href={`/guides/${article.slug}`} className="hover:text-blue-700">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/guides/${article.slug}`}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "#d69e2e" }}
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/guides"
              className="font-semibold underline"
              style={{ color: "#1a365d" }}
            >
              View All Legal Guides &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1a365d" }}>
            Why Injury Victims Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: "#d69e2e" }}>
                10,000+
              </div>
              <p className="text-gray-700 font-medium">People helped since 2024</p>
              <p className="text-gray-500 text-sm mt-1">
                Connecting injury victims with qualified attorneys across the country.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: "#d69e2e" }}>
                $0
              </div>
              <p className="text-gray-700 font-medium">Out-of-pocket cost to you</p>
              <p className="text-gray-500 text-sm mt-1">
                Our service is 100% free. Attorneys we connect you with work on contingency.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: "#d69e2e" }}>
                48 hrs
              </div>
              <p className="text-gray-700 font-medium">Average attorney response time</p>
              <p className="text-gray-500 text-sm mt-1">
                Don&apos;t wait &mdash; many legal claims have strict time limits (statutes of limitations).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="text-2xl">⭐</div>
                <div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-3">
                    &ldquo;After my car accident, I didn&apos;t know where to turn. Top Lawyer Resource
                    helped me understand my rights and connected me with an attorney who got me
                    a fair settlement. The whole process was free and easy.&rdquo;
                  </p>
                  <p className="font-semibold text-sm" style={{ color: "#1a365d" }}>
                    Maria T. &mdash; Jacksonville, FL
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="text-2xl">⭐</div>
                <div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-3">
                    &ldquo;I was injured at work and my employer was giving me the runaround. The
                    legal guides here helped me realize I had a strong workers&apos; comp claim.
                    The attorney I found through this site got me everything I was owed.&rdquo;
                  </p>
                  <p className="font-semibold text-sm" style={{ color: "#1a365d" }}>
                    James R. &mdash; Cleveland, OH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="py-8 px-4">
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
