import type { Metadata } from "next";
import Image from "next/image";
import SettlementCalculatorClient from "./SettlementCalculatorClient";

export const metadata: Metadata = {
  title: "Car Accident Settlement Calculator — Estimate Your Payout",
  description:
    "Use our free settlement calculator to estimate the value of your car accident claim. Enter your medical bills, lost wages, and injury severity to get a settlement range. For estimation purposes only.",
  openGraph: {
    title: "Car Accident Settlement Calculator | Top Lawyer Resource",
    description:
      "Get a rough estimate of your car accident settlement. Enter your damages and our calculator provides a range based on typical settlement data.",
    url: "https://toplawyerresource.com/tools/settlement-calculator",
  },
};

export default function SettlementCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-56 md:h-64 overflow-hidden flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85&fit=crop"
          alt="Settlement calculator"
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
            Get a rough estimate of your car accident claim&apos;s potential value.
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 mb-8 flex items-start gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p>This calculator provides estimates only. Actual settlements vary significantly.
            Consult an attorney for an accurate case valuation.</p>
          </div>
          <SettlementCalculatorClient />
        </div>
      </div>
    </>
  );
}
