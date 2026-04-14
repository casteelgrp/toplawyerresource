"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    console.log("Lead submission:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h2 className="text-xl font-bold text-green-800 mb-2">Thank You!</h2>
        <p className="text-green-700 text-sm leading-relaxed">
          We&apos;ve received your information. An attorney from our network will reach out within
          24 hours to discuss your case. Your consultation is 100% free and confidential.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold mb-5" style={{ color: "#1a365d" }}>
        Tell Us About Your Case
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-4">
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
          Email Address
        </label>
        <input
          type="email"
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
          <option value="slip-fall">Slip & Fall</option>
          <option value="workers-comp">Workers&apos; Compensation</option>
          <option value="medical-malpractice">Medical Malpractice</option>
          <option value="wrongful-death">Wrongful Death</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
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

      <button
        type="submit"
        style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
        className="w-full font-bold py-3 rounded-md hover:opacity-90 transition-opacity"
      >
        Submit for Free Case Evaluation
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
