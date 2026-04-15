import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80&fit=crop",
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
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop",
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
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fit=crop",
  },
];

export default function GuidesPage() {
  const featured = guides.filter((g) => g.featured);
  const all = guides;

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Free Legal Information
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Free Legal Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical information written for injury victims, not lawyers. Understand your rights
            before you speak with an attorney.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Featured Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card bg-white rounded-2xl border border-gray-200 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded bg-blue-600 text-white">
                      {guide.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <span>{guide.readTime}</span>
                    <span>&bull;</span>
                    <span>
                      {new Date(guide.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight mb-3 group-hover:text-blue-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{guide.description}</p>
                  <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                    Read Guide &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Guides</h2>
          <div className="space-y-4">
            {all.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="flex items-center gap-5 bg-white rounded-2xl p-5 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {guide.category}
                    </span>
                    <span className="text-gray-400 text-xs">{guide.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 leading-snug group-hover:text-blue-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-1">{guide.description}</p>
                </div>
                <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-800 whitespace-nowrap flex-shrink-0 transition-colors">
                  Read &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="rounded-2xl p-10 text-center text-white" style={{ backgroundColor: "#1e40af" }}>
          <h2 className="text-2xl font-bold mb-3 text-white">
            Have a legal question not answered here?
          </h2>
          <p className="text-blue-200 mb-6">
            Connect with a real attorney for a free, confidential consultation.
          </p>
          <Link href="/tools/case-evaluator" className="btn btn-white">
            Get a Free Case Evaluation
          </Link>
        </div>
      </div>
    </>
  );
}
