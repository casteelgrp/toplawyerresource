import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Top Lawyer Resource — Our Mission",
  description:
    "Top Lawyer Resource connects injury victims with experienced attorneys. Learn about our mission to make legal help accessible and affordable for everyone.",
  openGraph: {
    title: "About Top Lawyer Resource",
    description:
      "We help injury victims understand their rights and connect with experienced attorneys — at no cost.",
    url: "https://toplawyerresource.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#1a365d" }}>
          About Top Lawyer Resource
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
          We believe everyone deserves access to quality legal help — regardless of their
          financial situation.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-14">
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a365d" }}>
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Top Lawyer Resource was founded with a simple mission: help injury victims understand
            their legal rights and connect with experienced attorneys who can fight for the
            compensation they deserve — at no cost to them.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Every year, thousands of accident and injury victims leave money on the table
            because they don&apos;t know their rights, don&apos;t know how to navigate the legal system,
            or are pressured into accepting unfair settlements by insurance companies. We&apos;re
            here to change that.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a365d" }}>
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-gray-800 mb-2">Free Legal Education</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We produce in-depth legal guides that break down complex topics in plain English.
              Our guides cover everything from statute of limitations to how to value your
              injury claim.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-bold text-gray-800 mb-2">Interactive Tools</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our case evaluator and settlement calculator help you understand your situation
              before you speak with an attorney. No forms to fill out, no spam — just honest,
              helpful tools.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="text-3xl mb-3">👨‍⚖️</div>
            <h3 className="font-bold text-gray-800 mb-2">Attorney Connections</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We connect injury victims with qualified attorneys in their area. All attorneys
              in our network work on contingency — they only get paid if you win your case.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a365d" }}>
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Top Lawyer Resource is a legal information and attorney referral service founded in 2024.
          We are not a law firm and we do not provide legal advice. Our content is produced by
          experienced legal writers and reviewed for accuracy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We operate under a simple principle: information should be free. Too many people are
          at a disadvantage in legal situations simply because they don&apos;t understand their rights.
          Our goal is to level the playing field.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We monetize through attorney referrals — when we connect you with an lawyer, we may
          receive a referral fee if they take your case. This never costs you anything extra.
          Attorneys in our network compete to provide the best service to clients.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-14">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a365d" }}>
            Important Disclaimer
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Top Lawyer Resource is not a law firm and does not provide legal advice.
            The information on this website is for general educational purposes only and
            should not be construed as legal advice for any specific situation. Use of this
            website does not create an attorney-client relationship. The attorneys in our
            network are independent practitioners and not employees of Top Lawyer Resource.
            Always consult with a licensed attorney in your jurisdiction for advice specific
            to your legal situation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a365d" }}>
          Ready to Get Help?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with our free case evaluator or browse our legal guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tools/case-evaluator"
            style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Evaluate My Case — Free
          </Link>
          <Link
            href="/guides"
            style={{ backgroundColor: "#1a365d" }}
            className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Legal Guides
          </Link>
        </div>
      </section>
    </div>
  );
}
