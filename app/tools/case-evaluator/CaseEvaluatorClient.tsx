"use client";
import { useState } from "react";
import Link from "next/link";

type Answer = string | null;

interface Step {
  id: string;
  question: string;
  options: { value: string; label: string; description?: string }[];
}

const steps: Step[] = [
  {
    id: "incidentType",
    question: "What type of incident are you dealing with?",
    options: [
      { value: "car-accident", label: "Car or Truck Accident", description: "Collision with another vehicle or commercial truck" },
      { value: "slip-fall", label: "Slip, Trip & Fall", description: "Fell on someone else's property" },
      { value: "workplace-injury", label: "Workplace Injury", description: "Hurt on the job or at work" },
      { value: "medical-malpractice", label: "Medical Malpractice", description: "Harmed by a doctor, hospital, or medical professional" },
      { value: "defective-product", label: "Defective Product", description: "Injured by a dangerous or defective product" },
      { value: "other", label: "Other Personal Injury", description: "Dog bite, assault, premises liability, etc." },
    ],
  },
  {
    id: "timeFrame",
    question: "When did the incident occur?",
    options: [
      { value: "less-6mo", label: "Less than 6 months ago" },
      { value: "6mo-1yr", label: "6 months to 1 year ago" },
      { value: "1yr-2yr", label: "1 to 2 years ago" },
      { value: "more-2yr", label: "More than 2 years ago" },
    ],
  },
  {
    id: "injuries",
    question: "What type of injuries did you sustain?",
    options: [
      { value: "severe", label: "Severe / Catastrophic", description: "Broken bones, surgery required, hospitalization, TBI, spinal injury" },
      { value: "moderate", label: "Moderate", description: "Significant pain, ongoing treatment needed, missed work" },
      { value: "minor", label: "Minor / Soft Tissue", description: "Whiplash, bruising, minor cuts — treated and recovered" },
      { value: "none", label: "No Physical Injuries", description: "Only property damage or emotional distress" },
    ],
  },
  {
    id: "faultClear",
    question: "Is it clear that someone else was at fault?",
    options: [
      { value: "yes-clear", label: "Yes — clearly their fault", description: "They admitted fault, ran a red light, were drunk, etc." },
      { value: "mostly", label: "Mostly their fault", description: "They were primarily at fault, but I may have contributed" },
      { value: "unclear", label: "It's unclear", description: "I'm not sure who was at fault" },
      { value: "shared", label: "Fault is shared", description: "Both parties contributed to the incident" },
    ],
  },
  {
    id: "insurance",
    question: "Is there insurance involved?",
    options: [
      { value: "yes-other", label: "Yes — other party has insurance", description: "The at-fault party had insurance" },
      { value: "yes-mine", label: "Yes — my own insurance", description: "Filing through my own policy" },
      { value: "both", label: "Both policies involved" },
      { value: "no-insurance", label: "No — other party uninsured" },
      { value: "unknown", label: "I don't know" },
    ],
  },
];

function getAssessment(answers: Record<string, Answer>): {
  title: string;
  description: string;
  strength: "strong" | "moderate" | "weak" | "time-barred";
  recommendations: string[];
} {
  const tooOld = answers.timeFrame === "more-2yr";
  if (tooOld) {
    return {
      title: "You May Be Past the Statute of Limitations",
      description:
        "Most personal injury claims must be filed within 2 years of the incident (though this varies by state and claim type). If more than 2 years have passed, your time to file may have expired. However, there are exceptions — certain circumstances can toll (pause) the statute of limitations.",
      strength: "time-barred",
      recommendations: [
        "Consult an attorney immediately — time-barred exceptions exist",
        "Some claims (medical malpractice, government entities) have different deadlines",
        "Don't assume it's too late without getting a professional opinion",
      ],
    };
  }

  const hasInjuries = answers.injuries !== "none";
  const faultClear = answers.faultClear === "yes-clear" || answers.faultClear === "mostly";
  const severeInjury = answers.injuries === "severe" || answers.injuries === "moderate";
  const hasInsurance = answers.insurance !== "no-insurance";

  if (hasInjuries && faultClear && severeInjury) {
    return {
      title: "You Likely Have a Strong Case",
      description:
        "Based on your answers, you appear to have the key elements of a viable personal injury claim: someone else's negligence, clear injuries, and insurance coverage. Cases like yours can result in significant compensation for medical bills, lost wages, and pain and suffering.",
      strength: "strong",
      recommendations: [
        "Don't talk to the other party's insurance company alone",
        "Gather all medical records and bills",
        "Document any ongoing symptoms or limitations",
        "Consult an attorney before accepting any settlement offer",
      ],
    };
  }

  if (hasInjuries && (faultClear || answers.faultClear === "unclear")) {
    return {
      title: "You May Have a Viable Claim",
      description:
        "Your situation shows several elements of a potential personal injury case. The strength of your claim depends on additional details about liability evidence and the extent of your injuries and damages.",
      strength: "moderate",
      recommendations: [
        "Preserve all evidence from the incident",
        "Keep records of all medical treatment and expenses",
        "Don't sign any insurance releases without attorney review",
        "Get a free attorney consultation to evaluate your specific situation",
      ],
    };
  }

  return {
    title: "Your Case May Have Challenges",
    description:
      "Based on your answers, there may be some obstacles to pursuing a successful claim. This doesn't mean you don't have legal options — there are factors only a qualified attorney can fully evaluate.",
    strength: "weak",
    recommendations: [
      "Still worth consulting with an attorney — many cases that seem difficult have value",
      "Property damage claims may still be recoverable even without physical injury",
      "Explore all insurance coverage options",
    ],
  };
}

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function CaseEvaluatorClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResult, setShowResult] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  function selectAnswer(value: string) {
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const caseType =
      steps[0].options.find((o) => o.value === answers.incidentType)?.label ?? "Unknown";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Case Evaluation Lead \u2014 ${caseType}`,
          from_name: "Top Lawyer Resource",
          name: contactInfo.name,
          phone: contactInfo.phone,
          email: contactInfo.email || "Not provided",
          additional_notes: contactInfo.notes || "None",
          case_type: caseType,
          incident_timeframe: answers.timeFrame,
          injury_severity: answers.injuries,
          fault_clarity: answers.faultClear,
          insurance_status: answers.insurance,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = "/thank-you";
      } else {
        setSubmitError("Something went wrong. Please try again.");
        setSubmitting(false);
      }
    } catch {
      setSubmitError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  if (showResult) {
    const assessment = getAssessment(answers);
    const strengthColors = {
      strong: { bg: "#f0fff4", border: "#68d391", text: "#276749", badge: "#48bb78" },
      moderate: { bg: "#fffff0", border: "#f6e05e", text: "#744210", badge: "#d69e2e" },
      weak: { bg: "#fff5f5", border: "#fc8181", text: "#742a2a", badge: "#fc8181" },
      "time-barred": { bg: "#fff5f5", border: "#fc8181", text: "#742a2a", badge: "#fc8181" },
    };
    const colors = strengthColors[assessment.strength];

    return (
      <div className="space-y-6">
        <div
          className="rounded-2xl p-8 border-2"
          style={{ backgroundColor: colors.bg, borderColor: colors.border }}
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 text-white"
            style={{ backgroundColor: colors.badge }}
          >
            {assessment.strength === "strong" ? "Strong Case Signal" :
             assessment.strength === "moderate" ? "Potential Claim Detected" :
             assessment.strength === "time-barred" ? "Urgent \u2014 Time Sensitive" :
             "Case Needs Review"}
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: colors.text }}>
            {assessment.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{assessment.description}</p>
          <div>
            <p className="font-semibold text-gray-800 mb-3">What we recommend:</p>
            <ul className="space-y-2">
              {assessment.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span style={{ color: colors.badge }}>&rarr;</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#1e40af" }}>
            Connect with an Attorney &mdash; Free
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Get a real attorney evaluation of your specific situation. No cost, no obligation.
            Attorneys work on contingency &mdash; no fees unless you win.
          </p>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input type="hidden" name="botcheck" value="" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Anything else you&apos;d like us to know? (optional)
              </label>
              <textarea
                rows={3}
                value={contactInfo.notes}
                onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any additional details about your situation..."
              />
            </div>
            {submitError && (
              <p className="text-red-600 text-sm">{submitError}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              style={{ backgroundColor: "#d69e2e", color: "#1e40af" }}
              className="w-full font-bold py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Connect Me with an Attorney \u2014 Free"}
            </button>
            <p className="text-center text-gray-400 text-xs">
              No fees unless you win &bull; 100% confidential &bull; No spam
            </p>
          </form>
          <p className="text-center text-gray-500 text-sm mt-4">
            Prefer to talk?{" "}
            <a href="tel:+18772719208" className="font-semibold text-blue-700 hover:text-blue-900">
              Call (877) 271-9208
            </a>
          </p>
        </div>

        <button
          onClick={() => {
            setCurrentStep(0);
            setAnswers({});
            setShowResult(false);
          }}
          className="text-sm text-gray-500 hover:text-gray-700 underline block mx-auto"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Progress bar */}
      <div className="bg-gray-100 h-2">
        <div
          className="h-2 transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: "#d69e2e" }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Step counter */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-500">
            Question {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-400">{Math.round(progress)}% complete</span>
        </div>

        {/* Question */}
        <h2 className="text-xl font-bold mb-8" style={{ color: "#1e40af" }}>
          {step.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {step.options.map((option) => (
            <button
              key={option.value}
              onClick={() => selectAnswer(option.value)}
              className={`w-full text-left rounded-xl border-2 p-4 transition-all hover:border-blue-500 hover:bg-blue-50 ${
                answers[step.id] === option.value
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <span className="font-semibold text-gray-800 block">{option.label}</span>
              {option.description && (
                <span className="text-gray-500 text-sm mt-0.5 block">{option.description}</span>
              )}
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="mt-6 text-sm text-gray-500 hover:text-gray-700 underline"
          >
            &larr; Back
          </button>
        )}
      </div>
    </div>
  );
}
