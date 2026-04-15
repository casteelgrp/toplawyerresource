import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SettlementCalculatorClient from "./SettlementCalculatorClient";

export const metadata: Metadata = {
  title: "Florida Car Accident Settlement Calculator — Estimate Your Payout",
  description:
    "Use our free settlement calculator to estimate the value of your Florida car accident claim. Enter your medical bills, lost wages, and injury severity to get a settlement range. Based on real Florida settlement data.",
  openGraph: {
    title: "Car Accident Settlement Calculator | Top Lawyer Resource",
    description:
      "Get a rough estimate of your Florida car accident settlement. Enter your damages and our calculator provides a range based on typical settlement data.",
    url: "https://toplawyerresource.com/tools/settlement-calculator",
  },
  alternates: {
    canonical: "https://toplawyerresource.com/tools/settlement-calculator",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the settlement calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The calculator provides a rough estimate range based on typical multipliers used in Florida personal injury settlements. Actual settlement values depend on many factors including the specific facts of your case, insurance policy limits, attorney negotiation, and whether the case goes to trial. Always consult an attorney for an accurate case valuation.",
      },
    },
    {
      "@type": "Question",
      name: "What is a settlement multiplier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A settlement multiplier is a number applied to your economic damages (medical bills + lost wages) to estimate non-economic damages (pain and suffering). Multipliers typically range from 1.5x for minor injuries to 5x or more for severe, permanent injuries. Florida's 2023 tort reform may affect how non-economic damages are calculated in your specific case.",
      },
    },
    {
      "@type": "Question",
      name: "What factors affect my Florida car accident settlement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key factors include: severity and permanence of your injuries, your total medical expenses (past and future), lost wages and loss of earning capacity, the degree of the other driver's fault, your degree of fault (Florida's modified comparative fault rule), available insurance policy limits, and whether you have strong evidence. An experienced attorney can help maximize your recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Should I accept the insurance company's first offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rarely. Insurance companies' initial offers are almost always below the fair value of your claim. They are trying to close the claim quickly and cheaply. Before accepting any settlement, consult with a personal injury attorney who can evaluate whether the offer is fair. Most attorneys offer free consultations and work on contingency.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://toplawyerresource.com" },
    { "@type": "ListItem", position: 2, name: "Settlement Calculator", item: "https://toplawyerresource.com/tools/settlement-calculator" },
  ],
};

export default function SettlementCalculatorPage() {
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
          src="https://images.pexels.com/photos/4427629/pexels-photo-4427629.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Attorney calculating car accident settlement value"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/75 to-gray-900/50" />
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Free Tool &bull; Estimate Only
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Settlement Value Calculator
          </h1>
          <p className="text-gray-300 text-lg">
            Get a rough estimate of your Florida car accident claim&apos;s potential value.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro content */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Florida Car Accident Settlements Are Calculated
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Florida car accident settlements typically involve two types of damages: economic
              damages (medical bills, lost wages, property damage) and non-economic damages (pain
              and suffering, emotional distress, loss of enjoyment of life).
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Insurance adjusters and attorneys often use a <strong>multiplier method</strong> to
              estimate pain and suffering: they multiply your economic damages by a factor between
              1.5 and 5 (or higher for severe injuries). Our calculator uses this approach to give
              you a settlement range based on your inputs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Remember: Florida&apos;s 2023 tort reform changed how non-economic damages are calculated
              in some cases, and your actual settlement depends heavily on the specific facts,
              available insurance coverage, and the skill of your attorney. This tool provides
              estimates only — consult an attorney for an accurate valuation.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 mb-8 flex items-start gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p>This calculator provides estimates only. Actual settlements vary significantly.
            Consult an attorney for an accurate case valuation.</p>
          </div>

          {/* Calculator tool */}
          <div className="max-w-2xl mx-auto">
            <SettlementCalculatorClient />
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
              <Link href="/tools/case-evaluator" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                <span>✅</span> Free Case Evaluator
              </Link>
              <Link href="/guides/average-car-accident-settlement-florida" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700 transition-colors py-1">
                <span>📚</span> Average Car Accident Settlement in Florida
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
