import Link from "next/link";
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

      {/* Hero */}
      <section style={{ backgroundColor: "#1a365d" }} className="text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-300 text-sm font-medium mb-3 uppercase tracking-wider">
            {title} Attorney Help
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
            {title} Lawyers &mdash; Free Case Evaluation
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-3xl">
            {heroText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tools/case-evaluator"
              style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
              className="font-bold text-base px-7 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Evaluate My {shortTitle} Case &mdash; Free
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold text-base px-7 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
            >
              Speak with an Attorney
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Common Causes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
                Common Causes of {title} Claims
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commonCauses.map((cause, i) => (
                  <div key={i} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
                    <span style={{ color: "#d69e2e" }} className="font-bold text-lg mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm">{cause}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What You Can Recover */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
                What Compensation Can You Recover?
              </h2>
              <p className="text-gray-600 mb-4">
                Depending on the specifics of your case, you may be entitled to compensation for:
              </p>
              <ul className="space-y-3">
                {whatYouCanRecover.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: "#1a365d" }} className="font-bold mt-0.5">
                      &bull;
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
                What to Do After a {shortTitle.replace(/s$/, "")} Incident
              </h2>
              <div className="space-y-4">
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
                    desc: "Most states have a 2-3 year window to file a personal injury lawsuit. Missing this deadline means losing your right to sue. Act now.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: "#1a365d" }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
                  Related Legal Guides
                </h2>
                <div className="space-y-3">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/guides/${article.slug}`}
                      className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                    >
                      <span className="text-gray-800 text-sm font-medium">{article.title}</span>
                      <span className="text-gray-400 text-xs ml-4 whitespace-nowrap">
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* CTA Card */}
            <div
              className="rounded-xl p-6 mb-8 text-white"
              style={{ backgroundColor: "#1a365d" }}
            >
              <h3 className="font-bold text-xl mb-3">Free Case Evaluation</h3>
              <p className="text-blue-200 text-sm mb-5">
                Find out if you have a case in minutes. No cost, no obligation.
              </p>
              <Link
                href="/tools/case-evaluator"
                style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
                className="block text-center font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Check My Case
              </Link>
              <Link
                href="/contact"
                className="block text-center border border-white text-white font-medium px-6 py-2 rounded-lg mt-3 hover:bg-blue-800 transition-colors text-sm"
              >
                Talk to an Attorney
              </Link>
            </div>

            {/* Tools */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <h3 className="font-bold mb-4" style={{ color: "#1a365d" }}>
                Free Legal Tools
              </h3>
              <div className="space-y-3">
                <Link
                  href="/tools/case-evaluator"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-700"
                >
                  <span>✅</span> Do I Have a Case? Evaluator
                </Link>
                <Link
                  href="/tools/settlement-calculator"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-700"
                >
                  <span>🧮</span> Settlement Value Calculator
                </Link>
              </div>
            </div>

            {/* Cities */}
            {cities.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-4" style={{ color: "#1a365d" }}>
                  Find Local {shortTitle} Attorneys
                </h3>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${practiceSlug}/${city.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 py-1"
                    >
                      <span className="text-xs">📍</span>
                      {city.city}, {city.state}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
