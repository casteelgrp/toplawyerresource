import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Legal Guides — Personal Injury & Accident Law Explained",
  description:
    "Browse our library of free legal guides covering personal injury, car accidents, workers' compensation, and more. Written in plain English for everyday people.",
  openGraph: {
    title: "Free Legal Guides | Top Lawyer Resource",
    description:
      "Practical legal information written for injury victims, not lawyers. Browse guides on car accidents, personal injury, workers' comp, and more.",
    url: "https://toplawyerresource.com/guides",
  },
};

const guides = [
  {
    slug: "jacksonville-dangerous-intersections",
    title: "Jacksonville's Most Dangerous Intersections: 2025 Data & What To Do After a Crash",
    description:
      "New crash data reveals the top 10 most dangerous intersections in Jacksonville. Find out where accidents happen most — and what steps to take if you're involved in a crash.",
    date: "2025-01-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    description:
      "If you've been discriminated against at work, you may need a Right to Sue letter before you can take your employer to court. Here's everything you need to know about this critical document.",
    date: "2025-01-20",
    category: "Workers' Rights",
    categorySlug: "workers-compensation",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida: What to Realistically Expect",
    description:
      "Florida car accident settlements vary widely based on injury severity, liability, and insurance limits. We break down real settlement data so you know what to expect.",
    date: "2025-02-01",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "10 min read",
    featured: true,
  },
];

export default function GuidesPage() {
  const featured = guides.filter((g) => g.featured);
  const all = guides;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#1a365d" }}>
          Free Legal Guides
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Practical information written for injury victims, not lawyers. Understand your rights
          before you speak with an attorney.
        </p>
      </div>

      {/* Featured Guides */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
          Featured Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Link
                    href={`/${guide.categorySlug}`}
                    className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded"
                    style={{ backgroundColor: "#ebf4ff", color: "#1a365d" }}
                  >
                    {guide.category}
                  </Link>
                  <span className="text-gray-400 text-xs">{guide.readTime}</span>
                </div>
                <h3 className="font-bold text-lg leading-tight mb-3" style={{ color: "#1a365d" }}>
                  <Link href={`/guides/${guide.slug}`} className="hover:text-blue-700">
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">
                    {new Date(guide.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: "#d69e2e" }}
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Guides */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
          All Guides
        </h2>
        <div className="space-y-4">
          {all.map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col sm:flex-row items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded"
                    style={{ backgroundColor: "#ebf4ff", color: "#1a365d" }}
                  >
                    {guide.category}
                  </span>
                  <span className="text-gray-400 text-xs">{guide.readTime}</span>
                </div>
                <h3 className="font-bold mb-1" style={{ color: "#1a365d" }}>
                  <Link href={`/guides/${guide.slug}`} className="hover:text-blue-700">
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">{guide.description}</p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-sm font-semibold whitespace-nowrap hover:underline"
                  style={{ color: "#d69e2e" }}
                >
                  Read &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div
        className="mt-14 rounded-xl p-8 text-center text-white"
        style={{ backgroundColor: "#1a365d" }}
      >
        <h2 className="text-2xl font-bold mb-3">
          Have a legal question not answered here?
        </h2>
        <p className="text-blue-200 mb-6">
          Connect with a real attorney for a free, confidential consultation.
        </p>
        <Link
          href="/tools/case-evaluator"
          style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
        >
          Get a Free Case Evaluation
        </Link>
      </div>
    </div>
  );
}
