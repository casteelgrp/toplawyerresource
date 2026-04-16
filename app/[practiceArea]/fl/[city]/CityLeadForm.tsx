"use client";
import { useState } from "react";
import Link from "next/link";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function CityLeadForm({
  city,
  state,
  practiceArea,
}: {
  city: string;
  state: string;
  practiceArea: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead \u2014 ${practiceArea} in ${city}, ${state}`,
          from_name: "Top Lawyer Resource",
          name: `${data.get("firstName")} ${data.get("lastName")}`,
          phone: data.get("phone"),
          email: data.get("email") || "Not provided",
          city,
          state,
          practice_area: practiceArea,
          description: data.get("description") || "None",
          botcheck: "",
        }),
      });
      const result = await res.json();
      if (result.success) {
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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 rounded-2xl p-7 border border-gray-200"
    >
      <input type="hidden" name="botcheck" value="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {[
          { name: "firstName", label: "First Name", placeholder: "First name" },
          { name: "lastName", label: "Last Name", placeholder: "Last name" },
        ].map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {f.label} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name={f.name}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
              placeholder={f.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          placeholder="(555) 000-0000"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          placeholder="you@email.com"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brief Description of Your Situation
        </label>
        <textarea
          name="description"
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          placeholder="What happened? When? Any injuries?"
        />
      </div>
      {submitError && (
        <p className="text-red-600 text-sm mb-4">{submitError}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full justify-center disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Get My Free Case Evaluation"}
      </button>
      <p className="text-gray-400 text-xs text-center mt-3">
        By submitting, you agree to our{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="underline">
          Terms of Use
        </Link>
        .
      </p>
    </form>
  );
}
