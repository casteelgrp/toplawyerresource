import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LeadCaptureBanner from "../../../components/LeadCaptureBanner";
import RelatedGuides from "../../../components/RelatedGuides";
import citiesData from "../../../../data/cities.json";
import practiceAreasData from "../../../../data/practiceAreas.json";

const VALID_PRACTICE_AREAS = [
  "personal-injury",
  "car-accident",
  "truck-accident",
  "workers-compensation",
];

// Practice-area-specific city images from Pexels
const CITY_IMAGES: Record<string, string> = {
  "personal-injury-jacksonville":
    "https://images.pexels.com/photos/30912707/pexels-photo-30912707.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "personal-injury-miami":
    "https://images.pexels.com/photos/30147234/pexels-photo-30147234.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "car-accident-jacksonville":
    "https://images.pexels.com/photos/12533698/pexels-photo-12533698.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "car-accident-miami":
    "https://images.pexels.com/photos/6520074/pexels-photo-6520074.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "truck-accident-jacksonville":
    "https://images.pexels.com/photos/16706765/pexels-photo-16706765.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "truck-accident-miami":
    "https://images.pexels.com/photos/27099095/pexels-photo-27099095.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "workers-compensation-jacksonville":
    "https://images.pexels.com/photos/13538710/pexels-photo-13538710.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "workers-compensation-miami":
    "https://images.pexels.com/photos/4506206/pexels-photo-4506206.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/6519905/pexels-photo-6519905.jpeg?auto=compress&cs=tinysrgb&w=1600";

interface Props {
  params: Promise<{ practiceArea: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { practiceArea: string; city: string }[] = [];
  for (const practiceArea of VALID_PRACTICE_AREAS) {
    for (const city of citiesData) {
      params.push({ practiceArea, city: city.citySlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { practiceArea, city } = await params;
  const cityData = citiesData.find((c) => c.citySlug === city);
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!cityData || !area) return {};

  const title = `${area.title} Lawyer in ${cityData.city}, ${cityData.state} — Free Consultation`;
  const description = `Injured in a ${area.title.toLowerCase()} in ${cityData.city}, ${cityData.state}? Florida's statute of limitations is only 2 years. Get a free case evaluation from an experienced ${cityData.city} attorney. No fees unless you win.`;
  const imageKey = `${practiceArea}-${city}`;
  const ogImage = CITY_IMAGES[imageKey] || DEFAULT_IMAGE;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
      images: [{ url: ogImage, width: 1600, alt: `${area.title} attorney in ${cityData.city}, FL` }],
    },
    alternates: {
      canonical: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
    },
  };
}

function getLocalContent(practiceArea: string, city: (typeof citiesData)[0]) {
  const practiceTitle =
    practiceAreasData.find((a) => a.slug === practiceArea)?.title || practiceArea;

  const contents: Record<string, string[]> = {
    "car-accident": [
      `Car accidents in ${city.city}, ${city.state} are a serious and unfortunately common problem. With busy corridors and high-traffic intersections throughout ${city.county}, collisions happen every day. If you were involved in a collision caused by another driver's negligence, you have the right to seek compensation for your medical bills, lost wages, and pain and suffering.`,
      `Florida is a no-fault insurance state, which means your own Personal Injury Protection (PIP) coverage pays your initial medical expenses up to $10,000 — regardless of who caused the accident. However, for serious injuries, you can step outside the no-fault system and pursue the at-fault driver directly for full compensation including pain and suffering.`,
      `Under Florida's 2023 tort reform, the statute of limitations for car accident personal injury claims is 2 years from the date of the accident. Don't wait — evidence fades, witnesses become unavailable, and insurance companies grow more aggressive over time. An experienced ${city.city} car accident attorney can help you navigate the insurance claims process and fight for the full compensation you deserve.`,
    ],
    "truck-accident": [
      `Commercial truck accidents in ${city.city}, ${city.state} often result in catastrophic injuries due to the enormous size and weight differential between trucks and passenger vehicles. Major freight corridors in ${city.county} see heavy commercial truck traffic daily, increasing the risk of serious collisions.`,
      `If you were injured by a commercial truck, you may have claims against multiple defendants: the truck driver, the trucking company, the cargo loader, and/or the truck manufacturer. Federal Motor Carrier Safety Administration (FMCSA) regulations govern commercial trucking operations, and violations of these rules — such as hours-of-service violations or inadequate vehicle maintenance — can be powerful evidence of negligence.`,
      `Time is critical in truck accident cases. Trucking companies often dispatch investigators immediately after serious accidents. Electronic logging devices (ELDs) and black box data can be overwritten or lost. Florida's statute of limitations gives you 2 years from the date of accident, but the sooner you consult an attorney, the better your chances of preserving critical evidence.`,
    ],
    "personal-injury": [
      `If you were injured due to someone else's negligence in ${city.city}, ${city.state}, Florida law gives you the right to seek compensation for medical expenses, lost income, and pain and suffering. Personal injury claims in Florida cover a wide range of incidents — from slip and falls on commercial property to dog bites to defective product injuries.`,
      `Florida's 2023 tort reform (HB 837) significantly changed the personal injury landscape. The statute of limitations was reduced from 4 years to 2 years for negligence-based claims. Additionally, Florida now uses a modified comparative fault system — if you are found more than 50% at fault for your injury, you are barred from recovering any damages.`,
      `${city.state}'s statute of limitations for personal injury claims is ${city.statutes.personalInjury} years from the date of injury. Missing this deadline permanently bars your right to compensation. Given the strict deadlines and complex rules under Florida's reformed tort system, consulting an experienced ${city.city} personal injury attorney as soon as possible is essential.`,
    ],
    "workers-compensation": [
      `Workers injured in ${city.city}, ${city.state} are entitled to workers' compensation benefits regardless of fault under Florida Statutes Chapter 440. Florida's workers' comp system covers medical treatment through an authorized treating physician, temporary disability payments, and permanent disability benefits if your injuries leave lasting effects.`,
      `However, Florida's workers' comp system is known for being employer and insurer-friendly. Insurance companies routinely challenge legitimate claims, deny coverage for necessary treatment, and pressure injured workers into premature settlements. You have the right to have an attorney represent you in your workers' comp claim — and an experienced workers' comp attorney in ${city.county} can protect your rights.`,
      `Important: you must report your workplace injury to your employer within 30 days or risk losing your right to benefits. If your claim has been denied or you believe your benefits are being undervalued, you can file a Petition for Benefits with the Florida Office of the Judges of Compensation Claims. The Florida Division of Workers' Compensation (myfloridacfo.com/division/wc) provides additional resources for injured workers.`,
    ],
  };

  return (
    contents[practiceArea] || [
      `If you were involved in a ${practiceTitle.toLowerCase()} incident in ${city.city}, ${city.state}, you may have legal rights worth exploring. Contact our network of experienced local attorneys for a free consultation.`,
    ]
  );
}

function getCityGuides(practiceArea: string, citySlug: string): { slugs: string[]; heading: string } | null {
  if (
    citySlug === "jacksonville" &&
    (practiceArea === "personal-injury" || practiceArea === "car-accident")
  ) {
    return {
      heading: "Jacksonville Legal Guides",
      slugs: [
        "jacksonville-dangerous-intersections",
        "jacksonville-dangerous-roads",
        "jacksonville-crash-reports",
        "uber-lyft-accident-jacksonville",
        "hit-and-run-jacksonville",
        "average-car-accident-settlement-jacksonville",
      ],
    };
  }
  if (
    citySlug === "miami" &&
    (practiceArea === "personal-injury" || practiceArea === "car-accident")
  ) {
    return {
      heading: "Florida Legal Guides",
      slugs: [
        "average-car-accident-settlement-florida",
        "serious-injury-florida-no-fault",
        "florida-no-fault-minor-accidents",
        "medical-bills-after-florida-car-accident",
      ],
    };
  }
  return null;
}

function getCityResources(citySlug: string) {
  const resources: Record<string, { label: string; url: string }[]> = {
    jacksonville: [
      { label: "Duval County Clerk of Courts", url: "https://duvalclerk.com" },
      { label: "Jacksonville Sheriff's Office", url: "https://www.jaxsheriff.org" },
      { label: "FL Highway Safety (Crash Reports)", url: "https://www.flhsmv.gov/safety-programs/motorist-safety-awareness/" },
      { label: "Florida Bar Lawyer Referral", url: "https://www.floridabar.org/public/consumer/lawyerreferral/" },
    ],
    miami: [
      { label: "Miami-Dade Courts", url: "https://www.miamidade.gov/courts/" },
      { label: "Miami-Dade Police Department", url: "https://www.miamidade.gov/police/" },
      { label: "FL Highway Safety (Crash Reports)", url: "https://www.flhsmv.gov/safety-programs/motorist-safety-awareness/" },
      { label: "Florida Bar Lawyer Referral", url: "https://www.floridabar.org/public/consumer/lawyerreferral/" },
    ],
  };
  return resources[citySlug] || [];
}

export default async function CityPracticeAreaPage({ params }: Props) {
  const { practiceArea, city } = await params;

  if (!VALID_PRACTICE_AREAS.includes(practiceArea)) notFound();

  const cityData = citiesData.find((c) => c.citySlug === city);
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!cityData || !area) notFound();

  const localContentParagraphs = getLocalContent(practiceArea, cityData);
  const cityResources = getCityResources(city);
  const cityGuides = getCityGuides(practiceArea, city);
  const imageKey = `${practiceArea}-${city}`;
  const cityImage = CITY_IMAGES[imageKey] || DEFAULT_IMAGE;

  const legalServiceLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} Attorney in ${cityData.city}, ${cityData.state}`,
    description: `Free ${area.title.toLowerCase()} case evaluation in ${cityData.city}, ${cityData.state}. No fees unless you win.`,
    url: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
    serviceType: area.title,
    areaServed: {
      "@type": "City",
      name: cityData.city,
      containedInPlace: { "@type": "State", name: cityData.state },
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
      {
        "@type": "ListItem",
        position: 4,
        name: `${cityData.city}, ${cityData.state}`,
        item: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
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

      {/* ── Hero with city image ─────────────────────────── */}
      <section className="relative min-h-[360px] flex items-end overflow-hidden">
        <Image
          src={cityImage}
          alt={`${area.title} attorney serving ${cityData.city}, ${cityData.state}`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-900/20" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${practiceArea}`} className="hover:text-white transition-colors capitalize">
              {area.title}
            </Link>
            <span>/</span>
            <Link href={`/${practiceArea}/fl`} className="hover:text-white transition-colors">
              Florida
            </Link>
            <span>/</span>
            <span className="text-gray-200">{cityData.city}</span>
          </nav>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            {cityData.city}, {cityData.state} &bull; {area.title}
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {area.title} Lawyer in {cityData.city}, {cityData.state}
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Were you injured in {cityData.city}? Our network of experienced attorneys serve{" "}
            {cityData.county}. Get a free, confidential case evaluation today.
          </p>
          <Link href="/tools/case-evaluator" className="btn btn-primary">
            Get My Free Case Evaluation
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Local Content */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {area.title} Claims in {cityData.city}, {cityData.state}
              </h2>
              <div className="space-y-4">
                {localContentParagraphs.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">{para}</p>
                ))}
              </div>
            </section>

            {/* Statute of Limitations */}
            <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>⏱</span> Florida Statute of Limitations — Act Quickly
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                In Florida, you generally have:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>{cityData.statutes.personalInjury} years</strong>&nbsp;to file a personal injury lawsuit (reduced from 4 years under 2023 tort reform)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>{cityData.statutes.propertyDamage} years</strong>&nbsp;to file a property damage claim
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>30 days</strong>&nbsp;to report a workplace injury to your employer (workers&apos; comp)
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4">
                Missing the statute of limitations deadline permanently bars your right to compensation. Consult an attorney as soon as possible.
              </p>
            </section>

            {/* Courthouse */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {cityData.county} Courthouse Information
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{cityData.courthouse.name}</h3>
                <p className="text-gray-500 text-sm mb-1 flex items-center gap-2">
                  <span>📍</span> {cityData.courthouse.address}
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>📞</span> {cityData.courthouse.phone}
                </p>
              </div>
            </section>

            {/* City-Specific Resources */}
            {cityResources.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {cityData.city} Legal Resources
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <ul className="space-y-3">
                    {cityResources.map((resource) => (
                      <li key={resource.url}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                        >
                          <span className="text-blue-400">↗</span>
                          {resource.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="http://www.leg.state.fl.us/statutes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        <span className="text-blue-400">↗</span>
                        Florida Statutes Online
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.myfloridacfo.com/division/wc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        <span className="text-blue-400">↗</span>
                        Florida Division of Workers&apos; Compensation
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            )}

            {/* Related Guides */}
            {cityGuides && (
              <RelatedGuides slugs={cityGuides.slugs} heading={cityGuides.heading} />
            )}

            {/* Local Lead Form */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get a Free Case Evaluation in {cityData.city}
              </h2>
              <LocalLeadForm city={cityData.city} state={cityData.state} practiceArea={area.title} />
            </section>

            <LeadCaptureBanner
              title={`Hurt in ${cityData.city}? Find out if you have a case.`}
              subtitle="Free and confidential. No obligation, no upfront fees."
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl p-7 text-white" style={{ backgroundColor: "#1e40af" }}>
              <h3 className="font-bold text-xl mb-2 text-white">Free Case Evaluation</h3>
              <p className="text-blue-200 text-sm mb-5">
                {cityData.city} attorneys available. No cost, no obligation.
              </p>
              <Link href="/tools/case-evaluator" className="btn btn-white w-full justify-center">
                Check My Case
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">{cityData.city} Quick Facts</h3>
              <div className="space-y-3 text-sm">
                {[
                  ["County", cityData.county],
                  ["Population", cityData.population],
                  ["State", cityData.state],
                  ["Injury SOL", `${cityData.statutes.personalInjury} years`],
                  ["Property SOL", `${cityData.statutes.propertyDamage} years`],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">
                Other {cityData.city} Practice Areas
              </h3>
              <div className="space-y-2">
                {VALID_PRACTICE_AREAS.filter((pa) => pa !== practiceArea).map((pa) => {
                  const paData = practiceAreasData.find((a) => a.slug === pa);
                  return (
                    <Link
                      key={pa}
                      href={`/${pa}/fl/${city}`}
                      className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                    >
                      {paData?.title} in {cityData.city} &rarr;
                    </Link>
                  );
                })}
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

function LocalLeadForm({
  city,
  state,
  practiceArea,
}: {
  city: string;
  state: string;
  practiceArea: string;
}) {
  return (
    <form
      action="/api/leads"
      method="POST"
      className="bg-gray-50 rounded-2xl p-7 border border-gray-200"
    >
      <input type="hidden" name="city" value={city} />
      <input type="hidden" name="state" value={state} />
      <input type="hidden" name="practiceArea" value={practiceArea} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {[
          { name: "firstName", label: "First Name", type: "text", placeholder: "First name" },
          { name: "lastName", label: "Last Name", type: "text", placeholder: "Last name" },
        ].map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {f.label} <span className="text-red-500">*</span>
            </label>
            <input
              type={f.type}
              name={f.name}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
              placeholder={f.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          placeholder="(555) 000-0000"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          placeholder="you@email.com"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brief Description of Your Situation
        </label>
        <textarea
          name="description"
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          placeholder="What happened? When? Any injuries?"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full justify-center"
      >
        Get My Free Case Evaluation
      </button>
      <p className="text-gray-400 text-xs text-center mt-3">
        By submitting, you agree to our{" "}
        <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and{" "}
        <Link href="/terms" className="underline">Terms of Use</Link>.
      </p>
    </form>
  );
}
