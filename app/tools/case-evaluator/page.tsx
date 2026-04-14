import type { Metadata } from "next";
import CaseEvaluatorClient from "./CaseEvaluatorClient";

export const metadata: Metadata = {
  title: "Do I Have a Case? Free Case Evaluator",
  description:
    "Answer 5 quick questions to find out if you may have a viable legal claim. Free, confidential, and no obligation. Our case evaluator helps you understand your options.",
  openGraph: {
    title: "Free Case Evaluator — Do I Have a Case? | Top Lawyer Resource",
    description:
      "Answer 5 questions and get a preliminary assessment of your potential legal claim. Free, confidential, no obligation.",
    url: "https://toplawyerresource.com/tools/case-evaluator",
  },
};

export default function CaseEvaluatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#d69e2e" }}>
            Free &bull; Confidential &bull; No Obligation
          </p>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#1a365d" }}>
            Do I Have a Case?
          </h1>
          <p className="text-gray-600 text-lg">
            Answer a few quick questions to get a preliminary assessment of your situation.
          </p>
        </div>
        <CaseEvaluatorClient />
      </div>
    </div>
  );
}
