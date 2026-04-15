import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LeadCaptureBanner from "../../components/LeadCaptureBanner";
import citiesData from "../../../data/cities.json";
import practiceAreasData from "../../../data/practiceAreas.json";

const VALID_PRACTICE_AREAS = [
  "personal-injury",
  "car-accident",
  "truck-accident",
  "workers-compensation",
];

const HERO_IMAGES: Record<string, string> = {
  "personal-injury":
    "https://images.pexels.com/photos/6520104/pexels-photo-6520104.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "car-accident":
    "https://images.pexels.com/photos/35829957/pexels-photo-35829957.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "truck-accident":
    "https://images.pexels.com/photos/10963705/pexels-photo-10963705.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "workers-compensation":
    "https://images.pexels.com/photos/12911216/pexels-photo-12911216.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const FLORIDA_CONTENT: Record<string, { intro: string; paragraphs: string[] }> = {
  "car-accident": {
    intro: "Florida's unique no-fault insurance system and 2023 tort reform make car accident claims more complex than in most other states.",
    paragraphs: [
      `Florida's unique no-fault insurance system makes car accident claims more complex than in most other states. Under Florida Statute § 627.736, all registered drivers must carry at least $10,000 in Personal Injury Protection (PIP) coverage, which pays 80% of your medical bills and 60% of lost wages regardless of fault — but only up to that $10,000 limit. For serious injuries, you'll need to pursue the at-fault driver directly.`,
      `To "step outside" no-fault in Florida, your injuries must meet the serious injury threshold defined in § 627.737: permanent injury within a reasonable degree of medical probability, significant and permanent scarring or disfigurement, or death. If you meet this threshold, you can sue the at-fault driver for pain and suffering, emotional distress, and full compensation beyond what PIP covers.`,
      `Florida's comparative fault system (§ 768.81) also plays a critical role. Under the 2023 reform, Florida moved from pure comparative fault to a modified comparative fault system — if you are found more than 50% at fault for the accident, you cannot recover any damages. This makes it essential to work with an attorney who can accurately document the other driver's negligence.`,
    ],
  },
  "personal-injury": {
    intro: "Florida's 2023 tort reform (HB 837) significantly changed the personal injury landscape — reducing the statute of limitations and shifting to a modified comparative fault system.",
    paragraphs: [
      `Florida's personal injury landscape changed significantly in 2023 when Governor DeSantis signed HB 837 into law. The legislation reformed Florida's tort system in several ways that directly affect injury victims. Most critically, the statute of limitations for negligence-based personal injury claims was cut from 4 years to 2 years — meaning you have less time than ever to file your claim.`,
      `Florida's modified comparative fault rule (§ 768.81) now bars recovery entirely if you are more than 50% at fault for your own injury. This is a significant departure from the old "pure comparative fault" rule and makes early documentation and evidence preservation more important than ever. Insurance companies will use this rule aggressively to reduce or eliminate your recovery.`,
      `Florida also limits the introduction of certain medical expenses in personal injury cases. Under the "medical damages" provisions of HB 837, only the amount actually paid or owed for medical treatment — rather than the billed amount — may be introduced as evidence in some cases. An experienced Florida personal injury attorney understands these nuances and can structure your case for maximum recovery under the current law.`,
    ],
  },
  "truck-accident": {
    intro: "Florida's major interstates are among the busiest commercial freight corridors in the southeastern US — and the state ranks in the top five for fatal large truck accidents.",
    paragraphs: [
      `Florida's major interstates — I-95, I-75, I-4, and the Florida Turnpike — are among the busiest commercial freight corridors in the southeastern United States. The state's ports in Miami, Jacksonville, Tampa, and Port Everglades generate enormous volumes of truck traffic year-round. With this volume comes significant risk: Florida consistently ranks among the top five states for fatal large truck accidents.`,
      `Commercial trucking in Florida is governed by both state law (Florida Statutes Chapter 316) and federal FMCSA regulations. Florida requires commercial trucks to pass regular safety inspections, and the Florida Department of Transportation operates weigh stations and inspection sites throughout the state. When a truck driver or company violates these regulations, they can be held liable for any resulting injuries.`,
      `One of the most important steps after a Florida truck accident is to preserve evidence before it disappears. Federal regulations require trucking companies to retain certain records — including driver logs, inspection reports, and black box data — for specific periods. However, these companies often have legal teams working to minimize their liability immediately after an accident. An attorney can send a legal preservation letter and, if necessary, seek a court order to prevent spoliation of evidence.`,
    ],
  },
  "workers-compensation": {
    intro: "Florida's workers' comp system is governed by Chapter 440 and is known for being employer and insurer-friendly — understanding your rights is essential.",
    paragraphs: [
      `Florida's workers' compensation system is governed by Chapter 440 of the Florida Statutes. Unlike many states, Florida's system is known for being particularly employer and insurer-friendly, with strict procedural requirements and benefit limitations that can catch injured workers off guard. Understanding your rights under Florida law is essential to getting everything you're owed.`,
      `One of the most significant Florida-specific rules is the 30-day notice requirement: you must report your work injury to your employer within 30 days or you may lose your right to benefits. Once reported, your employer's insurer has the right to control your medical care — meaning you generally must treat with an authorized physician rather than your own doctor. Seeking unauthorized treatment can jeopardize your claim.`,
      `Florida workers' comp also has strict impairment rating schedules and maximum medical improvement (MMI) determinations that significantly affect your permanent benefits. Once your treating physician determines you've reached MMI, your temporary disability benefits stop and you receive a permanent impairment rating (PIR) using the AMA Guides. The resulting permanent impairment benefits are often much lower than what injured workers expect.`,
    ],
  },
};

interface Props {
  params: Promise<{ practiceArea: string }>;
}

export async function generateStaticParams() {
  return VALID_PRACTICE_AREAS.map((practiceArea) => ({ practiceArea }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { practiceArea } = await params;
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!area) return {};

  const title = `${area.title} Lawyers in Florida — Free Case Evaluation`;
  const description = `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Florida's statute of limitations is 2 years — act now. Free consultation, no upfront fees.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://toplawyerresource.com/${practiceArea}/fl`,
    },
    alternates: {
      canonical: `https://toplawyerresource.com/${practiceArea}/fl`,
    },
  };
}

const floridaCities = citiesData.filter((c) => c.stateCode === "fl");

export default async function FloridaHubPage({ params }: Props) {
  const { practiceArea } = await params;

  if (!VALID_PRACTICE_AREAS.includes(practiceArea)) notFound();

  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!area) notFound();

  const heroImage = HERO_IMAGES[practiceArea] || HERO_IMAGES["personal-injury"];
  const floridaContent = FLORIDA_CONTENT[practiceArea];

  const legalServiceLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} Attorneys in Florida — Top Lawyer Resource`,
    description: `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Free consultations, no upfront fees.`,
    url: `https://toplawyerresource.com/${practiceArea}/fl`,
    serviceType: area.title,
    areaServed: {
      "@type": "State",
      name: "Florida",
      sameAs: "https://en.wikipedia.org/wiki/Florida",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://toplawyerresource.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: area.title,
        item: `https://toplawyerresource.com/${practiceArea}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Florida",
        item: `https://toplawyerresource.com/${practiceArea}/fl`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[380px] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={`${area.title} attorney in Florida — free case evaluation`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-900/30" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${practiceArea}`} className="hover:text-white transition-colors">
              {area.title}
            </Link>
            <span>/</span>
            <span className="text-gray-200">Florida</span>
          </nav>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Florida &bull; {area.title}
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {area.title} Lawyers in Florida
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            {floridaContent?.intro ?? `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Free consultation, no upfront fees.`}
          </p>
          <Link href="/tools/case-evaluator" className="btn btn-primary">
            Get My Free Case Evaluation
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">

            {/* Florida-Specific Legal Content */}
            {floridaContent && (
              <section className="mb-14">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Florida {area.title} Law: What You Need to Know
                </h2>
                <div className="space-y-4">
                  {floridaContent.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <p className="text-sm text-blue-800">
                    <strong>Helpful Florida Resources:</strong>{" "}
                    <a
                      href="https://www.floridabar.org/public/consumer/lawyerreferral/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-900"
                    >
                      Florida Bar Lawyer Referral Service
                    </a>{" "}
                    &bull;{" "}
                    <a
                      href="http://www.leg.state.fl.us/statutes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-900"
                    >
                      Florida Statutes Online
                    </a>{" "}
                    &bull;{" "}
                    <a
                      href="https://www.myfloridacfo.com/division/wc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-900"
                    >
                      FL Division of Workers&apos; Comp
                    </a>
                  </p>
                </div>
              </section>
            )}

            {/* Florida Cities Grid */}
            <section className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find a {area.shortTitle} Attorney by City
              </h2>
              <p className="text-gray-500 mb-6">
                Our network of experienced {area.title.toLowerCase()} attorneys serves the following Florida cities. Select your city for local attorney information, courthouse details, and city-specific legal resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {floridaCities.map((city) => (
                  <Link
                    key={city.citySlug}
                    href={`/${practiceArea}/fl/${city.citySlug}`}
                    className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-150 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <span className="text-blue-600 text-lg">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {city.city}, {city.state}
                      </div>
                      <div className="text-xs text-gray-400">{city.county} &bull; Pop. {city.population}</div>
                    </div>
                    <span className="ml-auto text-gray-300 group-hover:text-blue-400 transition-colors">&rarr;</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Statute of Limitations callout */}
            <section className="mb-14 bg-amber-50 border border-amber-200 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>⏱</span> Florida Statute of Limitations — Act Quickly
              </h2>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>2 years</strong>&nbsp;to file a personal injury lawsuit (reduced from 4 years under 2023 tort reform)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>4 years</strong>&nbsp;to file a property damage claim
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>30 days</strong>&nbsp;to report a workplace injury to your employer (workers&apos; comp)
                </li>
              </ul>
              <p className="text-gray-500 text-xs">
                Missing the statute of limitations deadline permanently bars your right to compensation. Consult a Florida attorney as soon as possible.
              </p>
            </section>

            <LeadCaptureBanner
              title={`Injured in Florida? Get a Free ${area.shortTitle} Case Evaluation`}
              subtitle="No obligation. No upfront fees. Confidential consultation."
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl p-7 text-white" style={{ backgroundColor: "#1e40af" }}>
              <h3 className="font-bold text-xl mb-2 text-white">Free Case Evaluation</h3>
              <p className="text-blue-200 text-sm mb-5">
                Florida attorneys available. No cost, no obligation.
              </p>
              <Link href="/tools/case-evaluator" className="btn btn-white w-full justify-center">
                Check My Case
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Florida Cities</h3>
              <div className="space-y-1.5">
                {floridaCities.map((city) => (
                  <Link
                    key={city.citySlug}
                    href={`/${practiceArea}/fl/${city.citySlug}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                  >
                    <span className="text-sky-500 text-xs">📍</span>
                    {city.city}, {city.state}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Other Florida Practice Areas</h3>
              <div className="space-y-2">
                {VALID_PRACTICE_AREAS.filter((pa) => pa !== practiceArea).map((pa) => {
                  const paData = practiceAreasData.find((a) => a.slug === pa);
                  return (
                    <Link
                      key={pa}
                      href={`/${pa}/fl`}
                      className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                    >
                      {paData?.title} in Florida &rarr;
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Florida Legal Resources</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="https://www.floridabar.org/public/consumer/lawyerreferral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  Florida Bar Lawyer Referral
                </a>
                <a
                  href="https://www.flhsmv.gov/safety-programs/motorist-safety-awareness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  FL Highway Safety &amp; Motor Vehicles
                </a>
                <a
                  href="https://www.myfloridacfo.com/division/wc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  FL Division of Workers&apos; Comp
                </a>
                <a
                  href="http://www.leg.state.fl.us/statutes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  Florida Statutes Online
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Free Legal Tools</h3>
              <div className="space-y-2">
                <Link
                  href="/tools/case-evaluator"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  ✅ Case Evaluator &rarr;
                </Link>
                <Link
                  href="/tools/settlement-calculator"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  🧮 Settlement Calculator &rarr;
                </Link>
                <Link
                  href="/guides"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  📚 Legal Guides &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
