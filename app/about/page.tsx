import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us \u2014 Our Mission",
  description:
    "Top Lawyer Resource connects injury victims nationwide with experienced attorneys. Free legal guides, case evaluations, and attorney referrals at no cost.",
  openGraph: {
    title: "About Us \u2014 Our Mission",
    description:
      "We help injury victims understand their rights and connect with experienced attorneys \u2014 at no cost.",
    url: "https://toplawyerresource.com/about",
  },
  alternates: {
    canonical: "https://toplawyerresource.com/about",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Top Lawyer Resource",
  url: "https://toplawyerresource.com",
  logo: "https://toplawyerresource.com/logo-whitebg.webp",
  description:
    "Top Lawyer Resource is a free legal information and attorney referral service for injury victims nationwide. We connect people with experienced attorneys at no cost.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://toplawyerresource.com/contact",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />

      {/* Hero Image */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/19335616/pexels-photo-19335616.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Top Lawyer Resource team helping injury victims access legal resources"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/70 to-gray-900/50" />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
            About Top Lawyer Resource
          </h1>
          <p className="text-gray-200 text-lg max-w-xl"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
            Helping injury victims access the legal help they deserve &mdash; at zero cost.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Mission */}
        <section className="mb-14">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e40af" }}>
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
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1e40af" }}>
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
              <Link href="/guides" className="inline-block mt-3 text-sm text-blue-700 font-semibold hover:text-blue-900">
                Browse Guides &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-gray-800 mb-2">Interactive Tools</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our case evaluator and settlement calculator help you understand your situation
                before you speak with an attorney. No forms to fill out, no spam — just honest,
                helpful tools.
              </p>
              <Link href="/tools/case-evaluator" className="inline-block mt-3 text-sm text-blue-700 font-semibold hover:text-blue-900">
                Try the Evaluator &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="text-3xl mb-3">👨‍⚖️</div>
              <h3 className="font-bold text-gray-800 mb-2">Attorney Connections</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We connect injury victims with qualified attorneys in their area. All attorneys
                in our network work on contingency — they only get paid if you win your case.
              </p>
              <Link href="/contact" className="inline-block mt-3 text-sm text-blue-700 font-semibold hover:text-blue-900">
                Find a Lawyer &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e40af" }}>
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
            We monetize through attorney referrals — when we connect you with a lawyer, we may
            receive a referral fee if they take your case. This never costs you anything extra.
            Attorneys in our network compete to provide the best service to clients.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-14">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e40af" }}>
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
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e40af" }}>
            Ready to Get Help?
          </h2>
          <p className="text-gray-600 mb-6">
            Start with our free case evaluator or browse our legal guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools/case-evaluator" className="btn btn-primary">
              Evaluate My Case — Free
            </Link>
            <Link href="/guides" className="btn btn-secondary">
              Browse Legal Guides
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
