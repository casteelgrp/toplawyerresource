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

// City skyline images from Unsplash
const CITY_IMAGES: Record<string, string> = {
  "jacksonville-fl":
    "https://images.unsplash.com/photo-1559656914-a30970c1affd?w=1600&q=85&fit=crop",
  "miami-fl":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85&fit=crop",
  "cleveland-oh":
    "https://images.unsplash.com/photo-1472711289765-2e99c3be3b28?w=1600&q=85&fit=crop",
  "cincinnati-oh":
    "https://images.unsplash.com/photo-1598965338-7a3dd20c9adf?w=1600&q=85&fit=crop",
  "newark-nj":
    "https://images.unsplash.com/photo-1546436836-07a91091f160?w=1600&q=85&fit=crop",
  "jersey-city-nj":
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1600&q=85&fit=crop",
  "paterson-nj":
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&fit=crop",
};

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
    "car-accident": `Car accidents in ${city.city}, ${city.state} are a serious and unfortunately common problem. With busy corridors and high-traffic intersections throughout ${city.county}, collisions happen every day. If you were involved in a collision caused by another driver's negligence, you have the right to seek compensation for your medical bills, lost wages, and pain and suffering. An experienced ${city.city} car accident attorney can help you navigate the insurance claims process and fight for the full compensation you deserve.`,
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

  if (!VALID_PRACTICE_AREAS.includes(practiceArea)) notFound();

  const city = citiesData.find((c) => c.slug === citySlug);
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!city || !area) notFound();

  const localContent = getLocalContent(practiceArea, city);
  const cityImage =
    CITY_IMAGES[citySlug] ||
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&fit=crop";

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
      containedInPlace: { "@type": "State", name: city.state },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero with city skyline ─────────────────────────── */}
      <section className="relative min-h-[360px] flex items-end overflow-hidden">
        <Image
          src={cityImage}
          alt={`${city.city} skyline`}
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
            <span className="text-gray-200">{city.city}, {city.state}</span>
          </nav>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            {city.city}, {city.state} &bull; {area.title}
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {area.title} Lawyer in {city.city}, {city.state}
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Were you injured in {city.city}? Our network of experienced attorneys serve{" "}
            {city.county}. Get a free, confidential case evaluation today.
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
                {area.title} Claims in {city.city}, {city.state}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{localContent}</p>
            </section>

            {/* Statute of Limitations */}
            <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>⏱</span> {city.state} Statute of Limitations — Act Quickly
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                In {city.state}, you generally have:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>{city.statutes.personalInjury} years</strong>&nbsp;to file a personal injury lawsuit
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>{city.statutes.propertyDamage} years</strong>&nbsp;to file a property damage claim
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4">
                Missing the statute of limitations deadline permanently bars your right to compensation. Consult an attorney as soon as possible.
              </p>
            </section>

            {/* Courthouse */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {city.county} Courthouse Information
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{city.courthouse.name}</h3>
                <p className="text-gray-500 text-sm mb-1 flex items-center gap-2">
                  <span>📍</span> {city.courthouse.address}
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>📞</span> {city.courthouse.phone}
                </p>
              </div>
            </section>

            {/* Local Lead Form */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl p-7 text-white" style={{ backgroundColor: "#1e40af" }}>
              <h3 className="font-bold text-xl mb-2 text-white">Free Case Evaluation</h3>
              <p className="text-blue-200 text-sm mb-5">
                {city.city} attorneys available. No cost, no obligation.
              </p>
              <Link href="/tools/case-evaluator" className="btn btn-white w-full justify-center">
                Check My Case
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">{city.city} Quick Facts</h3>
              <div className="space-y-3 text-sm">
                {[
                  ["County", city.county],
                  ["Population", city.population],
                  ["State", city.state],
                  ["Injury SOL", `${city.statutes.personalInjury} years`],
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
                Other {city.city} Practice Areas
              </h3>
              <div className="space-y-2">
                {VALID_PRACTICE_AREAS.filter((pa) => pa !== practiceArea).map((pa) => {
                  const paData = practiceAreasData.find((a) => a.slug === pa);
                  return (
                    <Link
                      key={pa}
                      href={`/${pa}/${citySlug}`}
                      className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                    >
                      {paData?.title} in {city.city} &rarr;
                    </Link>
                  );
                })}
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
