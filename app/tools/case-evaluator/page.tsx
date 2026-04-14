import type { Metadata } from "next";
import Image from "next/image";
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
    <>
      {/* Hero */}
      <section className="relative h-56 md:h-64 overflow-hidden flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=85&fit=crop"
          alt="Attorney reviewing case"
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

      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <CaseEvaluatorClient />
        </div>
      </div>
    </>
  );
}
