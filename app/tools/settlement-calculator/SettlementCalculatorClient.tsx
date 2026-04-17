"use client";
import { useState } from "react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

interface FormData {
  accidentType: string;
  injurySeverity: string;
  medicalBills: string;
  lostWages: string;
  futuremedical: string;
  atFaultClear: string;
  permanentInjury: string;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function calculateSettlement(data: FormData): { low: number; high: number; factors: string[] } {
  const medBills = parseFloat(data.medicalBills.replace(/[^0-9.]/g, "")) || 0;
  const lostWages = parseFloat(data.lostWages.replace(/[^0-9.]/g, "")) || 0;
  const futureMed = parseFloat(data.futuremedical.replace(/[^0-9.]/g, "")) || 0;

  const economicDamages = medBills + lostWages + futureMed;

  // Pain & suffering multiplier based on injury severity
  const multipliers: Record<string, [number, number]> = {
    catastrophic: [4, 8],
    severe: [3, 5],
    moderate: [1.5, 3],
    minor: [1, 1.5],
  };

  const [lowMult, highMult] = multipliers[data.injurySeverity] || [1, 2];

  let baseLow = economicDamages * lowMult;
  let baseHigh = economicDamages * highMult;

  // Adjustments
  const factors: string[] = [];

  if (data.accidentType === "truck") {
    baseLow *= 1.3;
    baseHigh *= 1.5;
    factors.push("Truck accidents often command higher settlements due to multiple defendants");
  }

  if (data.atFaultClear === "yes") {
    factors.push("Clear liability strengthens your negotiating position");
  } else if (data.atFaultClear === "no") {
    baseLow *= 0.6;
    baseHigh *= 0.75;
    factors.push("Disputed liability reduces expected settlement range");
  }

  if (data.permanentInjury === "yes") {
    baseLow *= 1.5;
    baseHigh *= 2;
    factors.push("Permanent injuries significantly increase settlement value");
  }

  if (economicDamages === 0) {
    baseLow = 5000;
    baseHigh = 15000;
    factors.push("Enter your economic damages for a more accurate estimate");
  }

  return {
    low: Math.round(baseLow),
    high: Math.round(baseHigh),
    factors,
  };
}

export default function SettlementCalculatorClient() {
  const [formData, setFormData] = useState<FormData>({
    accidentType: "",
    injurySeverity: "",
    medicalBills: "",
    lostWages: "",
    futuremedical: "",
    atFaultClear: "",
    permanentInjury: "",
  });

  const canSubmit =
    formData.accidentType !== "" &&
    formData.injurySeverity !== "" &&
    formData.atFaultClear !== "" &&
    formData.permanentInjury !== "";
  const [result, setResult] = useState<{ low: number; high: number; factors: string[] } | null>(null);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setResult(null);
  }

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setResult(calculateSettlement(formData));
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleCalculate} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {/* Accident Type */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Type of Accident
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "car", label: "Car Accident" },
              { value: "truck", label: "Truck / Commercial Vehicle" },
              { value: "slip-fall", label: "Slip & Fall" },
              { value: "other", label: "Other Personal Injury" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleChange("accidentType", opt.value)}
                className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                  formData.accidentType === opt.value
                    ? "border-blue-600 bg-blue-50 text-blue-800"
                    : "border-gray-200 text-gray-700 hover:border-blue-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Injury Severity */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Injury Severity
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "minor", label: "Minor / Soft Tissue", desc: "Whiplash, sprains, bruises" },
              { value: "moderate", label: "Moderate", desc: "Fractures, herniated discs" },
              { value: "severe", label: "Severe", desc: "Surgery, significant disability" },
              { value: "catastrophic", label: "Catastrophic", desc: "TBI, paralysis, permanent disability" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleChange("injurySeverity", opt.value)}
                className={`rounded-lg border-2 px-4 py-3 text-left transition-all ${
                  formData.injurySeverity === opt.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <span className="block text-sm font-medium text-gray-800">{opt.label}</span>
                <span className="block text-xs text-gray-500 mt-0.5">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dollar Inputs */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Current Medical Bills ($)
            </label>
            <input
              type="number"
              min="0"
              value={formData.medicalBills}
              onChange={(e) => handleChange("medicalBills", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 15000"
            />
            <p className="text-gray-400 text-xs mt-1">ER visits, hospitalization, physical therapy, etc.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Lost Wages ($)
            </label>
            <input
              type="number"
              min="0"
              value={formData.lostWages}
              onChange={(e) => handleChange("lostWages", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 5000"
            />
            <p className="text-gray-400 text-xs mt-1">Income lost due to injury and recovery</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Estimated Future Medical Costs ($)
            </label>
            <input
              type="number"
              min="0"
              value={formData.futuremedical}
              onChange={(e) => handleChange("futuremedical", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 10000"
            />
            <p className="text-gray-400 text-xs mt-1">Ongoing treatment, surgeries, therapy</p>
          </div>
        </div>

        {/* Liability */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Is liability (fault) clear?
          </label>
          <div className="flex gap-3">
            {[
              { value: "yes", label: "Yes — clearly their fault" },
              { value: "disputed", label: "Disputed" },
              { value: "no", label: "Partially my fault" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleChange("atFaultClear", opt.value)}
                className={`flex-1 rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all ${
                  formData.atFaultClear === opt.value
                    ? "border-blue-600 bg-blue-50 text-blue-800"
                    : "border-gray-200 text-gray-700 hover:border-blue-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Permanent Injury */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Do you have a permanent injury or disability?
          </label>
          <div className="flex gap-3">
            {[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "unknown", label: "Not sure yet" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleChange("permanentInjury", opt.value)}
                className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all ${
                  formData.permanentInjury === opt.value
                    ? "border-blue-600 bg-blue-50 text-blue-800"
                    : "border-gray-200 text-gray-700 hover:border-blue-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          style={{ backgroundColor: canSubmit ? "#1e40af" : "#9ca3af" }}
          className="w-full text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-lg disabled:cursor-not-allowed"
        >
          {canSubmit ? "Calculate My Estimate" : "Select all options above to calculate"}
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold mb-2" style={{ color: "#1e40af" }}>
            Estimated Settlement Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Based on the information you provided, here is a rough estimate:
          </p>

          <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
            <p className="text-gray-600 text-sm mb-1">Estimated Range</p>
            <p className="text-3xl font-bold" style={{ color: "#1e40af" }}>
              {formatCurrency(result.low)} &ndash; {formatCurrency(result.high)}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              This is an estimate only. Actual settlements vary widely.
            </p>
          </div>

          {result.factors.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-3 text-sm">Factors affecting this estimate:</p>
              <ul className="space-y-2">
                {result.factors.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span style={{ color: "#d69e2e" }}>•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Important Disclaimer:</strong> This calculator provides rough estimates only.
              Actual settlement values depend on many factors including specific medical records,
              liability evidence, available insurance coverage, jurisdiction, and negotiation.
              This is not legal advice. Consult a licensed attorney for an accurate evaluation of your case.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#1e40af" }}>
              Connect with an Attorney &mdash; Free
            </h3>
            <p className="text-gray-600 text-sm mb-5">
              Want to know what your case is actually worth? Get a real attorney evaluation. No cost, no obligation.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setSubmitError("");
                try {
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      access_key: WEB3FORMS_KEY,
                      subject: "New Settlement Calculator Lead",
                      from_name: "Top Lawyer Resource",
                      name: contactInfo.name,
                      phone: contactInfo.phone,
                      email: contactInfo.email || "Not provided",
                      additional_notes: contactInfo.notes || "None",
                      estimated_settlement_low: result ? formatCurrency(result.low) : "N/A",
                      estimated_settlement_high: result ? formatCurrency(result.high) : "N/A",
                      accident_type: formData.accidentType,
                      injury_severity: formData.injurySeverity,
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
              }}
              className="space-y-4"
            >
              <input type="hidden" name="botcheck" value="" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
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
              {submitError && <p className="text-red-600 text-sm">{submitError}</p>}
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
        </div>
      )}
    </div>
  );
}
