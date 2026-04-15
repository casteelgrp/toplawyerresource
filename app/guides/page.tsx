import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

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
  alternates: {
    canonical: "https://toplawyerresource.com/guides",
  },
};

const guides = [
  {
    slug: "hit-and-run-jacksonville",
    title: "Injured in a Hit-and-Run in Jacksonville? Your Rights and Next Steps",
    description:
      "Hit-and-run accidents in Jacksonville are more common than most people realize. Learn what Florida law requires, how UM coverage protects you, and how an attorney can maximize your recovery.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    featured: false,
    image: px(4212617),
    imageAlt: "Hit-and-run accident scene with police investigation in Jacksonville",
  },
  {
    slug: "jacksonville-crash-reports",
    title: "Jacksonville Crash Reports: How to Get Yours Step by Step",
    description:
      "Your crash report is critical evidence in any Florida car accident claim. Learn how to get your report from JSO or FLHSMV, what it contains, and what to do if it contains errors.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "7 min read",
    featured: false,
    image: px(7841466),
    imageAlt: "Police officer filling out crash report at accident scene in Jacksonville",
  },
  {
    slug: "average-car-accident-settlement-jacksonville",
    title: "Average Car Accident Settlement in Jacksonville, FL: What Duval County Cases Are Worth",
    description:
      "Jacksonville car accident settlements reflect local jury trends, military community demographics, and Duval County court dynamics. Here's what injury victims can realistically expect.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "9 min read",
    featured: false,
    image: px(9874011),
    imageAlt: "Attorney reviewing car accident settlement documents in Jacksonville Duval County",
  },
  {
    slug: "tourist-injuries-jacksonville",
    title: "Injured as a Tourist in Jacksonville? What Non-Residents Need to Know",
    description:
      "If you were injured visiting Jacksonville as a tourist or out-of-state visitor, Florida law still applies — but there are important nuances about PIP, jurisdiction, and filing a claim from out of state.",
    lastUpdated: "2026-04-15",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "8 min read",
    featured: false,
    image: px(31759850),
    imageAlt: "Tourist couple visiting Jacksonville Florida beach area",
  },
  {
    slug: "medical-bills-after-florida-car-accident",
    title: "Dealing with Medical Bills After a Florida Car Accident",
    description:
      "Medical bills after a Florida car accident can be overwhelming. This guide explains how PIP, health insurance, letters of protection, and medical liens work — and how your settlement handles unpaid bills.",
    lastUpdated: "2026-04-15",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "9 min read",
    featured: false,
    image: px(6129676),
    imageAlt: "Person reviewing medical bills and insurance paperwork after a Florida car accident",
  },
  {
    slug: "florida-no-fault-minor-accidents",
    title: "How Florida's No-Fault Insurance Works in Minor Car Accidents",
    description:
      "Even in minor accidents, Florida's PIP rules set strict deadlines and coverage limits. Learn what your no-fault insurance covers, what the 14-day rule means, and when a 'minor' crash can still lead to a claim.",
    lastUpdated: "2026-04-15",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "8 min read",
    featured: false,
    image: px(11488877),
    imageAlt: "Minor fender bender car accident on a Florida road involving no-fault PIP insurance",
  },
  {
    slug: "florida-no-fault-rideshare-accidents",
    title: "How Florida's No-Fault Insurance Applies to Rideshare Accidents",
    description:
      "Uber and Lyft accidents in Florida involve complex interactions between PIP, personal auto insurance, and rideshare commercial policies. This guide explains exactly whose coverage applies and when.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    featured: false,
    image: px(35829957),
    imageAlt: "Rideshare driver in Florida with Uber app active before accident",
  },
  {
    slug: "serious-injury-florida-no-fault",
    title: "What Counts as a 'Serious Injury' Under Florida's No-Fault Insurance Laws?",
    description:
      "Florida's no-fault system limits your right to sue after a car accident — unless your injuries meet the 'serious injury threshold.' Learn exactly what qualifies and how to prove it.",
    lastUpdated: "2026-04-15",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "10 min read",
    featured: true,
    image: px(30348333),
    imageAlt: "Doctor examining seriously injured patient meeting Florida no-fault serious injury threshold",
  },
  {
    slug: "jacksonville-dangerous-roads",
    title: "Jacksonville's Most Dangerous Roads for Motorists: What the Data Shows",
    description:
      "From Beach Boulevard to I-95, these Jacksonville road corridors account for the highest crash rates in Duval County. Learn which roads are most dangerous, why, and what to do if you're injured.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "9 min read",
    featured: false,
    image: px(14209231),
    imageAlt: "Busy highway road corridor in Jacksonville Florida with heavy traffic and crash risk",
  },
  {
    slug: "workers-comp-claim-denied-florida",
    title: "Workers' Comp Claim Denied in Florida? Here's What to Do Next",
    description:
      "Florida workers' comp claims are frequently denied. Learn the common reasons for denial, how to appeal through the Petition for Benefits process, and what an attorney can do to fight for your benefits.",
    lastUpdated: "2026-04-15",
    category: "Workers' Comp",
    categorySlug: "workers-compensation",
    readTime: "9 min read",
    featured: false,
    image: px(7876155),
    imageAlt: "Injured worker reviewing denied Florida workers compensation claim with attorney",
  },
  {
    slug: "uber-lyft-accident-jacksonville",
    title: "Injured in an Uber or Lyft Accident in Jacksonville, FL? Know Your Rights",
    description:
      "Rideshare accidents in Jacksonville involve complex insurance coverage questions. Learn who pays, how Uber and Lyft's $1M policy works, and what steps to take to protect your claim.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "9 min read",
    featured: true,
    image: px(8954274),
    imageAlt: "Uber rideshare vehicle in Jacksonville Florida involved in accident claim",
  },
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida: What to Realistically Expect",
    description:
      "Florida car accident settlements vary widely based on injury severity, liability, and insurance limits. We break down real settlement data so you know what to expect.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "10 min read",
    featured: true,
    image: px(6520213),
    imageAlt: "Florida attorney reviewing car accident settlement amounts and insurance policy limits",
  },
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    description:
      "If you've been discriminated against at work, you may need a Right to Sue letter before you can take your employer to court. Here's everything you need to know about this critical document.",
    lastUpdated: "2026-04-15",
    category: "Workers' Rights",
    categorySlug: "workers-compensation",
    readTime: "6 min read",
    featured: false,
    image: px(7876314),
    imageAlt: "Employment attorney reviewing EEOC right to sue letter and discrimination claim documents",
  },
  {
    slug: "jacksonville-dangerous-intersections",
    title: "Jacksonville's Most Dangerous Intersections: 2025 Data & What To Do After a Crash",
    description:
      "New crash data reveals the top 10 most dangerous intersections in Jacksonville. Find out where accidents happen most — and what steps to take if you're involved in a crash.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    featured: true,
    image: px(15481199),
    imageAlt: "Car accident at the most dangerous intersection in Jacksonville Florida",
  },
];

const featured = guides.filter((g) => g.featured);

const collectionPageLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Legal Guides — Top Lawyer Resource",
  description:
    "Browse free legal guides on personal injury, car accidents, workers' compensation, and more. Written in plain English for injury victims in Florida.",
  url: "https://toplawyerresource.com/guides",
  publisher: {
    "@type": "Organization",
    name: "Top Lawyer Resource",
    url: "https://toplawyerresource.com",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: guides.map((guide, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://toplawyerresource.com/guides/${guide.slug}`,
      name: guide.title,
    })),
  },
};

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageLd) }}
      />

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
                    alt={guide.imageAlt}
                    fill
                    loading="lazy"
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
                      Last Updated:{" "}
                      {new Date(guide.lastUpdated).toLocaleDateString("en-US", {
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
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="flex items-center gap-5 bg-white rounded-2xl p-5 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={guide.image}
                    alt={guide.imageAlt}
                    fill
                    loading="lazy"
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
