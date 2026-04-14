import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get Connected with a Lawyer",
  description:
    "Submit your information and connect with an experienced attorney in your area. Free consultation, no obligation, no fees unless you win.",
  openGraph: {
    title: "Find a Lawyer — Free Consultation | Top Lawyer Resource",
    description: "Submit your information and get connected with a qualified attorney near you. Free, confidential case evaluation.",
    url: "https://toplawyerresource.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#d69e2e" }}>
            Free &bull; Confidential &bull; No Obligation
          </p>
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#1e40af" }}>
            Get Connected with a Lawyer
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Tell us about your situation and we&apos;ll connect you with an experienced attorney in your area
            who handles cases like yours. There&apos;s no cost to you — attorneys in our network work on
            contingency, meaning they only get paid if they win your case.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ backgroundColor: "#1e40af" }}
              >
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Submit Your Information</h3>
                <p className="text-gray-600 text-sm">Fill out the form with basic details about your situation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ backgroundColor: "#1e40af" }}
              >
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Attorney Review</h3>
                <p className="text-gray-600 text-sm">An attorney reviews your case and reaches out within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ backgroundColor: "#1e40af" }}
              >
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Free Consultation</h3>
                <p className="text-gray-600 text-sm">Discuss your case. No cost, no commitment.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <p className="text-sm font-semibold text-gray-800 mb-3">Why use Top Lawyer Resource?</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> 100% free service to injury victims</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Attorneys work on contingency — no fees unless you win</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Confidential — your info is not shared without consent</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Experienced attorneys in your area</li>
            </ul>
          </div>
        </div>

        {/* Right column — Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
