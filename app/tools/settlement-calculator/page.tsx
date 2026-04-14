import type { Metadata } from "next";
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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#d69e2e" }}>
            Free Tool &bull; Estimate Only
          </p>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#1a365d" }}>
            Settlement Value Calculator
          </h1>
          <p className="text-gray-600 text-lg mb-3">
            Get a rough estimate of your car accident claim&apos;s potential value.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 inline-block">
            ⚠️ This calculator provides estimates only. Actual settlements vary significantly.
            Consult an attorney for an accurate case valuation.
          </div>
        </div>
        <SettlementCalculatorClient />
      </div>
    </div>
  );
}
