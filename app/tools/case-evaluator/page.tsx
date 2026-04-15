import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CaseEvaluatorClient from "./CaseEvaluatorClient";

export const metadata: Metadata = {
  title: "Do I Have a Case? Free Case Evaluator — Florida Injury Law",
  description:
    "Answer 5 quick questions to find out if you may have a viable legal claim in Florida. Free, confidential, and no obligation. Our case evaluator helps you understand your options before speaking with an attorney.",
  openGraph: {
    title: "Free Case Evaluator — Do I Have a Case? | Top Lawyer Resource",
    description:
      "Answer 5 questions and get a preliminary assessment of your potential legal claim. Free, confidential, no obligation.",
    url: "https://toplawyerresource.com/tools/case-evaluator",
  },
  alternates: {
    canonical: "https://toplawyerresource.com/tools/case-evaluator",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the case evaluator really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free. There is no cost, no obligation, and no spam. You can use the evaluator without providing any personal information.",
      },
    },
    {
      "@type": "Question",
      name: "Does using the case evaluator create an attorney-client relationship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The case evaluator is an informational tool only. It does not constitute legal advice and does not create an attorney-client relationship. For legal advice specific to your situation, consult a licensed attorney.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the case evaluator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The case evaluator provides a general preliminary assessment based on your answers. It cannot account for all the nuances of your specific situation. Only a licensed attorney can give you an accurate evaluation of your case after reviewing all the facts.",
      },
    },
    {
      "@type": "Question",
      name: "What types of cases does the evaluator cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The case evaluator covers personal injury claims, car accidents, truck accidents, and workers' compensation claims. It is designed for Florida residents but provides general guidance applicable in most states.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://toplawyerresource.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://toplawyerresource.com/tools/case-evaluator" },
    { "@type": "ListItem", position: 3, name: "Case Evaluator", item: "https://toplawyerresource.com/tools/case-evaluator" },
  ],
};

export default function CaseEvaluatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="relative h-56 md:h-64 overflow-hidden flex items-center">
        <Image
          src="https://images.pexels.com/photos/7876197/pexels-photo-7876197.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Attorney reviewing case documents with client"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/75 to-gray-900/50" />
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Free &bull; Confidential &bull; No Obligation
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Do I Have a Case?
          </h1>
          <p className="text-gray-300 text-lg">
            Answer a few quick questions to get a preliminary assessment of your situation.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro content */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How the Free Case Evaluator Works
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our case evaluator helps you quickly understand whether your situation may warrant
              a consultation with a personal injury attorney. Answer 5 simple questions about what
              happened, your injuries, and who was at fault — and get an instant preliminary
              assessment at no cost.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This tool is designed for Florida residents dealing with personal injury, car accidents,
              truck accidents, or workplace injuries. It takes into account Florida&apos;s unique legal
              landscape, including the 2-year statute of limitations, no-fault insurance rules, and
              the 2023 tort reform changes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { icon: "⚡", title: "Takes 2 Minutes", desc: "5 quick questions, instant result" },
                { icon: "🔒", title: "100% Confidential", desc: "No personal info required" },
                { icon: "$0", title: "Completely Free", desc: "No cost, no obligation ever" },
              ].map((item) => (
                <div key={item.title} className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluator tool */}
          <div className="max-w-2xl mx-auto">
            <CaseEvaluatorClient />
          </div>

          {/* FAQ section */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqLd.mainEntity.map((item, i) => (
                <details
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-blue-600 flex-shrink-0 text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Related Resources</h3>
            <div className="space-y-2">
              <Link href="/tools/settlement-calculator" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                <span>🧮</span> Settlement Value Calculator
              </Link>
              <Link href="/guides" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                <span>📚</span> Free Legal Guides
              </Link>
              <Link href="/personal-injury" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                <span>⚖️</span> Personal Injury Attorneys in Florida
              </Link>
              <Link href="/car-accident" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                <span>🚗</span> Car Accident Attorneys in Florida
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                <span>👨‍⚖️</span> Speak with an Attorney Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
