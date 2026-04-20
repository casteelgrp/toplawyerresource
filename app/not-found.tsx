import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="text-7xl font-extrabold text-blue-700 mb-4">404</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
          <Link href="/guides" className="btn btn-secondary">
            Legal Guides
          </Link>
          <Link href="/personal-injury" className="btn btn-secondary">
            Personal Injury
          </Link>
          <Link href="/tools/case-evaluator" className="btn btn-secondary">
            Case Evaluator
          </Link>
        </div>
        <p className="text-gray-400 text-sm">
          If you believe this is an error,{" "}
          <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">
            contact us
          </Link>.
        </p>
      </div>
    </section>
  );
}
