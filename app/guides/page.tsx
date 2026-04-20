import type { Metadata } from "next";
import Link from "next/link";
import GuidesClient, { type GuideEntry } from "./GuidesClient";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const metadata: Metadata = {
  title: "Free Legal Guides \u2014 Injury & Accident Law",
  description:
    "Free legal guides on personal injury, car accidents, workers\u2019 comp, and more. Written in plain English for injury victims, not lawyers.",
  openGraph: {
    title: "Free Legal Guides \u2014 Injury & Accident Law",
    description:
      "Practical legal information written for injury victims, not lawyers. Browse guides on car accidents, personal injury, workers' comp, and more.",
    url: "https://toplawyerresource.com/guides",
  },
  alternates: {
    canonical: "https://toplawyerresource.com/guides",
  },
};

/* ─── Guide data ─── */
const guides: GuideEntry[] = [
  /* ── National guides ── */
  {
    slug: "what-to-do-after-car-accident",
    title: "What to Do After a Car Accident: A Complete Step-by-Step Guide",
    description:
      "Step-by-step guide covering safety, calling 911, documenting the scene, exchanging info, seeking medical attention, and when to contact an attorney.",
    lastUpdated: "2026-04-16",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "10 min read",
    featured: true,
    image: "https://images.pexels.com/photos/35784044/pexels-photo-35784044.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Car accident scene with emergency responders documenting the area",
    scope: "national",
  },
  {
    slug: "how-to-choose-personal-injury-lawyer",
    title: "How to Choose a Personal Injury Lawyer: What to Look For",
    description:
      "What to look for in a PI attorney — experience, trial record, communication, fees explained, red flags, and questions to ask at your free consultation.",
    lastUpdated: "2026-04-16",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "10 min read",
    featured: false,
    image: "https://images.pexels.com/photos/10854809/pexels-photo-10854809.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Attorney consulting with personal injury client in professional office",
    scope: "national",
  },
  {
    slug: "understanding-contingency-fees",
    title: "Understanding Contingency Fees: How Personal Injury Lawyers Get Paid",
    description:
      "How contingency fees work, typical percentages (33% pre-litigation, 40% trial), expense deductions, real math examples, and what happens if you lose.",
    lastUpdated: "2026-04-16",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "9 min read",
    featured: false,
    image: "https://images.pexels.com/photos/29776517/pexels-photo-29776517.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Calculator and legal fee agreement on attorney desk",
    scope: "national",
  },
  {
    slug: "what-is-negligence-personal-injury",
    title: "What Is Negligence? How It Determines Your Personal Injury Case",
    description:
      "The four elements of negligence — duty, breach, causation, damages — with real-world examples, plus comparative vs. contributory negligence explained.",
    lastUpdated: "2026-04-16",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "11 min read",
    featured: false,
    image: "https://images.pexels.com/photos/8733397/pexels-photo-8733397.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Scales of justice representing negligence law and duty of care",
    scope: "national",
  },
  {
    slug: "types-of-compensation-personal-injury",
    title: "Types of Compensation in a Personal Injury Case: What You Can Recover",
    description:
      "Economic damages, non-economic damages, and punitive damages explained — what each covers, how they're calculated, and what you need to prove.",
    lastUpdated: "2026-04-16",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "11 min read",
    featured: false,
    image: "https://images.pexels.com/photos/6520212/pexels-photo-6520212.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Person reviewing personal injury compensation and settlement documents",
    scope: "national",
  },
  {
    slug: "how-long-personal-injury-case-takes",
    title: "How Long Does a Personal Injury Case Take? Realistic Timelines",
    description:
      "Realistic timelines for each phase — treatment, negotiation, litigation, trial — plus factors that speed up or slow down your case.",
    lastUpdated: "2026-04-16",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "10 min read",
    featured: false,
    image: "https://images.pexels.com/photos/7785040/pexels-photo-7785040.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Calendar and legal documents showing personal injury case timeline",
    scope: "national",
  },
  /* ── Florida guides ── */
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
    scope: "florida",
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
    featured: false,
    image: px(6520213),
    imageAlt: "Florida attorney reviewing car accident settlement amounts and insurance policy limits",
    scope: "florida",
  },
  {
    slug: "medical-bills-after-florida-car-accident",
    title: "Dealing with Medical Bills After a Florida Car Accident",
    description:
      "Medical bills after a Florida car accident can be overwhelming. This guide explains how PIP, health insurance, letters of protection, and medical liens work.",
    lastUpdated: "2026-04-15",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "9 min read",
    featured: false,
    image: px(6129676),
    imageAlt: "Person reviewing medical bills and insurance paperwork after a Florida car accident",
    scope: "florida",
  },
  {
    slug: "florida-no-fault-minor-accidents",
    title: "How Florida's No-Fault Insurance Works in Minor Car Accidents",
    description:
      "Even in minor accidents, Florida's PIP rules set strict deadlines and coverage limits. Learn what your no-fault insurance covers and what the 14-day rule means.",
    lastUpdated: "2026-04-15",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "8 min read",
    featured: false,
    image: "https://images.pexels.com/photos/7358769/pexels-photo-7358769.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Vehicles on a Florida road — minor car accident insurance and PIP coverage guide",
    scope: "florida",
  },
  {
    slug: "florida-no-fault-rideshare-accidents",
    title: "How Florida's No-Fault Insurance Applies to Rideshare Accidents",
    description:
      "Uber and Lyft accidents in Florida involve complex interactions between PIP, personal auto insurance, and rideshare commercial policies.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    featured: false,
    image: px(35829957),
    imageAlt: "Rideshare driver in Florida with Uber app active before accident",
    scope: "florida",
  },
  {
    slug: "workers-comp-claim-denied-florida",
    title: "Workers' Comp Claim Denied in Florida? Here's What to Do Next",
    description:
      "Florida workers' comp claims are frequently denied. Learn the common reasons for denial, the Petition for Benefits process, and how an attorney can fight for your benefits.",
    lastUpdated: "2026-04-15",
    category: "Workers' Comp",
    categorySlug: "workers-compensation",
    readTime: "9 min read",
    featured: false,
    image: px(7876155),
    imageAlt: "Injured worker reviewing denied Florida workers compensation claim with attorney",
    scope: "florida",
  },
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    description:
      "If you've been discriminated against at work, you may need a Right to Sue letter before you can take your employer to court.",
    lastUpdated: "2026-04-15",
    category: "Workers' Rights",
    categorySlug: "workers-compensation",
    readTime: "6 min read",
    featured: false,
    image: px(7876314),
    imageAlt: "Employment attorney reviewing EEOC right to sue letter and discrimination claim documents",
    scope: "national",
  },
  /* ── Jacksonville guides ── */
  {
    slug: "uber-lyft-accident-jacksonville",
    title: "Injured in an Uber or Lyft Accident in Jacksonville, FL? Know Your Rights",
    description:
      "Rideshare accidents in Jacksonville involve complex insurance coverage questions. Learn who pays, how Uber and Lyft's $1M policy works, and what steps to take.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "9 min read",
    featured: true,
    image: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Rideshare driver opening car door for passenger in Jacksonville Florida",
    scope: "jacksonville",
  },
  {
    slug: "jacksonville-dangerous-intersections",
    title: "Jacksonville's Most Dangerous Intersections: 2025 Data & What To Do After a Crash",
    description:
      "New crash data reveals the top 10 most dangerous intersections in Jacksonville. Find out where accidents happen most — and what to do if you're involved.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    featured: true,
    image: px(15481199),
    imageAlt: "Car accident at the most dangerous intersection in Jacksonville Florida",
    scope: "jacksonville",
  },
  {
    slug: "hit-and-run-jacksonville",
    title: "Injured in a Hit-and-Run in Jacksonville? Your Rights and Next Steps",
    description:
      "Hit-and-run accidents in Jacksonville are more common than most people realize. Learn what Florida law requires, how UM coverage protects you, and how to maximize recovery.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "8 min read",
    featured: false,
    image: px(4212617),
    imageAlt: "Hit-and-run accident scene with police investigation in Jacksonville",
    scope: "jacksonville",
  },
  {
    slug: "jacksonville-crash-reports",
    title: "Jacksonville Crash Reports: How to Get Yours Step by Step",
    description:
      "Your crash report is critical evidence in any Florida car accident claim. Learn how to get your report from JSO or FLHSMV, what it contains, and what to do if it has errors.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "7 min read",
    featured: false,
    image: px(7841466),
    imageAlt: "Police officer filling out crash report at accident scene in Jacksonville",
    scope: "jacksonville",
  },
  {
    slug: "average-car-accident-settlement-jacksonville",
    title: "Average Car Accident Settlement in Jacksonville, FL: What Duval County Cases Are Worth",
    description:
      "Jacksonville car accident settlements reflect local jury trends, military community demographics, and Duval County court dynamics.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "9 min read",
    featured: false,
    image: px(9874011),
    imageAlt: "Attorney reviewing car accident settlement documents in Jacksonville Duval County",
    scope: "jacksonville",
  },
  {
    slug: "tourist-injuries-jacksonville",
    title: "Injured as a Tourist in Jacksonville? What Non-Residents Need to Know",
    description:
      "If you were injured visiting Jacksonville as a tourist or out-of-state visitor, Florida law still applies — but there are important nuances about PIP, jurisdiction, and filing.",
    lastUpdated: "2026-04-15",
    category: "Personal Injury",
    categorySlug: "personal-injury",
    readTime: "8 min read",
    featured: false,
    image: px(31759850),
    imageAlt: "Tourist couple visiting Jacksonville Florida beach area",
    scope: "jacksonville",
  },
  {
    slug: "jacksonville-dangerous-roads",
    title: "Jacksonville's Most Dangerous Roads for Motorists: What the Data Shows",
    description:
      "From Beach Boulevard to I-95, these Jacksonville road corridors account for the highest crash rates in Duval County.",
    lastUpdated: "2026-04-15",
    category: "Car Accidents",
    categorySlug: "car-accident",
    readTime: "9 min read",
    featured: false,
    image: px(14209231),
    imageAlt: "Busy highway road corridor in Jacksonville Florida with heavy traffic and crash risk",
    scope: "jacksonville",
  },
];

/* ─── Featured guide selection (4 specific articles, order matters) ─── */
const FEATURED_SLUGS = [
  "uber-lyft-accident-jacksonville",
  "serious-injury-florida-no-fault",
  "jacksonville-dangerous-intersections",
  "what-to-do-after-car-accident",
];

const collectionPageLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Legal Guides — Top Lawyer Resource",
  description:
    "Browse free legal guides on personal injury, car accidents, workers' compensation, and more. Written in plain English for injury victims.",
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
            Practical legal information for injury victims &mdash; written by
            legal experts, not lawyers trying to sell you.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <GuidesClient guides={guides} featuredSlugs={FEATURED_SLUGS} />

        {/* Bottom CTA */}
        <div
          className="rounded-2xl p-10 text-center text-white"
          style={{ backgroundColor: "#1e40af" }}
        >
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
