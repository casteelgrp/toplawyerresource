import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your information has been received. An attorney from our network will contact you within 48 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">&#9989;</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We&apos;ve received your information. An attorney from our network
          will contact you within <strong>48 hours</strong> to discuss your
          case. Your consultation is 100% free and confidential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Return to Home
          </Link>
          <Link href="/guides" className="btn btn-secondary">
            Browse Legal Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
