"use client";
import { useState } from "react";
import Link from "next/link";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    caseType: "",
    city: "",
    state: "",
    description: "",
  });

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New Contact Form Submission \u2014 Top Lawyer Resource",
          from_name: "Top Lawyer Resource",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email || "Not provided",
          phone: formData.phone,
          case_type: formData.caseType,
          city: formData.city,
          state: formData.state,
          description: formData.description,
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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold mb-5" style={{ color: "#1a365d" }}>
        Tell Us About Your Case
      </h2>
      <input type="hidden" name="botcheck" value="" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@email.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Type of Case <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={formData.caseType}
          onChange={(e) => handleChange("caseType", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="">Select case type...</option>
          <option value="car-accident">Car Accident</option>
          <option value="truck-accident">Truck Accident</option>
          <option value="personal-injury">Personal Injury</option>
          <option value="slip-fall">Slip &amp; Fall</option>
          <option value="workers-comp">Workers&apos; Compensation</option>
          <option value="medical-malpractice">Medical Malpractice</option>
          <option value="wrongful-death">Wrongful Death</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Jacksonville"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            State <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">State...</option>
            <option>AL</option><option>AK</option><option>AZ</option><option>AR</option>
            <option>CA</option><option>CO</option><option>CT</option><option>DE</option>
            <option>FL</option><option>GA</option><option>HI</option><option>ID</option>
            <option>IL</option><option>IN</option><option>IA</option><option>KS</option>
            <option>KY</option><option>LA</option><option>ME</option><option>MD</option>
            <option>MA</option><option>MI</option><option>MN</option><option>MS</option>
            <option>MO</option><option>MT</option><option>NE</option><option>NV</option>
            <option>NH</option><option>NJ</option><option>NM</option><option>NY</option>
            <option>NC</option><option>ND</option><option>OH</option><option>OK</option>
            <option>OR</option><option>PA</option><option>RI</option><option>SC</option>
            <option>SD</option><option>TN</option><option>TX</option><option>UT</option>
            <option>VT</option><option>VA</option><option>WA</option><option>WV</option>
            <option>WI</option><option>WY</option>
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Brief Description of Your Situation
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What happened? When? What injuries did you sustain? The more detail you provide, the better."
        />
      </div>

      {submitError && (
        <p className="text-red-600 text-sm mb-4">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
        className="w-full font-bold py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit for Free Case Evaluation"}
      </button>

      <p className="text-center text-gray-400 text-xs mt-3">
        By submitting, you agree to our{" "}
        <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and{" "}
        <Link href="/terms" className="underline">Terms of Use</Link>.
        This is not legal advice and does not create an attorney-client relationship.
      </p>
    </form>
  );
}
