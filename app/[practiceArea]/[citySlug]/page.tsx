import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import LeadCaptureBanner from "../../components/LeadCaptureBanner";
import citiesData from "../../../data/cities.json";
import practiceAreasData from "../../../data/practiceAreas.json";

const VALID_PRACTICE_AREAS = [
  "personal-injury",
  "car-accident",
  "truck-accident",
  "workers-compensation",
];

interface Props {
  params: Promise<{ practiceArea: string; citySlug: string }>;
}

export async function generateStaticParams() {
  const params: { practiceArea: string; citySlug: string }[] = [];
  for (const practiceArea of VALID_PRACTICE_AREAS) {
    for (const city of citiesData) {
      params.push({ practiceArea, citySlug: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { practiceArea, citySlug } = await params;
  const city = citiesData.find((c) => c.slug === citySlug);
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!city || !area) return {};

  const title = `${area.title} Lawyer in ${city.city}, ${city.state} — Free Consultation`;
  const description = `Injured in a ${area.title.toLowerCase()} in ${city.city}, ${city.state}? Get a free case evaluation from an experienced attorney. No fees unless you win.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://toplawyerresource.com/${practiceArea}/${citySlug}`,
    },
    alternates: {
      canonical: `https://toplawyerresource.com/${practiceArea}/${citySlug}`,
    },
  };
}

function getLocalContent(practiceArea: string, city: (typeof citiesData)[0]) {
  const practiceTitle =
    practiceAreasData.find((a) => a.slug === practiceArea)?.title || practiceArea;

  const contents: Record<string, string> = {
    "car-accident": `Car accidents in ${city.city}, ${city.state} are a serious and unfortunately common problem. With busy corridors like I-95 and high-traffic intersections throughout ${city.county}, collisions happen every day. Florida's no-fault insurance laws add complexity — you must first claim through your Personal Injury Protection (PIP) coverage before you can pursue the at-fault driver. However, if your injuries meet the "serious injury" threshold, you may be able to step outside the no-fault system and file a claim directly against the negligent driver for full damages.`,
    "truck-accident": `Commercial truck accidents in ${city.city}, ${city.state} often result in catastrophic injuries due to the enormous size and weight differential between trucks and passenger vehicles. Major freight corridors in ${city.county} see heavy commercial truck traffic daily. If you were injured by a commercial truck, you may have claims against the truck driver, the trucking company, the cargo loader, and/or the truck manufacturer — potentially multiple defendants with multiple insurance policies.`,
    "personal-injury": `If you were injured due to someone else's negligence in ${city.city}, ${city.state}, you have legal rights. ${city.state} law gives injury victims the right to seek compensation for medical expenses, lost income, and pain and suffering. The statute of limitations for personal injury claims in ${city.state} is ${city.statutes.personalInjury} years from the date of injury — don't wait to explore your options.`,
    "workers-compensation": `Workers injured in ${city.city}, ${city.state} are entitled to workers' compensation benefits regardless of fault. ${city.state}'s workers' comp system covers medical treatment, temporary disability payments, and permanent disability if your injuries leave lasting effects. However, insurance companies and employers frequently challenge or minimize legitimate claims. An experienced workers' comp attorney in ${city.county} can protect your rights and ensure you receive everything you're entitled to.`,
  };

  return (
    contents[practiceArea] ||
    `If you were involved in a ${practiceTitle.toLowerCase()} incident in ${city.city}, ${city.state}, you may have legal rights worth exploring. Contact our network of experienced local attorneys for a free consultation.`
  );
}

export default async function CityPracticeAreaPage({ params }: Props) {
  const { practiceArea, citySlug } = await params;

  if (!VALID_PRACTICE_AREAS.includes(practiceArea)) {
    notFound();
  }

  const city = citiesData.find((c) => c.slug === citySlug);
  const area = practiceAreasData.find((a) => a.slug === practiceArea);

  if (!city || !area) {
    notFound();
  }

  const localContent = getLocalContent(practiceArea, city);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} Attorney in ${city.city}, ${city.state}`,
    description: `Free ${area.title.toLowerCase()} case evaluation in ${city.city}, ${city.state}`,
    url: `https://toplawyerresource.com/${practiceArea}/${citySlug}`,
    serviceType: area.title,
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href={`/${practiceArea}`} className="hover:underline capitalize">
            {area.title}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">
            {city.city}, {city.state}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: "#1a365d" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-300 text-sm font-medium mb-3 uppercase tracking-wider">
            {city.city}, {city.state} &bull; {area.title}
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-5">
            {area.title} Lawyer in {city.city}, {city.state}
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            Were you injured in {city.city}? Our network of experienced {area.title.toLowerCase()} attorneys serve{" "}
            {city.county} and surrounding areas. Get a free, confidential case evaluation today.
          </p>
          <Link
            href="/tools/case-evaluator"
            style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
            className="font-bold text-base px-7 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Get My Free Case Evaluation
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Local Context */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a365d" }}>
                {area.title} Claims in {city.city}, {city.state}
              </h2>
              <p className="text-gray-700 leading-relaxed">{localContent}</p>
            </section>

            {/* Statute of Limitations */}
            <section className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a365d" }}>
                ⏱ {city.state} Statute of Limitations — Act Quickly
              </h2>
              <p className="text-gray-700 text-sm mb-3">
                In {city.state}, you generally have:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="font-bold" style={{ color: "#d69e2e" }}>•</span>
                  <strong>{city.statutes.personalInjury} years</strong>&nbsp;to file a personal injury lawsuit
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold" style={{ color: "#d69e2e" }}>•</span>
                  <strong>{city.statutes.propertyDamage} years</strong>&nbsp;to file a property damage claim
                </li>
              </ul>
              <p className="text-gray-600 text-xs mt-3">
                Missing the statute of limitations deadline permanently bars your right to compensation. Consult an attorney as soon as possible.
              </p>
            </section>

            {/* Local Courthouse */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a365d" }}>
                {city.county} Courthouse Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{city.courthouse.name}</h3>
                <p className="text-gray-600 text-sm mb-1">📍 {city.courthouse.address}</p>
                <p className="text-gray-600 text-sm">📞 {city.courthouse.phone}</p>
              </div>
            </section>

            {/* Lead Capture Form */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
                Get a Free Case Evaluation in {city.city}
              </h2>
              <LocalLeadForm city={city.city} state={city.state} practiceArea={area.title} />
            </section>

            <LeadCaptureBanner
              title={`Hurt in ${city.city}? Find out if you have a case.`}
              subtitle="Free and confidential. No obligation, no upfront fees."
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="rounded-xl p-6 mb-6 text-white"
              style={{ backgroundColor: "#1a365d" }}
            >
              <h3 className="font-bold text-xl mb-3">Free Case Evaluation</h3>
              <p className="text-blue-200 text-sm mb-5">
                {city.city} attorneys available. No cost, no obligation.
              </p>
              <Link
                href="/tools/case-evaluator"
                style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
                className="block text-center font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Check My Case
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
              <h3 className="font-bold mb-4" style={{ color: "#1a365d" }}>
                {city.city} Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">County:</span>
                  <span className="ml-2 font-medium text-gray-800">{city.county}</span>
                </div>
                <div>
                  <span className="text-gray-500">Population:</span>
                  <span className="ml-2 font-medium text-gray-800">{city.population}</span>
                </div>
                <div>
                  <span className="text-gray-500">State:</span>
                  <span className="ml-2 font-medium text-gray-800">{city.state}</span>
                </div>
                <div>
                  <span className="text-gray-500">Injury SOL:</span>
                  <span className="ml-2 font-medium text-gray-800">
                    {city.statutes.personalInjury} years
                  </span>
                </div>
              </div>
            </div>

            {/* Other practice areas in this city */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold mb-4" style={{ color: "#1a365d" }}>
                Other {city.city} Practice Areas
              </h3>
              <div className="space-y-2">
                {VALID_PRACTICE_AREAS.filter((pa) => pa !== practiceArea).map((pa) => {
                  const paData = practiceAreasData.find((a) => a.slug === pa);
                  return (
                    <Link
                      key={pa}
                      href={`/${pa}/${citySlug}`}
                      className="block text-sm text-gray-700 hover:text-blue-700 py-1"
                    >
                      {paData?.title} in {city.city} &rarr;
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
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
      className="bg-gray-50 rounded-xl p-6 border border-gray-200"
    >
      <input type="hidden" name="city" value={city} />
      <input type="hidden" name="state" value={state} />
      <input type="hidden" name="practiceArea" value={practiceArea} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your last name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="(555) 000-0000"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@email.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brief Description of Your Situation
        </label>
        <textarea
          name="description"
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What happened? When? Any injuries?"
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
        className="w-full font-bold py-3 rounded-md hover:opacity-90 transition-opacity"
      >
        Get My Free Case Evaluation
      </button>
      <p className="text-gray-500 text-xs text-center mt-3">
        By submitting, you agree to our{" "}
        <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and{" "}
        <Link href="/terms" className="underline">Terms of Use</Link>.
      </p>
    </form>
  );
}
