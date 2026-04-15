import Link from "next/link";
import Image from "next/image";
import LeadCaptureBanner from "./LeadCaptureBanner";

interface CityLink {
  city: string;
  state: string;
  slug: string;
  stateCode: string;
}

interface RelatedArticle {
  slug: string;
  title: string;
  readTime: string;
}

interface PracticeAreaPageProps {
  practiceSlug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroText: string;
  commonCauses: string[];
  whatYouCanRecover: string[];
  cities: CityLink[];
  relatedArticles: RelatedArticle[];
  heroImage: string;
  contentImage?: string;
}

export default function PracticeAreaPage({
  practiceSlug,
  title,
  shortTitle,
  heroText,
  commonCauses,
  whatYouCanRecover,
  cities,
  relatedArticles,
  heroImage,
  contentImage,
}: PracticeAreaPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${title} - Top Lawyer Resource`,
    description: heroText.slice(0, 160),
    url: `https://toplawyerresource.com/${practiceSlug}`,
    serviceType: title,
    areaServed: "United States",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={`${title} lawyer`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-3">
            {title} Attorney Help
          </p>
          <h1
            className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-5 tracking-tight"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            {title} Lawyers &mdash; Free Case Evaluation
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>{heroText}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tools/case-evaluator" className="btn btn-primary">
              Evaluate My {shortTitle} Case &mdash; Free
            </Link>
            <Link href="/contact" className="btn btn-white">
              Speak with an Attorney
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ── Main Content ───────────────────────────────── */}
          <div className="lg:col-span-2">
            {/* Common Causes */}
            <section className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Causes of {title} Claims
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commonCauses.map((cause, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4"
                  >
                    <span className="text-blue-600 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{cause}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Supporting image */}
            {contentImage && (
              <div className="relative h-64 rounded-2xl overflow-hidden mb-14 shadow-md">
                <Image
                  src={contentImage}
                  alt={`${title} case support`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* What You Can Recover */}
            <section className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Compensation Can You Recover?
              </h2>
              <p className="text-gray-500 mb-5">
                Depending on the specifics of your case, you may be entitled to:
              </p>
              <ul className="space-y-3">
                {whatYouCanRecover.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Steps */}
            <section className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Do After a {shortTitle.replace(/s$/i, "")} Incident
              </h2>
              <div className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "Seek Medical Attention Immediately",
                    desc: "Even if you feel fine, get checked out. Some injuries don't present symptoms right away. Medical records are also critical evidence in your case.",
                  },
                  {
                    step: "2",
                    title: "Document Everything",
                    desc: "Take photos of the scene, your injuries, and any property damage. Get contact information from witnesses. Keep all medical records and bills.",
                  },
                  {
                    step: "3",
                    title: "Don't Talk to Insurance Adjusters Alone",
                    desc: "Insurance companies are not on your side. Don't give recorded statements or accept settlements without first consulting an attorney.",
                  },
                  {
                    step: "4",
                    title: "Contact an Attorney Before the Statute of Limitations Expires",
                    desc: "Most states have a 2–3 year window to file a personal injury lawsuit. Missing this deadline means losing your right to sue.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: "#1e40af" }}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mb-14">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Legal Guides</h2>
                <div className="space-y-3">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/guides/${article.slug}`}
                      className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-150"
                    >
                      <span className="text-gray-800 text-sm font-medium">{article.title}</span>
                      <span className="text-gray-400 text-xs ml-4 whitespace-nowrap flex-shrink-0">
                        {article.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <LeadCaptureBanner
              title={`Injured? Get a Free ${shortTitle} Case Evaluation`}
              subtitle="No obligation. No upfront fees. Confidential consultation."
            />
          </div>

          {/* ── Sidebar ────────────────────────────────────── */}
          <aside className="lg:col-span-1 space-y-6">
            {/* CTA Card */}
            <div className="rounded-2xl p-7 text-white" style={{ backgroundColor: "#1e40af" }}>
              <h3 className="font-bold text-xl mb-2">Free Case Evaluation</h3>
              <p className="text-blue-200 text-sm mb-5">
                Find out if you have a case in minutes. No cost, no obligation.
              </p>
              <Link
                href="/tools/case-evaluator"
                className="btn btn-white w-full justify-center mb-3"
              >
                Check My Case
              </Link>
              <Link
                href="/contact"
                className="block text-center border border-blue-400 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors text-sm"
              >
                Talk to an Attorney
              </Link>
            </div>

            {/* Tools */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Free Legal Tools</h3>
              <div className="space-y-3">
                <Link
                  href="/tools/case-evaluator"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1"
                >
                  <span className="text-green-500">✅</span> Do I Have a Case? Evaluator
                </Link>
                <Link
                  href="/tools/settlement-calculator"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1"
                >
                  <span>🧮</span> Settlement Value Calculator
                </Link>
              </div>
            </div>

            {/* Cities */}
            {cities.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">
                  Find Local {shortTitle} Attorneys
                </h3>
                <div className="space-y-1.5">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${practiceSlug}/${city.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                    >
                      <span className="text-sky-500 text-xs">📍</span>
                      {city.city}, {city.state}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
